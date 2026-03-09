# CLAUDE.md — Salesman Solutions Website
## Project Intelligence File — Read This Before Touching Anything

---

> [!IMPORTANT]
> ## 🔒 PROJECT LIFECYCLE MANAGER — MANDATORY WORKFLOW
>
> The **`project-lifecycle-manager`** skill is installed and governs ALL work on this project.
> It **must automatically trigger before any new changes** are made. No agent may skip, reorder,
> or merge phases. Every phase must be completed in full before proceeding to the next.
>
> ---
>
> ### Phase 1 — Design & Visuals
> **Goal:** Establish visual identity, UI/UX, and core aesthetics.
> **Skills to invoke:** `frontend-design` · `canvas-design` · `theme-factory` · `algorithmic-art`
>
> ### Phase 2 — Document & File Processing
> **Goal:** Handle all data, assets, and document formatting required for the project.
> **Skills to invoke:** `docx` · `xlsx` · `pdf` · `pptx`
>
> ### Phase 3 — Development & API
> **Goal:** Build functional frontend/backend architecture, state management, API services, and testing.
> **Skills to invoke:** `web-artifacts-builder` · `claude-api` · `mcp-builder` · `webapp-testing`
>
> ### Phase 4 — Writing & Communications
> **Goal:** Draft technical documentation, internal communications, and finalized specs.
> **Skills to invoke:** `doc-coauthoring` · `internal-comms`
>
> ---
>
> ### ⚠️ THE REVIEWER PROCESS — NON-NEGOTIABLE
>
> **After EVERY phase**, the agent MUST:
> 1. **Stop all execution** — do not begin the next phase
> 2. **Self-validate** that all objectives of the current phase are 100% functional and complete
> 3. **Explicitly present a phase completion summary** to the user
> 4. **Request explicit user approval** before proceeding to the next phase
>
> No phase transition is permitted without a confirmed, affirmative response from the user.
>
> ---
>
> **This section must never be overwritten, moved, or removed. It is pinned to the top of this file permanently.**

**Version:** March 2026  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Repo:** `jas21j/salesman-b` (GitHub)

---

## 1. PURPOSE OF THIS WEBSITE

This is the official Salesman Solutions corporate website. It is the primary public-facing representation of the brand. Its sole purpose is to communicate Salesman Solutions' identity as a **global venture platform** that builds operational systems improving industries.

**Within three seconds of landing, a visitor must understand:**
> Salesman Solutions is a global venture platform that builds operational systems that improve industries.

---

## 2. BRAND POSITIONING

- **Salesman Solutions** is a **global brand**. No geographic scope limitations. Geographic references appear only as proof of deployment, founder history, or case-study context — never as a ceiling.  
- **Tone:** Professional. Grounded. Confident. Global. Never salesy. Never over-explained.  
- **Partner language only** — never use "vendor", "service list", or task-oriented framing.  
- **Preferred vocabulary:** systems · platforms · operations · optimizations · infrastructure · deployment · intelligence · architecture

---

## 3. IRIS + ASSAN — PLATFORM ARCHITECTURE

The two-platform structure is the architectural backbone of the entire site.

### IRIS — Intelligent Resource Infrastructure Systems
- Role: **Digital infrastructure and intelligence platform**
- Focus: embedded system development · dashboards · analytics · automation · digital optimization · operational intelligence
- Case work label: **OPTIMIZATIONS**
- Color association: **Gold / sand**

### ASSAN — Applied Systems for Service and Network Operations
- Role: **Operational systems and deployment platform**
- Focus: property · logistics · hospitality · labor · field execution · real-world operational deployment
- Case work label: **OPERATIONS**
- Color association: **Navy**

> **Platform Color Logic:** Gold = IRIS (intelligence, digital). Navy = ASSAN (operational, real-world). This governs platform labels, diagrams, and capability tags — not a mandate to repaint every element, but a guide for intentional UI moments.

---

## 4. APPROVED NAVIGATION STRUCTURE

```
Home · About · Insights · Solutions · Case Studies · Contact
```

- Navigation is a **glass pill** (fixed, centered, floating above content)
- On scroll: background transitions from `rgba(255,255,255,0.08)` to `rgba(30,42,74,0.88)`
- Mobile: hamburger → slide-in drawer (navy-deep background)
- Nav links have **gold underline hover animation**
- Logo is `logo.png` (transparent) — **never apply a background container to the logo**

---

## 5. CURRENT PAGE STRUCTURE

| Route | Purpose |
|---|---|
| `/` | Home — all 10 sections |
| `/about` | Founder story, timeline, mission |
| `/solutions` | Overview of the two-platform architecture |
| `/solutions/iris` | IRIS platform detail page |
| `/solutions/assan` | ASSAN platform detail page |
| `/case-studies` | Case study index with filter tabs |
| `/case-studies/[slug]` | Individual operation detail pages |
| `/insights` | Research & Insights (operational intelligence) — live news + curated articles |
| `/contact` | Contact form and founder editorial |
| `/legal/terms` | Terms of Service |
| `/legal/privacy` | Privacy Policy |

### Home Page Section Order

1. **Hero** — Full-viewport, `landingpage.png` background, animated entry
2. **NewsTickerSection** — "INTELLIGENCE FEED" — Industry signals card carousel on navy-deep background
3. **CostOfComplexity** — "WHY SYSTEMS MATTER" — 4 data cards on cream background
4. **PlatformArchitecture** — "PLATFORM ARCHITECTURE" — IRIS + ASSAN cards
5. **DeploymentDomains** — Tab-switching panel, 5-second auto-advance
6. **Doctrine** — "THE METHOD" — 6-step doctrine glass cards
7. **ProofOfSystem** — "CODED WORK" — 4 operation navy cards
8. **FounderBlock** — Founder editorial on cream background
9. **Statistics** — "SYSTEMS IN PRACTICE" — 6 system-outcome metrics on `work-measured.webp` background
10. **Insights** — "OPERATIONAL INTELLIGENCE" — 3 research insight cards
11. **CTABand** — "The system starts with a conversation." — CTA section

---

## 6. DESIGN SYSTEM — DO NOT ALTER WITHOUT APPROVAL

The design system is locked from the live site. Every element below is intentional.

### Color Tokens

```css
--navy:        #2B3A67   /* Primary — headlines, cards, dominant backgrounds */
--navy-deep:   #1E2A4A   /* Hero, CTA sections, footer overlay */
--charcoal:    #1A1A2E   /* Footer background */
--gold:        #C9A96E   /* PRIMARY ACCENT — all CTAs, stats, arrows, rule lines */
--gold-light:  #D4B87E
--gold-dark:   #B8985D
--sand:        #E8DCC8   /* Supporting text, taglines */
--sand-light:  #F5F0E8   /* Section backgrounds */
--cream:       #FDFBF7   /* Lightest background */
```

> **Gold (`#C9A96E`) is the sole accent color.** It governs all CTAs, stat highlights, icon fills, rule lines, progress bars, and hover states. Sand and cream are background values only — not accents.

### Section Background Rhythm

`Navy deep → Cream → White → Navy → White → White → Cream → Navy overlay (image) → White → Navy deep`

---

## 7. TYPOGRAPHY SYSTEM — CRITICAL: DO NOT CHANGE

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Headlines | **Outfit** | 400–800 | Letter-spacing −0.03 to −0.04em |
| Body / UI | **Inter** | 300–600 | Line-height 1.6–1.8 |

**This applies consistently across the entire website including the admin dashboard.** Outfit for display headlines, Inter for body and interface text. No exceptions.

**Loaded via:** `next/font/google` in `layout.tsx` (preload: true)  
**CSS variables:** `--font-outfit`, `--font-inter`  
**Tailwind classes:** `font-display` (Outfit), `font-body` (Inter)  
**Tailwind config:** `fontFamily.display` maps to `var(--font-outfit)`, `fontFamily.body` maps to `var(--font-inter)`

**Scale:**
- H1: `clamp(3rem, 7.5vw, 7.5rem)` · Outfit 800wt
- H2: `clamp(1.75rem, 3.5vw, 3rem)` · Outfit 700wt
- Body: 14–17px · Inter 400wt
- Eyebrows/Labels: 11–12px · Inter 600wt · UPPERCASE · +tracking

> **⚠️ PROHIBITED FONTS:** Satoshi, Cormorant Garamond, DM Sans, Roboto, Arial, Space Grotesk, any system font substitutes. Do not introduce new fonts or deviate from Outfit + Inter casually.

> **Typography consistency is critical.** Never apply `fontStyle: italic` or deviate from the font hierarchy without explicit approval. Every supporting line, tagline, and label must use `font-body` or `font-display` className. This rule applies to the public site AND the admin dashboard.

---

## 8. CARD DESIGN SYSTEM

### Standard Navy Cards
```
Background:     --navy or --navy-deep
Border-top:     3px solid --gold
Border-radius:  12px
Shadow:         0 4px 24px rgba(0,0,0,0.15)
CSS class:      .navy-card or .navy-card-deep
```

Ghost numerals behind content: Outfit 800, ~15% gold opacity, absolute positioned top-right.

### Glass Treatment — RESERVED USE ONLY
- **Navigation pill** — `rgba(255,255,255,0.08)` + backdrop-filter blur
- **Doctrine/6-step cards** — `.glass-dark` class, `rgba(255,255,255,0.04)` + backdrop blur
- **Statistics section stat cards** — Glass on top of the `work-measured.webp` background image

> **Do not apply glass universally.** The established card system is navy-based. Glass is reserved for the three contexts above only.

---

## 9. STRUCTURAL INTEGRITY REQUIREMENTS

The website has reached an excellent visual and structural state as of March 2026. All future work should be **refinement-focused, not redesign-focused.**

**Things future agents must NOT change without explicit instruction:**
- The color system (any token, any value)  
- The font system (Outfit + Inter only)  
- The section order on the homepage  
- The navigation structure or pill design  
- The logo treatment (transparent, no background container ever)  
- The founder image editorial format (unboxed, background-removed, no ornamental container)  
- The two-platform IRIS/ASSAN architecture language  
- Card patterns (navy cards + gold top border for standard; glass for approved exceptions)  
- The six-step doctrine framework and its glassmorphism card treatment  
- The section background rhythm  

---

## 10. KEY TECHNICAL ARCHITECTURE

### File Structure
```
src/
  app/
    layout.tsx          # Root layout — fonts, Navigation, Footer, anti-FOUC script
    globals.css         # Global styles, reset, design tokens, mobile utilities
    page.tsx            # Home page — assembles all 10 sections
    about/page.tsx      # About page
    solutions/page.tsx  # Solutions index
    solutions/iris/     # IRIS platform page
    solutions/assan/    # ASSAN platform page
    case-studies/       # Case study index + [slug] detail pages
    insights/           # Research page
    contact/            # Contact page
    legal/              # Terms + Privacy
  components/
    Navigation.tsx      # Glass pill nav + mobile drawer
    Footer.tsx          # Footer with brand, nav, contact, legal
    home/               # 10 home section components
    ui/
      AnimatedChart.tsx  # SVG arc/ring/bar chart (scroll-triggered via useInView)
      NavyCard.tsx       # Reusable navy card wrapper
      SectionHeader.tsx  # Reusable section eyebrow + h2
  hooks/
    useMounted.ts       # FOUC prevention hook — critical, do not remove
  data/                 # Static data files for case studies, operations
public/
  logo.png              # Site logo (transparent, no background container)
  founderheadshot.png   # Founder photo (background removed, editorial format)
  landingpage.png       # Hero section background
  work-measured.webp    # Statistics/Systems in Practice section background
  platform-architecture-bg.png
  deployment-domain-bg.jpg
  about-hero.jpg
  solutions-hero.jpg
  case-studies-hero.jpg
  contact-hero.png
  operational-intelligence.webp
  miss-scholastic.png
  saatva.jpg
```

### Anti-FOUC System (Critical)
The site uses a `useMounted` hook (`src/hooks/useMounted.ts`) to prevent Framer Motion's `opacity:0` initial states from hiding text before JS hydration.

**Pattern:**
```tsx
const mounted = useMounted()
// ...
initial={mounted ? { opacity: 0, y: 20 } : false}
```

`initial={false}` tells Framer Motion to start at the final animated state — so SSR renders fully visible. After hydration, `mounted` becomes true and animations play normally. **This must be preserved on all components that use immediate `animate=` (not whileInView).**

### Inline Anti-FOUC Script (layout.tsx)
Adds `js-loading` class to `<html>` on initial load, removed after DOMContentLoaded. CSS in `globals.css` suppresses transitions and forces opacity:1 during this phase.

### Framer Motion Usage Rules
- **Scroll-triggered:** Use `whileInView` + `viewport={{ once: true }}` — safe, no FOUC risk
- **Immediate animations (Hero, etc.):** Must use `useMounted` pattern
- **AnimatePresence cross-fades:** Must render static fallback before `mounted = true`

---

## 11. MOBILE RESPONSIVENESS SYSTEM

Mobile styles are in `globals.css` under the "COMPREHENSIVE MOBILE RESPONSIVENESS" section. Key utility classes:

| Class | Purpose |
|---|---|
| `.cta-group` | CTA buttons stack vertically on ≤480px |
| `.hero-section-pad` | Correct padding to clear nav pill on mobile |
| `.stats-mosaic` | 3-col → 2-col on ≤640px → 1-col on ≤380px |
| `.flex-col-on-mobile` | Grid → single column on ≤640px |
| `.platform-cards` | IRIS/ASSAN cards stack on ≤768px |
| `.insights-header-image` | Shorter on mobile |

---

## 12. ASSETS INVENTORY

### In Use (do not remove)
- `public/logo.png` — Nav + Footer logo
- `public/founderheadshot.png` — Founder section
- `public/landingpage.png` — Hero background
- `public/work-measured.webp` — Statistics section background
- `public/platform-architecture-bg.png` — Platform Architecture section
- `public/deployment-domain-bg.jpg` — Deployment Domains section
- `public/about-hero.jpg` — About page hero
- `public/solutions-hero.jpg` — Solutions page hero
- `public/case-studies-hero.jpg` — Case Studies page hero
- `public/contact-hero.png` — Contact page hero
- `public/operational-intelligence.webp` — Insights section header image
- `public/miss-scholastic.png` — Miss Scholastic case study
- `public/saatva.jpg` — Saatva case study

### Resources & Digital Assets (do not remove)
- `Resources/` — Development reference files, build prompts, brand materials
- `Digital Assets/` — Source images and brand assets folder

---

## 13. IMPORTANT CONSTRAINTS FOR FUTURE AGENTS

1. **Do not redesign — refine.** The site is in an excellent visual state. Future work = polish, not rebuild.
2. **Outfit for all display/headlines. Inter for all body and UI. No exceptions.**
3. **Gold (`#C9A96E`) is the only accent color.** Do not introduce any other accent color.
4. **Navy cards with gold top borders for content cards.** Glass only for nav pill and doctrine cards.
5. **Do not alter the six-step doctrine framework** — it is a core brand communication tool.
6. **Logo: transparent, no background container ever.**
7. **Founder image: editorial, unboxed, background-removed format — this is the standard.**
8. **Geographic references are context, not scope.** Never frame the brand as regional.
9. **The `useMounted` hook is critical** — do not remove it or skip it when adding new animated components.
10. **Do not add new dependencies** without confirming they are necessary. The current stack (Next.js 14, Framer Motion, Tailwind) handles everything needed.
11. **The `Resources/` and `Digital Assets/` folders must not be deleted** — they contain active brand reference materials.
12. **Do not add `styled-jsx`** — use Tailwind classes + inline styles only, or add to `globals.css`.
13. **Admin shell is isolated** — `/admin` routes use their own layout. Never import `Navigation.tsx` or `Footer.tsx` inside any admin component.
14. **Do not alter publish-state logic** — `draft | scheduled | live | archived` states govern all content visibility. Never return non-live items from public API routes.
15. **Do not expose `SUPABASE_SERVICE_ROLE_KEY` to the client** — only use it in Route Handlers and Server Components via `createServiceClient()`. Never prefix it `NEXT_PUBLIC_`.
16. **`REVALIDATE_SECRET` is for external webhook use only** — admin Client Components call `/api/admin/revalidate` (session-authenticated), never `/api/revalidate` directly.
17. **Do not add `dangerouslySetInnerHTML` on any user-controlled content field** — all body/summary fields are rendered as plain text or via controlled React children.

---

## 14. PHASE 2 — ADMIN + CONTENT INFRASTRUCTURE (March 2026)

Phase 2 is complete. It added the operational backbone: private admin control layer, Supabase-backed content architecture, live news-powered Insights page, and GitHub OAuth authentication. The public design system was not altered.

### What Phase 2 Added

| Feature | Status |
|---|---|
| GitHub OAuth admin auth (jas21j only) | ✅ Live |
| `/admin` private shell with 7 sections | ✅ Live |
| Supabase database (7 tables) | ✅ Schema written |
| Publish-state system (draft/scheduled/live/archived) | ✅ Live |
| Featured content toggle | ✅ Live |
| Live insights page (news API + curated + fallback) | ✅ Live |
| Homepage insights preview (ISR, 6hr) | ✅ Live |
| Route revalidation after admin publish | ✅ Live |
| Media library (Supabase Storage) | ✅ Live |
| Site settings/section visibility controls | ✅ Live |

---

## 15. ADMIN SYSTEM

### URL and Access
- Admin URL: `/admin`
- Authentication: GitHub OAuth via Supabase Auth
- Authorized user: GitHub username `jas21j` only
- Auth flow: `/admin/login` → GitHub OAuth → `/api/auth/callback` → validates username → `/admin` or `/admin/unauthorized`

### Admin Sections

| Route | Purpose |
|---|---|
| `/admin` | Dashboard — content counts, recent activity feed |
| `/admin/insights` | Full CRUD for curated insight entries |
| `/admin/solutions` | CRUD for solution records (status/featured/sort_order) |
| `/admin/case-studies` | Status/featured/sort_order overlay on static case study data |
| `/admin/content` | Site section visibility toggles + settings key/value editor |
| `/admin/media` | File upload to Supabase Storage, asset grid view |
| `/admin/settings` | Key/value editor for contact info, SEO defaults, social links |

### Auth Architecture
- `middleware.ts` (project root): Intercepts all `/admin/*` routes, refreshes Supabase session, redirects unauthenticated requests to `/admin/login`
- `src/lib/auth/utils.ts`: `isAuthorizedAdmin(supabase)` validates `user.user_metadata.user_name === 'jas21j'`
- `src/app/admin/(protected)/layout.tsx`: Validates `isAuthorizedAdmin` as a layout-level guard — all protected routes share this auth check
- `src/app/admin/login/page.tsx`: Client-side OAuth via `@supabase/ssr` browser client — handles redirect to GitHub, error states, and loading feedback
- `src/components/LayoutWrapper.tsx`: Client component wrapping root layout — conditionally hides public Navigation + Footer on `/admin` routes
- Admin login/unauthorized pages bypass middleware to avoid redirect loops

### Auth Flow (Corrected March 2026)
1. User visits `/admin` → middleware checks session → no session → redirects to `/admin/login`
2. Login page is a client component — calls `signInWithOAuth({ provider: 'github' })` → redirects browser to GitHub
3. GitHub OAuth returns to `/api/auth/callback` → exchanges code for session → validates username → redirects to `/admin`
4. `(protected)/layout.tsx` runs `isAuthorizedAdmin` → authorized → renders dashboard shell
5. Logout: AdminTopBar calls `supabase.auth.signOut()` → redirects to `/admin/login`

### Admin UI Style
The admin is a separate visual shell — dark utility design:
- Background: `#0F1422` (outer), `#1A1A2E` (panels/modals)
- Accent: `#C9A96E` (gold — consistent with brand)
- Typography: Outfit for headings, Inter for body/interface (consistent with public site)
- No public Navigation.tsx, no Footer.tsx (hidden via LayoutWrapper)
- No section animations

---

## 16. SUPABASE ARCHITECTURE

### Project
- URL: `https://jctwnodoqnoeuscupokf.supabase.co`
- Storage bucket: `media` (for admin-uploaded files)
- Auth provider: GitHub OAuth

### Database Tables

| Table | Purpose |
|---|---|
| `insights` | Admin-curated insight articles with publish states |
| `solutions` | Solution record metadata (status/featured/sort_order overlays) |
| `case_studies` | Case study status/featured/sort_order overlays (narrative stays in code) |
| `site_settings` | Key/value store for contact info, SEO defaults, social links |
| `site_sections` | Visibility + sort_order toggles per homepage section |
| `media_assets` | File upload records (filename, storage_path, alt_text, category) |
| `admin_logs` | Append-only audit log of all admin actions |

### Schema File
Full schema is at `supabase/migrations/20260309000001_initial_schema.sql`.
Must be applied manually via Supabase Dashboard → SQL Editor (requires service role key).

### Row Level Security
- All public data access is via service client in Server Components/Route Handlers
- Public read queries filter `.eq('status', 'live')` — no direct client queries to Supabase from the browser on public pages
- Admin operations use `createServiceClient()` (service role, bypasses RLS)

### Client Utilities
- `src/lib/supabase/client.ts` — browser client (admin UI interactivity)
- `src/lib/supabase/server.ts` — server client with cookies + `createServiceClient()` export
- `src/lib/supabase/middleware.ts` — middleware session refresh client
- `src/lib/db/queries.ts` — all typed DB query functions
- `src/lib/db/types.ts` — TypeScript types for all DB entities

---

## 17. CONTENT GOVERNANCE MODEL

### Content-Governed vs Code-Governed

| Content Type | Governance | Notes |
|---|---|---|
| Insight articles | **Database** (`insights` table) | Full CRUD via admin |
| Solution records | **Hybrid** | Status/featured from DB; narrative content in code |
| Case studies | **Hybrid** | Status/featured/sort from DB; all story content in `src/data/caseStudies.ts` |
| Homepage section visibility | **Database** (`site_sections` table) | Toggled via `/admin/content` |
| Site settings (contact, SEO) | **Database** (`site_settings` table) | Edited via `/admin/settings` |
| Design system, components, layout | **Code only** | Never governed by DB |

### Publish-State System

All DB content tables use a `status` column with four values:

| Status | Public visibility | Admin visibility |
|---|---|---|
| `draft` | Hidden | Visible |
| `scheduled` | Hidden (Phase 2: manual publish only) | Visible |
| `live` | Visible | Visible |
| `archived` | Hidden | Visible |

Public queries always filter: `.eq('status', 'live')`
Featured queries additionally filter: `.eq('featured', true).eq('status', 'live')`

### Featured Content Logic
- `featured: true` items appear in homepage preview sections and at the top of their respective pages
- Only `featured + live` items are returned for homepage previews
- Max 3 items returned for homepage Insights preview

---

## 18. INSIGHTS SYSTEM

### Architecture (3-tier fallback)
1. **Curated** — Live + featured items from Supabase `insights` table
2. **News API** — TheNewsAPI (primary) → GNews (fallback) via server-only proxy
3. **Static fallback** — `src/app/insights/fallback.ts` (`FALLBACK_INSIGHTS`) — original 4 articles preserved exactly

If tiers 1 and 2 both return empty, tier 3 is displayed automatically.

### News API Layer
- `src/lib/news/fetcher.ts` — `fetchNewsArticles(limit)`: calls TheNewsAPI, falls back to GNews
- `src/lib/news/normalize.ts` — normalizes both API shapes to `NewsArticle` type
- `src/lib/news/filter.ts` — keyword relevance scoring, title deduplication, returns top N
- API keys are server-only (non-`NEXT_PUBLIC_` env vars) — never exposed to browser

### ISR Cache
- `/insights` page: `export const revalidate = 3600` (1 hour)
- Homepage: `export const revalidate = 21600` (6 hours)
- Admin publish actions call `revalidatePath()` to flush ISR cache immediately

### Server/Client Split (insights page)
- `src/app/insights/page.tsx` — Server Component, fetches all data, passes as props
- `src/app/insights/InsightsContent.tsx` — Client Component, Framer Motion animations
- Same pattern as `case-studies/[slug]/page.tsx` + `CaseStudyContent.tsx`

---

## 19. REVALIDATION SYSTEM

### Two Revalidation Endpoints

| Endpoint | Auth method | Used by |
|---|---|---|
| `/api/admin/revalidate` | Supabase session (`isAuthorizedAdmin`) | Admin Client Components after save/publish |
| `/api/revalidate` | `REVALIDATE_SECRET` env var | External webhooks, cron jobs, CI/CD |

### Routes That Support Revalidation
`/` · `/insights` · `/solutions` · `/solutions/iris` · `/solutions/assan` · `/case-studies` · `/case-studies/[slug]`

---

## 20. ENVIRONMENT VARIABLES

### Required (`.env.local` — never committed)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (public, safe for browser) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key — **server only, never NEXT_PUBLIC_** |
| `THE_NEWS_API_TOKEN` | TheNewsAPI token — **server only** |
| `GNEWS_API_KEY` | GNews API key — **server only** |
| `REVALIDATE_SECRET` | Random 32-char string for webhook revalidation |
| `ALLOWED_GITHUB_USERNAME` | `jas21j` — the only authorized admin GitHub username |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` (local) or `https://salesmansolutions.net` (prod) |

### Production (Vercel)
Set all of the above as Vercel Environment Variables. `NEXT_PUBLIC_SITE_URL` must be `https://salesmansolutions.net` in production.

---

## 21. NEW FILE PATHS (Phase 2 + Optimization Pass)

```
middleware.ts                          # Route protection (project root)
netlify.toml                           # Netlify build config (publish: .next)

src/components/
  LayoutWrapper.tsx                    # Conditionally hides Nav/Footer on /admin routes

src/lib/
  supabase/
    client.ts                          # Browser Supabase client
    server.ts                          # Server/Route Handler client + createServiceClient
    middleware.ts                      # Middleware session client
  auth/
    utils.ts                           # isAuthorizedAdmin(), getAdminUser()
  news/
    types.ts                           # NewsArticle, API response types
    normalize.ts                       # Normalize TheNewsAPI + GNews to NewsArticle
    filter.ts                          # Relevance scoring, dedup, top-N filter
    fetcher.ts                         # fetchNewsArticles() with fallback
  db/
    queries.ts                         # All typed DB query functions (public + admin)
    types.ts                           # TypeScript types for all DB tables

src/app/
  admin/
    layout.tsx                         # Admin shell layout (no public nav/footer)
    page.tsx                           # Admin dashboard (counts + logs)
    login/page.tsx                     # GitHub OAuth sign-in screen
    login/AdminLoginClient.tsx         # Client: OAuth button
    unauthorized/page.tsx              # Access denial screen
    unauthorized/AdminUnauthorizedClient.tsx
    insights/page.tsx                  # Insights admin (Server Component)
    insights/InsightsAdmin.tsx         # Insights CRUD (Client Component)
    solutions/page.tsx
    solutions/SolutionsAdmin.tsx
    case-studies/page.tsx
    case-studies/CaseStudiesAdmin.tsx
    content/page.tsx
    content/ContentAdmin.tsx
    media/page.tsx
    media/MediaAdmin.tsx
    settings/page.tsx
    settings/SettingsAdmin.tsx
    components/
      AdminSidebar.tsx                 # Sidebar navigation with active state
      AdminTopBar.tsx                  # Top bar with sign-out
      StatusBadge.tsx                  # Color-coded status chip
  api/
    auth/
      callback/route.ts                # GitHub OAuth callback handler
    admin/
      insights/route.ts                # CRUD: POST/PUT/DELETE
      solutions/route.ts
      case-studies/route.ts
      sections/route.ts                # PUT: toggle section visibility
      settings/route.ts                # PUT: upsert site setting
      media/route.ts                   # POST: upload to Supabase Storage
      revalidate/route.ts              # POST: session-auth revalidation
    revalidate/route.ts                # POST: secret-auth revalidation (external)

src/app/insights/
  page.tsx                             # Server Component — ISR, fetches all data
  InsightsContent.tsx                  # Client Component — Framer Motion rendering
  fallback.ts                          # FALLBACK_INSIGHTS static constant (tier 3)

supabase/
  migrations/
    20260309000001_initial_schema.sql  # Full DB schema — run in Supabase SQL Editor
scripts/
  setup-db.mjs                        # DB setup helper script
```

---

## 22. MANUAL SETUP REQUIRED (One-Time)

The following steps require user action in external dashboards. They cannot be automated by Claude:

1. **Supabase Service Role Key** — Get from Supabase Dashboard → Project Settings → API → Service role secret. Add to `.env.local` as `SUPABASE_SERVICE_ROLE_KEY`.

2. **Run Database Schema** — Go to Supabase Dashboard → SQL Editor → paste contents of `supabase/migrations/20260309000001_initial_schema.sql` → Run.

3. **Create Storage Bucket** — Supabase Dashboard → Storage → New bucket → name: `media`.

4. **Enable GitHub OAuth** — Supabase Dashboard → Authentication → Providers → GitHub → enable → paste Client ID `Iv23ctL23uQVbRvezxhB` and Client Secret.

5. **Configure Supabase Redirect URLs** — Auth → URL Configuration → Site URL: `https://salesmansolutions.net` → Redirect URLs: add both:
   - `http://localhost:3000/api/auth/callback`
   - `https://salesmansolutions.net/api/auth/callback`

6. **GitHub OAuth App** — GitHub → Settings → Developer Settings → OAuth Apps → Salesman Solutions → add both callback URLs above.

7. **Vercel env vars** — Add all variables listed in Section 20 to Vercel project settings before deploying.

---

## 23. PHASE 2 OPTIMIZATION PASS (March 2026)

This optimization pass stabilized the admin auth flow, upgraded the Insights system, enforced typography consistency, fixed mobile viewport behavior, and added Netlify deployment support. No redesign — refinement only.

### What Changed

| Area | Change |
|---|---|
| Admin auth flow | Converted login to client-side OAuth with error handling; added layout-level auth guard in `(protected)/layout.tsx`; eliminated silent failures |
| LayoutWrapper | New `src/components/LayoutWrapper.tsx` — hides public Navigation/Footer on admin routes via `usePathname()` |
| Navigation | Updated to: Home > About > Insights > Solutions > Case Studies > Contact |
| Homepage news section | Replaced simple ticker strip with full card-based Intelligence Feed section on navy-deep background with article images, gold accents, and auto-rotating carousel |
| /insights page | Fixed unauthorized italic usage; typography aligned with design system |
| Typography | Unified Outfit (headlines) + Inter (body) across entire site including admin; fixed Tailwind font config to use CSS variables; removed italic from insights source citations |
| Mobile hero | Fixed white space issue using `100dvh` with `100vh` fallback; tightened mobile padding for full-screen immersion |
| Netlify | Added `netlify.toml` with `publish = ".next"` to resolve build error |
| Admin sub-pages | Simplified auth — layout handles authorization, individual pages focus on data fetching |

### Netlify Deployment Settings

```
Base directory:    (empty — repo root)
Build command:     npm run build
Publish directory: .next
```

All environment variables from Section 20 must be set in Netlify's environment variables panel. `NEXT_PUBLIC_SITE_URL` must be the production domain.

### Key Constraints Added

- **LayoutWrapper pattern is required** — root `layout.tsx` uses `LayoutWrapper` to conditionally render Nav/Footer. Admin routes never see public chrome.
- **Admin auth is layout-guarded** — `(protected)/layout.tsx` validates `isAuthorizedAdmin` before rendering any admin content. Individual page auth checks are no longer required but harmless.
- **Typography is unified** — Outfit for all display/headlines, Inter for all body/UI, across public site and admin. No `fontStyle: italic` without approval.
- **No `#000` or black** — all dark text uses navy (`#2B3A67`), charcoal (`#1A1A2E`), or white with opacity. Never pure black.
- **Hero uses `100dvh`** — critical for mobile. Do not revert to `100vh` only.
