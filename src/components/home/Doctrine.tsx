'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Identify Inefficiency',
    body: 'We audit the environment — physical or digital — to surface the friction points, gaps, and systemic failures costing time and money.',
    progress: 16.6,
  },
  {
    num: '02',
    title: 'Build Standardized Operating Model',
    body: 'Chaos is replaced with a repeatable framework. Every workflow is mapped, sequenced, and assigned clear ownership and accountability.',
    progress: 33.2,
  },
  {
    num: '03',
    title: 'Add Technology Layer',
    body: 'We apply technology where it reduces friction — scheduling tools, documentation systems, and digital infrastructure that supports the human operation.',
    progress: 50,
  },
  {
    num: '04',
    title: 'Optimize Margins & Performance',
    body: 'Once the system runs, we measure it. Underperforming steps are refined. Resources are reallocated to the highest-value activities.',
    progress: 66.6,
  },
  {
    num: '05',
    title: 'Document the Transformation',
    body: 'Every operation is recorded as a living document. The work is institutionalized — not dependent on memory or individual knowledge.',
    progress: 83.3,
  },
  {
    num: '06',
    title: 'Package Repeatable Framework',
    body: 'The result is a portable operational playbook — deployable across properties, projects, and environments without starting from scratch.',
    progress: 100,
  },
]

export default function Doctrine() {
  return (
    <section
      id="doctrine"
      style={{ position: 'relative', background: '#1E2A4A', padding: '120px 24px', overflow: 'hidden' }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(184,134,42,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-body font-semibold uppercase tracking-[0.15em]"
            style={{ fontSize: '12px', color: '#B8862A' }}
          >
            THE METHOD
          </span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Smarter Systems.
            <br />
            Structured Results.
          </h2>
        </motion.div>

        {/* 3×2 Glass Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '20px',
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="glass-dark"
              style={{ borderRadius: '20px', padding: '32px', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 3) * 0.1,
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.07)',
                borderColor: 'rgba(255,255,255,0.14)',
              }}
            >
              {/* Ghost numeral */}
              <span
                aria-hidden="true"
                className="font-display font-bold select-none pointer-events-none"
                style={{
                  fontSize: '52px',
                  fontWeight: 800,
                  color: 'rgba(184,134,42,0.2)',
                  lineHeight: 1,
                  display: 'block',
                }}
              >
                {step.num}
              </span>

              <h3
                className="font-display font-semibold text-white mt-3"
                style={{ fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.3 }}
              >
                {step.title}
              </h3>

              <p
                className="font-body mt-3"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
              >
                {step.body}
              </p>

              {/* Gold progress bar */}
              <div
                style={{
                  marginTop: '20px',
                  height: '3px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  style={{ height: '100%', background: '#B8862A', borderRadius: '3px' }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${step.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 + i * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
