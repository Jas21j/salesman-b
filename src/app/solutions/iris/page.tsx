'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const capabilities = [
  { title: 'Dashboard Architecture', desc: 'Custom operational dashboards that surface real-time data and decision-critical metrics for management teams.' },
  { title: 'System Development', desc: 'Purpose-built software systems designed for specific operational needs — registration, management, tracking, and coordination.' },
  { title: 'Analytics & Reporting', desc: 'Data pipelines and reporting frameworks that convert raw operational data into intelligence.' },
  { title: 'Workflow Automation', desc: 'Automated process layers that reduce manual coordination overhead and increase operational throughput.' },
  { title: 'Digital Infrastructure', desc: 'End-to-end digital architecture for organizations building their operational technology layer from the ground up.' },
  { title: 'Optimization Frameworks', desc: 'Systematic identification and resolution of digital bottlenecks that limit organizational performance.' },
]

export default function IRISPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#1E2A4A', padding: '160px 24px 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none' }} />

        {/* Atmospheric IRIS */}
        <div style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} aria-hidden="true">
          <span className="font-display font-bold select-none" style={{ fontSize: 'clamp(120px, 20vw, 280px)', color: 'rgba(184,134,42,0.05)', letterSpacing: '-0.04em' }}>IRIS</span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>PLATFORM</span>
            <div className="font-display font-bold" style={{ fontSize: 'clamp(5rem, 15vw, 14rem)', color: '#B8862A', letterSpacing: '-0.04em', lineHeight: 0.85, marginTop: '8px' }}>
              IRIS
            </div>
            <p className="font-body font-semibold uppercase tracking-wider mt-2" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
              Intelligent Resource Infrastructure Systems
            </p>
            <p className="font-body font-light mt-6" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '560px' }}>
              The digital intelligence platform. IRIS builds the technology layer that makes operations measurable, automated, and scalable.
            </p>
            <span className="font-body font-semibold uppercase tracking-[0.15em] block mt-6" style={{ fontSize: '11px', color: '#B8862A' }}>OPTIMIZATIONS</span>
          </motion.div>
        </div>
      </section>

      {/* ── Capability Cards ── */}
      <section style={{ background: '#FDFBF7', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div className="mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>CAPABILITIES</span>
            <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', color: '#2B3A67', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              What IRIS builds.
            </h2>
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

      {/* ── Case Study Preview ── */}
      <section style={{ background: '#fff', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div className="mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>IRIS OPTIMIZATION</span>
            <h2 className="font-display font-bold mt-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', color: '#2B3A67', letterSpacing: '-0.03em' }}>Deployed work.</h2>
          </motion.div>

          <motion.div
            className="navy-card"
            style={{ padding: '48px 40px', maxWidth: '640px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body font-semibold uppercase tracking-[0.12em]" style={{ fontSize: '11px', color: '#B8862A' }}>IRIS OPTIMIZATION</span>
            <h3 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', letterSpacing: '-0.02em' }}>Operation Miss Scholastic America</h3>
            <p className="font-body mt-2" style={{ fontSize: '13px', color: '#E8DCC8', opacity: 0.6 }}>2023–2024</p>
            <p className="font-body mt-4" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
              Full-scope digital infrastructure built from zero — website, registration system, admin dashboard, and marketing framework for a national pageant organization.
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
              {[{ v: '0→Full', l: 'Infrastructure' }, { v: '4', l: 'Systems' }, { v: '1', l: 'Platform' }].map(m => (
                <div key={m.l} style={{ background: 'rgba(184,134,42,0.1)', border: '1px solid rgba(184,134,42,0.2)', borderRadius: '9999px', padding: '4px 12px' }}>
                  <span className="font-display font-bold" style={{ fontSize: '13px', color: '#B8862A' }}>{m.v}</span>
                  <span className="font-body ml-1" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{m.l}</span>
                </div>
              ))}
            </div>
            <Link href="/case-studies/miss-scholastic-america" className="font-body font-semibold no-underline mt-6 inline-flex items-center gap-2" style={{ fontSize: '14px', color: '#B8862A' }}>
              View Operation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#1E2A4A', padding: '100px 24px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
            Ready to build the digital layer?
          </h2>
          <p className="font-body font-light mt-4" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)' }}>
            IRIS engagements start with a scoping conversation.
          </p>
          <a href="mailto:JaheimSalesman@gmail.com" style={{ display: 'inline-block', marginTop: '32px', background: '#E8B040', color: '#1E2A4A', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15px', padding: '16px 40px', borderRadius: '9999px', textDecoration: 'none' }}>
            Start a Conversation →
          </a>
        </motion.div>
      </section>
    </>
  )
}
