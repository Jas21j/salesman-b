'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '@/data/caseStudies'

type Filter = 'all' | 'assan' | 'iris'

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = caseStudies.filter((cs) => {
    if (filter === 'all') return true
    if (filter === 'assan') return cs.platform === 'ASSAN'
    return cs.platform === 'IRIS'
  })

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#1E2A4A', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/case-studies-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
          aria-hidden="true"
          priority
        />
        {/* Navy overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.70)' }} />
        {/* Bottom fade into the filter/cards section */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #FDFBF7 0%, transparent 100%)', zIndex: 1 }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>CODED WORK</span>
            <h1 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
              The Work, Documented.
            </h1>
            <p className="font-body font-light mt-5" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '520px' }}>
              Four coded operations. Two platforms. Every engagement documented from problem to playbook.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Cards ── */}
      <section style={{ background: '#FDFBF7', padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {([['all', 'All Operations'], ['assan', 'ASSAN Operations'], ['iris', 'IRIS Optimizations']] as [Filter, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="font-body font-semibold"
                style={{
                  fontSize: '13px',
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  border: '1.5px solid',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  background: filter === key ? '#B8862A' : 'transparent',
                  borderColor: filter === key ? '#B8862A' : 'rgba(43,58,103,0.2)',
                  color: filter === key ? '#1E2A4A' : 'rgba(43,58,103,0.6)',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((cs, i) => (
                <motion.div
                  key={cs.slug}
                  layout
                  className="navy-card"
                  style={{ padding: '40px 32px', position: 'relative', overflow: 'hidden' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Ghost numeral */}
                  <span aria-hidden="true" className="font-display font-bold select-none pointer-events-none absolute" style={{ fontSize: 'clamp(70px, 9vw, 110px)', color: 'rgba(184,134,42,0.1)', top: '-8px', right: '-6px', lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="font-body font-semibold uppercase tracking-[0.12em]" style={{ fontSize: '11px', color: '#B8862A' }}>{cs.platformLabel}</span>
                  <h2 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{cs.name}</h2>
                  <p className="font-body mt-1" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{cs.period}</p>
                  <p className="font-body mt-4" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{cs.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {cs.metrics.slice(0, 2).map(m => (
                      <div key={m.label} style={{ background: 'rgba(184,134,42,0.1)', border: '1px solid rgba(184,134,42,0.2)', borderRadius: '9999px', padding: '4px 12px' }}>
                        <span className="font-display font-bold" style={{ fontSize: '13px', color: '#B8862A' }}>{m.value}</span>
                        <span className="font-body ml-1" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${cs.slug}`} className="font-body font-semibold no-underline mt-6 inline-flex items-center gap-2" style={{ fontSize: '14px', color: '#B8862A' }}>
                    View Operation
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
