import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries, minerals } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { MineralCard } from "@/components/MineralCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industrial sectors served by QTM mineral solutions — ceramics, paper, paints, plastics, rubber, glass and construction.",
};

const industryDetails: Record<
  string,
  { image: string; mineralSlugs: string[] }
> = {
  "01": {
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=85",
    mineralSlugs: ["china-clay", "ball-clay", "silica-sand", "quartz"],
  },
  "02": {
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85",
    mineralSlugs: ["china-clay"],
  },
  "03": {
    image:
      "https://images.unsplash.com/photo-1580893246395-52aead8960dc?auto=format&fit=crop&w=1400&q=85",
    mineralSlugs: ["china-clay", "quartz"],
  },
  "04": {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    mineralSlugs: ["china-clay", "quartz"],
  },
  "05": {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85",
    mineralSlugs: ["china-clay"],
  },
  "06": {
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85",
    mineralSlugs: ["silica-sand", "quartz", "bauxite"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> / Industries
        </div>
        <div className="eyebrow">Application-led materials</div>
        <h1>
          Made useful
          <br />
          <em>by application.</em>
        </h1>
        <p>
          Different industries ask different things of a mineral. Start with
          the application, then work with the QTM team to establish the right
          material and grade.
        </p>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            kicker="Applications / 01—06"
            title="Materials at work."
            text="Sectors identified on QTM's company website. Exact product suitability, grade availability and certifications should be confirmed with the company."
          />
        </Reveal>
        <div className="industry-list">
          {industries.map((i, idx) => (
            <Reveal key={i.no} delay={((idx % 2) + 1) as 1 | 2}>
              <Link href="/contact" className="industry-row">
                <span className="industry-no">{i.no}</span>
                <h3>{i.title}</h3>
                <p>{i.description}</p>
                <ArrowUpRight size={17} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured industry split — Ceramics */}
      <Reveal>
        <section className="section split-section" style={{ paddingTop: 0 }}>
          <div
            className="split-image"
            style={{
              backgroundImage: `url('${industryDetails["01"].image}')`,
            }}
          >
            <span className="image-caption">01 / Ceramics &amp; sanitaryware</span>
          </div>
          <div className="split-copy">
            <div className="eyebrow">Featured application</div>
            <h2>
              Ceramics &amp; sanitaryware:<br />
              <em>the mineral foundation.</em>
            </h2>
            <p>
              Ceramic bodies for tableware, sanitaryware and floor tiles depend
              on a precise combination of china clay, ball clay, silica and
              sometimes quartz. QTM supplies multiple minerals that contribute
              to this formulation — from the whiteness and plasticity of kaolin
              to the green strength of ball clay and the structural contribution
              of silica.
            </p>
            <p>
              Grade selection and formulation compatibility should be worked out
              directly with the QTM technical team.
            </p>
            <Link className="text-link" href="/contact">
              Discuss ceramics requirements <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Related minerals */}
      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <SectionHeading
            kicker="Minerals for ceramics"
            title="Key minerals for ceramic applications."
            text="Indicative selection — exact grade suitability depends on your body formulation, firing temperature and end application."
          />
        </Reveal>
        <div className="mineral-grid">
          {industryDetails["01"].mineralSlugs.slice(0, 3).map((slug, idx) => {
            const m = minerals.find((x) => x.slug === slug);
            return m ? (
              <Reveal key={m.slug} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <MineralCard mineral={m} />
              </Reveal>
            ) : null;
          })}
        </div>
      </section>

      <Reveal>
        <section className="cta-band">
          <div>
            <div className="eyebrow">Your application, our conversation</div>
            <h2>
              Find the right mineral<br />
              <em>for your process.</em>
            </h2>
          </div>
          <Link className="button-primary" href="/contact">
            Talk to QTM <ArrowUpRight size={16} />
          </Link>
        </section>
      </Reveal>
    </>
  );
}