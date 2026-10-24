import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { COMPANY_INFO, COMPANY_DISCLAIMER } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="eyebrow">A Materials Partner Since 1989</div>
          <h2>
            Built from the earth.<br />
            <em>Made for what&apos;s next.</em>
          </h2>
        </div>
        <Link className="round-link" href="/contact" aria-label="Contact QTM Sales Desk">
          <ArrowUpRight size={22} />
        </Link>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <div className="footer-nav-group">
          <strong>Minerals</strong>
          <Link href="/minerals/china-clay">China Clay (Kaolin)</Link>
          <Link href="/minerals/bentonite">Industrial Bentonite</Link>
          <Link href="/minerals/silica-sand">Silica Sand</Link>
          <Link href="/minerals/bauxite">Bauxite Ore</Link>
          <Link href="/minerals/ball-clay">Plastic Ball Clay</Link>
          <Link href="/minerals/quartz">Crystalline Quartz</Link>
        </div>

        <div className="footer-nav-group">
          <strong>Company</strong>
          <Link href="/about">Corporate Story &amp; Heritage</Link>
          <Link href="/capabilities">Processing &amp; QA Capabilities</Link>
          <Link href="/industries">Manufacturing Sectors</Link>
          <Link href="/contact">Direct Inquiries &amp; Quotations</Link>
          <Link href="/sitemap.xml">XML Sitemap</Link>
        </div>

        <div className="footer-nav-group">
          <strong>Operating Presence</strong>
          <span style={{ color: "var(--paper)", fontSize: 13, fontWeight: 500 }}>
            Processing Facility
          </span>
          <span style={{ color: "var(--muted-lt)", fontSize: 12 }}>
            Gujarat Industrial Corridor, India
          </span>
          <span style={{ color: "var(--paper)", fontSize: 13, fontWeight: 500, marginTop: 8 }}>
            Southern Liaison Office
          </span>
          <span style={{ color: "var(--muted-lt)", fontSize: 12 }}>
            Chennai, Tamil Nadu, India
          </span>
          <div style={{ marginTop: 12 }}>
            <a
              href={`mailto:${COMPANY_INFO.channels.salesEmail}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "var(--gold)",
                textDecoration: "none",
              }}
            >
              <Mail size={13} /> {COMPANY_INFO.channels.salesEmail}
            </a>
          </div>
        </div>

        <div className="footer-nav-group">
          <strong>Corporate Notice</strong>
          <span style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.65 }}>
            {COMPANY_DISCLAIMER}
          </span>
        </div>
      </nav>

      <div className="footer-bottom">
        <Link href="/" className="footer-brand" aria-label="QTM Minerals Homepage">
          QTM<span>&#174;</span>
          <small>Quantum Terra Minerals</small>
        </Link>
        <span>
          &copy; {new Date().getFullYear()} Quantum Terra Minerals. All rights reserved.
        </span>
        <span style={{ textAlign: "right" }}>
          Industrial &amp; performance minerals &middot; Gujarat, India to the world
        </span>
      </div>
    </footer>
  );
}