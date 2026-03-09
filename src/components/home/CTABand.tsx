'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTABand() {
  return (
    <section
      id="contact"
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

      {/* Radial glows */}
      <div
        style={{
          position: 'absolute',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(184,134,42,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(61,79,124,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Platform watermarks */}
      <div
        style={{
          position: 'absolute',
          left: '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <span
          className="font-display font-bold select-none"
          style={{ fontSize: 'clamp(60px, 10vw, 140px)', color: 'rgba(184,134,42,0.05)', letterSpacing: '-0.04em' }}
        >
          IRIS
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <span
          className="font-display font-bold select-none"
          style={{ fontSize: 'clamp(60px, 10vw, 140px)', color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.04em' }}
        >
          ASSAN
        </span>
      </div>

      {/* Content */}
      <div
        style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            The system starts with a conversation.
          </h2>

          <p
            className="font-body font-light mt-5"
            style={{
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              maxWidth: '500px',
              margin: '20px auto 0',
            }}
          >
            Tell us what you&apos;re working on. We&apos;ll show you how to systematize it.
          </p>

          {/* CTAs */}
          <div className="cta-group flex-wrap justify-center mt-10">
            <a
              href="mailto:JaheimSalesman@gmail.com"
              style={{
                background: '#B8862A',
                color: '#1E2A4A',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '15px',
                padding: '18px 44px',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-block',
                letterSpacing: '0.01em',
                transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(184,134,42,0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              START A CONVERSATION →
            </a>

            <Link
              href="/case-studies"
              style={{
                background: 'transparent',
                color: '#fff',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '15px',
                padding: '18px 36px',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1.5px solid rgba(255,255,255,0.25)',
                transition: 'background 0.3s, border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = ''
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.transform = ''
              }}
            >
              VIEW CASE STUDIES
            </Link>
          </div>

          <p
            className="font-body mt-6"
            style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}
          >
            Or call{' '}
            <a
              href="tel:9548306310"
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)' }}
            >
              954-830-6310
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
