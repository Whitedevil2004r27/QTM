"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCcw, ShieldAlert } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[QTM Application Error]", error);
  }, [error]);

  return (
    <section className="section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 640 }}>
        <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--rust)" }}>
          <ShieldAlert size={14} /> System Exception
        </div>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            margin: "20px 0 16px",
          }}
        >
          Something interrupted<br />
          <em style={{ color: "var(--gold)" }}>the application.</em>
        </h1>
        <p style={{ color: "var(--muted-lt)", fontSize: 14, lineHeight: 1.6, marginBottom: 32 }}>
          An unexpected processing error occurred while rendering this view. Our logging services have recorded the issue. You may attempt to re-render the view or return to the main corporate portal.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <button
            onClick={() => reset()}
            className="button-primary"
            style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10 }}
          >
            <RotateCcw size={15} /> Try Again
          </button>
          <Link className="text-link" href="/">
            Return to Homepage <ArrowUpRight size={14} />
          </Link>
          <a className="text-link" href="mailto:sales@qtmminerals.com" style={{ marginLeft: 8 }}>
            Report Issue
          </a>
        </div>
      </div>
    </section>
  );
}
