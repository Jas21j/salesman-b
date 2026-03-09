# Salesman Solutions — Implementation Reference

**Version:** 2.0 (Next.js 14 Full Build)
**Built:** March 2025
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## Project Synopsis

Salesman Solutions is a global venture platform that builds operational systems for service-sector businesses. The brand operates through two proprietary platforms:

- **ASSAN** — Applied Systems for Service and Network Operations. Handles physical deployment: property operations, hospitality, logistics, labor.
- **IRIS** — Intelligent Resource Infrastructure Systems. Handles digital deployment: infrastructure, data architecture, embedded intelligence, optimization.

The website positions the brand as a system-first enterprise partner — not a consultant, not a freelancer. The entire site conveys operational rigor, editorial restraint, and global reach.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + inline styles for precision control |
| Animation | Framer Motion 11 |
| Fonts | Outfit (display, 300–800) + Inter (body, 300–600) via `next/font/google` |
| Images | `next/image` — all assets served from `/public/` |
| Deployment | Static export ready (`○` routes) + SSG (`●` case studies) |
| Contact | Client-side `mailto:` — no backend, no server-side code |

---

## Design System

### Brand Colors (locked — no deviation)

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#2B3A67` | Primary text, card backgrounds |
| `navy-deep` | `#1E2A4A` | Dark sections, hero backgrounds |
| `navy-light` | `#3D4F7C` | Secondary text, muted elements |
| `charcoal` | `#1A1A2E` | Body default color |
| `gold` | `#C9A96E` | SOLE accent color — eyebrows, CTAs, borders, highlights |
| `gold-light` | `#D4B87E` | Gold hover states |
| `gold-dark` | `#B8985D` | Gold pressed states |
| `sand` | `#E8DCC8` | Pill text on dark backgrounds |
| `sand-light` | `#F5F0E8` | Statistics section background |
| `cream` | `#FDFBF7` | Light section backgrounds |

### Typography

| Role | Font | Weights |
|---|---|---|
| Display (headlines) | Outfit | 300, 400, 500, 600, 700, 800 |
| Body (copy, labels) | Inter | 300, 400, 500, 600 |

Applied via CSS variables: `--font-outfit`, `--font-inter`
Tailwind classes: `font-display`, `font-body`

### Card Rules

| Card Type | Usage |
|---|---|
| Navy card with 3px gold top border | All content cards (ProofOfSystem, Insights, platform capabilities) |
| Glass dark (`rgba(255,255,255,0.04)` + `backdrop-blur`) | ONLY: navigation pill, Doctrine section cards |

**Rule:** No glass on content cards. Navy fill only.

### Platform Color Logic

- **IRIS** → gold/sand accents, intelligence framing
- **ASSAN** → navy-deep backgrounds, operations framing
- Gold is the universal accent — applies to both

---

## Route Inventory

| Route | Type | Description |
|---|---|---|
| `/` | Static | Home page — all 10 sections |
| `/about` | Static | Founder timeline, mission, platform philosophy |
| `/solutions` | Static | Two-platform overview with IRIS + ASSAN intro |
| `/solutions/iris` | Static | IRIS platform deep-dive, capability cards |
| `/solutions/assan` | Static | ASSAN platform deep-dive, capability cards |
| `/case-studies` | Static | Filterable grid (All / ASSAN / IRIS) |
| `/case-studies/first-mile` | SSG | Operation First Mile detail page |
| `/case-studies/livebetter` | SSG | Operation LiveBetter detail page |
| `/case-studies/saatva` | SSG | Operation Saatva detail page |
| `/case-studies/miss-scholastic-america` | SSG | Operation Miss Scholastic America detail page |
| `/insights` | Static | 4 research articles — research-grounded operational intelligence |
| `/contact` | Static | Contact form (mailto) + founder block |
| `/legal/terms` | Static | Terms of Service |
| `/legal/privacy` | Static | Privacy Policy |

---

## Component Tree

```
src/
├── app/
│   ├── layout.tsx                    # Root layout: fonts, Navigation, Footer
│   ├── globals.css                   # Global utilities: glass-dark, navy-card, grain-overlay, progress-rail
│   ├── page.tsx                      # Home — composes all 10 home sections
│   ├── about/page.tsx                # About page
│   ├── solutions/
│   │   ├── page.tsx                  # Solutions overview
│   │   ├── iris/page.tsx             # IRIS platform
│   │   └── assan/page.tsx            # ASSAN platform
│   ├── case-studies/
│   │   ├── page.tsx                  # Case studies list with filter
│   │   └── [slug]/
│   │       ├── page.tsx              # Server component — generateStaticParams
│   │       └── CaseStudyContent.tsx  # Client component — scroll animation, content render
│   ├── insights/page.tsx             # Research articles
│   ├── contact/page.tsx              # Contact form
│   └── legal/
│       ├── terms/page.tsx
│       └── privacy/page.tsx
│
├── components/
│   ├── Navigation.tsx                # Glass pill nav, scroll state, mobile drawer
│   ├── Footer.tsx                    # Brand footer with nav links
│   ├── ui/
│   │   ├── SectionHeader.tsx         # Reusable eyebrow + headline + sub
│   │   ├── NavyCard.tsx              # Navy card with gold top border + hover lift
│   │   └── AnimatedChart.tsx         # SVG arc / ring / bar charts with useInView
│   └── home/
│       ├── Hero.tsx                  # Full-viewport hero, rotating subtitles, atmospheric word
│       ├── CostOfComplexity.tsx      # 4 animated chart cards (70%, <1.5%, 60%, $1.6T)
│       ├── PlatformArchitecture.tsx  # IRIS + ASSAN side-by-side cards
│       ├── DeploymentDomains.tsx     # Tab system, auto-advance, AnimatePresence
│       ├── Doctrine.tsx              # 6-step glass-dark cards with gold progress bars
│       ├── ProofOfSystem.tsx         # 4 operation navy cards
│       ├── FounderBlock.tsx          # Editorial founder section
│       ├── Statistics.tsx            # Animated chart stats mosaic grid
│       ├── Insights.tsx              # 3 research insight cards
│       └── CTABand.tsx               # Full-bleed CTA with IRIS/ASSAN watermarks
│
└── data/
    └── caseStudies.ts                # TypeScript data for all 4 operations
```

---

## Home Page Section Order

1. `Hero` — full viewport, rotating subtitle, atmospheric background word
2. `CostOfComplexity` — cream bg, 4 animated SVG chart cards
3. `PlatformArchitecture` — navy-deep bg, IRIS + ASSAN intro cards
4. `DeploymentDomains` — navy-deep bg, tab system (ASSAN / IRIS domains)
5. `Doctrine` — navy-deep bg, 6 glass-dark step cards
6. `ProofOfSystem` — white bg, 4 operation navy cards
7. `FounderBlock` — white bg, editorial founder image + bio
8. `Statistics` — sand-light bg, animated chart mosaic
9. `Insights` — white bg, 3 research cards
10. `CTABand` — navy-deep bg, full-bleed CTA

---

## Asset Inventory

| File | Location | Usage |
|---|---|---|
| `logo.png` | `/public/logo.png` | Navigation logo — NO border-radius, NO background container |
| `founderheadshot.png` | `/public/founderheadshot.png` | Founder sections — editorial, background-removed |
| `landingpage.png` | `/public/landingpage.png` | Hero background image |

---

## Data — Case Studies

File: `src/data/caseStudies.ts`

| Slug | Platform | Period |
|---|---|---|
| `first-mile` | ASSAN | 2021–2022 |
| `livebetter` | ASSAN | 2022–2023 |
| `saatva` | ASSAN | 2023 |
| `miss-scholastic-america` | IRIS | 2023–2024 |

Each case study includes: `slug`, `platform`, `platformLabel`, `name`, `period`, `tagline`, `description`, `metrics[]`, `sections{}` (overview/problem/approach/execution/outcomes/lessons), `pullQuote`, `pullQuoteAttrib`.

---

## Security Notes

- No `dangerouslySetInnerHTML` used anywhere
- No `eval()` or dynamic code execution
- All external links use `rel="noopener noreferrer"`
- Contact form uses `encodeURIComponent` on all user input before mailto construction — no injection vector
- No hardcoded API keys or secrets
- No server-side code — all static/SSG
- `next/image` used for all images — automatic optimization, no remote domains needed

---

## Key Technical Decisions

### Client/Server Component Split
- `generateStaticParams()` cannot coexist with `"use client"` in Next.js 14
- Solution: `[slug]/page.tsx` is a Server Component that renders `CaseStudyContent.tsx` (Client Component)
- Pattern applied to any dynamic route needing both SSG and client-side hooks

### Navigation Scroll State
- `useEffect` + `window.addEventListener('scroll')` with `{ passive: true }`
- Framer Motion `animate` prop on `motion.header` — transitions background + borderColor
- `backdropFilter` in `style` prop (static, not animated — browser handles it)

### Animated Charts
- `stroke-dasharray` / `stroke-dashoffset` technique for arc and ring charts
- Width animation (`scaleX` transform) for bar charts
- All triggered by Framer Motion `useInView` with `once: true`

### DeploymentDomains Tab System
- `setInterval` auto-advances every 5s
- Interval resets on manual tab click (prevents jarring mid-cycle jumps)
- `AnimatePresence` with `mode="wait"` for clean cross-fade between panels

---

## Build Output

```
Route (app)                                  Size     First Load JS
┌ ○ /                                        15.4 kB         154 kB
├ ○ /about                                   3.32 kB         142 kB
├ ○ /case-studies                            7.57 kB         141 kB
├ ● /case-studies/[slug]                     9.5 kB          143 kB
│   ├ /case-studies/first-mile
│   ├ /case-studies/livebetter
│   ├ /case-studies/saatva
│   └ /case-studies/miss-scholastic-america
├ ○ /contact                                 2.74 kB         132 kB
├ ○ /insights                                3.96 kB         137 kB
├ ○ /legal/privacy                           178 B           96.1 kB
├ ○ /legal/terms                             178 B           96.1 kB
├ ○ /solutions                               2.09 kB         135 kB
├ ○ /solutions/assan                         2.7 kB          136 kB
└ ○ /solutions/iris                          2.71 kB         136 kB
```

All 17 pages generated successfully. Zero TypeScript errors.

---

## Development

```bash
npm run dev     # localhost:3000
npm run build   # production build
npm run start   # serve production build
```

---

## Phase 2 Handoff Notes (Cursor / Future Development)

- **Contact form backend**: Replace `mailto:` with a serverless function (Resend, Vercel Edge, or similar). The form already captures: `name`, `email`, `category`, `message`.
- **Insights live feed**: `/insights/page.tsx` is currently static. Wire to a CMS (Sanity, Contentlayer) or RSS feed in Phase 2.
- **Case study expansion**: Add new slugs to `src/data/caseStudies.ts` — `generateStaticParams()` picks them up automatically.
- **Analytics**: Add `next/third-parties` Google Analytics or Plausible — zero config needed, just wrap in `layout.tsx`.
- **OG images**: Add `opengraph-image.tsx` per route for social sharing cards.
- **i18n**: Next.js 14 App Router supports `i18n` via `next-intl` — global markets can be added without structural refactor.
