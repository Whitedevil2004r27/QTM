import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About QTM",
  description:
    "Learn about Quantum Terra Minerals — our story, operations and mineral value-chain approach from Gujarat, India.",
};

const milestones = [
  {
    year: "1989",
    title: "Foundation",
    desc: "QTM's history traces its beginnings to Gujarat, India, with an initial focus on China clay mining and processing.",
  },
  {
    year: "1995",
    title: "Expansion",
    desc: "The company expanded into bentonite and ball clay processing, broadening its industrial mineral portfolio.",
  },
  {
    year: "2003",
    title: "Modernisation",
    desc: "A period of plant modernisation and processing capability investment strengthened QTM's quality and capacity position.",
  },
  {
    year: "2010",
    title: "Performance minerals",
    desc: "Launch of a performance minerals division to serve higher-value application segments in paints, plastics and coatings.",
  },
  {
    year: "2018",
    title: "South India presence",
    desc: "Establishment of the South India office in Chennai to strengthen customer relationships and logistics reach.",
  },
  {
    year: "2024",
    title: "Branded product lines",
    desc: "Development of branded product lines as part of a broader strategy to communicate grade quality and application suitability.",
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
          <em>Looking forward.</em>
        </h1>
        <p>
          QTM is a mining, mineral processing and industrial minerals company
          serving domestic and international markets from its base in Gujarat,
          India.
        </p>
      </section>

      <section className="section prose-grid">
        <h2>
          A material partner<br />
          <em>for an industrial world.</em>
        </h2>
        <div>
          <p>
            QTM&apos;s stated work spans resource development, mineral
            processing and the supply of industrial and performance minerals.
            The company emphasises operational excellence, innovation,
            customer relationships and responsible resource management.
          </p>
          <p style={{ marginTop: 18 }}>
            The mineral portfolio covers China clay, bentonite, silica sand,
            bauxite, ball clay and quartz — core inputs for ceramics, paper,
            glass, construction, paints, plastics and rubber industries.
          </p>
          <Link
            className="text-link"
            href="/capabilities"
            style={{ marginTop: 28, display: "inline-flex" }}
          >
            Explore capabilities <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="Company timeline"
            title="A story in progress."
            text="Milestones below are based on the timeline published on QTM's website. Confirm exact dates and wording with the company before launch."
          />
        </Reveal>
        <div className="industry-list">
          {milestones.map(({ year, title, desc }, idx) => (
            <Reveal key={year} delay={((idx % 2) + 1) as 1 | 2}>
              <div className="industry-row" style={{ cursor: "default" }}>
                <span className="industry-no">{year}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowUpRight size={17} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footprint */}
      <Reveal>
        <section className="section split-section">
          <div className="split-copy">
            <div className="eyebrow">Our operating footprint</div>
            <h2>
              Grounded in India.<br />
              <em>Connected to industry.</em>
            </h2>
            <p>
              QTM lists its processing plant in Gujarat and a South India office
              in Chennai. Contact the team for current office details, supply
              routes and export market availability.
            </p>
            <div className="stat-row">
              <div className="stat">
                <strong>Gujarat</strong>
                <span>Processing plant</span>
              </div>
              <div className="stat">
                <strong>Chennai</strong>
                <span>South India office</span>
              </div>
              <div className="stat">
                <strong>Global</strong>
                <span>Export reach</span>
              </div>
            </div>
            <Link className="text-link" href="/contact">
              Get in touch <ArrowUpRight size={15} />
            </Link>
          </div>
          <div
            className="split-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1400&q=85')",
            }}
          >
            <span className="image-caption">India &middot; Processing &amp; supply</span>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Ready to partner with QTM?</div>
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