export interface Metric {
  value: string
  label: string
}

export interface CaseStudySection {
  overview: string
  problem: string
  approach: string
  execution: string
  outcomes: string
  lessons: string
}

export interface CaseStudy {
  slug: string
  platform: 'ASSAN' | 'IRIS'
  platformLabel: string
  name: string
  period: string
  tagline: string
  description: string
  metrics: Metric[]
  sections: CaseStudySection
  pullQuote: string
  pullQuoteAttrib: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'first-mile',
    platform: 'ASSAN',
    platformLabel: 'ASSAN OPERATION',
    name: 'Operation First Mile',
    period: '2021–2022',
    tagline: 'Building the operational model from the ground up.',
    description:
      'The foundational project that established the Salesman Solutions core operational model. Deployed across 150+ homes in the Tallahassee market, First Mile built the systems, workflows, and performance standards that every subsequent operation inherits.',
    metrics: [
      { value: '150+', label: 'Jobs Completed' },
      { value: '12mo', label: 'Operational Period' },
      { value: '3', label: 'Property Networks' },
    ],
    sections: {
      overview:
        'Operation First Mile was the originating engagement — the deployment that transformed a one-person operation into a structured, repeatable system. Launched in 2021 across the Tallahassee residential market, it covered property inspection, installation, maintenance coordination, turnover services, and general operational support for a network of property managers and individual landlords.',
      problem:
        'The residential property market in Tallahassee had significant fragmentation in service quality and no standardized operational layer connecting vendors, timelines, and outcomes. Property managers were reactive, coordinating labor through informal channels with inconsistent results. There was no documentation, no feedback loop, and no systemic improvement over time.',
      approach:
        'The approach was built on the Salesman Solutions 6-step doctrine applied for the first time at scale. Inefficiencies were mapped across the service journey — from intake to completion. A standardized operating model was built, covering workflow sequencing, job categorization, owner communication, and outcome documentation. Every process was designed to be repeatable by a team, not dependent on a single operator.',
      execution:
        'The team built intake systems using simple digital tools, created checklist-based inspection frameworks, and developed a tiered service categorization structure (routine, urgent, and complex). Jobs were documented at intake and closure, creating a data trail that informed pricing, scheduling, and vendor coordination. Communication protocols were standardized to reduce friction between operators and property owners.',
      outcomes:
        'Over 150 jobs were completed within the operational period with measurable consistency improvements across cycles. Repeat clients increased as reliability compounded. The documentation generated during this operation became the founding intellectual property of Salesman Solutions — the first operational playbook.',
      lessons:
        'First Mile confirmed that systems, not effort, determine scale. The most important output of the operation was not the 150+ jobs — it was the documented model that made those jobs reproducible. Every subsequent ASSAN operation operates from frameworks first established here.',
    },
    pullQuote:
      'The first mile is always the hardest — and the most instructive. Everything we built after this came from what we learned here.',
    pullQuoteAttrib: 'Jaheim Salesman, Founder',
  },
  {
    slug: 'livebetter',
    platform: 'ASSAN',
    platformLabel: 'ASSAN OPERATION',
    name: 'Operation LiveBetter',
    period: '2022–2023',
    tagline: 'Embedded operations inside a luxury residential complex.',
    description:
      'A nine-month embedded engagement at Landmark Metropolitan, one of Tallahassee\'s largest luxury residential properties. LiveBetter transformed a reactive, fragmented maintenance environment into a structured triage and resolution system with sub-48-hour response standards.',
    metrics: [
      { value: '<48hr', label: 'Tier 1 Response Time' },
      { value: '50+', label: 'Units Managed' },
      { value: '9mo', label: 'Embedded Duration' },
    ],
    sections: {
      overview:
        'Operation LiveBetter was the first long-term embedded deployment — a nine-month engagement inside Landmark Metropolitan, a luxury residential complex serving young professionals and graduate students in Tallahassee. The scope covered full-spectrum operational support: maintenance triage, space turnover, furniture delivery and assembly, and environment optimization.',
      problem:
        'Landmark Metropolitan faced chronic operational drag — maintenance requests accumulated without prioritization, turnover timelines were inconsistent, and the resident experience suffered from unpredictable service quality. The building had the physical infrastructure of a premium property without the operational backbone to sustain it.',
      approach:
        'A tiered response system was designed and implemented. Maintenance requests were categorized into three tiers: Tier 1 (life-safety, urgent — sub-48hr), Tier 2 (functional impact — 72hr), Tier 3 (cosmetic, scheduled). A physical operations hub was established on-site. Documentation flows were introduced to track every request from intake through resolution.',
      execution:
        'The team operated on-site with defined coverage hours, maintained a live request queue, and coordinated third-party vendors for specialized repairs. Turnover protocols were executed to a checklist-driven standard, reducing unit down-time between residents. Furniture delivery and room configuration followed a sequence model that cut setup time by 40% over the first two months.',
      outcomes:
        'Tier 1 response compliance reached 96% within 60 days of deployment. Resident satisfaction improved measurably based on management feedback. Unit turnover time decreased. The operation generated a full operational playbook for luxury residential environments — a redeployable ASSAN system.',
      lessons:
        'Embedded operations require more than external coordination — they demand presence, ownership, and cultural integration. The team that shows up consistently becomes the operational nervous system of a property. LiveBetter proved that consistent presence compounds into institutional trust.',
    },
    pullQuote:
      'When you are embedded in an environment, you stop being a vendor and start being part of the system. That shift changes everything.',
    pullQuoteAttrib: 'Jaheim Salesman, Founder',
  },
  {
    slug: 'saatva',
    platform: 'ASSAN',
    platformLabel: 'ASSAN OPERATION',
    name: 'Operation Saatva',
    period: '2023',
    tagline: 'Luxury supply chain meets hospitality deployment.',
    description:
      'Entry into the hospitality sector — combining renovation coordination with luxury supply partnerships across Wyndham, Hilton, and Marriott-adjacent properties. Saatva placed 30+ luxury units and established Salesman Solutions as a credible hospitality systems operator.',
    metrics: [
      { value: '30+', label: 'Luxury Units Placed' },
      { value: '3', label: 'Hotel Brand Networks' },
      { value: '10+', label: 'Hospitality Engagements' },
    ],
    sections: {
      overview:
        'Operation Saatva was the hospitality sector entry point — a deliberate expansion of the ASSAN deployment model from residential into hotel and short-term accommodation environments. The operation centered on luxury supply chain coordination, renovation support, and guest environment optimization across properties affiliated with Wyndham, Hilton, and Marriott brand networks.',
      problem:
        'Hospitality properties face a unique operational challenge: the physical environment must communicate quality instantly, with zero margin for inconsistency. Renovation projects and room-ready deployments typically suffer from vendor fragmentation, supply chain delays, and coordination failures that extend timelines and increase costs.',
      approach:
        'The ASSAN framework was adapted for hospitality: supply chain mapping, luxury product sourcing, vendor coordination, and environment delivery protocols. Strategic partnerships with premium mattress and furniture suppliers were established to reduce procurement lead times and ensure consistent quality standards.',
      execution:
        'Luxury units were coordinated across multiple properties, involving procurement, logistics, delivery sequencing, and white-glove installation. Renovation coordination was managed as a systems project — timelines mapped, milestones tracked, and quality checkpoints embedded throughout. Communication protocols between the operations team and property management were formalized.',
      outcomes:
        'Over 30 luxury units were placed across the property network. Repeat engagement requests were generated within the first quarter of the operation. Salesman Solutions established credibility in the hospitality vertical — a foundation for expanded ASSAN deployment into the sector.',
      lessons:
        'Hospitality is where the margin for error approaches zero. Every engagement is a proof point. Saatva demonstrated that the ASSAN system is not sector-specific — the same operational discipline that works in residential works in hospitality, with adapted execution protocols.',
    },
    pullQuote:
      'Hospitality operations demand precision at the moment of experience. Systems are not optional — they are the product.',
    pullQuoteAttrib: 'Jaheim Salesman, Founder',
  },
  {
    slug: 'miss-scholastic-america',
    platform: 'IRIS',
    platformLabel: 'IRIS OPTIMIZATION',
    name: 'Operation Miss Scholastic America',
    period: '2023–2024',
    tagline: 'Full digital infrastructure built from zero.',
    description:
      'A complete digital infrastructure build for the Miss Scholastic America pageant organization — from zero digital presence to a fully operational online ecosystem. Website, registration system, admin dashboard, and marketing infrastructure delivered as an integrated platform.',
    metrics: [
      { value: '0 → Full', label: 'Digital Infrastructure' },
      { value: '4', label: 'Systems Built' },
      { value: '1', label: 'Coded Operation' },
    ],
    sections: {
      overview:
        'Operation Miss Scholastic America was the flagship IRIS engagement — a ground-up digital infrastructure build for a national pageant organization. The scope covered website architecture and development, participant registration systems, an administrative dashboard for event management, and a marketing landing page framework. Every component was designed to integrate and scale.',
      problem:
        'Miss Scholastic America operated without a stable digital infrastructure. Participant registration was manual, coordination between event staff and management was fragmented, and the organization had no centralized digital presence capable of communicating its brand at scale. The absence of systems created operational drag at every stage of the event lifecycle.',
      approach:
        'The IRIS methodology was applied: audit the digital environment, identify friction points, map system requirements, build the infrastructure layer, and document the architecture for long-term operational continuity. The build was structured as an integrated system — not a collection of disconnected tools — with each component designed to communicate with the others.',
      execution:
        'The public-facing website was architected for clarity, brand authority, and conversion. A custom registration system was built to handle participant intake, data collection, and confirmation flows. The administrative dashboard provided event staff with real-time visibility into registration status, participant data, and operational timelines. Marketing landing pages were templated for rapid deployment across future events.',
      outcomes:
        'Miss Scholastic America moved from zero digital infrastructure to a fully operational online ecosystem within the project timeline. The registration system reduced manual processing by more than 80%. Administrative coordination improved significantly. The organization had, for the first time, a digital foundation designed to scale with their growth.',
      lessons:
        'Digital infrastructure is not a website — it is an operational layer. The Miss Scholastic America engagement confirmed that IRIS engagements must be designed as systems from the first line of architecture, not assembled from parts. Integration is not a feature. It is the foundation.',
    },
    pullQuote:
      'A digital platform without operational integration is just an expensive brochure. The system has to work — not just look good.',
    pullQuoteAttrib: 'Jaheim Salesman, Founder',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
