'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { getCaseStudyBySlug } from '@/data/caseStudies'

// Images injected between specific sections per case study
type CaseImages = {
  afterOverview?: { src: string; alt: string }
  afterApproach?: { src: string; alt: string }
  afterExecution?: { src: string; alt: string }
}

const caseImageMap: Record<string, CaseImages> = {
  // ASSAN: property networks + last-mile logistics deployment
  'first-mile': {
    afterOverview:  { src: '/solutions-hero.jpg',            alt: 'Nighttime logistics infrastructure — the environment First Mile was built to systematize' },
    afterApproach:  { src: '/platform-architecture-bg.png',  alt: 'Salesman Solutions operational base — the foundation of the First Mile deployment model' },
    afterExecution: { src: '/work-measured.webp',            alt: 'Field operations in motion — the execution layer that drove 150+ completed jobs' },
  },
  // ASSAN: 9-month embedded residential property operations
  'livebetter': {
    afterOverview:  { src: '/about-hero.jpg',          alt: 'Industrial-scale property infrastructure — the operational context of the LiveBetter engagement' },
    afterApproach:  { src: '/deployment-domain-bg.jpg', alt: 'Organized operational systems — the structured environment ASSAN built inside Landmark Metropolitan' },
    afterExecution: { src: '/case-studies-hero.jpg',    alt: 'Modern property facility — representative of the LiveBetter portfolio environment' },
  },
  // ASSAN: luxury hospitality supply chain
  'saatva': {
    afterOverview:  { src: '/saatva.jpg',          alt: 'Saatva luxury mattress product line — supply chain coordinated by ASSAN across hospitality accounts' },
    afterApproach:  { src: '/solutions-hero.jpg',  alt: 'Nighttime logistics at scale — the supply chain environment ASSAN was deployed to manage' },
  },
  // IRIS: full-stack digital infrastructure deployment
  'miss-scholastic-america': {
    afterOverview:  { src: '/miss-scholastic.png',      alt: 'Miss Scholastic America — the organization whose digital infrastructure IRIS built from the ground up' },
    afterExecution: { src: '/case-studies-hero.jpg',    alt: 'Architectural precision — representative of the system design approach IRIS applied' },
  },
}

const sectionLabels = [
  { key: 'overview', label: 'Overview' },
  { key: 'problem', label: 'The Problem' },
  { key: 'approach', label: 'The Approach' },
  { key: 'execution', label: 'Execution' },
  { key: 'outcomes', label: 'Outcomes' },
  { key: 'lessons', label: 'Lessons' },
]

export default function CaseStudyContent({ slug }: { slug: string }) {
  const cs = getCaseStudyBySlug(slug)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  if (!cs) {
    notFound()
  }

  return (
    <div ref={containerRef}>
      {/* Gold progress rail */}
      <div className="progress-rail hidden md:block">
        <motion.div style={{ width: '100%', background: '#C9A96E', height: railHeight }} />
      </div>

      {/* Hero */}
      <section style={{ background: '#1E2A4A', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none' }} />

        <div style={{ position: 'absolute', right: '-2%', bottom: '-5%', pointerEvents: 'none' }} aria-hidden="true">
          <span className="font-display font-bold select-none" style={{ fontSize: 'clamp(80px, 15vw, 220px)', color: 'rgba(201,169,110,0.05)', letterSpacing: '-0.04em', lineHeight: 1 }}>
            {cs.platform}
          </span>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <Link href="/case-studies" className="font-body no-underline" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
              ← Back to Case Studies
            </Link>
            <div>
              <span className="font-body font-semibold uppercase tracking-[0.12em]" style={{ fontSize: '11px', color: '#C9A96E' }}>{cs.platformLabel}</span>
            </div>
            <h1 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
              {cs.name}
            </h1>
            <p className="font-body mt-2" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}>{cs.period}</p>
            <p className="font-body font-light mt-5" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '600px' }}>
              {cs.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {cs.metrics.map(m => (
                <div key={m.label} style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '9999px', padding: '8px 20px' }}>
                  <span className="font-display font-bold" style={{ fontSize: '16px', color: '#C9A96E' }}>{m.value}</span>
                  <span className="font-body ml-2" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ background: '#FDFBF7', padding: '100px 24px 120px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {(() => {
            const caseImages = caseImageMap[slug] ?? {}
            const afterMap: Record<string, { src: string; alt: string }> = {}
            if (caseImages.afterOverview) afterMap['overview'] = caseImages.afterOverview
            if (caseImages.afterApproach) afterMap['approach'] = caseImages.afterApproach
            if (caseImages.afterExecution) afterMap['execution'] = caseImages.afterExecution

            return sectionLabels.map(({ key, label }, i) => {
              const content = cs.sections[key as keyof typeof cs.sections]
              const injectImage = afterMap[key]
              return (
                <div key={key}>
                  <motion.div
                    style={{ marginBottom: injectImage ? '40px' : '72px', paddingBottom: injectImage ? '0' : '72px', borderBottom: (!injectImage && i < sectionLabels.length - 1) ? '1px solid rgba(43,58,103,0.08)' : 'none' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '11px', color: '#C9A96E' }}>{label}</span>
                    <p className="font-body mt-4" style={{ fontSize: '17px', color: 'rgba(43,58,103,0.75)', lineHeight: 1.85 }}>
                      {content}
                    </p>
                  </motion.div>

                  {/* Inline case study image */}
                  {injectImage && (
                    <motion.div
                      className="case-study-image"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      style={{
                        position: 'relative',
                        height: '380px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        marginBottom: '72px',
                      }}
                    >
                      <Image
                        src={injectImage.src}
                        alt={injectImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 900px"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                      {/* Subtle brand overlay to unify with site palette */}
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.12)', borderRadius: '20px' }} />
                      {/* Bottom label caption */}
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 24px', background: 'linear-gradient(to top, rgba(30,42,74,0.7) 0%, transparent 100%)' }}>
                        <p className="font-body" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.03em' }}>
                          {injectImage.alt}
                        </p>
                      </div>
                      {/* Bottom border separator */}
                      <div style={{ position: 'absolute', bottom: '-36px', left: 0, right: 0, borderBottom: i < sectionLabels.length - 1 ? '1px solid rgba(43,58,103,0.08)' : 'none' }} />
                    </motion.div>
                  )}
                </div>
              )
            })
          })()}

          {/* Pull quote */}
          <motion.blockquote
            className="pull-quote-mobile"
            style={{ margin: '0 0 72px', padding: '40px 48px', background: '#1E2A4A', borderRadius: '16px', borderLeft: '4px solid #C9A96E' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display" style={{ fontSize: 'clamp(1rem, 2vw, 1.375rem)', color: '#fff', fontStyle: 'italic', lineHeight: 1.6, letterSpacing: '-0.01em' }}>
              &ldquo;{cs.pullQuote}&rdquo;
            </p>
            <cite className="font-body mt-4 block" style={{ fontSize: '13px', color: '#C9A96E', fontStyle: 'normal' }}>
              — {cs.pullQuoteAttrib}
            </cite>
          </motion.blockquote>

          {/* End CTA */}
          <div style={{ textAlign: 'center' }}>
            <a
              href="mailto:JaheimSalesman@gmail.com"
              style={{ display: 'inline-block', background: '#C9A96E', color: '#1E2A4A', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15px', padding: '18px 44px', borderRadius: '9999px', textDecoration: 'none' }}
            >
              Start a Similar Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
