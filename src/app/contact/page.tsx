'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  'General Inquiry',
  'Property Operations',
  'Hospitality',
  'Digital Infrastructure',
  'Partnership',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.category || 'Inquiry'}] from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCategory: ${form.category}\n\n${form.message}`)
    window.location.href = `mailto:JaheimSalesman@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: '#FDFBF7',
    border: '1.5px solid rgba(43,58,103,0.15)',
    borderRadius: '10px',
    padding: '14px 18px',
    fontFamily: 'var(--font-inter)',
    fontSize: '15px',
    color: '#1A1A2E',
    outline: 'none',
    transition: 'border-color 0.25s',
  }

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#1E2A4A', padding: '160px 24px 100px', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/contact-hero.png"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          aria-hidden="true"
          priority
        />
        {/* Navy overlay — heavier to neutralize the blue tones of the building */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 42, 74, 0.78)' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to top, #FDFBF7 0%, transparent 100%)', zIndex: 1 }} />
        {/* Grain */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '256px', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>CONTACT</span>
            <h1 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
              The system starts<br />with a conversation.
            </h1>
            <p className="font-body font-light mt-6" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '500px' }}>
              Tell us what you&apos;re working on. We&apos;ll show you how to systematize it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form + Founder ── */}
      <section style={{ background: '#FDFBF7', padding: '100px 24px 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '80px', alignItems: 'start' }}>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#2B3A67', letterSpacing: '-0.02em', marginBottom: '36px' }}>
              Send a message
            </h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 24px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(184,134,42,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#B8862A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-display font-bold" style={{ fontSize: '22px', color: '#2B3A67' }}>Message Sent</h3>
                <p className="font-body mt-2" style={{ fontSize: '15px', color: 'rgba(43,58,103,0.6)' }}>Your email client should have opened. We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label className="font-body font-semibold block mb-2" style={{ fontSize: '13px', color: '#2B3A67' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#B8862A' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(43,58,103,0.15)' }}
                  />
                </div>
                <div>
                  <label className="font-body font-semibold block mb-2" style={{ fontSize: '13px', color: '#2B3A67' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#B8862A' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(43,58,103,0.15)' }}
                  />
                </div>
                <div>
                  <label className="font-body font-semibold block mb-2" style={{ fontSize: '13px', color: '#2B3A67' }}>Inquiry Category</label>
                  <select
                    value={form.category}
                    onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#B8862A' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(43,58,103,0.15)' }}
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-body font-semibold block mb-2" style={{ fontSize: '13px', color: '#2B3A67' }}>Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us what you're working on..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#B8862A' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(43,58,103,0.15)' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ background: '#B8862A', color: '#1E2A4A', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '15px', padding: '16px 36px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s', alignSelf: 'flex-start' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(184,134,42,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>

          {/* Founder block */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px', borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 20px 50px rgba(43,58,103,0.12)', background: '#F0EBE3', marginBottom: '32px' }}>
              <Image src="/founderheadshot.png" alt="Jaheim Salesman" fill style={{ objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
            <h3 className="font-display font-bold" style={{ fontSize: '22px', color: '#2B3A67', letterSpacing: '-0.01em' }}>Jaheim Salesman</h3>
            <p className="font-body mt-1" style={{ fontSize: '14px', color: 'rgba(43,58,103,0.5)' }}>Founder & Systems Architect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <a href="tel:9548306310" className="font-body no-underline hover:text-gold transition-colors" style={{ fontSize: '15px', color: '#B8862A', fontWeight: 600 }}>954-830-6310</a>
              <a href="mailto:JaheimSalesman@gmail.com" className="font-body no-underline" style={{ fontSize: '14px', color: 'rgba(43,58,103,0.55)' }}>JaheimSalesman@gmail.com</a>
              <span className="font-body" style={{ fontSize: '13px', color: 'rgba(43,58,103,0.4)' }}>Tallahassee, FL · South Florida, FL</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
