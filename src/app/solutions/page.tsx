'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SolutionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{ background: '#1E2A4A', padding: '160px 24px 120px', position: 'relative', overflow: 'hidden' }}
      >
        <Image
          src="/solutions-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          aria-hidden="true"
          priority
        />
        {/* Navy overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.72)' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, #FDFBF7 0%, transparent 100%)', zIndex: 1 }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>
              PLATFORM OVERVIEW
            </span>
            <h1 className="font-display font-bold text-white mt-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              Two Platforms.
              <br />
              One Architecture.
            </h1>
            <p className="font-body font-light mt-6" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '560px' }}>
              Salesman Solutions operates through two purpose-built platforms — IRIS and ASSAN — each addressing a distinct dimension of operational failure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Platform cards ── */}
      <section style={{ background: '#FDFBF7', padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '24px' }}>

          {/* IRIS */}
          <motion.div
            className="navy-card"
            style={{ padding: '56px 48px' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
          >
            <div className="font-display font-bold" style={{ fontSize: '80px', color: '#B8862A', letterSpacing: '-0.04em', lineHeight: 0.9 }}>
              IRIS
            </div>
            <p className="font-body font-semibold uppercase tracking-wider mt-3" style={{ fontSize: '11px', color: 'rgba(184,134,42,0.7)' }}>
              Intelligent Resource Infrastructure Systems
            </p>
            <p className="font-body mt-5" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
              The digital intelligence platform. IRIS builds dashboards, embedded systems, automation layers, and analytics frameworks that make operations measurable, intelligent, and scalable.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['System Development', 'Dashboards', 'Analytics', 'Automation', 'Digital Optimization'].map(cap => (
                <span key={cap} style={{ fontSize: '12px', fontWeight: 500, color: '#E8DCC8', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '5px 14px' }} className="font-body">
                  {cap}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '36px' }}>
              <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '11px', color: '#B8862A' }}>OPTIMIZATIONS</span>
            </div>
            <Link href="/solutions/iris" style={{ display: 'inline-block', marginTop: '24px', background: '#B8862A', color: '#1E2A4A', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '14px', padding: '14px 32px', borderRadius: '9999px', textDecoration: 'none' }}>
              Explore IRIS →
            </Link>
          </motion.div>

          {/* ASSAN */}
          <motion.div
            className="navy-card-deep"
            style={{ padding: '56px 48px' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.4 } }}
          >
            <div className="font-display font-bold" style={{ fontSize: '80px', color: '#B8862A', letterSpacing: '-0.04em', lineHeight: 0.9 }}>
              ASSAN
            </div>
            <p className="font-body font-semibold uppercase tracking-wider mt-3" style={{ fontSize: '11px', color: 'rgba(184,134,42,0.7)' }}>
              Applied Systems for Service and Network Operations
            </p>
            <p className="font-body mt-5" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
              The operational deployment platform. ASSAN executes in the real world — managing properties, deploying field teams, coordinating logistics, and structuring hospitality environments.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Property Systems', 'Logistics', 'Hospitality', 'Labor Operations', 'Field Execution'].map(cap => (
                <span key={cap} style={{ fontSize: '12px', fontWeight: 500, color: '#E8DCC8', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '5px 14px' }} className="font-body">
                  {cap}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '36px' }}>
              <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '11px', color: '#B8862A' }}>OPERATIONS</span>
            </div>
            <Link href="/solutions/assan" style={{ display: 'inline-block', marginTop: '24px', background: '#B8862A', color: '#1E2A4A', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '14px', padding: '14px 32px', borderRadius: '9999px', textDecoration: 'none' }}>
              Explore ASSAN →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section style={{ background: '#1E2A4A', padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', lineHeight: 1.4 }}>
              &ldquo;Most operational failures happen at the intersection of bad digital infrastructure and poor real-world execution. IRIS addresses the first. ASSAN addresses the second.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
