# MUSHIKASHIKA LOVE — Official Website

**Written & Directed by Andrew Pekahia**
A Zimbabwean Romantic Thriller set in Harare · SSADZA Fund Grant Recipient

---

## Stack

- **Next.js 14** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — custom glassmorphism utilities
- **Framer Motion** — all animations
- **Lenis** — smooth scrolling

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
mushikashika-love/
├── app/
│   ├── layout.tsx        # Root layout with Poppins font, metadata
│   ├── page.tsx          # Home page — composes all sections
│   └── globals.css       # Tailwind base + glassmorphism utilities
├── components/
│   ├── Nav.tsx           # Sticky nav with scroll-aware glassmorphism
│   ├── Hero.tsx          # Full-viewport hero with city lights + parallax
│   ├── Synopsis.tsx      # Film synopsis glass card
│   ├── Cast.tsx          # Character grid cards with hover glow
│   ├── Gallery.tsx       # Scene masonry grid with lightbox hover
│   ├── Trailer.tsx       # Trailer placeholder section
│   ├── Locations.tsx     # Harare locations grid
│   ├── Press.tsx         # Quote cards
│   ├── Tech.tsx          # WE MOVE app + necklace tech showcase
│   ├── Production.tsx    # SSADZA Fund badge
│   ├── Footer.tsx        # Skyline silhouette + links
│   ├── Reveal.tsx        # Scroll-triggered fade-up animation wrapper
│   ├── SectionLabel.tsx  # Gold underline section eyebrow
│   └── SmoothScroll.tsx  # Lenis smooth scroll provider
├── lib/
│   ├── tokens.ts         # Design tokens (colors, glassStyle helper)
│   └── data.ts           # All film data (cast, scenes, locations, quotes)
├── public/
│   ├── images/           # Add film stills and production images here
│   └── fonts/            # Optional: self-host Poppins here
└── ...config files
```

---

## Adding Film Images

Place images in `public/images/` and reference them using Next.js `<Image>`:

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

Replace the placeholder gradient blocks in `Gallery.tsx` and `Hero.tsx` with real stills.

---

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### GitHub Pages / Static Export
```bash
npm run build
# output goes to .next/ or set output: 'export' in next.config.ts for static
```

### Environment Variables
Copy `.env.local` and fill in your values. Never commit this file.

---

## Customisation

- **Colors** → `lib/tokens.ts` and `tailwind.config.ts`
- **Film data** → `lib/data.ts`
- **Animations** → Each component uses Framer Motion directly
- **Fonts** → `app/layout.tsx` (Next/Font + Google Fonts)

---

**© 2026 MUSHIKASHIKA LOVE. All Rights Reserved.**
