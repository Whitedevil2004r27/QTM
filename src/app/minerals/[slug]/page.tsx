import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Package } from "lucide-react";
import { minerals } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { MineralCard } from "@/components/MineralCard";
import { Reveal } from "@/components/Reveal";

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
  return {
    title: mineral?.name ?? "Mineral",
    description: mineral?.description,
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

  return (
    <>
      {/* ── Hero ── */}
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
            <Link href="/minerals">Minerals</Link> /{" "}
            {mineral.name}
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
          <Link
            className="button-primary"
            href={`/contact?mineral=${encodeURIComponent(mineral.name)}`}
          >
            Enquire about this mineral <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── About ── */}
      <Reveal>
        <section className="section prose-grid">
          <h2>
            {mineral.name}:<br />
            <em>the material story.</em>
          </h2>
          <div>
            <p>{mineral.longDescription}</p>
            <p style={{ marginTop: 20 }}>
              <strong>Technical note:</strong> All grade values, chemistry and
              specifications shown are indicative marketing ranges only. Confirm
              grade availability, certifications and technical data sheets
              directly with QTM before purchasing decisions.
            </p>
            <Link
              className="text-link"
              href={`/contact?mineral=${encodeURIComponent(mineral.name)}`}
              style={{ marginTop: 24, display: "inline-flex" }}
            >
              Request technical information <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* ── Key Properties ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Key physical properties
          </div>
          <dl className="key-properties">
            {mineral.keyProperties.map((prop) => (
              <div className="key-prop" key={prop.label}>
                <dt>{prop.label}</dt>
                <dd>{prop.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      {/* ── Grade Table ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Available grades
          </div>
          <p style={{ color: "var(--muted)", fontSize: 12, marginBottom: 8 }}>
            Indicative grades only — confirm with QTM for current grade list,
            availability and pricing.
          </p>
          <table className="grade-table">
            <thead>
              <tr>
                <th>Grade name</th>
                {mineral.grades.some((g) => g.brightness) && (
                  <th>Brightness</th>
                )}
                {mineral.grades.some((g) => g.moisture) && <th>Moisture</th>}
                {mineral.grades.some((g) => g.particle) && (
                  <th>Particle size</th>
                )}
                <th>Application note</th>
              </tr>
            </thead>
            <tbody>
              {mineral.grades.map((grade) => (
                <tr key={grade.name}>
                  <td>{grade.name}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Reveal>

      {/* ── Packaging ── */}
      <Reveal>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <Package size={12} /> Packaging options
          </div>
          <div className="packaging-list">
            {mineral.packagingOptions.map((pkg) => (
              <span className="packaging-chip" key={pkg}>
                {pkg}
              </span>
            ))}
          </div>
          <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 16 }}>
            Custom packaging, bulk and export packing arrangements available —
            discuss requirements with QTM.
          </p>
        </section>
      </Reveal>

      {/* ── CTA ── */}
      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Ready to discuss your requirements?</div>
            <h2>
              Talk to the team
              <br />
              <em>about {mineral.name}.</em>
            </h2>
          </div>
          <Link
            className="button-primary"
            href={`/contact?mineral=${encodeURIComponent(mineral.name)}`}
          >
            Start an enquiry <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>

      {/* ── Related Minerals ── */}
      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="Continue exploring"
            title="More from the mineral collection."
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