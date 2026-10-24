import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        <Link className="round-link" href="/contact" aria-label="Contact QTM">
          <ArrowUpRight size={22} />
        </Link>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <div className="footer-nav-group">
          <strong>Minerals</strong>
          <Link href="/minerals/china-clay">China Clay</Link>
          <Link href="/minerals/bentonite">Bentonite</Link>
          <Link href="/minerals/silica-sand">Silica Sand</Link>
          <Link href="/minerals/bauxite">Bauxite</Link>
          <Link href="/minerals/ball-clay">Ball Clay</Link>
          <Link href="/minerals/quartz">Quartz</Link>
        </div>
        <div className="footer-nav-group">
          <strong>Company</strong>
          <Link href="/about">Our Story</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-nav-group">
          <strong>Locations</strong>
          <span style={{ color: "var(--muted-lt)", fontSize: 13 }}>
            Processing plant<br />Gujarat, India
          </span>
          <span style={{ color: "var(--muted-lt)", fontSize: 13 }}>
            South India office<br />Chennai, India
          </span>
        </div>
        <div className="footer-nav-group">
          <strong>Note</strong>
          <span style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.65 }}>
            Product descriptions are introductory copy only. Verify all
            specifications, certifications and contact details with QTM
            before publication.
          </span>
        </div>
      </nav>

      <div className="footer-bottom">
        <Link href="/" className="footer-brand">
          QTM<span>&#174;</span>
          <small>Quantum Terra Minerals</small>
        </Link>
        <span>
          &copy; {new Date().getFullYear()} Quantum Terra Minerals. All rights reserved.
        </span>
        <span style={{ textAlign: "right" }}>
          Industrial &amp; performance minerals &middot; India to the world
        </span>
      </div>
    </footer>
  );
}