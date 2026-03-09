'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      {/* ── Desktop Nav Pill ── */}
      <motion.header
        className="fixed top-5 left-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full"
        style={{
          width: 'calc(100% - 48px)',
          maxWidth: '1200px',
          x: '-50%',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        animate={
          scrolled
            ? {
                background: 'rgba(30, 42, 74, 0.88)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }
            : {
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
              }
        }
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline" onClick={closeMobile}>
          <Image
            src="/logo.png"
            alt="Salesman Solutions"
            width={36}
            height={36}
            style={{ objectFit: 'contain', borderRadius: 0 }}
            priority
          />
          <span
            className="font-display font-bold text-white hidden sm:block"
            style={{ fontSize: '18px', letterSpacing: '-0.02em' }}
          >
            Salesman<span style={{ fontWeight: 400, opacity: 0.7 }}>Solutions</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link font-body text-white/85 no-underline transition-colors duration-300 hover:text-white"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full"
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white rounded-full"
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy-deep/95 backdrop-blur-lg"
              onClick={closeMobile}
            />
            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-navy-deep flex flex-col pt-24 px-8 pb-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="font-body text-white text-xl font-medium no-underline hover:text-gold transition-colors duration-200 block"
                      onClick={closeMobile}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto">
                <a
                  href="mailto:JaheimSalesman@gmail.com"
                  className="font-body text-gold/70 text-sm"
                  onClick={closeMobile}
                >
                  JaheimSalesman@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
