import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Leaf, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { COMPANY_INFO, COMPANY_DISCLAIMER } from "@/lib/content";

export const metadata: Metadata = {
  title: "About QTM | Corporate Heritage & Operations",
  description:
    "Learn about Quantum Terra Minerals — our founding heritage since 1989, processing infrastructure in Gujarat, and sustainable resource management approach.",
};

const milestones = [
  {
    year: "1989",
    title: "Foundation in Western India",
    desc: "Operations initiated in Gujarat with an initial focus on raw China clay (kaolin) mining and initial classification circuits.",
    status: "Verified archive record",
  },
  {
    year: "1995",
    title: "Industrial Portfolio Expansion",
    desc: "Integration of bentonite clay and ball clay processing into regular production to serve foundry and regional ceramic industries.",
    status: "Commercial product record",
  },
  {
    year: "2003",
    title: "Processing Modernisation",
    desc: "Capital investments in mechanized hydro-washing, classification cyclones, and drying systems to enhance consistency.",
    status: "Facility upgrade record",
  },
  {
    year: "2010",
    title: "Performance Minerals Division",
    desc: "Inauguration of dedicated fine-particle calcination and micronising operations for paper, coatings and polymer extenders.",
    status: "Commercial milestone",
  },
  {
    year: "2018",
    title: "Southern Logistics Presence",
    desc: "Establishment of the Chennai liaison office to coordinate South Indian deliveries and international export shipping routes.",
    status: "Operational branch record",
  },
  {
    year: "2024",
    title: "Quality Standardization Initiative",
    desc: "Implementation of comprehensive batch traceability protocols and structured mineral grade categorization across core lines.",
    status: "Current corporate standard",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> / Our Story
        </div>
        <div className="eyebrow">Quantum Terra Minerals &middot; Since 1989</div>
        <h1>
          Rooted in the earth.<br />
          <em>Engineered for industry.</em>
        </h1>
        <p>
          Quantum Terra Minerals is an established industrial minerals enterprise managing resource development, processing, and distribution from Gujarat, India.
        </p>
      </section>

      {/* Story & Philosophy */}
      <Reveal>
        <section className="section prose-grid">
          <h2>
            A materials partner<br />
            <em>for an industrial world.</em>
          </h2>
          <div>
            <p>
              Founded with a focus on core earth materials, QTM operates across the industrial mineral value chain. Our approach unites geology, processing discipline, and customer-aligned grading to deliver dependable inputs for manufacturing sectors across India and global destinations.
            </p>
            <p style={{ marginTop: 18 }}>
              Our active portfolio spans six primary mineral groups: China clay (kaolin), bentonite, high-purity silica sand, bauxite, plastic ball clay, and crystalline quartz. Each material is refined to support demanding ceramic bodies, foundry casting, glass, metallurgy, paper coating, and performance plastics.
            </p>
            <div
              style={{
                marginTop: 24,
                padding: "18px 22px",
                backgroundColor: "rgba(255,255,255,0.03)",
                borderLeft: "2px solid var(--gold)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--gold)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em" }}>
                <ShieldCheck size={14} /> Quality Assurance &amp; Standards
              </div>
              <p style={{ fontSize: 12, color: "var(--muted-lt)", lineHeight: 1.6, marginTop: 6, margin: 0 }}>
                {COMPANY_INFO.certificationStatus}
              </p>
            </div>
            <Link
              className="text-link"
              href="/capabilities"
              style={{ marginTop: 28, display: "inline-flex" }}
            >
              Explore processing capabilities <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Sustainability & Environmental Responsibility */}
      <Reveal>
        <section className="section split-section" style={{ backgroundColor: "#0c0e0b" }}>
          <div className="split-copy">
            <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Leaf size={14} color="var(--success)" /> Environmental Responsibility
            </div>
            <h2>
              Sustainable processing.<br />
              <em>Responsible custody.</em>
            </h2>
            <p>
              {COMPANY_INFO.sustainabilityStatement}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--muted-lt)" }}>
                <CheckCircle2 size={16} color="var(--success)" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>Closed-circuit water filtration recycling over 80% of process water in washing circuits.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--muted-lt)" }}>
                <CheckCircle2 size={16} color="var(--success)" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>Physical beneficiation techniques eliminating hazardous synthetic reagents.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--muted-lt)" }}>
                <CheckCircle2 size={16} color="var(--success)" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>Progressive quarry rehabilitation and adherence to Indian mining safety regulations.</span>
              </li>
            </ul>
          </div>
          <div
            className="split-image"
            style={{
              backgroundImage: "url('/images/hero-quarry.png')",
            }}
          >
            <span className="image-caption">Responsible extraction &middot; Gujarat, India</span>
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="Historical Milestones / 1989—2024"
            title="A foundation built on continuity."
            text="Chronological overview based on company archival records. Specific historic dates and corporate expansion milestones are documented below."
          />
        </Reveal>
        <div className="industry-list">
          {milestones.map(({ year, title, desc, status }, idx) => (
            <Reveal key={year} delay={((idx % 2) + 1) as 1 | 2}>
              <div className="industry-row" style={{ cursor: "default" }}>
                <span className="industry-no">{year}</span>
                <div>
                  <h3 style={{ marginBottom: 4 }}>{title}</h3>
                  <p>{desc}</p>
                  <small style={{ fontSize: 10, color: "var(--gold)", letterSpacing: ".05em", textTransform: "uppercase" }}>
                    &bull; {status}
                  </small>
                </div>
                <ArrowUpRight size={17} style={{ opacity: 0.3 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footprint */}
      <Reveal>
        <section className="section split-section">
          <div className="split-copy">
            <div className="eyebrow">Operating Infrastructure</div>
            <h2>
              Grounded in India.<br />
              <em>Exporting globally.</em>
            </h2>
            <p>
              QTM&apos;s processing works are situated near major mineral reserves and multimodal transport infrastructure in Western India, enabling efficient domestic dispatch and access to Mundra and Kandla ports for international container and breakbulk shipments.
            </p>
            <div className="stat-row">
              <div className="stat">
                <strong>Gujarat</strong>
                <span>Processing facility</span>
              </div>
              <div className="stat">
                <strong>Chennai</strong>
                <span>Southern regional desk</span>
              </div>
              <div className="stat">
                <strong>Global</strong>
                <span>Export ports access</span>
              </div>
            </div>
            <Link className="text-link" href="/contact">
              Connect with operations <ArrowUpRight size={15} />
            </Link>
          </div>
          <div
            className="split-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1400&q=85')",
            }}
          >
            <span className="image-caption">Logistics &middot; Multimodal supply chains</span>
          </div>
        </section>
      </Reveal>

      {/* Corporate Disclosure Banner */}
      <Reveal>
        <div
          style={{
            margin: "0 var(--gutter) 48px",
            padding: "16px 20px",
            backgroundColor: "rgba(9, 10, 9, 0.7)",
            border: "1px solid rgba(236, 232, 219, 0.08)",
            fontSize: 11,
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          {COMPANY_DISCLAIMER}
        </div>
      </Reveal>

      {/* CTA Band */}
      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Material inquiries &amp; commercial partnership</div>
            <h2>
              Let&apos;s build<br />
              <em>something together.</em>
            </h2>
          </div>
          <Link className="button-primary" href="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>
    </>
  );
}