"use client";

import { useState } from "react";
import { ArrowUpRight, Download, FileText, FlaskConical, ShieldAlert } from "lucide-react";
import type { Mineral } from "@/lib/content";
import { TdsRequestModal } from "@/components/TdsRequestModal";

export function TdsSection({ mineral }: { mineral: Mineral }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="tds-card"
        style={{
          padding: "clamp(20px, 3vw, 32px)",
          backgroundColor: "#111310",
          border: "1px solid rgba(236, 232, 219, 0.12)",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FileText size={18} color="var(--gold)" />
            <h3 style={{ fontSize: "16px", fontWeight: 500, color: "var(--paper)" }}>
              Technical Data Sheet (TDS) &amp; Lab Assay
            </h3>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              backgroundColor: mineral.tds.available
                ? "rgba(92, 158, 117, 0.15)"
                : "rgba(197, 173, 122, 0.12)",
              color: mineral.tds.available ? "var(--success)" : "var(--gold)",
              border: `1px solid ${
                mineral.tds.available
                  ? "rgba(92, 158, 117, 0.3)"
                  : "rgba(197, 173, 122, 0.25)"
              }`,
            }}
          >
            {mineral.tds.available ? "Authorized Document Available" : "Awaiting QA Publication"}
          </div>
        </div>

        <p
          style={{
            color: "var(--muted-lt)",
            fontSize: "13px",
            lineHeight: 1.6,
            maxWidth: "760px",
            marginBottom: "24px",
          }}
        >
          {mineral.tds.notice}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
          {mineral.tds.available && mineral.tds.fileUrl ? (
            <a
              href={mineral.tds.fileUrl}
              download
              className="button-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
            >
              <Download size={15} /> Download Approved TDS ({mineral.tds.fileSize ?? "PDF"})
            </a>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              className="button-primary"
              type="button"
              style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10 }}
            >
              <FileText size={15} /> Request Official TDS Document <ArrowUpRight size={14} />
            </button>
          )}

          <button
            onClick={() => setModalOpen(true)}
            className="button-outline"
            type="button"
            style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10 }}
          >
            <FlaskConical size={15} /> Request Pilot Trial Sample
          </button>
        </div>

        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(236, 232, 219, 0.08)",
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            fontSize: "11px",
            color: "var(--muted)",
            lineHeight: 1.5,
          }}
        >
          <ShieldAlert size={14} style={{ flexShrink: 0, marginTop: 2, color: "var(--gold)" }} />
          <span>
            Compliance Policy: To prevent unauthorized distribution of proprietary processing formulations, formal chemical assays and certificates of analysis (COA) are issued directly to certified commercial entities.
          </span>
        </div>
      </div>

      <TdsRequestModal
        mineral={mineral}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
