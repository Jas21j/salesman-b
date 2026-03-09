'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const capabilities = [
  { title: 'Property Systems Deployment', desc: 'Structured maintenance, inspection, and turnover protocols that create predictability across residential and commercial property portfolios.' },
  { title: 'Hospitality Operations', desc: 'Environment setup, renovation coordination, luxury supply chain, and guest-readiness protocols across hotel and short-stay environments.' },
  { title: 'Logistics Coordination', desc: 'Delivery sequencing, installation management, and vendor coordination that eliminates scheduling failure and timeline overrun.' },
  { title: 'Labor Network Management', desc: 'Field team coordination, performance tracking, and operational oversight for distributed workforces.' },
  { title: 'Field Execution Protocols', desc: 'On-the-ground deployment with embedded operational presence — not coordination from a distance, but execution from within.' },
  { title: 'Turnover & Space Reset', desc: 'Rapid, documented unit turnover and space reset protocols that minimize downtime and maximize readiness.' },
]

const assanOps = [
  { name: 'Operation First Mile', slug: 'first-mile', period: '2021–2022', desc: '150+ property operations establishing the foundational ASSAN model.' },
  { name: 'Operation LiveBetter', slug: 'livebetter', period: '2022–2023', desc: 'Nine-month embedded luxury residential deployment with structured triage.' },
  { name: 'Operation Saatva', slug: 'saatva', period: '2023', desc: 'Hospitality supply chain and renovation coordination across 3 hotel networks.' },
]

export default function ASSANPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#2B3A67', padding: '160px 24px 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none' }} />

        {/* Atmospheric ASSAN */}
        <div style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} aria-hidden="true">
          <span className="font-display font-bold select-none" style={{ fontSize: 'clamp(80px, 14vw, 200px)', color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.04em' }}>ASSAN</span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>PLATFORM</span>
            <div className="font-display font-bold" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)', color: '#B8862A', letterSpacing: '-0.04em', lineHeight: 0.85, marginTop: '8px' }}>
              ASSAN
            </div>
            <p className="font-body font-semibold uppercase tracking-wider mt-2" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
              Applied Systems for Service and Network Operations
            </p>
            <p className="font-body font-light mt-6" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '560px' }}>
              The operational deployment platform. ASSAN executes in the real world — bringing structured operations to property, hospitality, logistics, and labor environments.
            </p>
            <span className="font-body font-semibold uppercase tracking-[0.15em] block mt-6" style={{ fontSize: '11px', color: '#B8862A' }}>OPERATIONS</span>
          </motion.div>
        </div>
      </section>

      {/* ── Capability Cards ── */}
      <section style={{ background: '#FDFBF7', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div className="mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>CAPABILITIES</span>
            <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', color: '#2B3A67', letterSpacing: '-0.03em', lineHeight: 1.1 }}>What ASSAN deploys.</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="navy-card"
                style={{ padding: '36px 32px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <h3 className="font-display font-bold text-white" style={{ fontSize: '20px', letterSpacing: '-0.01em' }}>{cap.title}</h3>
                <div style={{ width: '24px', height: '2px', background: '#B8862A', margin: '14px 0', borderRadius: '2px' }} />
                <p className="font-body" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSAN Operations ── */}
      <section style={{ background: '#fff', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div className="mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>ASSAN OPERATIONS</span>
            <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', color: '#2B3A67', letterSpacing: '-0.03em' }}>Deployed operations.</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {assanOps.map((op, i) => (
              <motion.div
                key={op.slug}
                className="navy-card"
                style={{ padding: '36px 32px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <span className="font-body font-semibold uppercase tracking-[0.12em]" style={{ fontSize: '11px', color: '#B8862A' }}>ASSAN OPERATION</span>
                <h3 className="font-display font-bold text-white mt-3" style={{ fontSize: '20px', letterSpacing: '-0.01em' }}>{op.name}</h3>
                <p className="font-body mt-1" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{op.period}</p>
                <p className="font-body mt-3" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{op.desc}</p>
                <Link href={`/case-studies/${op.slug}`} className="font-body font-semibold no-underline mt-5 inline-flex items-center gap-2" style={{ fontSize: '14px', color: '#B8862A' }}>
                  View Operation <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1E2A4A', padding: '100px 24px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>Ready to deploy operational systems?</h2>
          <p className="font-body font-light mt-4" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)' }}>ASSAN engagements begin with an operational assessment.</p>
          <a href="mailto:JaheimSalesman@gmail.com" style={{ display: 'inline-block', marginTop: '32px', background: '#B8862A', color: '#1E2A4A', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15px', padding: '16px 40px', borderRadius: '9999px', textDecoration: 'none' }}>
            Start a Conversation →
          </a>
        </motion.div>
      </section>
    </>
  )
}
