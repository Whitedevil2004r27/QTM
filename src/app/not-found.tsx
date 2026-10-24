import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="eyebrow">404 — Page not found</div>
      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(64px, 10vw, 120px)",
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: "-.055em",
          margin: "24px 0 28px",
        }}
      >
        Lost in the<br />
        <em style={{ color: "var(--gold)" }}>mineral earth.</em>
      </h1>
      <p style={{ color: "var(--muted)", maxWidth: 480, marginBottom: 36, fontSize: 15 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back to solid ground.
      </p>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <Link className="button-primary" href="/">
          Return home <ArrowUpRight size={15} />
        </Link>
        <Link className="text-link" href="/minerals">
          Explore minerals <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
