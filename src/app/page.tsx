import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { minerals, industries, companyStats, COMPANY_DISCLAIMER, COMPANY_INFO } from "@/lib/content";
import { MineralCard } from "@/components/MineralCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qtmminerals.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: siteUrl,
    logo: `${siteUrl}/images/mineral-kaolin.png`,
    foundingDate: COMPANY_INFO.establishedYear,
    description:
      "Quantum Terra Minerals is an industrial minerals producer and processor in Gujarat, India, supplying China clay (kaolin), bentonite, silica sand, bauxite, ball clay and quartz.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales & Inquiries",
      email: COMPANY_INFO.channels.salesEmail,
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

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
            Industrial and performance minerals, shaped by geology and processed with discipline for the manufacturing sectors that build the future.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/minerals">
              Explore Our Minerals <ArrowUpRight size={15} />
            </Link>
            <Link className="text-link" href="/about">
              Discover QTM Heritage <ArrowDown size={13} />
            </Link>
          </div>
        </div>
        <div className="hero-side-note" aria-hidden="true">
          MINERAL VALUE-CHAIN &middot; GUJARAT TO THE WORLD
        </div>
        <div className="hero-bottom" aria-hidden="true">
          <span>Industrial &amp; performance minerals</span>
          <span>Scroll to explore &darr;</span>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <div className="intro-strip">
        <span>
          <strong>Geology is the origin.</strong> Precision processing is the difference.
        </span>
        <span>GUJARAT, INDIA &mdash; GLOBAL EXPORT CAPABILITY</span>
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
            <span className="image-caption">01 / Mineral Beneficiation Journey</span>
          </div>
          <div className="split-copy">
            <div className="eyebrow">Discipline in Mineral Beneficiation</div>
            <h2>
              From the ground up.<br />
              <em>With purpose.</em>
            </h2>
            <p>
              Quantum Terra Minerals operates across the industrial mineral value chain, processing earth materials into classified, reliable inputs for demanding industrial sectors. Our focus centers on long-term supply partnerships, continuous laboratory testing, and responsible resource stewardship.
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
            title="Essential materials.<br/>Engineered with precision."
            text="Explore the six core industrial mineral groups processed by QTM. Certified technical parameters, particle distributions and laboratory assays are provided per inquiry."
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
              View all 6 mineral groups <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Industries ── */}
      <section className="section applications">
        <Reveal>
          <SectionHeading
            kicker="Where materials make a difference"
            title="Supplying the sectors<br/>that shape modern manufacturing."
            text="Mineral formulations tuned to specific process chemistry — from vitreous sanitaryware and ceramic bodies to paper coating, foundry casting and specialty polymers."
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
          <div className="eyebrow">Corporate philosophy</div>
          <blockquote>
            &ldquo;Minerals are more than extracted resources. They are the chemical and structural foundation of technological advancement and global infrastructure.&rdquo;
          </blockquote>
          <p>QUANTUM TERRA MINERALS &middot; EXECUTIVE STATEMENT</p>
        </section>
      </Reveal>

      {/* ── Corporate Transparency Disclosure ── */}
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

      {/* ── CTA Band ── */}
      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Direct Commercial Inquiries</div>
            <h2>
              Let&apos;s establish the right<br />
              <em>mineral specification.</em>
            </h2>
          </div>
          <Link className="button-primary" href="/contact">
            Talk to technical sales <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>
    </>
  );
}