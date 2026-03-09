'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const irisCapabilities = [
  'System Development',
  'Dashboards',
  'Analytics',
  'Automation',
  'Digital Optimization',
]

const assanCapabilities = [
  'Property Systems',
  'Logistics',
  'Hospitality',
  'Labor Operations',
  'Field Execution',
]

function PlatformCard({
  name,
  fullName,
  descriptor,
  capabilities,
  label,
  delay,
}: {
  name: string
  fullName: string
  descriptor: string
  capabilities: string[]
  label: string
  delay: number
}) {
  return (
    <motion.div
      className="navy-card-deep flex-1"
      style={{ padding: '48px 40px', minWidth: 0 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {/* Platform name anchor */}
      <div
        className="font-display font-bold"
        style={{
          fontSize: 'clamp(64px, 8vw, 96px)',
          color: '#B8862A',
          letterSpacing: '-0.04em',
          lineHeight: 0.9,
          marginBottom: '16px',
        }}
      >
        {name}
      </div>

      {/* Full name */}
      <p
        className="font-body font-semibold uppercase tracking-wider"
        style={{ fontSize: '11px', color: 'rgba(184,134,42,0.7)', marginBottom: '8px' }}
      >
        {fullName}
      </p>

      {/* Descriptor */}
      <p
        className="font-body"
        style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '32px' }}
      >
        {descriptor}
      </p>

      {/* Capability pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {capabilities.map((cap) => (
          <span
            key={cap}
            className="font-body"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              color: '#E8DCC8',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '9999px',
              padding: '5px 14px',
            }}
          >
            {cap}
          </span>
        ))}
      </div>

      {/* Label */}
      <span
        className="font-body font-semibold uppercase tracking-[0.15em]"
        style={{ fontSize: '11px', color: '#B8862A' }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function PlatformArchitecture() {
  return (
    <section style={{ background: '#1E2A4A', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>

      {/* Background image */}
      <Image
        src="/platform-architecture-bg.png"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        aria-hidden="true"
      />

      {/* Navy overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.80)' }} />

      {/* Top fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '160px',
        background: 'linear-gradient(to bottom, #1E2A4A 0%, transparent 100%)',
        zIndex: 1,
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
        background: 'linear-gradient(to top, #1E2A4A 0%, transparent 100%)',
        zIndex: 1,
      }} />

      {/* Grain */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none', zIndex: 2,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
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
            PLATFORM ARCHITECTURE
          </span>
          <h2
            className="font-display font-bold mt-3 text-white"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Two Platforms. One Operating Philosophy.
          </h2>
          <p
            className="font-body font-light mt-4 text-white/60"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
          >
            Built to operate independently. Designed to work together.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="flex flex-col md:flex-row gap-0">
          <PlatformCard
            name="IRIS"
            fullName="Intelligent Resource Infrastructure Systems"
            descriptor="The digital infrastructure and intelligence platform — building the technology layer that powers operational intelligence, analytics, and embedded system development."
            capabilities={irisCapabilities}
            label="OPTIMIZATIONS"
            delay={0}
          />

          {/* Gold divider */}
          <div
            className="hidden md:block flex-shrink-0"
            style={{ width: '1px', background: 'rgba(184,134,42,0.3)', margin: '40px 0' }}
          />

          <PlatformCard
            name="ASSAN"
            fullName="Applied Systems for Service and Network Operations"
            descriptor="The operational systems and deployment platform — executing in the real world across property, logistics, hospitality, and labor environments at scale."
            capabilities={assanCapabilities}
            label="OPERATIONS"
            delay={0.12}
          />
        </div>
      </div>
    </section>
  )
}
