// Static fallback content — shown when Supabase and news API are both unavailable.
// Preserves the original curated insights from Phase 1.

export type InsightItem = {
  id: string
  tag: string
  title: string
  summary: string
  body: string[]
  source: string
  readTime: string
  platform: string
  url?: string
  isExternal?: boolean
  image?: string
}

export const FALLBACK_INSIGHTS: InsightItem[] = [
  {
    id: 'fallback-1',
    tag: 'OPERATIONAL INTELLIGENCE',
    title: 'The Coordination Tax: Why 70% of Transformations Fail',
    summary:
      'McKinsey research shows that 70% of large-scale transformations fall short of their targets. The common thread is not strategy or capital — it is the cost of coordination hidden inside every operation.',
    body: [
      'Every organization carries a coordination tax — the fraction of productive capacity consumed by managing complexity rather than creating value. For most enterprises, this tax runs between 25% and 40% of total operational capacity.',
      'The failure mode is consistent: as organizations scale, coordination overhead scales faster. New layers of management, communication tools, and approval chains are added. Each addition feels logical in isolation. The aggregate effect is a system that fights itself.',
      'ASSAN was built to address this directly. By systematizing coordination at the operational layer — standard operating procedures, embedded team structures, vendor relationships — the platform converts coordination overhead into deployable capacity.',
    ],
    source: 'McKinsey & Company, 2023 Global Transformation Survey',
    readTime: '4 min read',
    platform: 'ASSAN',
  },
  {
    id: 'fallback-2',
    tag: 'INFRASTRUCTURE ANALYSIS',
    title: 'The Infrastructure Gap: Digital Readiness in Service Industries',
    summary:
      'OECD data reveals that fewer than 1.5% of service-sector SMEs operate with fully integrated digital infrastructure. The gap between digital-ready and digital-lagging organizations is widening.',
    body: [
      'Digital infrastructure is not software. It is the operating system of an organization — how data flows, how decisions are made, how customer interactions are recorded, and how performance is measured.',
      'Most service-sector organizations have software. Few have infrastructure. The distinction matters: software solves point problems; infrastructure enables systemic performance.',
      'IRIS addresses the infrastructure gap by building from the system level down, not from the tool level up. The platform establishes data architecture, workflow logic, and integration layers before recommending any specific software.',
    ],
    source: 'OECD Digital Economy Outlook, 2024',
    readTime: '5 min read',
    platform: 'IRIS',
  },
  {
    id: 'fallback-3',
    tag: 'WORKFORCE SYSTEMS',
    title: 'The Asynchrony Problem: When Teams Move Faster Than Systems',
    summary:
      "Asana's Anatomy of Work report found that 60% of workers' time is spent on work about work. Systems design is the only durable fix.",
    body: [
      'The asynchrony problem occurs when team execution speed outpaces system clarity. Workers know what needs to be done but spend disproportionate time navigating unclear processes, incomplete information, and redundant communication.',
      'The instinctive response is to add more meetings, more tools, more oversight. Each addition increases the burden on workers without resolving the underlying clarity deficit.',
      'Durable resolution requires system redesign — clarifying roles, defining handoffs, documenting decisions, and building information flows that match the actual pace of work.',
    ],
    source: 'Asana Anatomy of Work Index, 2024',
    readTime: '4 min read',
    platform: 'ASSAN',
  },
  {
    id: 'fallback-4',
    tag: 'ECONOMIC RESEARCH',
    title: 'The $1.6 Trillion Drain: Operational Inefficiency in the Global Economy',
    summary:
      'The World Economic Forum estimates that operational inefficiency costs the global economy over $1.6 trillion annually. The majority of this loss is not structural — it is systemic, and therefore solvable.',
    body: [
      'Operational inefficiency is not random. It clusters around predictable failure points: unclear ownership, misaligned incentives, disconnected systems, and delayed feedback loops.',
      'The WEF estimate represents only measurable losses. The unmeasured costs — strategic misalignment, talent attrition from operational frustration, foregone innovation — are likely larger.',
      'The systems design insight is that most operational loss is recoverable. Organizations that invest in operational infrastructure consistently outperform peers on every measured dimension.',
    ],
    source: 'World Economic Forum Future of Jobs Report, 2023',
    readTime: '6 min read',
    platform: 'ASSAN',
  },
]
