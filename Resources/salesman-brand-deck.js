// Salesman Solutions — Brand Identity Deck (CORRECTED: Navy + Gold)
// Source: index.html (actual live website)
// Run: node salesman-brand-deck.js
const pptxgen = require("pptxgenjs");

// ─── ACTUAL BRAND TOKENS from index.html ───────────────────
const C = {
  navy: "2B3A67",  // Primary navy
  navyDeep: "1E2A4A",  // Dark navy (sections, hero gradient)
  navyLight: "3D4F7C",  // Light navy
  charcoal: "1A1A2E",  // Footer background
  gold: "C9A96E",  // Primary accent — CTAs, stats, arrows
  goldLight: "D4B87E",
  goldDark: "B8985D",
  sand: "E8DCC8",  // Light warm tan
  sandLight: "F5F0E8",  // Section backgrounds (cream-sand)
  cream: "FDFBF7",  // Lightest background
  white: "FFFFFF",
  bodyText: "1A1A2E",
};

const F = { display: "Trebuchet MS", ui: "Calibri" };

function makeShadow() {
  return { type: "outer", color: "000000", opacity: 0.12, blur: 10, offset: 4, angle: 135 };
}

function goldBar(slide, x, y, h) {
  slide.addShape("rect", { x, y, w: 0.07, h, fill: { color: C.gold }, line: { color: C.gold } });
}

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Brand Identity Analysis — Salesman Solutions";

// ============================================================
// SLIDE 01 — COVER (Navy Deep background, Gold accents)
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.navyDeep };

  // Subtle gold glow bottom-center
  sl.addShape("ellipse", {
    x: 1.5, y: 3.2, w: 7, h: 4.5,
    fill: { color: C.gold, transparency: 88 },
    line: { color: C.gold, transparency: 100 },
  });

  // Gold left accent bar
  sl.addShape("rect", { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold }, line: { color: C.gold } });

  // Eyebrow
  sl.addShape("rect", { x: 0.55, y: 0.95, w: 2.8, h: 0.3, fill: { color: "253461" }, line: { color: "3D4F7C" }, rectRadius: 0.15 });
  sl.addText("BRAND IDENTITY ANALYSIS", {
    x: 0.55, y: 0.95, w: 2.8, h: 0.3,
    fontFace: F.ui, fontSize: 7.5, color: C.gold, charSpacing: 2.5, bold: true,
    align: "center", valign: "middle", margin: 0,
  });

  // Main title
  sl.addText("Salesman\nSolutions", {
    x: 0.5, y: 1.38, w: 9, h: 2.3,
    fontFace: F.display, fontSize: 68, bold: true, color: C.white,
    lineSpacingMultiple: 1.05, margin: 0,
  });

  // Gold rule
  sl.addShape("rect", { x: 0.5, y: 3.65, w: 2.0, h: 0.05, fill: { color: C.gold }, line: { color: C.gold } });

  sl.addText("Built on Systems. Driven by Results.", {
    x: 0.5, y: 3.82, w: 8, h: 0.45,
    fontFace: F.ui, fontSize: 14, color: C.sand, italic: true, margin: 0,
  });

  sl.addText("Complete Brand Identity Profile  ·  Visual • Verbal • Personality • Content", {
    x: 0.5, y: 4.62, w: 9, h: 0.3,
    fontFace: F.ui, fontSize: 8.5, color: "5A6A8A", margin: 0,
  });

  // Logo mark top-right
  sl.addShape("rect", { x: 8.95, y: 0.22, w: 0.6, h: 0.6, fill: { color: C.gold }, line: { color: C.gold }, rectRadius: 0.08 });
  sl.addText("S", {
    x: 8.95, y: 0.22, w: 0.6, h: 0.6,
    fontFace: F.display, fontSize: 20, bold: true, color: C.navyDeep,
    align: "center", valign: "middle", margin: 0,
  });
}

// ============================================================
// SLIDE 02 — SECTION HEADER: PHASE 1 VISUAL IDENTITY
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.gold };
  sl.addShape("rect", { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.navyDeep }, line: { color: C.navyDeep } });
  sl.addText("PHASE 01", { x: 0.5, y: 1.4, w: 9, h: 0.55, fontFace: F.ui, fontSize: 11, color: C.navyDeep, charSpacing: 5, bold: true, margin: 0 });
  sl.addText("Visual Identity\nAnalysis", { x: 0.5, y: 1.9, w: 9, h: 2.1, fontFace: F.display, fontSize: 56, bold: true, color: C.navyDeep, margin: 0, lineSpacingMultiple: 1.0 });
  sl.addText("Color  ·  Typography  ·  Logo  ·  Layout  ·  Imagery", { x: 0.5, y: 4.5, w: 9, h: 0.4, fontFace: F.ui, fontSize: 11, color: C.navyDeep, margin: 0 });
}

// ============================================================
// SLIDE 03 — COLOR PALETTE
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.cream };
  sl.addText("PHASE 01  ·  VISUAL IDENTITY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Color Palette", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 32, bold: true, color: C.navy, margin: 0 });

  const swatches = [
    { color: C.navy, hex: "#2B3A67", name: "Navy", pct: "~35%", role: "Headlines, cards, text" },
    { color: C.navyDeep, hex: "#1E2A4A", name: "Navy Deep", pct: "~25%", role: "Hero, CTA sections, footer overlay" },
    { color: C.charcoal, hex: "#1A1A2E", name: "Charcoal", pct: "~15%", role: "Footer background" },
    { color: C.gold, hex: "#C9A96E", name: "Gold", pct: "~12%", role: "ALL CTAs, stats, icons, rule lines" },
    { color: C.sandLight, hex: "#F5F0E8", name: "Sand", pct: "~8%", role: "Feature section background" },
    { color: C.cream, hex: "#FDFBF7", name: "Cream", pct: "~5%", role: "Tagline & case studies bg" },
  ];

  swatches.forEach((sw, i) => {
    const x = 0.35 + i * 1.56;
    const isDark = i < 3;
    sl.addShape("rect", { x, y: 1.38, w: 1.4, h: 2.0, fill: { color: sw.color }, line: { color: i >= 4 ? "DDDDDD" : sw.color }, shadow: makeShadow() });
    if (i === 3) {
      sl.addText("★ PRIMARY\nACCENT", { x, y: 1.55, w: 1.4, h: 0.8, fontFace: F.ui, fontSize: 8, bold: true, color: C.navyDeep, align: "center", margin: 0, lineSpacingMultiple: 1.2 });
    }
    sl.addText(sw.hex, { x, y: 3.45, w: 1.4, h: 0.28, fontFace: "Consolas", fontSize: 9, color: C.navy, bold: true, margin: 0 });
    sl.addText(sw.name, { x, y: 3.74, w: 1.4, h: 0.24, fontFace: F.ui, fontSize: 9, color: C.navy, bold: true, margin: 0 });
    sl.addText(sw.pct + " usage", { x, y: 3.98, w: 1.4, h: 0.22, fontFace: F.ui, fontSize: 7.5, color: "666666", margin: 0 });
    sl.addText(sw.role, { x, y: 4.22, w: 1.4, h: 0.38, fontFace: F.ui, fontSize: 7.5, color: "666666", margin: 0, lineSpacingMultiple: 1.3 });
  });

  sl.addText("Emotional associations: Trust  ·  Premium  ·  Authority  ·  Warmth  ·  Ambition  ·  Precision", {
    x: 0.4, y: 5.2, w: 9.2, h: 0.28, fontFace: F.ui, fontSize: 8.5, color: "888888", italic: true, margin: 0,
  });
}

// ============================================================
// SLIDE 04 — TYPOGRAPHY
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.white };
  sl.addText("PHASE 01  ·  VISUAL IDENTITY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Typography System", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 32, bold: true, color: C.navy, margin: 0 });

  // Display font block (navy bg)
  sl.addShape("rect", { x: 0.4, y: 1.35, w: 4.5, h: 3.65, fill: { color: C.navyDeep }, line: { color: C.navyDeep } });
  sl.addText("OUTFIT", { x: 0.55, y: 1.55, w: 4.2, h: 0.4, fontFace: F.display, fontSize: 10, color: C.gold, bold: true, charSpacing: 7, margin: 0 });
  sl.addText("Salesman\nSolutions", { x: 0.55, y: 1.97, w: 4.2, h: 1.55, fontFace: F.display, fontSize: 40, bold: true, color: C.white, margin: 0, lineSpacingMultiple: 1.0 });
  sl.addText("Display / Headline Font\nWeight: 400–800  ·  Letter-spacing: −0.04em\nUsed for: H1, H2, logo wordmark, doctrine numbers", { x: 0.55, y: 3.6, w: 4.2, h: 1.25, fontFace: F.ui, fontSize: 8.5, color: "8899BB", margin: 0, lineSpacingMultiple: 1.4 });

  // UI font block (sand bg)
  sl.addShape("rect", { x: 5.1, y: 1.35, w: 4.5, h: 3.65, fill: { color: C.sandLight }, line: { color: "DDDDDD" } });
  sl.addText("INTER", { x: 5.25, y: 1.55, w: 4.2, h: 0.4, fontFace: F.ui, fontSize: 10, color: C.gold, bold: true, charSpacing: 7, margin: 0 });
  sl.addText("Property systems\nengineered for\nperformance.", { x: 5.25, y: 1.97, w: 4.2, h: 1.55, fontFace: F.ui, fontSize: 22, bold: false, color: C.navy, margin: 0, lineSpacingMultiple: 1.25 });
  sl.addText("Body / UI Font\nWeight: 300–600  ·  Line-height: 1.6–1.8\nUsed for: body, nav, captions, labels, CTAs", { x: 5.25, y: 3.6, w: 4.2, h: 1.25, fontFace: F.ui, fontSize: 8.5, color: "666666", margin: 0, lineSpacingMultiple: 1.4 });

  sl.addText("SCALE:  H1 clamp(3–7.5rem) 800wt · H2 clamp(28–48px) 700wt · Body 14–17px 400wt · Label 11–12px 600wt UPPERCASE +tracking", {
    x: 0.4, y: 5.18, w: 9.2, h: 0.3, fontFace: F.ui, fontSize: 7.5, color: "999999", italic: true, margin: 0,
  });
}

// ============================================================
// SLIDE 05 — LOGO & ICONOGRAPHY
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.sandLight };
  sl.addText("PHASE 01  ·  VISUAL IDENTITY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Logo & Iconography", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 32, bold: true, color: C.navy, margin: 0 });

  // Logo on light — square logo mark + wordmark
  sl.addShape("rect", { x: 0.6, y: 1.45, w: 1.0, h: 1.0, fill: { color: C.navy }, line: { color: C.navy }, rectRadius: 0.1, shadow: makeShadow() });
  sl.addText("S", { x: 0.6, y: 1.45, w: 1.0, h: 1.0, fontFace: F.display, fontSize: 34, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  sl.addText("Salesman", { x: 1.75, y: 1.6, w: 3, h: 0.45, fontFace: F.display, fontSize: 26, bold: true, color: C.navy, margin: 0 });
  sl.addText("Solutions", { x: 1.75, y: 2.02, w: 3, h: 0.4, fontFace: F.display, fontSize: 26, bold: false, color: C.navy, margin: 0 });

  // Logo on dark
  sl.addShape("rect", { x: 0.5, y: 3.0, w: 4.6, h: 1.5, fill: { color: C.navyDeep }, line: { color: C.navyDeep } });
  sl.addShape("rect", { x: 0.95, y: 3.25, w: 0.75, h: 0.75, fill: { color: C.gold }, line: { color: C.gold }, rectRadius: 0.07 });
  sl.addText("S", { x: 0.95, y: 3.25, w: 0.75, h: 0.75, fontFace: F.display, fontSize: 24, bold: true, color: C.navyDeep, align: "center", valign: "middle", margin: 0 });
  sl.addText("Salesman", { x: 1.85, y: 3.43, w: 3, h: 0.38, fontFace: F.display, fontSize: 18, bold: true, color: C.white, margin: 0 });
  sl.addText("Solutions", { x: 1.85 + 1.35, y: 3.43, w: 3, h: 0.38, fontFace: F.display, fontSize: 18, bold: false, color: C.sand, margin: 0 });

  // Facts list
  const facts = [
    "Style: Combination mark — square icon with bold 'S' initial + weighted wordmark",
    "Icon shape: Rounded-corner square (border-radius 8px) in Navy or Gold depending on context",
    "Wordmark: 'Salesman' (bold 700) + 'Solutions' (light 400 / opacity 0.7) — split weight treatment",
    "Icon colors: Navy on light backgrounds · Gold on dark backgrounds",
    "Iconography elsewhere: Gold SVG arrows (→) used on all service card CTAs",
    "Section numbers: Large ghost-opacity gold numerals (52px, opacity ~20%) behind doctrine cards",
    "Visual motif: Glass panels (rgba white, ~4% opacity) + radial gold glows as ambient decoration",
  ];

  facts.forEach((fact, i) => {
    sl.addShape("ellipse", { x: 5.35, y: 1.47 + i * 0.63 + 0.08, w: 0.12, h: 0.12, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(fact, { x: 5.6, y: 1.42 + i * 0.63, w: 4.0, h: 0.55, fontFace: F.ui, fontSize: 9, color: C.navy, margin: 0, valign: "middle", lineSpacingMultiple: 1.3 });
  });
}

// ============================================================
// SLIDE 06 — LAYOUT & VISUAL PERSONALITY
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.white };
  sl.addText("PHASE 01  ·  VISUAL IDENTITY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Layout & Visual Personality", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 30, bold: true, color: C.navy, margin: 0 });

  const layoutItems = [
    ["Full-Bleed Hero Image", "Property photo fills 100vh; layered gradient (navy → transparent) creates depth"],
    ["Dark/Light Sandwich", "Navy hero → Cream tagline → White services → Sand feature → Navy doctrine → White founder → Cream cases → Navy CTA"],
    ["Card-heavy Grid", "Service cards use 3/4 aspect-ratio portrait cards with gradient overlays; case study cards white on cream"],
    ["Generous Padding", "100–120px vertical padding per section; content maxes at 1200–1320px"],
    ["Glassmorphism Panels", "Doctrine step cards: rgba(255,255,255,0.04) glass with 1px rgba border, backdrop-filter blur"],
    ["Gold Progress Bars", "Each doctrine card shows a gold progress bar (16.6% → 100%) indicating step completion"],
  ];

  layoutItems.forEach(([title, desc], i) => {
    const y = 1.4 + i * 0.67;
    sl.addShape("rect", { x: 0.4, y: y + 0.1, w: 0.06, h: 0.35, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(title, { x: 0.57, y, w: 4.1, h: 0.3, fontFace: F.ui, fontSize: 9.5, bold: true, color: C.navy, margin: 0 });
    sl.addText(desc, { x: 0.57, y: y + 0.3, w: 4.1, h: 0.3, fontFace: F.ui, fontSize: 8.5, color: "666666", margin: 0, lineSpacingMultiple: 1.3 });
  });

  // Scores
  sl.addText("Visual Personality Scores", { x: 5.15, y: 1.32, w: 4.4, h: 0.38, fontFace: F.ui, fontSize: 11, bold: true, color: C.navy, margin: 0 });

  const scores = [
    ["Budget ←→ Luxury", 7.5],
    ["Traditional ←→ Innovative", 7],
    ["Conservative ←→ Bold", 7.5],
    ["Playful ←→ Serious", 8.5],
    ["Minimal ←→ Rich", 7],
    ["Cold ←→ Warm", 7],
  ];

  scores.forEach(([label, val], i) => {
    const y = 1.82 + i * 0.6;
    sl.addText(label, { x: 5.15, y, w: 4.4, h: 0.22, fontFace: F.ui, fontSize: 8.5, color: C.navy, margin: 0 });
    sl.addShape("rect", { x: 5.15, y: y + 0.24, w: 4.4, h: 0.18, fill: { color: "EEEEEE" }, line: { color: "DDDDDD" } });
    sl.addShape("rect", { x: 5.15, y: y + 0.24, w: 4.4 * (val / 10), h: 0.18, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(val + "/10", { x: 9.6, y: y + 0.22, w: 0.5, h: 0.22, fontFace: F.ui, fontSize: 8, color: "888888", bold: true, margin: 0 });
  });

  ["Prestigious", "Structured", "Warm", "Authoritative", "Refined"].forEach((adj, i) => {
    sl.addShape("rect", { x: 5.15 + i * 0.88, y: 5.1, w: 0.8, h: 0.28, fill: { color: C.navy }, line: { color: C.navy }, rectRadius: 0.06 });
    sl.addText(adj, { x: 5.15 + i * 0.88, y: 5.1, w: 0.8, h: 0.28, fontFace: F.ui, fontSize: 7.5, color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
  });
}

// ============================================================
// SLIDE 07 — SECTION HEADER: PHASE 2 VERBAL IDENTITY
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.navyDeep };
  sl.addShape("rect", { x: 0, y: 5.55, w: 10, h: 0.075, fill: { color: C.gold }, line: { color: C.gold } });
  sl.addText("PHASE 02", { x: 0.5, y: 1.4, w: 9, h: 0.55, fontFace: F.ui, fontSize: 11, color: C.gold, charSpacing: 5, bold: true, margin: 0 });
  sl.addText("Verbal Identity\nAnalysis", { x: 0.5, y: 1.9, w: 9, h: 2.1, fontFace: F.display, fontSize: 56, bold: true, color: C.white, margin: 0, lineSpacingMultiple: 1.0 });
  sl.addText("Voice  ·  Tone  ·  Vocabulary  ·  Grammar  ·  Rhetoric  ·  CTAs", { x: 0.5, y: 4.5, w: 9, h: 0.4, fontFace: F.ui, fontSize: 11, color: "6682AA", margin: 0 });
}

// ============================================================
// SLIDE 08 — BRAND VOICE & TONE
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.cream };
  sl.addText("PHASE 02  ·  VERBAL IDENTITY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Brand Voice & Tone", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 32, bold: true, color: C.navy, margin: 0 });

  const scales = [
    ["Casual", "Formal", 8],
    ["Playful", "Serious", 8],
    ["Simple", "Complex", 5],
    ["Sarcastic", "Sincere", 9],
    ["Bold", "Understated", 8.5],
    ["Authoritative", "Approachable", 6],
  ];

  scales.forEach(([left, right, val], i) => {
    const y = 1.4 + i * 0.65;
    sl.addText(left, { x: 0.4, y, w: 1.8, h: 0.28, fontFace: F.ui, fontSize: 9.5, color: "888888", align: "left", margin: 0 });
    sl.addText(right, { x: 7.8, y, w: 1.8, h: 0.28, fontFace: F.ui, fontSize: 9.5, color: "888888", align: "right", margin: 0 });
    sl.addShape("rect", { x: 2.3, y: y + 0.06, w: 5.4, h: 0.16, fill: { color: "E5E0D5" }, line: { color: "DDDDDD" } });
    const nx = 2.3 + 5.4 * (val / 10) - 0.06;
    sl.addShape("rect", { x: nx, y: y + 0.02, w: 0.12, h: 0.24, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(val + "/10", { x: 7.45, y, w: 0.5, h: 0.28, fontFace: F.ui, fontSize: 7.5, color: C.gold, bold: true, margin: 0 });
  });

  sl.addShape("rect", { x: 0.4, y: 5.05, w: 9.2, h: 0.01, fill: { color: "DDDDDD" }, line: { color: "DDDDDD" } });
  sl.addText("Evidence: \"We identify inefficiencies, build standardized workflows...\"  ·  \"...we engineer how environments function.\"  ·  \"Reactive maintenance is 3–5× more expensive than structured triage.\"", {
    x: 0.4, y: 5.12, w: 9.2, h: 0.35, fontFace: F.ui, fontSize: 7.5, color: "888888", italic: true, margin: 0,
  });
}

// ============================================================
// SLIDE 09 — VOCABULARY & LANGUAGE PATTERNS
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.navyDeep };
  sl.addText("PHASE 02  ·  VERBAL IDENTITY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Vocabulary & Language Patterns", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 28, bold: true, color: C.white, margin: 0 });

  const words = [
    ["Engineered", 18, C.white], ["Operational", 15, "6682AA"], ["Framework", 20, C.gold],
    ["Standardized", 14, "6682AA"], ["Repeatable", 16, C.white], ["Systems-first", 17, C.gold],
    ["Triage", 13, C.white], ["Doctrine", 16, C.gold], ["Audit", 15, C.white],
    ["Precision", 16, "6682AA"], ["Accountability", 13, "6682AA"], ["Deploy", 14, C.white],
    ["Scalable", 15, C.gold], ["Inefficiency", 13, "6682AA"], ["Embedded", 14, C.white],
  ];
  const positions = [
    [0.5, 1.4], [2.2, 1.4], [3.9, 1.4], [5.7, 1.4], [7.3, 1.4],
    [0.8, 2.3], [2.6, 2.3], [4.5, 2.3], [6.1, 2.3], [7.9, 2.3],
    [1.2, 3.2], [3.0, 3.2], [5.0, 3.2], [6.7, 3.2], [8.2, 3.2],
  ];
  words.forEach(([word, size, col], i) => {
    sl.addText(word, { x: positions[i][0], y: positions[i][1], w: 2.5, h: 0.55, fontFace: F.ui, fontSize: size, color: col, bold: size >= 17, margin: 0 });
  });

  const langStats = [
    ["Grade 10–12", "Reading Level"],
    ["Avg 15–22 words", "Sentence Length"],
    ["Zero emojis", "Emoji Usage"],
    ["Title Case CTAs", "CTA Style"],
    ["We / You / Your", "Primary POV"],
  ];

  sl.addShape("rect", { x: 0, y: 4.05, w: 10, h: 1.575, fill: { color: "131D36" }, line: { color: "131D36" } });
  langStats.forEach(([val, label], i) => {
    const x = 0.3 + i * 1.94;
    sl.addText(val, { x, y: 4.22, w: 1.8, h: 0.5, fontFace: F.display, fontSize: 14, bold: true, color: C.white, align: "center", margin: 0 });
    sl.addText(label, { x, y: 4.74, w: 1.8, h: 0.28, fontFace: F.ui, fontSize: 7.5, color: "6682AA", align: "center", margin: 0 });
    if (i < 4) sl.addShape("rect", { x: x + 1.8, y: 4.25, w: 0.02, h: 0.9, fill: { color: "253461" }, line: { color: "253461" } });
  });
}

// ============================================================
// SLIDE 10 — RHETORICAL PATTERNS & CTAs
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.white };
  sl.addText("PHASE 02  ·  VERBAL IDENTITY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Rhetorical Patterns & CTAs", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 30, bold: true, color: C.navy, margin: 0 });

  const rhetorical = [
    { title: "Authority via Process", desc: "Numbered frameworks (01–06) position the brand as methodical. \"Doctrine\" signals a codified operating system, not a preference." },
    { title: "Data-Forward Social Proof", desc: "150+ jobs, 90%+, <48hr response, 30+ luxury units. Metrics replace testimonials — numbers speak louder than quotes." },
    { title: "Contrast Framing", desc: "Section head 'Unique by doctrine. Connected by systems.' sets up the differentiation before any feature is listed." },
    { title: "Category Redefinition", desc: "\"We don't just complete tasks — we engineer how environments function.\" Reframes the competitive category entirely." },
  ];

  rhetorical.forEach((item, i) => {
    const col = i % 2; const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.8; const y = 1.42 + row * 1.72;
    sl.addShape("rect", { x, y, w: 4.5, h: 1.57, fill: { color: C.sandLight }, line: { color: "DDDDDD" }, shadow: makeShadow() });
    sl.addShape("rect", { x, y, w: 0.07, h: 1.57, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(item.title, { x: x + 0.18, y: y + 0.14, w: 4.1, h: 0.35, fontFace: F.ui, fontSize: 11, bold: true, color: C.navy, margin: 0 });
    sl.addText(item.desc, { x: x + 0.18, y: y + 0.5, w: 4.1, h: 0.95, fontFace: F.ui, fontSize: 8.5, color: "666666", margin: 0, lineSpacingMultiple: 1.4 });
  });

  sl.addShape("rect", { x: 0.4, y: 4.92, w: 9.2, h: 0.65, fill: { color: C.navyDeep }, line: { color: C.navyDeep } });
  sl.addShape("rect", { x: 0.4, y: 4.92, w: 0.08, h: 0.65, fill: { color: C.gold }, line: { color: C.gold } });
  sl.addText("CTAs:  \"Request Assessment\"  ·  \"View Our System\"  →  Direct Imperative Commands  ·  Gold buttons on Navy deep, Navy text on Gold pill", {
    x: 0.58, y: 4.98, w: 9.0, h: 0.45, fontFace: F.ui, fontSize: 9, color: C.white, margin: 0, valign: "middle",
  });
}

// ============================================================
// SLIDE 11 — SECTION HEADER: PHASE 3 BRAND PERSONALITY
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.gold };
  sl.addText("PHASE 03", { x: 0.5, y: 1.4, w: 9, h: 0.55, fontFace: F.ui, fontSize: 11, color: C.navyDeep, charSpacing: 5, bold: true, margin: 0 });
  sl.addText("Core Brand\nPersonality", { x: 0.5, y: 1.9, w: 9, h: 2.1, fontFace: F.display, fontSize: 52, bold: true, color: C.navyDeep, margin: 0, lineSpacingMultiple: 1.0 });
  sl.addText("Character  ·  Archetype  ·  Customer Relationship", { x: 0.5, y: 4.5, w: 9, h: 0.4, fontFace: F.ui, fontSize: 11, color: C.navyDeep, margin: 0 });
}

// ============================================================
// SLIDE 12 — BRAND AS A PERSON
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.navyDeep };
  sl.addText("PHASE 03  ·  BRAND PERSONALITY", { x: 0.4, y: 0.22, w: 6, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("If Salesman Solutions Were a Person", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 26, bold: true, color: C.white, margin: 0 });

  const persona = [
    ["Described as", "A young, focused Jamaican-born operator who built credibility through execution, not pitch. Disciplined, data-driven, equally comfortable in a hotel lobby or on a job site."],
    ["Drives", "A clean, navy-toned pickup truck. Professional enough for hospitality clients, durable enough for property maintenance."],
    ["At a dinner party", "Speaks precisely. Leads with results, not enthusiasm. Redirects vague conversation to specific measurable outcomes."],
    ["Passionate about", "Turning chaos into frameworks. Documenting the work so it can scale. Proving that operational excellence is a form of artistry."],
    ["Would never say", "\"Let's figure it out as we go.\" or \"That's good enough.\" or \"We'll improvise.\""],
    ["Friends say", "\"The person you call when something is broken and you need it fixed — permanently, not temporarily.\""],
    ["Excited by", "A new market, a new property, a new engagement that lets him package another operational playbook."],
  ];

  persona.forEach(([label, text], i) => {
    const y = 1.42 + i * 0.58;
    sl.addShape("rect", { x: 0.4, y: y + 0.06, w: 0.05, h: 0.28, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(label + ":", { x: 0.55, y, w: 1.55, h: 0.28, fontFace: F.ui, fontSize: 8.5, bold: true, color: C.gold, margin: 0 });
    sl.addText(text, { x: 2.15, y, w: 7.45, h: 0.52, fontFace: F.ui, fontSize: 8.5, color: "99AABB", margin: 0, lineSpacingMultiple: 1.3 });
  });
}

// ============================================================
// SLIDE 13 — CUSTOMER RELATIONSHIP
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.cream };
  sl.addText("PHASE 03  ·  BRAND PERSONALITY", { x: 0.4, y: 0.22, w: 6, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Relationship with the Customer", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 30, bold: true, color: C.navy, margin: 0 });

  const roles = [
    { role: "Problem Solver  ★", active: true, desc: "Primary: Enters with a diagnosis, not a pitch. Audit first, execute second. Every case study proves this." },
    { role: "Authority Figure  ★", active: true, desc: "Secondary: 6-step Doctrine + data-led case studies establish expertise before trust is asked for." },
    { role: "Mentor/Guide  ★", active: true, desc: "Secondary: The Doctor framework educates before prescribing — reveals inefficiency so client sees the need." },
    { role: "Partner/Collaborator", active: false, desc: "Emerging: 9-month LiveBetter engagement and embedded operations point toward long-term partnership." },
    { role: "Friend/Peer", active: false, desc: "Not primary. Tone is warm but decidedly professional — personal but never casual." },
    { role: "Cheerleader/Supporter", active: false, desc: "Absent. Brand doesn't inspire broadly — it solves specifically and documents the proof." },
  ];

  roles.forEach((item, i) => {
    const col = i % 2; const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.8; const y = 1.38 + row * 1.35;
    sl.addShape("rect", { x, y, w: 4.5, h: 1.2, fill: { color: item.active ? C.navyDeep : C.white }, line: { color: item.active ? C.navyDeep : "DDDDDD" } });
    sl.addShape("rect", { x, y, w: 0.07, h: 1.2, fill: { color: item.active ? C.gold : "DDDDDD" }, line: { color: item.active ? C.gold : "DDDDDD" } });
    sl.addText(item.role, { x: x + 0.18, y: y + 0.1, w: 4.1, h: 0.35, fontFace: F.ui, fontSize: 11, bold: true, color: item.active ? C.white : "999999", margin: 0 });
    sl.addText(item.desc, { x: x + 0.18, y: y + 0.45, w: 4.1, h: 0.65, fontFace: F.ui, fontSize: 8.5, color: item.active ? "99AABB" : "AAAAAA", margin: 0, lineSpacingMultiple: 1.35 });
  });
}

// ============================================================
// SLIDE 14 — SECTION HEADER: PHASE 4 CONTENT
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.sandLight };
  sl.addShape("rect", { x: 0, y: 0, w: 0.18, h: 5.625, fill: { color: C.navy }, line: { color: C.navy } });
  sl.addText("PHASE 04", { x: 0.7, y: 1.4, w: 9, h: 0.55, fontFace: F.ui, fontSize: 11, color: "8899BB", charSpacing: 5, bold: true, margin: 0 });
  sl.addText("Content &\nCommunication\nPatterns", { x: 0.7, y: 1.9, w: 8.7, h: 2.5, fontFace: F.display, fontSize: 44, bold: true, color: C.navy, margin: 0, lineSpacingMultiple: 1.05 });
  sl.addText("Pillars  ·  Formats  ·  Social Proof  ·  Engagement", { x: 0.7, y: 4.55, w: 9, h: 0.4, fontFace: F.ui, fontSize: 11, color: "888888", margin: 0 });
}

// ============================================================
// SLIDE 15 — CONTENT PILLARS
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.white };
  sl.addText("PHASE 04  ·  CONTENT & COMMUNICATION", { x: 0.4, y: 0.22, w: 7, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Content Pillars & Formats", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 32, bold: true, color: C.navy, margin: 0 });

  const pillars = [
    { num: "01", title: "Operational Excellence", desc: "Systems thinking, structured frameworks, 6-step doctrine. The intellectual core and differentiator." },
    { num: "02", title: "Property & Hospitality", desc: "Physical environments as platforms: inspection, maintenance, turnover, luxury supply." },
    { num: "03", title: "Founder Journey", desc: "Kingston → FSU → Tallahassee → Hospitality → Digital. Narrative of built-from-zero credibility." },
    { num: "04", title: "Digital Infrastructure", desc: "Websites, dashboards, automation. Technology as an ops layer — not a separate product identity." },
    { num: "05", title: "Named Operations", desc: "Operations documented as case studies: First Mile, LiveBetter, Saatva, Miss Scholastic." },
  ];

  pillars.forEach((p, i) => {
    const x = 0.4 + i * 1.84;
    const isFirst = i === 0;
    sl.addShape("rect", { x, y: 1.35, w: 1.66, h: 2.8, fill: { color: isFirst ? C.navyDeep : C.sandLight }, line: { color: isFirst ? C.navyDeep : "DDDDDD" } });
    sl.addShape("rect", { x, y: 1.35, w: 1.66, h: 0.06, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(p.num, { x: x + 0.12, y: 1.48, w: 1.42, h: 0.45, fontFace: F.display, fontSize: 20, bold: true, color: C.gold, margin: 0 });
    sl.addText(p.title, { x: x + 0.12, y: 1.95, w: 1.42, h: 0.7, fontFace: F.ui, fontSize: 9, bold: true, color: isFirst ? C.white : C.navy, margin: 0, lineSpacingMultiple: 1.3 });
    sl.addText(p.desc, { x: x + 0.12, y: 2.65, w: 1.42, h: 1.35, fontFace: F.ui, fontSize: 7.5, color: isFirst ? "8899BB" : "777777", margin: 0, lineSpacingMultiple: 1.3 });
  });

  sl.addShape("rect", { x: 0.4, y: 4.3, w: 9.2, h: 1.18, fill: { color: C.navyDeep }, line: { color: C.navyDeep } });
  sl.addShape("rect", { x: 0.4, y: 4.3, w: 0.08, h: 1.18, fill: { color: C.gold }, line: { color: C.gold } });
  const fmts = [["Long-form case studies", "Named ops with problem / approach / outcome"], ["Numbered Doctrine", "6-step frameworks give every section a spine"], ["Large Stat callouts", "150+  4+  50+  30+ — evidence over enthusiasm"], ["Comparison Layout", "Structured side-by-side or contrasting two worlds"]];
  fmts.forEach(([title, desc], i) => {
    const x = 0.6 + i * 2.3;
    sl.addText(title, { x, y: 4.42, w: 2.1, h: 0.3, fontFace: F.ui, fontSize: 9, bold: true, color: C.white, margin: 0 });
    sl.addText(desc, { x, y: 4.74, w: 2.1, h: 0.6, fontFace: F.ui, fontSize: 7.5, color: "7A8BAA", margin: 0, lineSpacingMultiple: 1.3 });
  });
}

// ============================================================
// SLIDE 16 — SOCIAL PROOF (CASE STUDIES)
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.navyDeep };
  sl.addText("PHASE 04  ·  CONTENT & COMMUNICATION", { x: 0.4, y: 0.22, w: 7, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Social Proof Strategy", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 32, bold: true, color: C.white, margin: 0 });

  const cases = [
    { op: "Operation First Mile", kpi: "150+\nJobs", sub: "0 re-delivery Q4  ·  3 retail pipelines", year: "2021–22", bg: "2B3A67" },
    { op: "Operation LiveBetter", kpi: "<48hr\nResponse", sub: "5+ days → <48hr  ·  9-month engagement", year: "2022–23", bg: "3D4F7C" },
    { op: "Operation Saatva", kpi: "30+\nUnits", sub: "100% on-time  ·  Wyndham, Hilton, Marriott", year: "2023", bg: "1E2A4A" },
    { op: "Operation Miss Scholastic", kpi: "0→Full\nInfra", sub: "On-time launch  ·  100% staff self-sufficient", year: "2023–24", bg: C.goldDark },
  ];

  cases.forEach((cs, i) => {
    const x = 0.35 + i * 2.35;
    sl.addShape("rect", { x, y: 1.38, w: 2.2, h: 3.5, fill: { color: "141D36" }, line: { color: "253461" } });
    sl.addShape("rect", { x, y: 1.38, w: 2.2, h: 0.06, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(cs.year, { x: x + 0.14, y: 1.5, w: 1.92, h: 0.24, fontFace: F.ui, fontSize: 7.5, color: "6682AA", margin: 0 });
    sl.addText(cs.op, { x: x + 0.14, y: 1.76, w: 1.92, h: 0.62, fontFace: F.ui, fontSize: 9.5, bold: true, color: C.white, margin: 0, lineSpacingMultiple: 1.2 });
    sl.addText(cs.kpi, { x: x + 0.14, y: 2.45, w: 1.92, h: 1.0, fontFace: F.display, fontSize: 30, bold: true, color: C.gold, margin: 0, lineSpacingMultiple: 1.0 });
    sl.addText(cs.sub, { x: x + 0.14, y: 3.55, w: 1.92, h: 1.1, fontFace: F.ui, fontSize: 7.5, color: "6682AA", margin: 0, lineSpacingMultiple: 1.4 });
  });

  sl.addText("Proof Strategy: Operations are named, numbered, documented. Data-forward credibility (metrics replace testimonials). No celebrity endorsement — outcomes speak.", {
    x: 0.4, y: 5.07, w: 9.2, h: 0.42, fontFace: F.ui, fontSize: 8.5, color: "6682AA", italic: true, margin: 0,
  });
}

// ============================================================
// SLIDE 17 — SUMMARY & CONFIDENCE
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.cream };
  sl.addText("ANALYSIS SUMMARY", { x: 0.4, y: 0.22, w: 5, h: 0.28, fontFace: F.ui, fontSize: 7, color: C.gold, charSpacing: 3, bold: true, margin: 0 });
  sl.addText("Analysis Summary & Confidence Score", { x: 0.4, y: 0.55, w: 9.2, h: 0.65, fontFace: F.display, fontSize: 27, bold: true, color: C.navy, margin: 0 });

  const summary = [
    "Color system: Navy #2B3A67 / Navy Deep #1E2A4A (dominant, ~75%) + Gold #C9A96E (sole accent, all CTAs & stats) + Cream/Sand (light backgrounds). Zero orange, zero red.",
    "Typography: Outfit (display, 400–800wt) + Inter (body, 300–600wt). Headlines tracking −0.03/−0.04em. Body line-height 1.6–1.8.",
    "Logo: Rounded-square icon (navy or gold context-switch) + weighted wordmark. Gold SVG arrows on all service CTAs.",
    "Brand personality maps to: The Strategist / Authority Figure. Methodical, evidence-obsessed, results-led. Warm but not casual.",
    "Verbal identity: Grade 10–12, zero emojis, no slang. Heavy operational vocabulary. Second-person (You / Your) with We for authority.",
    "Content strategy: Named operations as case studies replace testimonials. Numbered frameworks replace bullet lists. Metrics replace enthusiasm.",
    "Customer role: Problem Solver (primary) → Authority who earns trust through audit-first diagnosis → long-term systems partner.",
  ];

  summary.forEach((item, i) => {
    sl.addShape("ellipse", { x: 0.4, y: 1.43 + i * 0.58 + 0.1, w: 0.12, h: 0.12, fill: { color: C.gold }, line: { color: C.gold } });
    sl.addText(item, { x: 0.65, y: 1.4 + i * 0.58, w: 9.0, h: 0.52, fontFace: F.ui, fontSize: 8.8, color: C.navy, margin: 0, lineSpacingMultiple: 1.3 });
  });

  sl.addShape("rect", { x: 0.4, y: 5.12, w: 9.2, h: 0.4, fill: { color: C.navyDeep }, line: { color: C.navyDeep } });
  sl.addShape("rect", { x: 0.4, y: 5.12, w: 0.08, h: 0.4, fill: { color: C.gold }, line: { color: C.gold } });
  sl.addText("Confidence Score:  9 / 10  — Analyzed directly from index.html source, inline CSS variables, Tailwind config, and section-by-section copy.", {
    x: 0.58, y: 5.15, w: 9.0, h: 0.35, fontFace: F.ui, fontSize: 8.8, color: C.white, margin: 0, valign: "middle",
  });
}

// ============================================================
// SLIDE 18 — CLOSING
// ============================================================
{
  let sl = pres.addSlide();
  sl.background = { color: C.navyDeep };

  // Ambient gold glow
  sl.addShape("ellipse", { x: 0.5, y: 1.5, w: 9, h: 6, fill: { color: C.gold, transparency: 92 }, line: { color: C.gold, transparency: 100 } });

  sl.addShape("rect", { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.gold }, line: { color: C.gold } });

  sl.addText("\"The system starts with\na conversation.\"", {
    x: 0.55, y: 0.8, w: 8.8, h: 2.2, fontFace: F.display, fontSize: 36, bold: true, color: C.white, margin: 0, lineSpacingMultiple: 1.1, italic: true,
  });

  sl.addText("— Salesman Solutions", { x: 0.55, y: 3.05, w: 7, h: 0.45, fontFace: F.ui, fontSize: 13, color: C.gold, margin: 0 });

  sl.addShape("rect", { x: 0.55, y: 3.65, w: 1.5, h: 0.04, fill: { color: C.gold, transparency: 60 }, line: { color: C.gold, transparency: 60 } });

  sl.addText("Built on Systems. Driven by Results.", { x: 0.55, y: 3.8, w: 8, h: 0.35, fontFace: F.ui, fontSize: 11, color: C.sand, italic: true, margin: 0 });

  sl.addText("JaheimSalesman@gmail.com  ·  954-830-6310  ·  Tallahassee, FL & South Florida, FL", {
    x: 0.55, y: 4.8, w: 9, h: 0.3, fontFace: F.ui, fontSize: 9, color: "5A6A8A", margin: 0,
  });

  // Logo
  sl.addShape("rect", { x: 9.02, y: 5.1, w: 0.48, h: 0.48, fill: { color: C.gold }, line: { color: C.gold }, rectRadius: 0.06 });
  sl.addText("S", { x: 9.02, y: 5.1, w: 0.48, h: 0.48, fontFace: F.display, fontSize: 17, bold: true, color: C.navyDeep, align: "center", valign: "middle", margin: 0 });
}

// ─── WRITE ──────────────────────────────────────────────────
const out = "C:\\Users\\MSI GAMING\\Documents\\Salesman\\Salesman-Solutions-Brand-Identity.pptx";
pres.writeFile({ fileName: out })
  .then(() => console.log("✅  Saved:", out))
  .catch(err => console.error("❌  Error:", err));
