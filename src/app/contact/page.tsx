"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock, Factory, Loader2, Mail, MapPin, ShieldAlert } from "lucide-react";
import { COMPANY_INFO, COMPANY_DISCLAIMER } from "@/lib/content";

const MINERALS = [
  "China Clay / Kaolin",
  "Bentonite",
  "Silica Sand",
  "Bauxite",
  "Ball Clay",
  "Quartz",
  "Multiple / Not Sure",
];

const INQUIRY_TYPES = [
  "Commercial Price Quotation",
  "Technical Specification & TDS Request",
  "Laboratory Trial Sample Request",
  "Export & Marine Logistics Inquiry",
  "General Corporate Inquiry",
];

function ContactForm() {
  const params = useSearchParams();
  const [renderTime] = useState(() => Date.now());
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [unconfigured, setUnconfigured] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setUnconfigured(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 503 && result.unconfigured) {
          setUnconfigured(true);
        }
        throw new Error(
          result.error || "The form could not be submitted. Please contact sales@qtmminerals.com directly."
        );
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while transmitting your inquiry."
      );
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success" style={{ padding: "40px 32px", border: "1px solid var(--success)", backgroundColor: "rgba(92, 158, 117, 0.08)" }}>
        <CheckCircle2 color="var(--success)" size={36} />
        <h3 style={{ fontSize: 22, marginTop: 16, marginBottom: 8, color: "var(--paper)" }}>
          Inquiry Successfully Transmitted
        </h3>
        <p style={{ color: "var(--muted-lt)", lineHeight: 1.6, maxWidth: 520 }}>
          Thank you for reaching out to Quantum Terra Minerals. Your inquiry has been securely forwarded to our commercial desk. A representative will contact you with grade availability and technical specifications.
        </p>
        <button
          onClick={() => setSent(false)}
          className="button-outline"
          style={{ marginTop: 24, alignSelf: "flex-start" }}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {/* Honeypot field (hidden from screen reader and CSS display) */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="company_website_url">Website URL</label>
        <input
          id="company_website_url"
          name="company_website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
        <input name="_render_time" type="hidden" value={renderTime} />
      </div>

      <div className="field">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="e.g. Ramesh Patel"
        />
      </div>

      <div className="field">
        <label htmlFor="company">Company / Organization *</label>
        <input
          id="company"
          name="company"
          required
          autoComplete="organization"
          placeholder="e.g. Acme Ceramics Ltd"
        />
      </div>

      <div className="field">
        <label htmlFor="email">Business Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@company.com"
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Contact Telephone</label>
        <input
          id="phone"
          name="phone"
          autoComplete="tel"
          placeholder="+91..."
        />
      </div>

      <div className="field">
        <label htmlFor="inquiryType">Inquiry Category *</label>
        <select id="inquiryType" name="inquiryType" defaultValue={INQUIRY_TYPES[0]}>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="mineral">Mineral of Interest</label>
        <select
          id="mineral"
          name="mineral"
          defaultValue={params.get("mineral") ?? ""}
        >
          <option value="">Select a mineral group</option>
          {MINERALS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="field full">
        <label htmlFor="message">Technical Requirements &amp; Target Specifications *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Specify end application, required particle size (e.g. d50, mesh), moisture limit, expected monthly volume, and discharge destination..."
        />
      </div>

      <p className="form-note">
        Corporate Notice: Inquiries submitted here are routed directly to QTM commercial and technical departments. Please do not submit unsolicited proprietary trade secrets. Specifications subject to written confirmation.
      </p>

      {error && (
        <div
          role="alert"
          style={{
            gridColumn: "1 / -1",
            padding: "16px 20px",
            backgroundColor: unconfigured ? "rgba(197, 173, 122, 0.12)" : "rgba(176, 96, 64, 0.15)",
            border: `1px solid ${unconfigured ? "rgba(197, 173, 122, 0.3)" : "rgba(176, 96, 64, 0.4)"}`,
            color: unconfigured ? "var(--gold-lt)" : "#f2a696",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: unconfigured ? 8 : 0 }}>
            <ShieldAlert size={16} />
            <strong>{unconfigured ? "Direct Inquiries Active" : "Submission Error"}</strong>
          </div>
          <p style={{ margin: 0 }}>{error}</p>
          {unconfigured && (
            <div style={{ marginTop: 12, display: "flex", gap: 16 }}>
              <a
                href={`mailto:${COMPANY_INFO.channels.salesEmail}`}
                style={{ color: "var(--gold)", textDecoration: "underline", fontWeight: 500 }}
              >
                Email: {COMPANY_INFO.channels.salesEmail}
              </a>
            </div>
          )}
        </div>
      )}

      <div>
        <button
          className="button-primary"
          disabled={busy}
          type="submit"
          style={{ cursor: busy ? "not-allowed" : "pointer", display: "inline-flex", alignItems: "center", gap: 10 }}
        >
          {busy ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Transmitting...
            </>
          ) : (
            <>
              Send Commercial Inquiry <ArrowUpRight size={15} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="breadcrumbs">Home / Contact</div>
        <div className="eyebrow">Direct Commercial &amp; Technical Engagement</div>
        <h1>
          Let&apos;s talk<br />
          <em>materials.</em>
        </h1>
        <p>
          Connect directly with the QTM technical sales desk to request grade availability, batch test certificates, pilot sample shipments, or contract logistics.
        </p>
      </section>

      <section className="section contact-grid">
        <Suspense fallback={<div style={{ padding: 40, color: "var(--muted)" }}>Loading inquiry portal...</div>}>
          <ContactForm />
        </Suspense>

        <div className="contact-info">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Direct Channels
            </div>
            <h3>Commercial Inquiries</h3>
            <p style={{ color: "var(--muted-lt)", fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
              For contract procurement, container exports, and customized mineral processing dialogues:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Mail size={18} color="var(--gold)" style={{ marginTop: 3 }} />
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".06em" }}>
                    Sales &amp; Quotations
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.channels.salesEmail}`}
                    style={{ fontSize: 14, color: "var(--paper)", textDecoration: "none" }}
                  >
                    {COMPANY_INFO.channels.salesEmail}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Mail size={18} color="var(--gold)" style={{ marginTop: 3 }} />
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".06em" }}>
                    General Corporate
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.channels.generalEmail}`}
                    style={{ fontSize: 14, color: "var(--paper)", textDecoration: "none" }}
                  >
                    {COMPANY_INFO.channels.generalEmail}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Clock size={18} color="var(--gold)" style={{ marginTop: 3 }} />
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".06em" }}>
                    Operating Hours
                  </div>
                  <div style={{ fontSize: 13, color: "var(--paper)" }}>
                    Monday – Saturday, 09:00 – 18:00 IST
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              Operating Footprint
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Factory size={18} color="var(--gold)" style={{ marginTop: 3 }} />
                <div>
                  <strong style={{ display: "block", color: "var(--paper)", fontSize: 13 }}>
                    Processing Plant &amp; Beneficiation Facility
                  </strong>
                  <span style={{ fontSize: 12, color: "var(--muted-lt)", lineHeight: 1.5, display: "block" }}>
                    Gujarat Industrial Corridor, India
                  </span>
                  <small style={{ fontSize: 10, color: "var(--muted)" }}>
                    (Specific survey parcel details provided on commercial agreement)
                  </small>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <MapPin size={18} color="var(--gold)" style={{ marginTop: 3 }} />
                <div>
                  <strong style={{ display: "block", color: "var(--paper)", fontSize: 13 }}>
                    Southern Regional Liaison
                  </strong>
                  <span style={{ fontSize: 12, color: "var(--muted-lt)", lineHeight: 1.5, display: "block" }}>
                    Chennai, Tamil Nadu, India
                  </span>
                  <small style={{ fontSize: 10, color: "var(--muted)" }}>
                    (Logistics &amp; regional customer service liaison)
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              padding: "14px 16px",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(236, 232, 219, 0.08)",
              fontSize: 11,
              color: "var(--muted)",
              lineHeight: 1.5,
            }}
          >
            {COMPANY_DISCLAIMER}
          </div>
        </div>
      </section>
    </>
  );
}