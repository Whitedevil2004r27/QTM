import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { minerals, COMPANY_DISCLAIMER } from "@/lib/content";
import { MineralCard } from "@/components/MineralCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industrial Minerals Portfolio | QTM Minerals",
  description:
    "Explore QTM's six core industrial mineral groups: China clay (kaolin), bentonite, silica sand, bauxite, ball clay, and quartz.",
};

export default function MineralsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> / Minerals
        </div>
        <div className="eyebrow">Material portfolio / 01—06</div>
        <h1>
          Minerals for a<br />
          <em>material world.</em>
        </h1>
        <p>
          Six foundational industrial mineral groups mined, beneficiated, and graded in Gujarat, India to meet global industrial specifications.
        </p>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="The mineral collection"
            title="Six core minerals.<br/>Endless manufacturing applications."
            text="Each mineral group covers multiple commercial grades and processing routes. Select a mineral to review technical benchmarks, key properties, and approved packaging formats."
          />
        </Reveal>
        <div className="mineral-grid">
          {minerals.map((m, idx) => (
            <Reveal key={m.slug} delay={((idx % 3) + 1) as 1 | 2 | 3}>
              <MineralCard mineral={m} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Corporate Disclosure Banner */}
      <Reveal>
        <div
          style={{
            margin: "0 var(--gutter) 40px",
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

      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Technical grade selection guidance</div>
            <h2>
              Not sure which grade you need?<br />
              <em>We&apos;ll advise.</em>
            </h2>
          </div>
          <Link className="button-primary" href="/contact">
            Start a technical dialogue <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>
    </>
  );
}