"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/minerals", label: "Minerals" },
  { href: "/industries", label: "Industries" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/about", label: "Our Story" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header" role="banner">
      {/* Brand */}
      <Link href="/" className="brand" aria-label="Quantum Terra Minerals home">
        <span className="brand-mark" aria-hidden="true">
          Q<span>.</span>
        </span>
        <span className="brand-name">
          QUANTUM TERRA MINERALS
          <small>INDUSTRIAL &amp; PERFORMANCE MINERALS</small>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              style={isActive ? { color: "var(--gold)" } : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Desktop CTA */}
      <Link className="header-cta" href="/contact">
        Commercial Inquiries <ArrowUpRight size={14} />
      </Link>

      {/* Mobile menu trigger */}
      <div className="mobile-menu">
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
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
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && (
          <nav
            id="mobile-nav-panel"
            aria-label="Mobile navigation"
            style={{
              position: "absolute",
              top: "80px",
              left: 0,
              right: 0,
              backgroundColor: "rgba(9, 10, 9, 0.98)",
              borderBottom: "1px solid var(--line-strong)",
              padding: "24px var(--gutter-sm)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
            }}
          >
            {links.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: isActive ? "var(--gold)" : "var(--paper)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="button-primary"
              style={{ textAlign: "center", marginTop: 8 }}
            >
              Commercial Inquiries <ArrowUpRight size={14} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}