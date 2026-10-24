"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, FileText, Loader2, X } from "lucide-react";
import type { Mineral } from "@/lib/content";

interface TdsRequestModalProps {
  mineral: Mineral;
  isOpen: boolean;
  onClose: () => void;
}

export function TdsRequestModal({ mineral, isOpen, onClose }: TdsRequestModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [renderTime] = useState(() => Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      mineral: mineral.name,
      inquiryType: "Technical Data Sheet & Specification Request",
      message: `TDS Request for ${mineral.name} (${mineral.scientific}). Intended Application/Grades: ${formData.get("details")}. Delivery Destination: ${formData.get("destination") || "Unspecified"}.`,
      company_website_url: formData.get("company_website_url"), // Honeypot
      _render_time: renderTime,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to transmit your technical request at this time. Please email sales@qtmminerals.com directly."
        );
      }

      setSuccess(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "An unexpected communication error occurred."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.82)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tds-modal-title"
        style={{
          backgroundColor: "#111310",
          border: "1px solid rgba(236, 232, 219, 0.16)",
          maxWidth: "580px",
          width: "100%",
          padding: "clamp(24px, 5vw, 40px)",
          position: "relative",
          boxShadow: "0 24px 60px rgba(0,0,0,0.8)",
          margin: "auto",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: "var(--muted)",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <FileText size={18} color="var(--gold)" />
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Technical Documentation Request
          </span>
        </div>

        <h2
          id="tds-modal-title"
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: 8,
            color: "var(--paper)",
          }}
        >
          {mineral.name} Technical Dossier
        </h2>

        <p style={{ color: "var(--muted-lt)", fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}>
          Authorized laboratory TDS release for {mineral.name} is scheduled on confirmed order batches. Complete this form to receive a provisional technical profile, particle size distribution (PSD), and testing methodology.
        </p>

        {success ? (
          <div
            style={{
              padding: "24px",
              backgroundColor: "rgba(92, 158, 117, 0.12)",
              border: "1px solid rgba(92, 158, 117, 0.3)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <CheckCircle2 color="var(--success)" size={24} />
              <h3 style={{ fontSize: 16, color: "var(--paper)", fontWeight: 500 }}>
                Request Transmitted
              </h3>
            </div>
            <p style={{ fontSize: 13, color: "var(--muted-lt)", lineHeight: 1.6 }}>
              Your technical dossier request for <strong>{mineral.name}</strong> has been logged. A QTM mineral specialist will review your target specifications and deliver the verified laboratory data sheets.
            </p>
            <button
              onClick={onClose}
              className="button-primary"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Honeypot field (hidden from real users) */}
            <div style={{ display: "none" }} aria-hidden="true">
              <label htmlFor="company_website_url">Company Website URL</label>
              <input
                id="company_website_url"
                name="company_website_url"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label
                  htmlFor="tds-name"
                  style={{ display: "block", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}
                >
                  Full Name *
                </label>
                <input
                  id="tds-name"
                  name="name"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--paper)",
                    fontSize: 13,
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="tds-email"
                  style={{ display: "block", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}
                >
                  Business Email *
                </label>
                <input
                  id="tds-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--paper)",
                    fontSize: 13,
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label
                  htmlFor="tds-company"
                  style={{ display: "block", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}
                >
                  Company / Plant *
                </label>
                <input
                  id="tds-company"
                  name="company"
                  required
                  placeholder="Manufacturing Corp"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--paper)",
                    fontSize: 13,
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="tds-destination"
                  style={{ display: "block", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}
                >
                  Delivery Country / Port
                </label>
                <input
                  id="tds-destination"
                  name="destination"
                  placeholder="e.g. Mundra Port / Domestic"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--line-strong)",
                    color: "var(--paper)",
                    fontSize: 13,
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="tds-details"
                style={{ display: "block", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}
              >
                Intended Application & Target Specifications *
              </label>
              <textarea
                id="tds-details"
                name="details"
                required
                rows={3}
                placeholder="Mention desired particle size (e.g. d50), moisture, chemistry tolerance or current supply challenge..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--line-strong)",
                  color: "var(--paper)",
                  fontSize: 13,
                  resize: "vertical",
                }}
              />
            </div>

            {errorMsg && (
              <div
                role="alert"
                style={{
                  padding: "12px 14px",
                  backgroundColor: "rgba(176, 96, 64, 0.15)",
                  border: "1px solid rgba(176, 96, 64, 0.4)",
                  color: "#f2a696",
                  fontSize: 12,
                  lineHeight: 1.5,
                }}
              >
                {errorMsg}
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 8 }}>
              <button
                type="button"
                onClick={onClose}
                disabled={submitting}
                className="button-outline"
                style={{ cursor: "pointer" }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="button-primary"
                style={{ cursor: submitting ? "not-allowed" : "pointer" }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Transmitting...
                  </>
                ) : (
                  <>
                    Request Technical Dossier <ArrowUpRight size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
