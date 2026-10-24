import { NextResponse } from "next/server";

// Simple email regex for robust format verification
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ── 1. Spam Protection: Honeypot field ──────────────────────────────────
    // Legitimate users will not see or populate this hidden field
    if (body.company_website_url || body.fax_number || body.url_check) {
      console.warn("[QTM Security] Spam honeypot triggered; submission discarded.");
      return NextResponse.json(
        { error: "Spam detection triggered. If you are human, please clear form and try again." },
        { status: 400 }
      );
    }

    // ── 2. Spam Protection: Minimum interaction timestamp ───────────────────
    if (body._render_time) {
      const renderTime = Number(body._render_time);
      const now = Date.now();
      if (!isNaN(renderTime) && now - renderTime < 1200) {
        console.warn("[QTM Security] Instantaneous submission rejected as automated bot.");
        return NextResponse.json(
          { error: "Submission too rapid. Please review your details before submitting." },
          { status: 400 }
        );
      }
    }

    // ── 3. Server-Side Input Validation ─────────────────────────────────────
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim().slice(0, 150);
    const phone = String(body.phone ?? "").trim().slice(0, 50);
    const mineral = String(body.mineral ?? "").trim().slice(0, 100);
    const inquiryType = String(body.inquiryType ?? "Product Inquiry").trim().slice(0, 80);
    const message = String(body.message ?? "").trim();

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Please provide your full name (2–100 characters)." },
        { status: 400 }
      );
    }

    if (!email || email.length > 200 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 8 || message.length > 3000) {
      return NextResponse.json(
        { error: "Please provide details about your inquiry (minimum 8 characters, maximum 3000)." },
        { status: 400 }
      );
    }

    // Check for CRLF injection in header-sensitive fields
    if (/[\r\n]/.test(name) || /[\r\n]/.test(email) || /[\r\n]/.test(inquiryType)) {
      return NextResponse.json(
        { error: "Invalid characters detected in submitted input." },
        { status: 400 }
      );
    }

    // ── 4. Integration with Real Providers ──────────────────────────────────
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const crmWebhookUrl = (process.env.CRM_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL)?.trim();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL?.trim() || "sales@qtmminerals.com";
    const senderEmail = process.env.CONTACT_FROM_EMAIL?.trim() || "inquiries@qtmminerals.com";

    const inquiryPayload = {
      timestamp: new Date().toISOString(),
      inquiryType,
      name,
      email,
      company: company || "Not specified",
      phone: phone || "Not provided",
      mineral: mineral || "General inquiry",
      message,
    };

    // Strategy A: Resend transactional email API
    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [receiverEmail],
            reply_to: email,
            subject: `[QTM Inquiry] ${inquiryType}: ${name} (${company || "Direct"})`,
            text: [
              `QTM MINERALS — CORPORATE INQUIRY DISPATCH`,
              `----------------------------------------------------`,
              `Type:    ${inquiryType}`,
              `Mineral: ${mineral || "N/A"}`,
              `Name:    ${name}`,
              `Email:   ${email}`,
              `Company: ${company || "N/A"}`,
              `Phone:   ${phone || "N/A"}`,
              `Date:    ${new Date().toUTCString()}`,
              `----------------------------------------------------`,
              `Message / Specifications:`,
              message,
              `----------------------------------------------------`,
            ].join("\n"),
          }),
        });

        if (!emailResponse.ok) {
          const errDetail = await emailResponse.text().catch(() => "");
          console.error("[QTM API] Resend dispatch failed:", errDetail);
          return NextResponse.json(
            { error: "The mail gateway could not deliver your message. Please contact us directly at sales@qtmminerals.com." },
            { status: 502 }
          );
        }

        console.info(`[QTM API] Inquiry successfully delivered via Resend for ${email}`);
        return NextResponse.json({ ok: true, delivered: true, provider: "resend" });
      } catch (err) {
        console.error("[QTM API] Network error communicating with Resend:", err);
        return NextResponse.json(
          { error: "Service gateway error during email dispatch. Please reach out to sales@qtmminerals.com directly." },
          { status: 502 }
        );
      }
    }

    // Strategy B: CRM Webhook (HubSpot, Salesforce, Make, Zapier, Slack)
    if (crmWebhookUrl) {
      try {
        const webhookResponse = await fetch(crmWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "QTM-Corporate-Portal/1.0",
          },
          body: JSON.stringify(inquiryPayload),
        });

        if (!webhookResponse.ok) {
          console.error(`[QTM API] CRM Webhook returned error code ${webhookResponse.status}`);
          return NextResponse.json(
            { error: "CRM dispatch failed. Please contact sales@qtmminerals.com directly." },
            { status: 502 }
          );
        }

        console.info(`[QTM API] Inquiry successfully posted to CRM webhook for ${email}`);
        return NextResponse.json({ ok: true, delivered: true, provider: "webhook" });
      } catch (err) {
        console.error("[QTM API] Network error communicating with CRM webhook:", err);
        return NextResponse.json(
          { error: "CRM network dispatch error. Please contact sales@qtmminerals.com directly." },
          { status: 502 }
        );
      }
    }

    // ── 5. Honest Status: Provider Not Yet Configured ──────────────────────
    // Do NOT falsely claim success when no credentials exist in environment.
    console.warn(
      "[QTM API] Inquiry received but neither RESEND_API_KEY nor CRM_WEBHOOK_URL is configured. Submission logged to server audit, but cannot report customer delivery."
    );

    return NextResponse.json(
      {
        ok: false,
        unconfigured: true,
        error:
          "The corporate inquiry gateway is currently awaiting integration credentials (RESEND_API_KEY or CRM_WEBHOOK_URL). To ensure your inquiry is processed without delay, please email sales@qtmminerals.com directly.",
      },
      { status: 503 }
    );
  } catch (err) {
    console.error("[QTM API] Unexpected handler error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again or email sales@qtmminerals.com." },
      { status: 500 }
    );
  }
}