'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { InsightItem } from './fallback'

type Props = {
  insights: InsightItem[]
  hasLiveData: boolean
}

export default function InsightsContent({ insights, hasLiveData }: Props) {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1E2A4A', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#C9A96E' }}>OPERATIONAL INTELLIGENCE</span>
            <h1 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              What the data tells us<br />about operational failure.
            </h1>
            <p className="font-body font-light mt-6" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '560px' }}>
              Research, analysis, and operational intelligence from Salesman Solutions — grounded in primary sources and applied in the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section style={{ background: '#FDFBF7', padding: '100px 24px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {insights.map((insight, i) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                  gap: '48px',
                  alignItems: 'start',
                  paddingBottom: '64px',
                  borderBottom: i < insights.length - 1 ? '1px solid rgba(43,58,103,0.1)' : 'none',
                }}
              >
                {/* Left — meta */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <span className="font-body font-semibold uppercase tracking-[0.12em]" style={{ fontSize: '11px', color: '#C9A96E' }}>
                      {insight.tag}
                    </span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(43,58,103,0.2)', flexShrink: 0 }} />
                    <span className="font-body" style={{ fontSize: '12px', color: 'rgba(43,58,103,0.45)' }}>{insight.readTime}</span>
                  </div>

                  <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.75rem)', color: '#2B3A67', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
                    {insight.isExternal && insight.url ? (
                      <a href={insight.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        {insight.title}
                        <span style={{ fontSize: '0.65em', verticalAlign: 'super', marginLeft: 4, opacity: 0.4 }}>↗</span>
                      </a>
                    ) : insight.title}
                  </h2>

                  <p className="font-body" style={{ fontSize: '16px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.7 }}>
                    {insight.summary}
                  </p>

                  <div style={{ marginTop: '24px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        background: '#1E2A4A',
                        color: '#C9A96E',
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 600,
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                      }}
                    >
                      {insight.platform}
                    </span>
                  </div>
                </div>

                {/* Right — body */}
                <div>
                  {insight.body.map((para, pi) => (
                    <p key={pi} className="font-body" style={{ fontSize: '15px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.8, marginBottom: pi < insight.body.length - 1 ? '20px' : '0' }}>
                      {para}
                    </p>
                  ))}

                  <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(43,58,103,0.08)' }}>
                    <p className="font-body" style={{ fontSize: '12px', color: 'rgba(43,58,103,0.4)', fontStyle: 'italic' }}>
                      Source: {insight.source}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Source methodology note */}
          {hasLiveData && (
            <div style={{ marginTop: 48, padding: '20px 24px', background: 'rgba(43,58,103,0.04)', borderRadius: 10, borderLeft: '3px solid rgba(201,169,110,0.4)' }}>
              <p className="font-body" style={{ fontSize: '13px', color: 'rgba(43,58,103,0.5)', lineHeight: 1.6 }}>
                Industry updates are sourced from global news intelligence feeds and refreshed hourly. Curated analysis reflects Salesman Solutions operational research.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1E2A4A', padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Ready to apply these insights to your operation?
            </h2>
            <p className="font-body font-light mt-4" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              Every engagement starts with an operational audit. Tell us where you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/contact"
                style={{ background: '#C9A96E', color: '#1E2A4A', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15px', padding: '16px 40px', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block', letterSpacing: '0.01em' }}
              >
                START A CONVERSATION →
              </Link>
              <Link
                href="/case-studies"
                style={{ background: 'transparent', color: '#fff', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '15px', padding: '16px 32px', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block', border: '1.5px solid rgba(255,255,255,0.25)' }}
              >
                VIEW CASE STUDIES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
