'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedChartProps {
  value: number // 0–100 percentage
  type: 'arc' | 'bar' | 'ring'
  size?: number
  color?: string
  trackColor?: string
  strokeWidth?: number
  label?: string
}

function ArcChart({
  value,
  size = 120,
  color = '#B8862A',
  trackColor = 'rgba(255,255,255,0.08)',
  strokeWidth = 8,
  inView,
}: AnimatedChartProps & { inView: boolean }) {
  const radius = (size - strokeWidth * 2) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={strokeWidth}
      />
      {/* Animated fill */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      />
    </svg>
  )
}

function RingChart({
  value,
  size = 100,
  color = '#B8862A',
  trackColor = 'rgba(255,255,255,0.08)',
  strokeWidth = 10,
  inView,
}: AnimatedChartProps & { inView: boolean }) {
  const radius = (size - strokeWidth * 2) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={trackColor}
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      />
    </svg>
  )
}

function BarChart({
  value,
  color = '#B8862A',
  trackColor = 'rgba(255,255,255,0.08)',
  inView,
}: AnimatedChartProps & { inView: boolean }) {
  return (
    <div className="w-full" style={{ height: '8px', background: trackColor, borderRadius: '4px', overflow: 'hidden' }}>
      <motion.div
        style={{ height: '100%', background: color, borderRadius: '4px', originX: 0 }}
        initial={{ width: '0%' }}
        animate={inView ? { width: `${value}%` } : { width: '0%' }}
        transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      />
    </div>
  )
}

export default function AnimatedChart(props: AnimatedChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <div ref={ref}>
      {props.type === 'arc' && <ArcChart {...props} inView={inView} />}
      {props.type === 'ring' && <RingChart {...props} inView={inView} />}
      {props.type === 'bar' && <BarChart {...props} inView={inView} />}
    </div>
  )
}
