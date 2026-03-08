# Salesman Solutions — Master Build Prompt v4.3
### Global Venture Platform | IRIS + ASSAN | Maximum Visual Immersion | Production Ready
### Updated: March 2026 — Global Scope + Real-Time APIs + Full Glass UI System + Maximum Design Overhaul

---

## 🎯 PRIME DIRECTIVE

When someone lands on this site, within three seconds they must understand:

> **Salesman Solutions is a global venture platform that builds operational systems that improve industries.**

**Stop thinking like a developer. Think like a creative design director building for a global audience.**

Salesman Solutions is a **global brand**. There are no geographic limitations on scope, positioning, or visual language. The mission, the platforms, and the ambition are world-scale. Frame this the same way McKinsey, Palantir, and IBM are headquartered somewhere but operate everywhere. Specific engagements (Tallahassee, South Florida) exist in the site only as **proof of deployment** — evidence of real execution — not as a geographic ceiling.

All copy, headlines, and CTAs must reflect global intent. Replace any phrasing that implies local or regional scope with language that communicates worldwide operational capability.

Before writing any code, study these sites and internalize their visual language:
- https://www.palantir.com — authority, data-forward, enterprise gravity, spatial confidence
- https://www.microsoft.com — clean editorial, consistent type hierarchy, illustrative visual storytelling
- https://www.ibm.com — research-backed credibility, structured information, restrained but striking design

The goal is a site that belongs in the same conversation as Microsoft, IBM, and Palantir — not because it copies them, but because it carries the same global design authority.

**Tone:** Professional + grounded + confident. Global. Never salesy. Never over-explained.

---

## 🤖 AI WORK PROTOCOL

### Before You Start
1. Read this entire prompt — do not skip sections.
2. Look at the attached current site HTML. Understand what exists. Build forward from it.
3. Before writing any section, research publicly available industry data, company positioning language, and visual patterns from Palantir, IBM, Microsoft, and McKinsey to inform both copy and layout decisions.
4. Announce your numbered plan before starting.
5. Self-review each section against the quality gate before proceeding.

### Workload Division
| Section | Scope |
|---|---|
| **S1** | Scaffold, brand tokens, global CSS, animation utilities, component shells |
| **S2** | Glass pill nav, footer, global layout |
| **S3** | Home page — all sections with full visual elevation (see § HOME PAGE VISUAL DIRECTIVES) |
| **S4** | About page — editorial founder story, timeline with images |
| **S5** | Solutions page + IRIS platform page + ASSAN platform page |
| **S6** | Case Studies index + [slug] pages — visual case study cards with images |
| **S7** | Research & Insights section/page, Contact, legal, SEO, final QA |

### Quality Gate — After Each Section
- Every section has a compelling visual component — no bare text-only blocks
- Images, animations, or data visualizations present in every major section
- Glass pill nav floats 20px from top — pill shape, transparent
- `logo.png` transparent — no white background box ever
- Satoshi on all UI; Cormorant Garamond on hero H1 and mission quote only
- No pure black, no purple gradients
- IRIS / ASSAN platform architecture visible on homepage
- Partner language throughout — never vendor, never service list
- All cards have images and hover-reveal behavior
- No lorem ipsum, no placeholder copy

---

## 🏛️ PLATFORM ARCHITECTURE — CORE IDENTITY

### IRIS — Intelligent Resource Infrastructure Systems
The **digital infrastructure and intelligence platform**.
Focus: embedded system development · dashboards · analytics · automation · digital optimization · operational intelligence
Case work label: **OPTIMIZATIONS**

### ASSAN — Applied Systems for Service and Network Operations
The **operational systems and deployment platform**.
Focus: property · logistics · hospitality · labor · field execution · real-world operational deployment
Case work label: **OPERATIONS**

This two-platform structure governs all copy, navigation, case study taxonomy, content models, components, and visual storytelling across every page.

---

## 🎨 DESIGN SYSTEM (v4.3 — Locked)

### Color Palette
```css
:root {
  --navy:        #1f2a44;
  --sand:        #d6b48c;
  --off-white:   #F7F4EF;
  --white:       #FFFFFF;
  --slate:       #6B7280;
  --slate-light: #E5E7EB;
  --navy-deep:   #141d30;
}
```
White dominant. Navy as anchor. Sand as accent only — never a dominant background. No pure black. No purple gradients.

### Typography
```css
/* DISPLAY: Hero H1 + Mission Quote ONLY */
font-family: 'Cormorant Garamond', serif; font-weight: 600–700;

/* UI: Everything else */
font-family: 'Satoshi', sans-serif;
/* https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap */

/* Eyebrows */
font-family: 'Satoshi'; font-weight: 500; letter-spacing: 0.12em;
text-transform: uppercase; font-size: 0.75rem; color: var(--sand);
```
Prohibited: Inter, DM Sans, Roboto, Arial, Space Grotesk, system fonts.
Typography direction: rounded-premium, human, confident at large scale. Headlines digestible and mature.

### Animation Tokens
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--duration-fast: 200ms; --duration-standard: 300ms; --duration-slow: 600ms;
```
Rule: Motion is structural, never decorative. Never exceed 400ms for primary interactions.

---

## 🔮 GLOBAL GLASS UI SYSTEM — APPLIED ACROSS ALL CARDS

The glass pill texture from the nav bar is the defining visual motif of the entire site. It must be applied universally — every card, every stat chip, every tag, every modal — across every page. This creates a cohesive, immersive design language that feels like one unified product, not a collection of sections.

### Glass Token Definitions

```css
/* Base glass — on dark backgrounds (hero, navy sections) */
.glass-dark {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
}

/* Light glass — on off-white/white backgrounds */
.glass-light {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(31, 42, 68, 0.06);
}

/* Pill — for tags, stat chips, capability labels */
.glass-pill {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 100px;  /* full pill */
  padding: 4px 14px;
}

/* Hover state for all glass components */
.glass-dark:hover, .glass-light:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(214, 180, 140, 0.35);  /* sand tint on hover */
  transform: translateY(-4px);
  transition: all 300ms var(--ease-out);
}
```

### Where Glass Is Applied — Complete Map

Every component listed below must use the glass system. No flat white cards. No solid colored boxes. The glass is the card.

**Homepage:**
- Hero stat cards → `glass-dark` + `border-radius: 100px` (pill shape)
- IRIS platform card → `glass-dark`
- ASSAN platform card → `glass-dark`
- Capability tags on platform cards → `glass-pill`
- Domain explorer active tab indicator → `glass-pill` with sand border
- Operation case study cards → `glass-light` on white section, `glass-dark` on navy section
- Research & Insights cards → `glass-light`
- Stats mosaic cells → `glass-light` with sand underline
- CTA band buttons → primary: sand fill glass pill · secondary: `glass-pill` outlined

**About page:**
- Timeline milestone cards → `glass-light`
- Mission quote block → full-width `glass-dark` on navy section
- Platform philosophy cards → `glass-dark`

**Solutions pages (IRIS + ASSAN):**
- Capability cards → `glass-dark`
- Flow diagram steps → `glass-pill` connected by sand lines
- Case study preview cards → `glass-light`

**Case Studies:**
- Index cards → `glass-light` over subtle background
- Metric chips on case study pages → `glass-dark` on dark hero, `glass-light` elsewhere
- Timeline progress steps → `glass-pill`
- Pull quote blocks → `glass-light` with sand left border

**Insights page:**
- News feed cards → `glass-dark` (dark section background)
- Static research cards → `glass-light`
- Category filter pills → `glass-pill`

**Contact page:**
- Form fields → `glass-light` inputs with sand focus ring
- Founder credibility block → `glass-dark`

**Footer:**
- Social icon buttons → `glass-pill`
- Quick link columns don't need glass — plain white text on navy-deep is correct here

### Immersive Depth Layering

To create maximum immersion, sections are layered with alternating depth:

1. **Hero** — dark architectural image with glass overlays
2. **Live Data Strip** — navy-deep opaque band
3. **Cost of Complexity** — off-white with subtle noise grain
4. **Platform Architecture** — navy-deep with glass cards floating above
5. **Domain Explorer** — full-bleed background image with glass content panel
6. **6-Step Method** — off-white, clean
7. **Operations / Proof of System** — white with glass-light horizontal band cards
8. **Why Salesman Solutions** — dark/light split
9. **Research & Insights** — navy-deep with glass-dark cards
10. **Stats Mosaic** — off-white with glass-light cells
11. **CTA Band** — navy-deep animated mesh

This alternating pattern creates rhythm and prevents visual fatigue. Each section feels intentionally different from the last while all sharing the same glass language.

---

```css
nav {
  position: fixed; top: 20px; left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px); max-width: 1200px;
  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 100px; padding: 12px 24px;
  display: flex; align-items: center; justify-content: space-between;
  z-index: 1000; transition: background 300ms ease;
}
nav.scrolled {
  background: rgba(31,42,68,0.85);
  border-color: rgba(255,255,255,0.08);
}
```

Logo: `logo.png` — transparent background — no white box ever.
Nav items: `Home · About · Solutions · Case Studies · Contact`
Phone `954-830-6310` top right. Active state: sand underline.
Mobile: hamburger → slide-in drawer from right, navy-deep background.

---

## 🏠 HOME PAGE — VISUAL DIRECTIVES BY SECTION

Each section below has a current state description and an explicit visual elevation directive. The AI must execute the directive — not approximate it.

---

### SECTION 1 — Hero

**Current state:** Full-viewport hero with nav. Directionally correct.

**Elevation directive:**
- Keep the glass pill nav — it works
- Hero image must be architectural and premium (modernist building, golden hour, strong geometry)
- Add a **subtle animated particle field or noise grain overlay** on the hero image — low opacity, creates depth without distraction
- Faded watermark `SYSTEMS` right-anchored, 8% opacity, Cormorant Garamond, very large
- The hero scroll indicator (chevron down) should pulse gently

**Copy:**
- Eyebrow: `THE SALESMAN SOLUTIONS PLATFORM`
- H1 (Cormorant Garamond 700, white, large): `SYSTEMS THAT IMPROVE INDUSTRIES`
- Rotating supporting line (Satoshi 300, smaller, white):
  1. `IRIS — Digital Infrastructure & Intelligence` (5s)
  2. `ASSAN — Operational Systems & Deployment` (3.5s)
  3. `Embedded Intelligence. Real-World Execution.` (3.5s)
  4. `Two Platforms. One Operating Philosophy.` (3.5s)
- Static body: `Salesman Solutions builds operational systems that simplify complexity and transform how industries function.`
- Glass stat cards bottom-right: `150+ Operations Completed` · `4+ Years in the Field`
- CTAs: `EXPLORE THE PLATFORM →` (navy fill) · `VIEW CASE STUDIES` (outlined white)

---

### SECTION 2 — The Cost of Complexity (Industry Data)

**Current state:** Four large statistics in a plain grid with source citations. Visually dry and unengaging.

**Elevation directive — Transform into an animated data story:**

This section must feel like an IBM or McKinsey research brief brought to life. It is the strongest credibility signal on the page. Do not waste it on plain text.

- Background: off-white with a very subtle navy grain texture overlay
- Each of the four stats gets its own **animated reveal card** — when it scrolls into view, the number counts up from 0 to its value using a JavaScript counter with an ease-out curve
- Each card: large stat in Satoshi 700, supporting sentence below, source attribution in sand color
- Add a **thin animated progress bar** beneath each stat that fills from left to right as the counter runs — reinforces the data-forward feel
- Cards are arranged in a 2×2 grid on desktop with generous spacing — not tight
- Between the stat grid and the closing copy, add a **thin full-width navy divider line** with a subtle fade-in
- The closing paragraph ("Salesman Solutions exists to close these gaps...") should be set in a larger Satoshi 300, centered, italicized slightly, with generous top padding — it should feel like a conclusion to a research finding, not a tagline

**The four stats (keep exact copy and sources from current site):**
- `70%` of transformation initiatives fail to reach their stated goals — McKinsey
- `<1.5%` annual productivity growth across developed economies over the last decade — OECD
- `60%` of operational time is spent on coordination, not execution — Asana Work Index
- `$1.6T` lost annually to global supply chain inefficiency — World Economic Forum

---

### SECTION 3 — Platform Architecture (IRIS + ASSAN)

**Current state:** Two white cards with bullet point lists. Functional but completely flat — no imagery, no animation, no visual hierarchy beyond text.

**Elevation directive — Make this the centerpiece of the homepage:**

This is the most important section architecturally. A visitor must leave it understanding exactly what IRIS and ASSAN are. It must feel like the kind of platform overview you'd see on a Palantir or AWS product page.

**Layout:**
- Full-width section, navy-deep background (dark section — creates visual contrast after the light stat section above)
- Section eyebrow: `PLATFORM ARCHITECTURE` in sand
- Section headline (Satoshi 700, white, large): `Two Platforms. One Operating Philosophy.`
- Supporting sentence (Satoshi 300, white/60): `Built to operate independently. Designed to work together.`

**IRIS Card:**
- Left half of a split layout (desktop) or top card (mobile)
- Background: `rgba(255,255,255,0.05)` glass on dark — subtle border `rgba(255,255,255,0.10)`
- Large platform code: `IRIS` in Cormorant Garamond, very large, sand color, positioned as a typographic anchor
- Full name: `Intelligent Resource Infrastructure Systems` — Satoshi 400, white/60, small
- Role descriptor: `Digital Infrastructure & Intelligence` — Satoshi 600, white, medium
- **Illustrative image:** high-quality image of data visualization, dashboard interface, or digital infrastructure — placed as a background or side panel, darkened with `rgba(0,0,0,0.5)` overlay
- Capability tags (pill-shaped): `System Development` · `Dashboards` · `Analytics` · `Automation` · `Digital Optimization`
- Platform label tag top-right: `OPTIMIZATIONS`
- Hover: card lifts `translateY(-6px)`, border brightens, capabilities animate in sequentially

**ASSAN Card:**
- Mirror layout on right (desktop)
- Same glass treatment
- Large platform code: `ASSAN` in Cormorant Garamond, sand
- Full name: `Applied Systems for Service and Network Operations`
- Role: `Operational Systems & Deployment`
- **Illustrative image:** property exterior, logistics infrastructure, or hotel renovation environment
- Capability tags: `Property Systems` · `Logistics` · `Hospitality` · `Labor` · `Field Execution`
- Platform label: `OPERATIONS`
- Same hover behavior

**Between the cards (desktop):** A thin vertical sand-colored divider line — `1px` wide, full card height, centered

---

### SECTION 4 — Deployment Domains (Industry Morphing Strip)

**Current state:** A simple slideshow with text. Not visually bad but not compelling — it reads as an afterthought.

**Elevation directive — Transform into a cinematic domain explorer:**

- Full-width section with a **fixed background image** that cross-fades with each domain switch
- Left: domain list as vertical tab navigation (desktop) — active domain highlighted in sand with a left border indicator
- Right: animated content panel — headline, body copy, and a **contextual illustrative image** for the active domain
- The image should be large format (fills most of the right panel) with a dark gradient overlay from bottom so text reads clearly if needed
- Auto-advances every 5 seconds — smooth cross-fade on both the text content and the background image
- Each domain gets a **2–3 word bold descriptor** above the paragraph — acts as a visual anchor

**Four domains:**
1. **Property Systems (ASSAN)** — Descriptor: `Structured Maintenance` — Image: modern residential or commercial property interior
2. **Hospitality Systems (ASSAN)** — Descriptor: `Luxury Deployment` — Image: premium hotel room or lobby renovation
3. **Digital Infrastructure (IRIS)** — Descriptor: `Embedded Intelligence` — Image: server infrastructure or clean dashboard interface
4. **Logistics & Labor (ASSAN)** — Descriptor: `Field Execution` — Image: organized logistics environment or warehouse infrastructure

---

### SECTION 5 — The Method (6-Step Doctrine)

**Current state:** Vertical steps list with icons. Clean but static — no sense of movement or progression.

**Elevation directive:**

- Desktop: **sticky scroll progression** — left side is a fixed progress rail (thin vertical line with a sand dot that advances as you scroll), right side is the active step content expanding into view
- Each step activates as it enters the center of the viewport — the rail dot animates to the new position, content fades in from slight right offset
- Each step has a **small illustrative icon or abstract graphic** — not a generic icon library icon, but something that feels designed (thin-line illustrations or minimalist geometric forms)
- Step numbers in large faded Cormorant Garamond (opacity ~12%) behind the step content — gives architectural depth
- Mobile: vertical accordion-style timeline with smooth height transitions

---

### SECTION 6 — Proof of System (Operations)

**Current state:** Four plain cards with a tag, operation name, location, brief description, and metric chips. Extremely dry. Looks like a feature comparison table, not a showcase of real work.

**Elevation directive — Make every operation card feel like an editorial case study preview:**

This is the most direct proof that Salesman Solutions executes at a high level. It must be treated with that weight.

**Card design:**
- Full-width cards stacked (not a grid) — each card is a horizontal band on desktop: **image on the left (40%), content on the right (60%)**
- Image left: a high-quality contextual image for each operation domain (property maintenance scene, luxury hotel interior, logistics/delivery environment, digital interface/workspace) — image has a very subtle navy color-grade overlay
- Content right: platform tag (ASSAN OPERATION or IRIS OPTIMIZATION in sand), operation name in Satoshi 700 large, timeline + location in slate, short description, 3 metric pills, and a `View Operation →` link
- On hover: the left image subtly scales to `1.04` with a smooth 400ms ease, the right content slides `2px` to the right, and a sand left-border accent appears on the card
- Each card has a **thin top border** in sand color (2px) that animates in from left to right on scroll entry

**Operation images (use high-quality Unsplash CDN):**
- Operation First Mile: property interior, furniture staging, or residential space
- Operation LiveBetter: luxury apartment complex or student living environment
- Operation Saatva: premium hotel room, luxury mattress environment, or hospitality renovation
- Operation Miss Scholastic: web interface, digital workspace, or clean technology environment

---

### SECTION 7 — Why Salesman Solutions

**Current state:** A simple comparison block. Reads as a basic feature-vs-feature table.

**Elevation directive:**

- Redesign as a **split visual narrative** — left side is dark (navy-deep), right side is light (off-white)
- Left (dark): headline "How most companies approach it" — bullet points styled in a faded, low-contrast treatment to visually communicate inadequacy
- Right (light): headline "How Salesman Solutions operates" — same structure but high contrast, animated in sequentially, sand dot markers instead of bullets
- Add a **central vertical divider** with a subtle `VS` marker at center — the visual tension between the two halves communicates the point without extra copy
- The right side items animate in with a staggered slide-in from right as the section enters viewport

---

### SECTION 8 — Research & Insights (NEW SECTION — Add to Homepage and as a standalone page)

**This section does not exist in the current site and must be built from scratch.**

Salesman Solutions needs a research and thought leadership layer to establish it alongside Microsoft, IBM, and Palantir — companies that publish findings, share operational insights, and demonstrate domain authority through content.

**Homepage block — "Operational Intelligence":**
- Eyebrow: `OPERATIONAL INTELLIGENCE`
- Headline: `What the data tells us about operational failure — and how systems fix it`
- 3 research cards in a horizontal row:

**Research Card 1:**
- Title: `The Coordination Tax`
- Insight: "Organizations lose an average of 60% of operational capacity to coordination overhead — time spent managing work rather than doing it. Systems eliminate the tax."
- Source: Asana Work Index, 2023
- Tag: `OPERATIONS RESEARCH`

**Research Card 2:**
- Title: `The Infrastructure Gap`
- Insight: "Less than 30% of mid-market property operators have a documented maintenance protocol. The absence of system is itself a cost."
- Source: Salesman Solutions Field Research
- Tag: `PROPERTY SYSTEMS`

**Research Card 3:**
- Title: `The Deployment Advantage`
- Insight: "Companies that deploy embedded operational systems report a 2–3x improvement in issue resolution speed and measurable reduction in recurring operational failures."
- Source: McKinsey Operations Practice
- Tag: `ASSAN INSIGHTS`

Card design: white background, navy top border (2px), Satoshi body, sand tag, subtle hover lift. On hover: a sand left-border slides in from the top, card lifts `translateY(-4px)`.

**Standalone page `/insights`:**
Build a full Insights / Research page that includes:
- The 3 homepage cards (expanded with more body content)
- A methodology note: "Salesman Solutions bases its operational frameworks on field data from 150+ engagements, combined with published research from McKinsey, OECD, Asana, and the World Economic Forum."
- Space for future research posts (CMS-ready structure with `publishedAt`, `category`, `excerpt`, `slug` fields)
- Visual design: editorial magazine layout — large pullquotes, thin dividers, generous whitespace

---

### SECTION 9 — Stats Grid (Company Metrics)

**Current state:** Presumably plain numbers. Dry and uninviting.

**Elevation directive:**

- Redesign as a **data mosaic** — not a uniform grid
- Vary the visual weight of stats: the most important ones (`150+`, `4+`) get larger type and more space, secondary stats are smaller
- Each stat has a **thin animated underline in sand** that draws from left to right as it enters viewport
- Background: subtle off-white with a very faint dot-grid pattern — communicates precision and structure
- Stats arranged asymmetrically — e.g. one large stat spanning 2 columns, two medium side-by-side, one large again
- Add a small contextual descriptor below each label in Satoshi 300, slate color — one sentence that turns the number into a statement

**Stats with contextual descriptors:**
- `150+` Operations Completed — "Across residential, commercial, and hospitality environments."
- `4+` Years in the Field — "Building systems before it was the narrative."
- `50+` Properties Optimized — "Each one documented. Each one improved."
- `10+` Hospitality Engagements — "From Wyndham to Marriott-adjacent properties."
- `Growing` Active Markets — "Launched in the United States. Built to scale globally."
- `4` Coded Operations — "Every major engagement documented as a replicable framework."
- `30+` Luxury Units Placed — "Premium supply chain execution at the hospitality level."

---

### SECTION 10 — CTA Band

**Current state:** Simple text + two buttons. Acceptable but bare.

**Elevation directive:**
- Full-bleed dark navy-deep background
- Add a **very subtle animated mesh gradient** in the background — slow-moving, low-contrast, deep navy tones
- Headline (Cormorant Garamond, white, large): `Ready to Build a System That Runs?`
- Subheadline (Satoshi 300, white/60): "Tell us what you're working on. We'll show you how to systematize it."
- Two CTAs with more visual weight: primary button sand fill with navy text, secondary outlined white — both slightly larger than the rest of the site's buttons
- On either side of the CTA block: very faint watermark letters `IRIS` and `ASSAN` — opacity 5%, Cormorant Garamond — flanking the headline

---

## 👤 ABOUT PAGE — VISUAL DIRECTIVES

### Hero
- Eyebrow: `ABOUT SALESMAN SOLUTIONS`
- H1: `Built From Experience. Designed for the Future.`
- Founder headshot `founderheadshot.png` — background removed — place as a large editorial element. On desktop: image occupies the right 45% of the viewport, left-edge blended softly into the hero background. Not a box, not a circle crop. Full-bleed editorial treatment with generous vertical space.
- Background: architectural image or clean navy gradient behind the text side

### Founder Timeline
Scroll-triggered milestone reveals — no vehicle animation (removed entirely).

Each milestone gets:
- A **contextual illustrative image** (small, 40% width panel on the right on desktop, full width above on mobile) — changes as the user scrolls
- Milestone number in large faded Cormorant Garamond (8% opacity) behind the milestone title
- On hover over the image: a subtle tooltip or caption expands — more detail about that moment in the story
- Sand left-border rail with an animated dot that advances as milestones activate

**Timeline milestones (same content as v4.1 — all 9 stages).**

### Mission Block
Full-bleed navy. Cormorant Garamond. Centered. Very large. Sand accent.

### Platform Philosophy (NEW — About page only)
Add a brief section after the mission block that explains *why* the two-platform structure exists:
- Headline: `Why Two Platforms?`
- Body: "Most operational failures don't have a single cause. They happen at the intersection of bad digital infrastructure and poor real-world execution. IRIS addresses the first. ASSAN addresses the second. Together, they close the gap that most companies leave open."

---

## 🔧 SOLUTIONS PAGE — VISUAL DIRECTIVES

### IRIS Platform Page `/solutions/iris`
- Hero: dark navy-deep background, architectural data visualization image, large `IRIS` in Cormorant Garamond
- Capability cards with illustrative images — dashboard screenshot aesthetic, data infrastructure
- A "How IRIS Works" flow diagram (CSS-only animated step flow — no external chart libraries required)
- Case study preview cards filtered to IRIS OPTIMIZATIONS only

### ASSAN Platform Page `/solutions/assan`
- Hero: architectural property or logistics image, large `ASSAN` in Cormorant Garamond
- Domain cards: Property / Hospitality / Logistics / Labor — each with an image and hover reveal
- A "How ASSAN Deploys" step flow (same CSS animation pattern as IRIS flow)
- Case study preview cards filtered to ASSAN OPERATIONS only

---

## 📋 CASE STUDIES — VISUAL DIRECTIVES

### Index Page
- Eyebrow: `CODED WORK`
- Headline: `The Work, Documented`
- Filter tabs: `All` · `ASSAN Operations` · `IRIS Optimizations` — animated active state
- Cards: **full-width horizontal band layout** matching the homepage operation cards — image left, content right
- Each card: platform tag, operation name, domain, timeline, 3 metrics preview, `View Operation →`

### Individual Case Study Pages
- **Hero:** full-bleed contextual image for the operation, dark overlay, operation name in Cormorant Garamond, platform tag and timeline
- **Sticky left rail:** vertical progress indicator — thin line that fills as the user scrolls through sections
- **Section structure:** Overview → Problem → Approach → Execution → Outcomes → Lessons
- Each section has a **pull quote** — the most striking insight from that section, typeset large in Cormorant Garamond italic
- Metrics block: glass cards displaying key numbers from the operation
- End CTA: `Start a Similar Project →` → `/contact`

---

## 📊 STATISTICS

| Metric | Value | Label | Contextual Note |
|---|---|---|---|
| Operations completed | 150+ | Operations Completed | Across residential, commercial, and hospitality |
| Years operational | 4+ | Years in the Field | Building systems before it was the narrative |
| Properties optimized | 50+ | Properties Optimized | Each documented. Each improved. |
| Hospitality engagements | 10+ | Hospitality Engagements | From Wyndham to Marriott-adjacent |
| Active markets | Growing | Active Markets | Launched in the US. Built to scale globally. |
| Coded operations | 4 | Documented Operations | Every major engagement a replicable framework |
| Luxury units | 30+ | Luxury Units Placed | Premium supply chain at the hospitality level |

Hero: `150+` and `4+` only. Home + About full grid. Footer: none. Case studies: operation metrics only.

---

## 🖼️ IMAGERY GUIDELINES

Every section must have a contextual illustrative image. No text-only sections above the fold.

**Tone:** Architectural, infrastructure, operational, industrial premium. No people stock photos. Think: building interiors, hotel corridors, data centers, organized logistics environments, property exteriors at golden hour.

**Unsplash CDN queries:**
- Property: `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2` (modern interior)
- Hospitality: `https://images.unsplash.com/photo-1566073771259-6a8506099945` (hotel room)
- Logistics: `https://images.unsplash.com/photo-1553413077-190dd305871c` (warehouse)
- Digital/IRIS: `https://images.unsplash.com/photo-1551288049-bebda4e38f71` (dashboard/data)
- Architecture hero: `https://images.unsplash.com/photo-1486325212027-8081e485255e` (modernist building)

Use `?w=1200&q=80&auto=format` parameters on all Unsplash URLs. Always include `Next.js <Image>` with `objectFit="cover"` and `placeholder="blur"`.

**Card image spec:**
```css
.card-image {
  width: 100%; aspect-ratio: 16/9; object-fit: cover;
  filter: brightness(0.92) contrast(1.05);
  transition: transform 400ms var(--ease-out), filter 300ms ease;
}
.card:hover .card-image { transform: scale(1.03); filter: brightness(0.85) contrast(1.1); }
```

---

## 📐 ASSETS

- `logo.png` — transparent background — only version to use; never apply a background container
- `founderheadshot.png` — background removed — editorial placement only; never boxed
- `hero-reference.png` — layout reference — improve upon it

**Removed (never reference):** `logo.svg` · `jaheim-headshot.png` · `tacoma-evolution.mp4` · `scroll/` folder

---

## 🏗️ TECHNICAL ARCHITECTURE

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

**Routes:**
```
/                               Home
/about                          Founder story + mission + platform philosophy
/solutions                      Solutions index
/solutions/iris                 IRIS platform page
/solutions/assan                ASSAN platform page
/solutions/property-operations  Property ops conversion page
/case-studies                   Case study index (IRIS + ASSAN taxonomy)
/case-studies/[slug]            Individual operation/optimization pages
/insights                       Research & Insights page (NEW)
/contact                        Inquiry form
/legal/terms                    Terms of Service
/legal/privacy                  Privacy Policy
```

**Content model:**
```typescript
type Platform = 'IRIS' | 'ASSAN'
type WorkType = 'OPERATION' | 'OPTIMIZATION'

type CaseStudy = {
  slug: string; platform: Platform; workType: WorkType;
  operationName: string; category: string[]; timeline: string; location: string;
  heroImage: string; overview: string; problem: string; approach: string;
  executionScope: string[]; outcomes: string[]; lessons: string;
  metrics: { value: string; label: string }[];
  pullQuotes: { section: string; quote: string }[];
  status: 'published' | 'draft';
}

type Insight = {
  slug: string; title: string; excerpt: string; body: string;
  platform?: Platform; source: string; publishedAt: string; category: string;
}
```

**Font loading:**
```html
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
```

---

## 🌐 REAL-TIME API INTEGRATIONS

The site must integrate publicly available free APIs to inject live, dynamic data throughout the experience. This transforms Salesman Solutions from a static brochure into a living platform — reinforcing that this is a technology company, not just a services firm.

### Required API Integrations

**1. News & Industry Intelligence Feed — `/insights` page and homepage widget**
- API: **NewsAPI.org** (free tier — 100 req/day) or **GNews API** (free tier)
- Endpoint: Fetch top headlines filtered by queries: `"operational systems"`, `"infrastructure technology"`, `"logistics innovation"`, `"property technology"`, `"digital transformation"`
- Implementation: A `<LiveFeed />` component on the `/insights` page displaying the 6 most recent relevant headlines with source, date, and link
- Refresh: client-side fetch on page load with a 1-hour stale-while-revalidate cache (`next: { revalidate: 3600 }` in Next.js fetch)
- Design: Glass pill cards — same texture as the nav bar — each card has a headline, source name, date, and an arrow link. Sorted by recency.
- Fallback: If API is unavailable, show the 3 static research cards from the insights section

```typescript
// Example: lib/news.ts
export async function fetchIndustryNews() {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=operational+systems+infrastructure&lang=en&max=6&apikey=${process.env.GNEWS_API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  return res.json()
}
```

**2. Global Market Intelligence — Homepage data strip**
- API: **World Bank Open Data API** (completely free, no key required)
- Endpoint: Fetch global GDP growth, infrastructure investment, or productivity data
- Example: `https://api.worldbank.org/v2/indicator/NY.GDP.MKTP.KD.ZG?format=json&mrv=1`
- Implementation: A thin **Live Data Strip** between the hero and the Cost of Complexity section — a horizontal ticker or data row showing 2–3 live global economic indicators with a `Live` badge
- Purpose: Grounds Salesman Solutions in the global economic context it claims to address. Makes the site feel like it's connected to the world it operates in.
- Design: Full-width strip, navy-deep background, monospaced Satoshi figures, sand `Live` indicator dot (pulsing)

```typescript
// Example: lib/worldbank.ts
export async function fetchGlobalIndicator(indicator: string) {
  const res = await fetch(
    `https://api.worldbank.org/v2/indicator/${indicator}?format=json&mrv=1`,
    { next: { revalidate: 86400 } } // refresh daily
  )
  return res.json()
}
```

**3. Time & Location Context — Contact Page**
- API: **WorldTimeAPI** (free, no key required) — `http://worldtimeapi.org/api/timezone/America/New_York`
- Implementation: On the Contact page, display current Salesman Solutions HQ time alongside "Jaheim will be in touch within 24 hours" — a small but premium trust signal
- Design: Small Satoshi 400 text in slate, auto-updating every minute via `setInterval`

**4. Currency / Global Reach Signal — Optional Enhancement**
- API: **ExchangeRate-API** (free tier) or **Open Exchange Rates** (free)
- Use: Subtle global presence signal — not financial data, but a visual cue that the platform thinks in global terms
- Implementation: A small ticker on the footer or contact page showing 2–3 major currency pairs — purely atmospheric, reinforces global brand without overstating

### API Environment Variables (`.env.local`)
```bash
GNEWS_API_KEY=your_gnews_key_here
# World Bank API requires no key
# WorldTimeAPI requires no key
EXCHANGE_RATE_API_KEY=your_key_here  # optional
```

### Live Data Strip Component Spec
```css
/* Horizontal ticker strip — between hero and data section */
.live-data-strip {
  width: 100%;
  background: var(--navy-deep);
  padding: 10px 0;
  overflow: hidden;
}
.live-indicator {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'Satoshi', sans-serif; font-size: 0.72rem;
  font-weight: 500; color: rgba(255,255,255,0.5);
  letter-spacing: 0.08em; text-transform: uppercase;
}
.live-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--sand);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
```

### News Feed Card Spec
Cards in the Live Feed use the same **glass pill texture** as the nav bar:
```css
.news-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;  /* pill-radius cards */
  padding: 20px 24px;
  transition: background 300ms ease, transform 300ms var(--ease-out);
}
.news-card:hover {
  background: rgba(255,255,255,0.13);
  transform: translateY(-4px);
}
```

---

- Background: `--navy-deep`
- Logo `logo.png` on dark — no modification needed (transparent)
- Description: "A venture platform building operational systems that improve industries."
- Links: Home · About · Solutions · Case Studies · Insights · Contact
- Legal: Terms of Service · Privacy Policy
- Contact: `954-830-6310` · `JaheimSalesman@gmail.com`
- Social: LinkedIn · Instagram (icon placeholders)
- Copyright: `© {new Date().getFullYear()} Salesman Solutions. All rights reserved.`
- Tagline: `Built on Systems. Driven by Results.`

---

## ⚠️ CRITICAL CONSTRAINTS — v4.3

1. **Global brand** — no geographic ceiling in copy, positioning, or CTAs. Specific engagements are proof points, not scope limits.
2. **Glass UI everywhere** — every card, chip, tag, and stat cell uses the glass token system. No flat white boxes.
3. **Stop thinking like a developer. Think like a creative design director.** Every section must be visually elevated.
4. **No bare text-only sections** — every major section has an image, animation, data viz, or live data
5. **Real-time APIs** — NewsAPI/GNews, World Bank, WorldTimeAPI all integrated; `.env.local` keys documented
6. **Live Data Strip** — between hero and stats section, pulsing sand dot, World Bank data
7. **Glass pill nav** — floating 20px from top, full pill, transparent
8. **`logo.png`** — transparent, no white box ever
9. **`founderheadshot.png`** — editorial placement, never boxed
10. **Satoshi for all UI** — Cormorant Garamond for hero H1 + mission quote only
11. **Hero H1:** `SYSTEMS THAT IMPROVE INDUSTRIES` — static
12. **IRIS + ASSAN** — present on homepage, all page hierarchies, case study taxonomy
13. **Operations section** — horizontal band cards with glass-light texture + images
14. **Stats section** — animated data mosaic, glass-light cells, contextual descriptors
15. **Platform section** — navy-deep bg, glass-dark cards with images, Cormorant platform codes
16. **Research & Insights** — live news feed + static cards + `/insights` page
17. **Deployment domains** — cinematic explorer with image cross-fades, glass content panel
18. **Immersive depth layering** — alternating dark/light section rhythm throughout
19. **No vehicle animation** — fully removed
20. **Partner language** — never vendor, never service list
21. **No pure black** — navy only
22. **No placeholder copy** — all content from this prompt
23. **All 4 case studies** — full unabridged content
24. **Legal pages** required
25. **Self-review every section** — mandatory

---

## 📦 DELIVERABLES CHECKLIST

- [ ] All pages including `/insights`
- [ ] Glass UI system applied universally — all cards, chips, tags use glass tokens
- [ ] Glass pill nav + transparent logo
- [ ] Live Data Strip — World Bank API, pulsing sand dot, between hero and stats
- [ ] Hero — grain overlay, animated supporting line, glass pill stat cards
- [ ] Stat section — animated counters + progress bars + glass-light cells
- [ ] Platform section — navy-deep bg, glass-dark cards with images + Cormorant codes
- [ ] Deployment domains — cinematic explorer with glass content panel
- [ ] 6-step method — sticky scroll progression with sand rail dot
- [ ] Operations section — horizontal glass-light band cards + images + hover
- [ ] Why Salesman Solutions — dark/light split visual narrative
- [ ] Research & Insights — live news feed (GNews API) + glass-dark cards
- [ ] Stats mosaic — animated, asymmetric, glass-light cells, contextual descriptors
- [ ] CTA band — animated mesh background, glass pill buttons
- [ ] Immersive depth layering — alternating section backgrounds per spec
- [ ] About page — editorial headshot, timeline with images + hover tooltips
- [ ] About page — Platform Philosophy section
- [ ] IRIS platform page — glass capability cards + animated flow diagram
- [ ] ASSAN platform page — glass domain cards + animated flow diagram
- [ ] Case studies index — glass-light horizontal band cards, filter tabs
- [ ] Case study slug pages — full-bleed hero, sticky rail, glass metric chips, pull quotes
- [ ] `/insights` page — live news feed + editorial layout + CMS-ready
- [ ] Contact page — founder editorial block, glass-light form fields, live HQ time
- [ ] `.env.local` template with all API keys documented
- [ ] `founderheadshot.png` editorial placement on About + Contact
- [ ] Framer Motion on all scroll reveals
- [ ] Stat counters animate on viewport entry
- [ ] All 4 operations — full unabridged content
- [ ] Responsive — mobile drawer nav, tablet, desktop
- [ ] Legal pages — Terms + Privacy
- [ ] SEO per page + global scope language
- [ ] `robots.txt` + `sitemap.xml`
- [ ] `README.md` with API setup instructions

---

## 📞 CONTACT

- Phone: `954-830-6310`
- Email: `JaheimSalesman@gmail.com`
- Headquarters: United States
- Operations: Global

---

*Salesman Solutions · Built on Systems. Driven by Results.*
*Prompt Version: v4.3 · March 2026*
