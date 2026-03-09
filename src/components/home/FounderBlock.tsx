'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FounderBlock() {
  return (
    <section id="founder" style={{ background: '#FDFBF7', padding: '120px 24px' }}>
      <div
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Founder image — editorial, unboxed format */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                boxShadow: '0 30px 60px rgba(43,58,103,0.12), 0 10px 20px rgba(43,58,103,0.06)',
                background: '#F0EBE3',
              }}
            >
              <Image
                src="/founderheadshot.png"
                alt="Jaheim Salesman — Founder & Systems Architect"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30,42,74,0.1) 0%, transparent 50%)',
                }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span
              className="font-body font-semibold uppercase tracking-[0.15em]"
              style={{ fontSize: '12px', color: '#B8862A' }}
            >
              THE FOUNDER
            </span>

            <h2
              className="font-display font-bold mt-3"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#2B3A67',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Jaheim Salesman
            </h2>

            <p
              className="font-body mt-1"
              style={{ fontSize: '15px', color: 'rgba(43,58,103,0.5)', fontWeight: 400 }}
            >
              Founder & Systems Architect
            </p>

            <p
              className="font-body mt-6"
              style={{ fontSize: '16px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.8 }}
            >
              Jaheim Salesman built his operational foundation through direct, hands-on work — managing properties, coordinating logistics, and navigating environments where systems were absent and execution was everything. That experience became the foundation for Salesman Solutions.
            </p>

            <p
              className="font-body mt-4"
              style={{ fontSize: '16px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.8, fontStyle: 'italic' }}
            >
              What began as hands-on operational work evolved into a systems-first company focused on infrastructure, deployment, and long-term operational intelligence.
            </p>

            <p
              className="font-body mt-4"
              style={{ fontSize: '16px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.8 }}
            >
              Today, Salesman Solutions operates as a global venture platform — building IRIS, the digital intelligence infrastructure, and ASSAN, the operational deployment network. The ambition is not geographic. It is architectural: to build the operational layer that industries run on.
            </p>

            {/* Gold accent rule */}
            <div
              style={{ width: '40px', height: '3px', background: '#B8862A', marginTop: '28px', borderRadius: '2px' }}
            />

            <div className="flex flex-wrap gap-6 mt-6">
              <a
                href="tel:9548306310"
                className="font-body font-semibold no-underline transition-colors duration-200 hover:text-gold"
                style={{
                  fontSize: '15px',
                  color: '#B8862A',
                  borderBottom: '1.5px solid rgba(184,134,42,0.3)',
                  paddingBottom: '2px',
                }}
              >
                954-830-6310
              </a>
              <a
                href="mailto:JaheimSalesman@gmail.com"
                className="font-body font-semibold no-underline transition-colors duration-200"
                style={{
                  fontSize: '15px',
                  color: 'rgba(43,58,103,0.55)',
                  borderBottom: '1.5px solid rgba(43,58,103,0.15)',
                  paddingBottom: '2px',
                }}
              >
                JaheimSalesman@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
