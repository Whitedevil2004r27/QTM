import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "QTM mineral processing capabilities — from resource development through beneficiation, quality assurance and logistics.",
};

const items = [
  {
    no: "01",
    title: "Resource development",
    description:
      "Exploration and resource development are part of the company's stated mineral value-chain focus. QTM engages with mineral resources from extraction through to finished industrial-grade product.",
  },
  {
    no: "02",
    title: "Beneficiation & processing",
    description:
      "Processing capabilities described by QTM include beneficiation, washing, drying and classification. Ask the team about specific particle size capabilities and equipment for each mineral type.",
  },
  {
    no: "03",
    title: "Calcination & micronising",
    description:
      "The company describes calcination and micronising among its manufacturing operations. These processes unlock enhanced brightness, altered particle morphology and improved performance properties in calcined kaolin and quartz grades.",
  },
  {
    no: "04",
    title: "Quality assurance",
    description:
      "QTM describes laboratory testing and in-process monitoring as part of its quality approach. Batch certificates and test reports are available for relevant grades — confirm scope and format with the QTM team.",
  },
  {
    no: "05",
    title: "Application support",
    description:
      "Work with the QTM team to align mineral selection and processing parameters with your end-use requirements. Application-specific dialogue helps define the right grade, particle size and chemistry profile.",
  },
  {
    no: "06",
    title: "Supply & logistics",
    description:
      "Discuss delivery formats, packaging options, lead times, minimum order quantities and export documentation directly with the company. Both domestic Indian and international supply routes are available.",
  },
] as const;

export default function CapabilitiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> / Capabilities
        </div>
        <div className="eyebrow">Process &middot; quality &middot; partnership</div>
        <h1>
          Precision is a<br />
          <em>process.</em>
        </h1>
        <p>
          From raw mineral resources to industrial applications, a reliable
          materials partnership depends on process discipline, clear
          specifications and open communication.
        </p>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="The QTM approach"
            title="Capability, from source to supply."
            text="A presentation of capability areas described on the existing QTM website. Specific process availability and certifications should be verified directly with QTM."
          />
        </Reveal>
        <div className="capability-grid">
          {items.map(({ no, title, description }, idx) => (
            <Reveal key={no} delay={((idx % 3) + 1) as 1 | 2 | 3}>
              <article className="capability">
                <span>{no} / CAPABILITY</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="section prose-grid" style={{ paddingTop: 0 }}>
          <h2>
            Every application is<br />
            <em>technically specific.</em>
          </h2>
          <div>
            <p>
              Industrial mineral performance depends on grade, processing
              method, particle size distribution, chemical purity and
              compatibility with your process chemistry. Generic data sheets
              are a starting point, not a specification.
            </p>
            <p style={{ marginTop: 18 }}>
              QTM welcomes detailed technical conversations. Share your
              application, target properties and current mineral supply
              challenge — the team can advise on suitable grades and
              whether a trial sample is appropriate.
            </p>
            <Link
              className="text-link"
              href="/contact"
              style={{ marginTop: 28, display: "inline-flex" }}
            >
              Start a technical conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Need technical details?</div>
            <h2>
              Let&apos;s talk about<br />
              <em>your requirements.</em>
            </h2>
          </div>
          <Link className="button-primary" href="/contact">
            Contact QTM <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>
    </>
  );
}