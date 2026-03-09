'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import AnimatedChart from '@/components/ui/AnimatedChart'
import { useMounted } from '@/hooks/useMounted'

interface Stat {
  value: string
  numericValue: number
  chartType: 'arc' | 'bar' | 'ring'
  label: string
  descriptor: string
  size?: 'large' | 'normal'
}

const stats: Stat[] = [
  {
    value: '35–50%',
    numericValue: 42,
    chartType: 'arc',
    label: 'Operational Efficiency Gain',
    descriptor: 'Improvement achieved when fragmented workflows are replaced with structured systems.',
    size: 'large',
  },
  {
    value: '25–40%',
    numericValue: 32,
    chartType: 'ring',
    label: 'Cost Reduction',
    descriptor: 'Operational cost savings after integrated logistics and maintenance systems are deployed.',
    size: 'large',
  },
  {
    value: '2–3×',
    numericValue: 67,
    chartType: 'bar',
    label: 'Faster Decision Cycles',
    descriptor: 'Faster operational decision-making when real-time data infrastructure replaces static reporting.',
  },
  {
    value: '60–70%',
    numericValue: 65,
    chartType: 'bar',
    label: 'Fewer Bottlenecks',
    descriptor: 'Reduction in workflow bottlenecks when manual coordination is replaced with structured systems.',
  },
  {
    value: '20–30%',
    numericValue: 25,
    chartType: 'arc',
    label: 'Asset Utilization',
    descriptor: 'Improvement in asset utilization when operations are measured through integrated infrastructure.',
  },
  {
    value: '15–25%',
    numericValue: 20,
    chartType: 'bar',
    label: 'Service Delivery Speed',
    descriptor: 'Faster service delivery when execution systems are standardized across teams.',
  },
]

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const mounted = useMounted()
  const isLarge = stat.size === 'large'
  const chartSize = isLarge ? 120 : 88

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-start"
      initial={mounted ? { opacity: 0, y: 30 } : false}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{ padding: '28px 24px' }}
    >
      {/* Chart */}
      <div className="mb-4">
        {stat.chartType === 'bar' ? (
          <div style={{ width: '100%', minWidth: '140px' }}>
            <AnimatedChart
              value={stat.numericValue}
              type="bar"
              color="#B8862A"
              trackColor="rgba(255,255,255,0.15)"
            />
          </div>
        ) : (
          <AnimatedChart
            value={stat.numericValue}
            type={stat.chartType}
            size={chartSize}
            strokeWidth={isLarge ? 9 : 7}
            color="#B8862A"
            trackColor="rgba(255,255,255,0.15)"
          />
        )}
      </div>

      {/* Value */}
      <div
        className="font-display font-bold"
        style={{
          fontSize: isLarge ? 'clamp(2rem, 4vw, 3rem)' : 'clamp(1.6rem, 2.8vw, 2.25rem)',
          color: '#B8862A',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {stat.value}
      </div>

      {/* Label */}
      <p
        className="font-body font-semibold"
        style={{ fontSize: '13px', color: '#fff', letterSpacing: '0.02em', marginBottom: '6px' }}
      >
        {stat.label}
      </p>

      {/* Descriptor */}
      <p
        className="font-body font-light"
        style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}
      >
        {stat.descriptor}
      </p>
    </motion.div>
  )
}

export default function Statistics() {
  const mounted = useMounted()

  return (
    <section
      style={{
        position: 'relative',
        padding: '120px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/work-measured.webp"
          alt="Operations in the field"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
      </div>

      {/* Dark overlay — ensures text legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(30,42,74,0.93) 0%, rgba(30,42,74,0.82) 50%, rgba(20,30,60,0.90) 100%)',
          zIndex: 1,
        }}
      />

      {/* Subtle dot texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(184,134,42,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Gold top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #B8862A 20%, #B8862A 80%, transparent)',
          zIndex: 2,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={mounted ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-body font-semibold uppercase tracking-[0.15em] block"
            style={{ fontSize: '12px', color: '#B8862A' }}
          >
            SYSTEMS IN PRACTICE
          </span>
          <h2
            className="font-display font-bold mt-3"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            What structured systems achieve.
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#B8862A', borderRadius: '2px', marginTop: '16px' }} />
        </motion.div>

        {/* Stats grid */}
        <div
          className="stats-mosaic"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '16px',
            border: '1px solid rgba(184,134,42,0.15)',
            overflow: 'hidden',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(20, 32, 65, 0.55)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRight: '1px solid rgba(255,255,255,0.05)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(184,134,42,0.08)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(20, 32, 65, 0.55)'
              }}
            >
              <StatCard stat={stat} index={i} />
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <motion.p
          className="font-body font-light"
          style={{
            textAlign: 'center',
            marginTop: '48px',
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            color: 'rgba(255,255,255,0.45)',
            fontWeight: 300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
          }}
          initial={mounted ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          Systems convert activity into outcomes.
        </motion.p>
      </div>
    </section>
  )
}
