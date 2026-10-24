import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "QTM Minerals | Earth, Refined.",
    template: "%s | QTM Minerals",
  },
  description:
    "Quantum Terra Minerals — industrial and performance mineral solutions from India to the world.",
  metadataBase: new URL("https://qtmminerals.com"),
  openGraph: {
    title: "QTM Minerals | Earth, Refined.",
    description: "Industrial and performance mineral solutions.",
    type: "website",
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
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}