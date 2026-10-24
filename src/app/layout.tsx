import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qtmminerals.com";

export const metadata: Metadata = {
  title: {
    default: "Quantum Terra Minerals (QTM) | Industrial & Performance Minerals",
    template: "%s | Quantum Terra Minerals",
  },
  description:
    "Quantum Terra Minerals — industrial mineral extraction, processing and supply from Gujarat, India. Supplying China clay, bentonite, silica sand, bauxite, ball clay and quartz.",
  keywords: [
    "industrial minerals",
    "China clay",
    "kaolin Gujarat",
    "bentonite India",
    "silica sand foundry",
    "bauxite refractory",
    "ball clay ceramics",
    "quartz micronised",
    "Gujarat minerals export",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Quantum Terra Minerals (QTM) | Industrial & Performance Minerals",
    description:
      "Reliable mineral supply from Gujarat, India. Sourcing, processing, and grading for ceramics, paper, foundry, glass, and polymers.",
    url: siteUrl,
    siteName: "Quantum Terra Minerals",
    images: [
      {
        url: `${siteUrl}/images/hero-quarry.png`,
        width: 1200,
        height: 630,
        alt: "Quantum Terra Minerals - Industrial Quarry & Processing Complex",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Terra Minerals | Industrial Minerals",
    description:
      "Industrial and performance minerals processed from Gujarat, India.",
    images: [`${siteUrl}/images/hero-quarry.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}