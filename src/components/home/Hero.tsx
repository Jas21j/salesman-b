'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useMounted } from '@/hooks/useMounted'

const rotatingLines = [
  'We build operational systems that simplify complexity.',
  'IRIS delivers digital intelligence. ASSAN deploys it.',
  'Two platforms. One operating philosophy.',
  'Systems that improve industries, globally.',
]

const atmosphericWords = [
  'SYSTEMS',
  'INFRASTRUCTURE',
  'OPERATIONS',
  'INTELLIGENCE',
  'DEPLOYMENT',
  'INDUSTRIES',
]

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const mounted = useMounted()

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => (i + 1) % rotatingLines.length)
    }, 3000)
    return () => clearInterval(lineTimer)
  }, [])

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((i) => (i + 1) % atmosphericWords.length)
    }, 4000)
    return () => clearInterval(wordTimer)
  }, [])

  return (
    <section
      className="hero-viewport"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/landingpage.png"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(30,42,74,0.92) 0%, rgba(30,42,74,0.5) 40%, rgba(30,42,74,0.2) 70%, transparent 100%)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(43,58,103,0.18)',
          mixBlendMode: 'multiply',
          zIndex: 1,
        }}
      />

      {/* Atmospheric background word — only render after mount to avoid hydration mismatch */}
      {mounted && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '-2%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="select-none"
              style={{
                fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                fontWeight: 700,
                fontSize: 'clamp(80px, 15vw, 200px)',
                letterSpacing: '-0.04em',
                color: '#fff',
                display: 'block',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {atmosphericWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}

      {/* Content — always fully visible; animations only start after mount */}
      <div
        className="hero-section-pad"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '80px 20px 80px',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <motion.span
          className="font-body font-semibold uppercase tracking-widest block mb-6"
          style={{ fontSize: '12px', color: '#C9A96E', letterSpacing: '0.18em' }}
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          SALESMAN SOLUTIONS
        </motion.span>

        {/* H1 */}
        <motion.h1
          initial={mounted ? { opacity: 0, y: 40 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ marginBottom: '8px' }}
        >
          <span
            className="block"
            style={{
              fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.01em',
              lineHeight: 0.92,
              fontSize: 'clamp(3.2rem, 8vw, 8.5rem)',
            }}
          >
            SYSTEMS THAT
          </span>
          <span
            className="block text-outline"
            style={{
              fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 0.92,
              fontSize: 'clamp(3.2rem, 8vw, 8.5rem)',
              marginTop: '-2px',
            }}
          >
            IMPROVE INDUSTRIES
          </span>
        </motion.h1>

        {/* Rotating Line */}
        <div style={{ height: '32px', marginTop: '24px', overflow: 'hidden' }}>
          {mounted ? (
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                className="font-body"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.6,
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {rotatingLines[lineIndex]}
              </motion.p>
            </AnimatePresence>
          ) : (
            <p
              className="font-body"
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.6,
              }}
            >
              {rotatingLines[0]}
            </p>
          )}
        </div>

        {/* Static body */}
        <motion.p
          className="font-body"
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            fontWeight: 400,
            lineHeight: 1.7,
            marginTop: '20px',
            maxWidth: '540px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          Salesman Solutions builds operational systems that simplify complexity and transform how industries function.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="cta-group flex justify-center gap-4 flex-wrap"
          style={{ marginTop: '36px' }}
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          <Link
            href="/solutions"
            style={{
              background: '#C9A96E',
              color: '#1E2A4A',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '15px',
              padding: '16px 36px',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-block',
              letterSpacing: '0.01em',
              transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(201,169,110,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = ''
            }}
          >
            EXPLORE THE PLATFORM →
          </Link>
          <Link
            href="/case-studies"
            style={{
              background: 'transparent',
              color: '#fff',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '15px',
              padding: '16px 36px',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1.5px solid rgba(255,255,255,0.3)',
              transition: 'background 0.3s, border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = ''
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              e.currentTarget.style.transform = ''
            }}
          >
            VIEW CASE STUDIES
          </Link>
        </motion.div>

        {/* Scroll chevron */}
        <motion.div
          className="scroll-chevron"
          style={{ marginTop: '56px' }}
          initial={mounted ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: mounted ? 1.2 : 0 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ margin: '0 auto' }}
          >
            <path
              d="M4 7l6 6 6-6"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-body block uppercase tracking-[0.15em]"
            style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '6px' }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
