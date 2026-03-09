'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Operation {
  ghost: string
  tag: string
  name: string
  slug: string
  period: string
  description: string
  metrics: { value: string; label: string }[]
}

const operations: Operation[] = [
  {
    ghost: '01',
    tag: 'ASSAN OPERATION',
    name: 'Operation First Mile',
    slug: 'first-mile',
    period: '2021–2022',
    description:
      'The foundational deployment that built the Salesman Solutions operational model — 150+ jobs across the Tallahassee market establishing the core system.',
    metrics: [
      { value: '150+', label: 'Jobs Completed' },
      { value: '12mo', label: 'Duration' },
      { value: 'Tallahassee', label: 'Market' },
    ],
  },
  {
    ghost: '02',
    tag: 'ASSAN OPERATION',
    name: 'Operation LiveBetter',
    slug: 'livebetter',
    period: '2022–2023',
    description:
      'Nine-month embedded engagement at Landmark Metropolitan — transforming reactive maintenance into structured triage with sub-48-hour response standards.',
    metrics: [
      { value: '<48hr', label: 'Tier 1 Response' },
      { value: '50+', label: 'Units Managed' },
      { value: '9mo', label: 'Embedded' },
    ],
  },
  {
    ghost: '03',
    tag: 'ASSAN OPERATION',
    name: 'Operation Saatva',
    slug: 'saatva',
    period: '2023',
    description:
      'Hospitality sector entry — luxury supply chain coordination and renovation support across Wyndham, Hilton, and Marriott-adjacent properties.',
    metrics: [
      { value: '30+', label: 'Units Placed' },
      { value: '3', label: 'Hotel Networks' },
      { value: '10+', label: 'Engagements' },
    ],
  },
  {
    ghost: '04',
    tag: 'IRIS OPTIMIZATION',
    name: 'Operation Miss Scholastic America',
    slug: 'miss-scholastic-america',
    period: '2023–2024',
    description:
      'Full digital infrastructure delivered from zero — website, registration system, admin dashboard, and marketing framework for a national pageant organization.',
    metrics: [
      { value: '0→Full', label: 'Infrastructure' },
      { value: '4', label: 'Systems Built' },
      { value: '1', label: 'Digital Platform' },
    ],
  },
]

export default function ProofOfSystem() {
  return (
    <section style={{ background: '#fff', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-body font-semibold uppercase tracking-[0.15em]"
            style={{ fontSize: '12px', color: '#B8862A' }}
          >
            CODED WORK
          </span>
          <h2
            className="font-display font-bold mt-3"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              color: '#2B3A67',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Operations, Documented.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {operations.map((op, i) => (
            <motion.div
              key={op.ghost}
              className="navy-card group"
              style={{ padding: '36px 32px', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            >
              {/* Ghost numeral */}
              <span
                aria-hidden="true"
                className="font-display font-bold select-none pointer-events-none absolute"
                style={{
                  fontSize: 'clamp(80px, 10vw, 120px)',
                  color: 'rgba(184,134,42,0.1)',
                  top: '-10px',
                  right: '-8px',
                  lineHeight: 1,
                }}
              >
                {op.ghost}
              </span>

              {/* Platform tag */}
              <span
                className="font-body font-semibold uppercase tracking-[0.12em]"
                style={{ fontSize: '11px', color: '#B8862A' }}
              >
                {op.tag}
              </span>

              {/* Operation name */}
              <h3
                className="font-display font-bold text-white mt-3"
                style={{ fontSize: 'clamp(18px, 2vw, 22px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
              >
                {op.name}
              </h3>

              {/* Timeline */}
              <p
                className="font-body mt-1"
                style={{ fontSize: '13px', color: '#E8DCC8', opacity: 0.6 }}
              >
                {op.period}
              </p>

              {/* Description */}
              <p
                className="font-body mt-4"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}
              >
                {op.description}
              </p>

              {/* Metric chips */}
              <div className="flex flex-wrap gap-2 mt-5">
                {op.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: 'rgba(184,134,42,0.1)',
                      border: '1px solid rgba(184,134,42,0.2)',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                    }}
                  >
                    <span
                      className="font-display font-bold"
                      style={{ fontSize: '13px', color: '#B8862A' }}
                    >
                      {m.value}
                    </span>
                    <span
                      className="font-body ml-1"
                      style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* View link */}
              <Link
                href={`/case-studies/${op.slug}`}
                className="font-body font-semibold no-underline mt-6 inline-flex items-center gap-2 transition-colors duration-200"
                style={{ fontSize: '14px', color: '#B8862A' }}
              >
                View Operation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
