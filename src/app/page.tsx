import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { minerals, industries, companyStats } from "@/lib/content";
import { MineralCard } from "@/components/MineralCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow">Quantum Terra Minerals &middot; Since 1989</div>
          <h1>
            Earth, refined.<br />
            <em>Engineered for industry.</em>
          </h1>
          <p className="hero-copy">
            Industrial and performance minerals, shaped by nature and refined
            for the materials that move the world forward.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/minerals">
              Explore our minerals <ArrowUpRight size={15} />
            </Link>
            <Link className="text-link" href="/about">
              Discover QTM <ArrowDown size={13} />
            </Link>
          </div>
        </div>
        <div className="hero-side-note" aria-hidden="true">
          MATERIAL INTELLIGENCE &middot; INDIA TO THE WORLD
        </div>
        <div className="hero-bottom" aria-hidden="true">
          <span>Industrial &amp; performance minerals</span>
          <span>Scroll to explore &darr;</span>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <div className="intro-strip">
        <span>
          <strong>Nature is the origin.</strong> Precision is the difference.
        </span>
        <span>GUJARAT, INDIA &mdash; GLOBAL AMBITION</span>
      </div>

      {/* ── Story split ── */}
      <Reveal>
        <section className="section split-section">
          <div
            className="split-image"
            style={{
              backgroundImage:
                "linear-gradient(0deg,rgba(9,10,9,.2),transparent),url('/images/mineral-kaolin.png')",
            }}
          >
            <span className="image-caption">01 / The material journey</span>
          </div>
          <div className="split-copy">
            <div className="eyebrow">Precision in mineral processing</div>
            <h2>
              From the ground up.<br />
              <em>With purpose.</em>
            </h2>
            <p>
              Quantum Terra Minerals works across the mineral value chain,
              supplying materials for industrial applications. Our focus is on
              dependable partnerships, application-led solutions and responsible
              resource management.
            </p>
            <div className="stat-row">
              {companyStats.map((s) => (
                <div className="stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <Link className="text-link" href="/about">
              The QTM story <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* ── Mineral collection ── */}
      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="The mineral collection / 01—06"
            title="Essential materials.<br/>Considered differently."
            text="Explore the core mineral groups presented by QTM. Detailed technical specifications should be confirmed with the company for each grade and application."
          />
        </Reveal>
        <div className="mineral-grid">
          {minerals.map((m, idx) => (
            <Reveal key={m.slug} delay={((idx % 3) + 1) as 1 | 2 | 3}>
              <MineralCard mineral={m} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={1}>
          <div style={{ marginTop: 44 }}>
            <Link className="text-link" href="/minerals">
              View all minerals <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Industries ── */}
      <section className="section applications">
        <Reveal>
          <SectionHeading
            kicker="Where materials make a difference"
            title="Built into the industries<br/>that shape everyday life."
            text="Mineral applications span a wide range of manufacturing sectors. The right grade depends on your process, formulation and technical requirements."
          />
        </Reveal>
        <div className="industry-list">
          {industries.map((i, idx) => (
            <Reveal key={i.no} delay={((idx % 2) + 1) as 1 | 2}>
              <Link href="/industries" className="industry-row">
                <span className="industry-no">{i.no}</span>
                <h3>{i.title}</h3>
                <p>{i.description}</p>
                <ArrowUpRight size={17} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <Reveal>
        <section className="quote-section">
          <div className="eyebrow">Our point of view</div>
          <blockquote>
            &ldquo;Minerals are more than natural resources. They are the
            foundation of innovation, infrastructure and industrial progress.&rdquo;
          </blockquote>
          <p>QUANTUM TERRA MINERALS &middot; COMPANY PHILOSOPHY</p>
        </section>
      </Reveal>

      {/* ── CTA Band ── */}
      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Have a material requirement?</div>
            <h2>
              Let&apos;s find the right<br />
              <em>mineral solution.</em>
            </h2>
          </div>
          <Link className="button-primary" href="/contact">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>
    </>
  );
}