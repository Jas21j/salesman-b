import React from 'react'

interface SectionHeaderProps {
  eyebrow: string
  headline: string
  sub?: string
  light?: boolean
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  headline,
  sub,
  light = false,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  const textAlign = centered ? 'text-center' : ''
  const eyebrowColor = 'text-gold'
  const headlineColor = light ? 'text-white' : 'text-navy'
  const subColor = light ? 'text-white/60' : 'text-navy/60'

  return (
    <div className={`${textAlign} ${className}`}>
      <span
        className={`font-body text-xs font-semibold tracking-[0.15em] uppercase ${eyebrowColor}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display font-bold leading-tight tracking-tight mt-3 ${headlineColor}`}
        style={{ fontSize: 'clamp(1.75rem, 3vw, 3rem)', letterSpacing: '-0.03em' }}
      >
        {headline}
      </h2>
      {sub && (
        <p
          className={`font-body font-light mt-4 leading-relaxed ${subColor}`}
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
