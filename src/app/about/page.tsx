'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2018',
    title: 'Foundation',
    desc: 'Born in Kingston, Jamaica. An early understanding that systems — not effort alone — determine outcomes. Relocates to South Florida.',
  },
  {
    year: '2019',
    title: 'Florida State University',
    desc: 'Accepted to both UF and FSU. Chooses Florida State University to study Hospitality and Entrepreneurship. Mentorship reshapes the operational lens.',
  },
  {
    year: '2020',
    title: 'First Operations',
    desc: 'First structured operational engagements in Tallahassee — handyman and logistics work that begins revealing repeatable system patterns.',
  },
  {
    year: '2021',
    title: 'Operation First Mile',
    desc: 'The foundational ASSAN deployment. 150+ jobs, three property networks, and the originating operational playbook.',
  },
  {
    year: '2022',
    title: 'Operation LiveBetter',
    desc: 'Nine-month embedded engagement at Landmark Metropolitan. First long-form operational deployment with structured triage and response protocols.',
  },
  {
    year: '2023',
    title: 'Operation Saatva + IRIS Launch',
    desc: 'Entry into hospitality supply chain. Simultaneously, IRIS activates — building the first coded digital infrastructure project for Miss Scholastic America.',
  },
  {
    year: '2024',
    title: 'Platform Architecture',
    desc: 'IRIS and ASSAN formalized as two distinct platforms within one operating philosophy. The venture model crystallizes.',
  },
  {
    year: '2025',
    title: 'Global Positioning',
    desc: 'Salesman Solutions reframes as a global venture platform. Geographic scope expands. The operational model proves redeployable across markets.',
  },
  {
    year: '2026',
    title: 'Active Deployment',
    desc: 'Both platforms operating. IRIS expanding digital infrastructure capabilities. ASSAN deepening hospitality and property system deployment.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: '#1E2A4A',
          padding: '160px 24px 120px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/about-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
          aria-hidden="true"
          priority
        />
        {/* Navy overlay — heavier to keep founder section text crisp */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.75)' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #F5F0E8 0%, transparent 100%)', zIndex: 1 }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none', zIndex: 2 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-body font-semibold uppercase tracking-[0.15em]"
                style={{ fontSize: '12px', color: '#C9A96E' }}
              >
                ABOUT SALESMAN SOLUTIONS
              </span>
              <h1
                className="font-display font-bold text-white mt-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 0.95 }}
              >
                Built From Experience.
                <br />
                Designed for the Future.
              </h1>
              <p
                className="font-body font-light mt-6"
                style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '520px' }}
              >
                Salesman Solutions is a global venture platform built on the conviction that the right operational systems unlock outcomes that effort alone cannot reach.
              </p>
            </motion.div>

            {/* Founder image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '360px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                  background: '#2B3A67',
                }}
              >
                <Image
                  src="/founderheadshot.png"
                  alt="Jaheim Salesman"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ background: '#FDFBF7', padding: '120px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="font-body font-semibold uppercase tracking-[0.15em]"
              style={{ fontSize: '12px', color: '#C9A96E' }}
            >
              FOUNDER TIMELINE
            </span>
            <h2
              className="font-display font-bold mt-3"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#2B3A67', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Nine milestones. One trajectory.
            </h2>
          </motion.div>

          {/* Timeline rail */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '2px',
                background: '#E8DCC8',
              }}
            />

            <div style={{ paddingLeft: '40px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  style={{ position: 'relative' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 * i }}
                >
                  {/* Gold dot */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      left: '-47px',
                      top: '6px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#C9A96E',
                      border: '2px solid #FDFBF7',
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + 0.05 * i }}
                  />

                  {/* Ghost year */}
                  <span
                    aria-hidden="true"
                    className="font-display font-bold select-none absolute"
                    style={{
                      fontSize: 'clamp(60px, 8vw, 100px)',
                      color: 'rgba(201,169,110,0.07)',
                      top: '-20px',
                      right: '0',
                      lineHeight: 1,
                    }}
                  >
                    {m.year}
                  </span>

                  <p
                    className="font-body font-semibold"
                    style={{ fontSize: '13px', color: '#C9A96E', letterSpacing: '0.08em' }}
                  >
                    {m.year}
                  </p>
                  <h3
                    className="font-display font-bold mt-1"
                    style={{ fontSize: '20px', color: '#2B3A67', letterSpacing: '-0.01em' }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="font-body mt-2"
                    style={{ fontSize: '15px', color: 'rgba(43,58,103,0.65)', lineHeight: 1.7 }}
                  >
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Block ── */}
      <section style={{ background: '#2B3A67', padding: '120px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div
              style={{ width: '48px', height: '3px', background: '#C9A96E', margin: '0 auto 40px', borderRadius: '2px' }}
            />
            <p
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.25 }}
            >
              &ldquo;To build the operational systems infrastructure that industries run on — not for a single market, but for the world.&rdquo;
            </p>
            <div
              style={{ width: '48px', height: '3px', background: '#C9A96E', margin: '40px auto 0', borderRadius: '2px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Platform Philosophy ── */}
      <section style={{ background: '#fff', padding: '120px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="font-body font-semibold uppercase tracking-[0.15em]"
              style={{ fontSize: '12px', color: '#C9A96E' }}
            >
              PLATFORM PHILOSOPHY
            </span>
            <h2
              className="font-display font-bold mt-3"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#2B3A67', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Why Two Platforms?
            </h2>
            <p
              className="font-body mt-6"
              style={{ fontSize: '17px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.8 }}
            >
              Most operational failures happen at the intersection of bad digital infrastructure and poor real-world execution. IRIS addresses the first. ASSAN addresses the second. Together, they close the gap most organizations leave open.
            </p>
            <p
              className="font-body mt-5"
              style={{ fontSize: '17px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.8 }}
            >
              The two-platform architecture is not redundancy — it is specialization. A property operation runs better when the digital layer tracks maintenance, surfaces patterns, and automates communication. A digital platform performs better when the deployment layer executes with precision. IRIS and ASSAN are designed to feed each other.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
              <Link
                href="/solutions/iris"
                style={{
                  background: '#C9A96E',
                  color: '#1E2A4A',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                }}
              >
                Explore IRIS →
              </Link>
              <Link
                href="/solutions/assan"
                style={{
                  background: 'transparent',
                  color: '#2B3A67',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 500,
                  fontSize: '14px',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(43,58,103,0.2)',
                }}
              >
                Explore ASSAN →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
