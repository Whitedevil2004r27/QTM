# QTM Minerals — Luxury Editorial Website

A cinematic, editorial web experience for **Quantum Terra Minerals (QTM)** built with Next.js App Router, React 19, TypeScript, and a bespoke CSS design system.

---

## Architecture & Features

- **Luxury Editorial Design**: Bespoke styling with Cormorant Garamond display serif, Inter typography, gold accent hierarchy, and film-grain texture overlays.
- **Micro-Animations & Restrained Motion**:
  - `IntersectionObserver`-based viewport reveals (`Reveal.tsx`) with staggered child delays.
  - Ken Burns hero zoom effect with subtle opacity easing.
  - Gold underline slide transitions on navigation links.
  - Image scale transitions and arrow icon hover swaps on mineral cards.
  - Strict respect for `prefers-reduced-motion` in CSS.
- **Product & Grade Data System**:
  - Fully typed mineral data layer (`src/lib/content.ts`).
  - Technical grade comparison tables (brightness, moisture, particle size, application notes).
  - Key physical property definitions (specific gravity, pH, refractive index, Mohs hardness).
  - Industrial packaging options chips.
- **Full Route Suite**:
  - `/` — Cinematic hero with quarry photography, company story, 6-mineral showcase, industry matrix, editorial quote, and CTA band.
  - `/minerals` — Grid of all core mineral groups with application tags and breadcrumbs.
  - `/minerals/[slug]` — Dynamic product dossier with high-res hero, grade matrix, physical specs, packaging chips, and related mineral cross-links.
  - `/industries` — Application-driven sectors with dedicated Ceramics & Sanitaryware feature breakdown.
  - `/capabilities` — Value-chain capabilities from extraction and beneficiation to micronising and QA.
  - `/about` — Origin story, Gujarat & Chennai operating footprint, and 1989–2024 milestone timeline.
  - `/contact` — Enquiry form pre-filtered by selected mineral with contact info and validation.
  - `not-found` — Custom editorial 404 screen.

---

## Local Setup & Development

### 1. Requirements
- Node.js 20.9+ (LTS recommended)
- npm

### 2. Assets
Local photography assets are placed in `public/images/`:
- `hero-quarry.png` — Dramatic open-pit quarry
- `mineral-kaolin.png` — China clay / Kaolin specimen
- `mineral-bentonite.png` — Bentonite clay specimen
- `mineral-silica.png` — Silica sand crystalline macro
- `mineral-bauxite.png` — Bauxite ore specimen
- `mineral-quartz.png` — Quartz mineral specimen

*(Optional script `setup-images.mjs` is provided for copying AI-generated assets into `public/images` if needed).*

### 3. Start Development Server
```bash
npm install
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## Production Readiness Checklist

1. **Approved Company Assets**: Verify and license photography for production use; replace external Unsplash fallbacks with licensed imagery.
2. **Technical Specifications**: All grade ranges, particle sizes, and purity metrics in `src/lib/content.ts` are indicative marketing copy. Confirm exact laboratory data sheets and certifications with QTM.
3. **Form Integration**: Replace the demo handler in `src/app/api/contact/route.ts` with a transactional email provider (Resend, SendGrid) or CRM webhook.
4. **Legal & Security**: Add captcha/honeypot spam protection, privacy policy, and cookie/analytics consent disclosures.
5. **SEO & Domain**: Update `metadataBase` in `src/app/layout.tsx` with your production domain and add XML sitemap / robots.txt.
