import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { minerals } from "@/lib/content";
import { MineralCard } from "@/components/MineralCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Minerals",
  description:
    "Explore QTM's core industrial mineral groups — china clay, bentonite, silica sand, bauxite, ball clay and quartz.",
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
          Core mineral groups for industrial manufacturing. Product grades,
          specifications and suitability should be confirmed directly with QTM.
        </p>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="The mineral collection"
            title="Six core minerals.<br/>Endless applications."
            text="Each mineral group covers multiple grades and processing routes. Select a mineral to explore indicative grades and key properties, then contact QTM to discuss your specific requirements."
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

      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Not sure which mineral you need?</div>
            <h2>
              Tell us your application.<br />
              <em>We&apos;ll advise.</em>
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