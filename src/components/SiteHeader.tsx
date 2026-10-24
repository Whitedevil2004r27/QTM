"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/minerals", label: "Minerals" },
  { href: "/industries", label: "Industries" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "Our story" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Brand */}
      <Link href="/" className="brand" aria-label="QTM Minerals home">
        <span className="brand-mark">
          Q<span>.</span>
        </span>
        <span className="brand-name">
          QUANTUM TERRA MINERALS
          <small>INDUSTRIAL &amp; PERFORMANCE MINERALS</small>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={
              pathname.startsWith(link.href)
                ? { color: "var(--gold)" }
                : undefined
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <Link className="header-cta" href="/contact">
        Start a conversation <ArrowUpRight size={14} />
      </Link>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--paper)",
            padding: 8,
            display: "flex",
            alignItems: "center",
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        {open && (
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={
                  pathname.startsWith(link.href)
                    ? { color: "var(--gold)" }
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}