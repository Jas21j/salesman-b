'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type InsightPreview = {
  tag: string
  title: string
  body: string
  source: string
}

const STATIC_INSIGHTS: InsightPreview[] = [
  {
    tag: 'OPERATIONS RESEARCH',
    title: 'The Coordination Tax',
    body: 'Organizations lose approximately 60% of operational capacity to coordination overhead — time spent managing processes rather than executing them. Systematic operations design is not optional; it is the margin.',
    source: 'Asana Work Index, 2023',
  },
  {
    tag: 'PROPERTY SYSTEMS',
    title: 'The Infrastructure Gap',
    body: 'Less than 30% of mid-market property operators have a documented maintenance protocol. The absence of documentation transforms every operational issue from a manageable process event into an organizational crisis.',
    source: 'Salesman Solutions Field Research',
  },
  {
    tag: 'ASSAN INSIGHTS',
    title: 'The Deployment Advantage',
    body: 'Companies deploying embedded operational systems report 2–3x improvement in issue resolution speed compared to reactive coordination models. Systems do not just improve outcomes — they compress the timeline between problem and resolution.',
    source: 'McKinsey Operations Practice',
  },
]

type Props = {
  articles?: InsightPreview[]
}

export default function Insights({ articles }: Props) {
  const insights = (articles && articles.length > 0 ? articles : STATIC_INSIGHTS).slice(0, 3)
  return (
    <section style={{ background: '#fff', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header row — text + image side by side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '64px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="font-body font-semibold uppercase tracking-[0.15em]"
              style={{ fontSize: '12px', color: '#B8862A' }}
            >
              OPERATIONAL INTELLIGENCE
            </span>
            <h2
              className="font-display font-bold mt-3"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: '#2B3A67',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
              }}
            >
              What the data tells us about operational failure — and how systems fix it
            </h2>
          </motion.div>

          {/* Operational Intelligence image */}
          <motion.div
            className="insights-header-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ position: 'relative', height: '280px', borderRadius: '16px', overflow: 'hidden' }}
          >
            <Image
              src="/operational-intelligence.webp"
              alt="Operational systems in action"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Light navy tint to keep brand cohesion */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.25)', borderRadius: '16px' }} />
          </motion.div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '20px',
          }}
        >
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              className="navy-card"
              style={{ padding: '40px 32px', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.4 } }}
            >
              {/* Ghost numeral */}
              <span
                aria-hidden="true"
                className="font-display font-bold select-none pointer-events-none absolute"
                style={{
                  fontSize: 'clamp(80px, 10vw, 120px)',
                  color: 'rgba(184,134,42,0.1)',
                  top: '-12px',
                  right: '-8px',
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Tag */}
              <span
                className="font-body font-semibold uppercase tracking-[0.12em]"
                style={{ fontSize: '10px', color: '#B8862A' }}
              >
                {insight.tag}
              </span>

              {/* Title */}
              <h3
                className="font-display font-bold text-white mt-4"
                style={{ fontSize: 'clamp(18px, 2vw, 22px)', letterSpacing: '-0.02em', lineHeight: 1.25 }}
              >
                {insight.title}
              </h3>

              {/* Body */}
              <p
                className="font-body mt-4"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}
              >
                {insight.body}
              </p>

              {/* Source */}
              <p
                className="font-body mt-5"
                style={{ fontSize: '11px', color: 'rgba(184,134,42,0.5)', letterSpacing: '0.03em' }}
              >
                {insight.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link to full insights page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginTop: '40px', textAlign: 'center' }}
        >
          <Link
            href="/insights"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#B8862A',
              textDecoration: 'none',
            }}
          >
            VIEW ALL INTELLIGENCE →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
