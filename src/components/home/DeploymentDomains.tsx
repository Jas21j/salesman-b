'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Domain {
  id: string
  platform: string
  descriptor: string
  headline: string
  body: string
  capabilities: string[]
}

const domains: Domain[] = [
  {
    id: 'assan',
    platform: 'ASSAN',
    descriptor: 'Operational Deployment',
    headline: 'Property · Hospitality · Logistics & Labor',
    body:
      'ASSAN operates wherever real-world systems require a structured operational backbone. Property portfolios, hotel environments, logistics chains, and labor networks all run better when the underlying operational model is sound. ASSAN deploys that model — standardizing workflows, coordinating execution, and building the documentation that makes results repeatable across environments and at scale.',
    capabilities: [
      'Property Systems Deployment',
      'Maintenance Operations',
      'Hospitality Support',
      'Luxury Supply Coordination',
      'Labor Network Management',
      'Field Execution Protocols',
      'Turnover & Space Reset',
    ],
  },
  {
    id: 'iris',
    platform: 'IRIS',
    descriptor: 'Infrastructure & Intelligence',
    headline: 'Digital Infrastructure · Embedded Intelligence · Optimization',
    body:
      'IRIS builds the digital layer underneath operations — the systems that collect data, surface intelligence, and make operations measurable and improvable. From custom dashboards and automation tools to full-stack digital infrastructure, IRIS converts operational data into operational advantage. Every system is designed for real-world deployment, not demonstration.',
    capabilities: [
      'Dashboard Architecture',
      'System Development',
      'Analytics & Reporting',
      'Workflow Automation',
      'Digital Infrastructure',
      'Embedded Intelligence',
      'Optimization Frameworks',
    ],
  },
]

export default function DeploymentDomains() {
  const [activeIndex, setActiveIndex] = useState(0)

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % domains.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(advance, 5000)
    return () => clearInterval(timer)
  }, [advance])

  const activeDomain = domains[activeIndex]

  return (
    <section style={{ background: '#1E2A4A', padding: '0 24px 120px', position: 'relative', overflow: 'hidden' }}>

      {/* Background image */}
      <Image
        src="/deployment-domain-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        aria-hidden="true"
      />

      {/* Navy overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.84)' }} />

      {/* Top fade — continues from PlatformArchitecture */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
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
        {/* Section label */}
        <div style={{ textAlign: 'center', paddingBottom: '56px' }}>
          <span
            className="font-body font-semibold uppercase tracking-[0.15em]"
            style={{ fontSize: '12px', color: '#C9A96E' }}
          >
            DEPLOYMENT DOMAINS
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 280px) 1fr',
            gap: '0',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
          className="flex-col-on-mobile"
        >
          {/* Tab column */}
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}>
            {domains.map((domain, i) => (
              <button
                key={domain.id}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '28px 32px',
                  background: 'transparent',
                  border: 'none',
                  borderLeft: activeIndex === i ? '3px solid #C9A96E' : '3px solid transparent',
                  borderBottom: i < domains.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  display: 'block',
                }}
                onMouseEnter={(e) => { if (activeIndex !== i) e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                onMouseLeave={(e) => { if (activeIndex !== i) e.currentTarget.style.background = 'transparent' }}
              >
                <div
                  className="font-display font-bold"
                  style={{
                    fontSize: '28px',
                    color: activeIndex === i ? '#C9A96E' : 'rgba(255,255,255,0.4)',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s',
                  }}
                >
                  {domain.platform}
                </div>
                <div
                  className="font-body"
                  style={{
                    fontSize: '12px',
                    color: activeIndex === i ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)',
                    marginTop: '4px',
                    transition: 'color 0.3s',
                  }}
                >
                  {domain.descriptor}
                </div>
                {/* Progress bar */}
                {activeIndex === i && (
                  <motion.div
                    style={{
                      height: '2px',
                      background: 'rgba(201,169,110,0.3)',
                      marginTop: '12px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      style={{ height: '100%', background: '#C9A96E', borderRadius: '2px' }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      key={activeIndex}
                    />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div style={{ padding: '48px 40px', overflow: 'hidden', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Platform label */}
                <span
                  className="font-body font-semibold uppercase tracking-[0.15em]"
                  style={{ fontSize: '11px', color: '#C9A96E' }}
                >
                  {activeDomain.platform}
                </span>

                {/* Headline */}
                <h3
                  className="font-display font-bold text-white mt-3"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
                >
                  {activeDomain.headline}
                </h3>

                {/* Body */}
                <p
                  className="font-body mt-5"
                  style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}
                >
                  {activeDomain.body}
                </p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {activeDomain.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="font-body"
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#E8DCC8',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: '9999px',
                        padding: '5px 14px',
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .flex-col-on-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
