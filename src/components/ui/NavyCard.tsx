import React from 'react'

interface NavyCardProps {
  children: React.ReactNode
  ghostNumeral?: string
  deep?: boolean
  className?: string
}

export default function NavyCard({
  children,
  ghostNumeral,
  deep = false,
  className = '',
}: NavyCardProps) {
  const bg = deep ? 'bg-navy-deep' : 'bg-navy'

  return (
    <div
      className={`${bg} border-t-[3px] border-gold rounded-xl shadow-card relative overflow-hidden ${className}`}
    >
      {ghostNumeral && (
        <span
          className="ghost-numeral select-none pointer-events-none"
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            fontSize: 'clamp(80px, 10vw, 120px)',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            color: 'rgba(201, 169, 110, 0.12)',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          {ghostNumeral}
        </span>
      )}
      {children}
    </div>
  )
}
