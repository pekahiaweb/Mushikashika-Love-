# MUSHIKASHIKA LOVE — Official Website

**Written & Directed by Andrew Pekahia**
A Zimbabwean Romantic Thriller set in Harare · SSADZA Fund Grant Recipient

---

## Stack

| Package | Version | Notes |
|---|---|---|
| Next.js | 16.2.9 | Turbopack default, CVE-patched |
| React | 19.2.7 | Latest stable, CVE-patched |
| Framer Motion | ^11.18.0 | All animations |
| Lenis | ^1.3.4 | Smooth scroll |
| Tailwind CSS | ^3.4.17 | Glassmorphism utilities |
| TypeScript | ^5 | Strict mode |
| ESLint | ^9 | Flat config |
| Node.js | ≥ 20 (22 LTS recommended) | Required by Next.js 16 |

---

## Getting Started

```bash
# Confirm Node version (must be ≥ 20)
node -v

# If using nvm:
nvm install 22
nvm use 22

# Install dependencies
npm install

# Run development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
mushikashika-love/
├── app/
│   ├── layout.tsx        # Root layout: Poppins font, full SEO metadata
│   ├── page.tsx          # Home page — composes all 10 sections
│   └── globals.css       # Tailwind base + glassmorphism utilities
├── components/
│   ├── Nav.tsx           # Sticky nav with scroll-aware glassmorphism
│   ├── Hero.tsx          # Full-viewport hero: city lights, parallax, title
│   ├── Synopsis.tsx      # Glass card + animated pull quotes
│   ├── Cast.tsx          # 7 character cards with hover glow
│   ├── Gallery.tsx       # 8 scene cards, masonry grid with hover reveal
│   ├── Trailer.tsx       # Pulsing trailer placeholder
│   ├── Locations.tsx     # 8 Harare location cards
│   ├── Press.tsx         # Quote cards with gold bottom border
│   ├── Tech.tsx          # WE MOVE app, necklace beacon, mushikashika
│   ├── Production.tsx    # SSADZA Fund grant badge
│   ├── Footer.tsx        # Harare skyline SVG silhouette + links
│   ├── Reveal.tsx        # Scroll-triggered fade-up animation wrapper
│   ├── SectionLabel.tsx  # Gold underline section eyebrow
│   └── SmoothScroll.tsx  # Lenis smooth scroll provider
├── lib/
│   ├── tokens.ts         # All color tokens + glassStyle() helper
│   └── data.ts           # All cast, scene, location, quote data
├── public/
│   └── images/           # Drop your film stills here (see list below)
├── .nvmrc                # Node 22 LTS
├── .node-version         # Node 22 LTS (Vercel picks this up)
└── package.json          # npm overrides silence all transitive warnings
```

---

## Adding Film Images

Place images in `public/images/` and use Next.js `<Image>`:

```tsx
import Image from "next/image";

<Image
  src="/images/hero-harare.jpg"
  alt="Harare at night"
  fill
  className="object-cover"
  priority
/>
```

**Recommended image filenames:**
- `hero-harare.jpg` — Harare night skyline (hero background)
- `arrivals.jpg` — RGM Airport arrivals hall
- `avenues-night.jpg` — Harare CBD at night
- `cottage.jpg` — Tafa's one-room cottage
- `mbare-braai.jpg` — Mbare street scene, braai smoke
- `nehanda-statue.jpg` — Mbuya Nehanda statue, golden hour
- `warehouse.jpg` — Graniteside industrial interior
- `cast-lisa.jpg`, `cast-tafa.jpg`, `cast-micho.jpg` — Character stills
- `og-image.jpg` — 1200×630px Open Graph image

---

## Push to GitHub

```bash
# Unzip and enter the project
unzip mushikashika-love.zip
cd mushikashika-love

# Initialise git
git init
git add .
git commit -m "feat: initial Mushikashika Love website"

# Add your remote and push
git remote add origin https://github.com/YOUR_USERNAME/mushikashika-love.git
git branch -M main
git push -u origin main
```

---

## Deploy to Vercel

```bash
npx vercel
```

Vercel reads `.node-version` automatically and sets Node 22. No extra config needed.

---

## Security Notes

- **Next.js 16.2.9** is fully patched against CVE-2025-66478 (RSC RCE, CVSS 10.0) and all subsequent advisories through December 2025.
- **React 19.2.7** is patched against the upstream CVE-2025-55182 that caused the RSC vulnerability.
- The `"overrides"` block in `package.json` forces all transitive dependencies to use non-deprecated versions of `rimraf`, `glob`, and `inflight`, eliminating all `npm warn deprecated` messages.

---

## Customisation

- **Colors** → `lib/tokens.ts` and `tailwind.config.ts`
- **Film data** → `lib/data.ts`
- **Animations** → Each component uses Framer Motion directly
- **Fonts** → `app/layout.tsx` (Next/Font + Google Fonts)

---

**© 2026 MUSHIKASHIKA LOVE. All Rights Reserved.**
