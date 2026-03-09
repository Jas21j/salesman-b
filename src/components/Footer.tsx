import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A2E', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline mb-4">
              <Image
                src="/logo.png"
                alt="Salesman Solutions"
                width={34}
                height={34}
                style={{ objectFit: 'contain', borderRadius: 0 }}
              />
              <span
                className="font-display font-bold"
                style={{ fontSize: '17px', color: '#E8DCC8', letterSpacing: '-0.02em' }}
              >
                Salesman<span style={{ fontWeight: 400, opacity: 0.6 }}>Solutions</span>
              </span>
            </Link>
            <p className="font-body" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, maxWidth: '260px' }}>
              A global venture platform building operational systems that improve industries.
            </p>
            <div className="flex gap-3 mt-5">
              <span
                className="font-body font-semibold tracking-widest uppercase"
                style={{ fontSize: '10px', color: 'rgba(184,134,42,0.5)' }}
              >
                IRIS
              </span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
              <span
                className="font-body font-semibold tracking-widest uppercase"
                style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}
              >
                ASSAN
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span
              className="font-body font-semibold uppercase tracking-widest block mb-4"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}
            >
              Navigation
            </span>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body no-underline transition-colors duration-300 hover:text-gold"
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <span
              className="font-body font-semibold uppercase tracking-widest block mb-4"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}
            >
              Platforms
            </span>
            <div className="flex flex-col gap-3">
              <Link
                href="/solutions/iris"
                className="font-body no-underline transition-colors duration-300 hover:text-gold"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}
              >
                IRIS — Intelligence
              </Link>
              <Link
                href="/solutions/assan"
                className="font-body no-underline transition-colors duration-300 hover:text-gold"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}
              >
                ASSAN — Operations
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span
              className="font-body font-semibold uppercase tracking-widest block mb-4"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}
            >
              Contact
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9548306310"
                className="font-body no-underline transition-colors duration-300 hover:text-gold"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}
              >
                954-830-6310
              </a>
              <a
                href="mailto:JaheimSalesman@gmail.com"
                className="font-body no-underline transition-colors duration-300 hover:text-gold"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)' }}
              >
                JaheimSalesman@gmail.com
              </a>
              <span className="font-body" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
                Tallahassee, FL · South Florida, FL
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '0 0 24px' }} />

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <span className="font-body" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
            © 2026 Salesman Solutions. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link
              href="/legal/terms"
              className="font-body no-underline transition-colors duration-300 hover:text-white"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}
            >
              Terms
            </Link>
            <Link
              href="/legal/privacy"
              className="font-body no-underline transition-colors duration-300 hover:text-white"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
