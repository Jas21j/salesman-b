'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedChart from '@/components/ui/AnimatedChart'

interface DataPoint {
  value: string
  numericValue: number
  chartType: 'arc' | 'bar'
  sentence: string
  source: string
  ghost: string
}

const dataPoints: DataPoint[] = [
  {
    value: '70%',
    numericValue: 70,
    chartType: 'arc',
    sentence: 'Of transformation initiatives fail before reaching intended outcomes.',
    source: 'McKinsey Global Survey on Transformations',
    ghost: '01',
  },
  {
    value: '<1.5%',
    numericValue: 15,
    chartType: 'bar',
    sentence: 'Annual productivity growth across the global economy — a systemic bottleneck.',
    source: 'OECD Productivity Statistics',
    ghost: '02',
  },
  {
    value: '60%',
    numericValue: 60,
    chartType: 'arc',
    sentence: 'Of operational time spent managing coordination rather than producing outcomes.',
    source: 'Asana Work Index 2023',
    ghost: '03',
  },
  {
    value: '$1.6T',
    numericValue: 80,
    chartType: 'bar',
    sentence: 'Lost annually to supply chain inefficiency and operational fragmentation.',
    source: 'World Economic Forum',
    ghost: '04',
  },
]

function DataCard({ point, index }: { point: DataPoint; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <motion.div
      ref={ref}
      className="navy-card p-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
    >
      {/* Ghost numeral */}
      <span
        aria-hidden="true"
        className="font-display font-bold select-none pointer-events-none absolute"
        style={{
          fontSize: 'clamp(80px, 10vw, 120px)',
          color: 'rgba(201,169,110,0.12)',
          top: '-12px',
          right: '-8px',
          lineHeight: 1,
        }}
      >
        {point.ghost}
      </span>

      {/* Chart */}
      <div className="mb-5">
        {point.chartType === 'arc' ? (
          <div className="relative flex items-center justify-start">
            <AnimatedChart
              value={point.numericValue}
              type="arc"
              size={96}
              strokeWidth={7}
              color="#C9A96E"
              trackColor="rgba(255,255,255,0.06)"
            />
          </div>
        ) : (
          <div style={{ marginTop: '12px' }}>
            <AnimatedChart
              value={point.numericValue}
              type="bar"
              color="#C9A96E"
              trackColor="rgba(255,255,255,0.06)"
            />
          </div>
        )}
      </div>

      {/* Value */}
      <div
        className="font-display font-bold"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#C9A96E', letterSpacing: '-0.03em', lineHeight: 1 }}
      >
        {point.value}
      </div>

      {/* Sentence */}
      <p
        className="font-body mt-3"
        style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}
      >
        {point.sentence}
      </p>

      {/* Source */}
      <p
        className="font-body mt-3"
        style={{ fontSize: '12px', color: 'rgba(201,169,110,0.55)', letterSpacing: '0.02em' }}
      >
        {point.source}
      </p>
    </motion.div>
  )
}

export default function CostOfComplexity() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section style={{ background: '#FDFBF7', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Grain texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-body font-semibold uppercase tracking-[0.15em]"
            style={{ fontSize: '12px', color: '#C9A96E' }}
          >
            WHY SYSTEMS MATTER
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
            The cost of operational complexity,
            <br />
            documented.
          </h2>
        </motion.div>

        {/* Data Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {dataPoints.map((point, i) => (
            <DataCard key={point.ghost} point={point} index={i} />
          ))}
        </div>

        {/* Closing paragraph */}
        <motion.p
          className="font-body text-center mt-16"
          style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            fontWeight: 300,
            color: 'rgba(43,58,103,0.7)',
            lineHeight: 1.8,
            maxWidth: '680px',
            margin: '64px auto 0',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 1 }}
        >
          These are not isolated statistics. They are symptoms of the same underlying failure: organizations operating without the systems infrastructure needed to convert activity into outcomes. That is the gap Salesman Solutions was built to close.
        </motion.p>
      </div>
    </section>
  )
}
