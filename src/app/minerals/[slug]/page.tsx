import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Factory, Package, ShieldCheck } from "lucide-react";
import { minerals, COMPANY_DISCLAIMER } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { MineralCard } from "@/components/MineralCard";
import { Reveal } from "@/components/Reveal";
import { TdsSection } from "@/components/TdsSection";

export function generateStaticParams() {
  return minerals.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mineral = minerals.find((m) => m.slug === slug);
  if (!mineral) return { title: "Mineral Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qtmminerals.com";

  return {
    title: `${mineral.name} | Industrial Grade Specifications & Applications`,
    description: mineral.description,
    alternates: {
      canonical: `${siteUrl}/minerals/${mineral.slug}`,
    },
    openGraph: {
      title: `${mineral.name} | QTM Minerals`,
      description: mineral.description,
      url: `${siteUrl}/minerals/${mineral.slug}`,
      siteName: "Quantum Terra Minerals",
      images: [
        {
          url: mineral.image.startsWith("http")
            ? mineral.image
            : `${siteUrl}${mineral.image}`,
          width: 1200,
          height: 630,
          alt: `${mineral.name} - Industrial Mineral Specimen`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${mineral.name} | QTM Minerals`,
      description: mineral.description,
    },
  };
}

export default async function MineralDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mineral = minerals.find((m) => m.slug === slug);
  if (!mineral) notFound();

  const others = minerals.filter((m) => m.slug !== mineral.slug).slice(0, 3);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qtmminerals.com";

  // Product Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${mineral.name} (${mineral.scientific})`,
    image: mineral.image.startsWith("http") ? mineral.image : `${siteUrl}${mineral.image}`,
    description: mineral.description,
    category: "Industrial Raw Minerals",
    brand: {
      "@type": "Brand",
      name: "Quantum Terra Minerals",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Quantum Terra Minerals",
      url: siteUrl,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      price: "Inquire for lot pricing",
    },
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Detail Hero ── */}
      <div className="detail-hero">
        <div
          className="detail-hero-image"
          style={{
            backgroundImage: `url("${mineral.heroImage}")`,
          }}
        />
        <div className="detail-hero-copy">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> /{" "}
            <Link href="/minerals">Minerals</Link> / {mineral.name}
          </div>
          <div className="eyebrow">
            Mineral {mineral.index} &middot; {mineral.scientific}
          </div>
          <h1>
            {mineral.name}
            <br />
            <em>in focus.</em>
          </h1>
          <p>{mineral.description}</p>
          <div className="tag-list">
            {mineral.applications.map((a) => (
              <span className="tag" key={a}>
                {a}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link
              className="button-primary"
              href={`/contact?mineral=${encodeURIComponent(mineral.name)}`}
            >
              Enquire about this mineral <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── About Prose Grid ── */}
      <Reveal>
        <section className="section prose-grid">
          <h2>
            {mineral.name}:<br />
            <em>the material story.</em>
          </h2>
          <div>
            <p>{mineral.longDescription}</p>
            <div
              style={{
                marginTop: 24,
                padding: "16px 20px",
                backgroundColor: "rgba(255,255,255,0.03)",
                borderLeft: "2px solid var(--gold)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--gold)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>
                <ShieldCheck size={14} /> Origin &amp; Quality Control
              </div>
              <p style={{ fontSize: 13, color: "var(--muted-lt)", lineHeight: 1.6, margin: 0 }}>
                <strong>Extraction origin:</strong> {mineral.originRegion}. {mineral.qaStatus}
              </p>
            </div>
            <Link
              className="text-link"
              href={`/contact?mineral=${encodeURIComponent(mineral.name)}`}
              style={{ marginTop: 24, display: "inline-flex" }}
            >
              Request commercial lot availability <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* ── Technical Data Sheet (TDS) Card ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0, paddingBottom: 24 }}>
          <TdsSection mineral={mineral} />
        </section>
      </Reveal>

      {/* ── Key Properties ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div className="eyebrow">Key physical &amp; chemical properties</div>
            <span style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".05em" }}>
              Standard Laboratory Benchmark
            </span>
          </div>
          <dl className="key-properties">
            {mineral.keyProperties.map((prop) => (
              <div className="key-prop" key={prop.label}>
                <dt>{prop.label}</dt>
                <dd>{prop.value}</dd>
                <span
                  style={{
                    fontSize: 9,
                    color: "var(--muted)",
                    display: "block",
                    marginTop: 4,
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                  }}
                >
                  Commercial Target Range
                </span>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      {/* ── Grade Table ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div className="eyebrow">Available processing grades</div>
            <span
              style={{
                fontSize: 10,
                color: "var(--gold)",
                backgroundColor: "rgba(197,173,122,0.1)",
                padding: "2px 8px",
                border: "1px solid rgba(197,173,122,0.2)",
              }}
            >
              Specifications Subject to Final Order Release
            </span>
          </div>
          <p style={{ color: "var(--muted-lt)", fontSize: 12, marginBottom: 16 }}>
            Grade parameters represent standard processing benchmarks from Gujarat facilities. Customized particle grading and surface modifications are available upon technical consultation.
          </p>
          <table className="grade-table">
            <thead>
              <tr>
                <th>Grade name</th>
                {mineral.grades.some((g) => g.brightness) && <th>Brightness</th>}
                {mineral.grades.some((g) => g.moisture) && <th>Moisture</th>}
                {mineral.grades.some((g) => g.particle) && <th>Particle size</th>}
                <th>Application note</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mineral.grades.map((grade) => (
                <tr key={grade.name}>
                  <td>
                    <strong>{grade.name}</strong>
                  </td>
                  {mineral.grades.some((g) => g.brightness) && (
                    <td>{grade.brightness ?? "—"}</td>
                  )}
                  {mineral.grades.some((g) => g.moisture) && (
                    <td>{grade.moisture ?? "—"}</td>
                  )}
                  {mineral.grades.some((g) => g.particle) && (
                    <td>{grade.particle ?? "—"}</td>
                  )}
                  <td>{grade.note}</td>
                  <td>
                    <span
                      style={{
                        fontSize: 9,
                        padding: "2px 6px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        color: "var(--muted-lt)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        textTransform: "uppercase",
                        letterSpacing: ".06em",
                      }}
                    >
                      Commercial
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Reveal>

      {/* ── Packaging & Logistics ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0 }}>
          <div
            className="eyebrow"
            style={{
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Package size={14} color="var(--gold)" /> Approved Packaging Formats
          </div>
          <div className="packaging-list">
            {mineral.packagingOptions.map((pkg) => (
              <span className="packaging-chip" key={pkg}>
                <CheckCircle2 size={13} color="var(--gold)" /> {pkg}
              </span>
            ))}
          </div>
          <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 16, lineHeight: 1.6 }}>
            Bulk cargo, customized palletizing, marine desiccants, and containerization for export via Mundra / Kandla ports arranged upon request.
          </p>
        </section>
      </Reveal>

      {/* ── Related Industries ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0 }}>
          <div
            className="eyebrow"
            style={{
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Factory size={14} color="var(--gold)" /> Related Industrial Sectors
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {mineral.relatedIndustries.map((ind) => (
              <Link
                key={ind}
                href="/industries"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--line-strong)",
                  color: "var(--paper)",
                  fontSize: 12,
                  transition: "border-color var(--dur-fast), color var(--dur-fast)",
                }}
              >
                {ind} <ArrowUpRight size={13} color="var(--gold)" />
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Corporate Transparency Notice ── */}
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

      {/* ── CTA Band ── */}
      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Ready to confirm specifications?</div>
            <h2>
              Talk to technical sales
              <br />
              <em>about {mineral.name}.</em>
            </h2>
          </div>
          <Link
            className="button-primary"
            href={`/contact?mineral=${encodeURIComponent(mineral.name)}`}
          >
            Start an inquiry <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>

      {/* ── Related Minerals ── */}
      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="Continue exploring"
            title="Complementary industrial minerals."
            text="Explore adjacent mineral inputs often formulated alongside this material."
          />
        </Reveal>
        <div className="mineral-grid">
          {others.map((m, idx) => (
            <Reveal key={m.slug} delay={((idx % 3) + 1) as 1 | 2 | 3}>
              <MineralCard mineral={m} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}