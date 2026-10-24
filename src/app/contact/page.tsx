"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

const MINERALS = [
  "China Clay / Kaolin",
  "Bentonite",
  "Silica Sand",
  "Bauxite",
  "Ball Clay",
  "Quartz",
  "Multiple / not sure",
];

function ContactForm() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok)
        throw new Error("The form could not be submitted. Please try again.");
      setSent(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        <CheckCircle2 color="var(--success)" size={32} />
        <h3>Thank you for reaching out.</h3>
        <p>
          Your enquiry has been received. This is a demo endpoint — connect an
          approved email or CRM provider before launching so that enquiries
          reach the QTM team.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="name">Full name *</label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
        />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Company name"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Business email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          autoComplete="tel"
          placeholder="+91"
        />
      </div>
      <div className="field full">
        <label htmlFor="mineral">Mineral of interest</label>
        <select
          id="mineral"
          name="mineral"
          defaultValue={params.get("mineral") ?? ""}
        >
          <option value="">Select a mineral</option>
          {MINERALS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Tell us about your requirements *</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Application, target grade, volume, destination or technical questions…"
        />
      </div>
      <p className="form-note">
        Please do not include confidential information in this form. Product
        availability and specifications must be confirmed by QTM. This form
        endpoint is a demo — connect a real provider before going live.
      </p>
      {error && (
        <p
          role="alert"
          style={{ color: "#e9a59b", fontSize: 12, gridColumn: "1/-1" }}
        >
          {error}
        </p>
      )}
      <div>
        <button className="button-primary" disabled={busy} type="submit">
          {busy ? "Sending…" : "Send enquiry"} <ArrowUpRight size={15} />
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
        <div className="eyebrow">Start a conversation</div>
        <h1>
          Let&apos;s talk<br />
          <em>materials.</em>
        </h1>
        <p>
          Tell us about your application, specification or supply requirement.
          The QTM team can advise on suitable grades, availability and
          technical requirements.
        </p>
      </section>

      <section className="section contact-grid">
        <div className="contact-info">
          <div className="eyebrow">Connect with QTM</div>
          <h2>Good partnerships begin with a clear brief.</h2>
          <p>
            Whether you&apos;re sourcing a familiar mineral or exploring a new
            application, we welcome specific, detailed enquiries about your
            material requirements.
          </p>

          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <MapPin size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ color: "var(--paper)", fontWeight: 500, marginBottom: 2 }}>
                  Processing plant
                </p>
                <p style={{ margin: 0 }}>Gujarat, India</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <MapPin size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ color: "var(--paper)", fontWeight: 500, marginBottom: 2 }}>
                  South India office
                </p>
                <p style={{ margin: 0 }}>Chennai, India</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <Mail size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ margin: 0 }}>
                For verified email and phone contacts, use the current official
                company information before publishing.
              </p>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <Phone size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ margin: 0 }}>
                Phone details to be confirmed with QTM before publication.
              </p>
            </div>
          </div>
        </div>

        <Suspense fallback={<p>Loading enquiry form&hellip;</p>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}