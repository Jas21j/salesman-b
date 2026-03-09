import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Salesman Solutions',
}

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      body: 'By accessing or using the Salesman Solutions website and any associated services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
    },
    {
      title: '2. Services',
      body: 'Salesman Solutions provides operational systems design, platform deployment, and digital infrastructure consulting services through its ASSAN and IRIS platforms. The nature, scope, and terms of specific engagements are governed by individual service agreements.',
    },
    {
      title: '3. Intellectual Property',
      body: 'All content on this website — including text, graphics, logos, and platform documentation — is the property of Salesman Solutions and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.',
    },
    {
      title: '4. Confidentiality',
      body: 'Information shared through contact forms, email, or direct engagement is treated as confidential and is used solely to assess and fulfill service requests. We do not sell, rent, or share client information with third parties without explicit consent.',
    },
    {
      title: '5. Limitation of Liability',
      body: 'Salesman Solutions provides services in good faith based on the information available at the time of engagement. We are not liable for outcomes resulting from implementation decisions made independently of our guidance, or for circumstances beyond our reasonable control.',
    },
    {
      title: '6. Modifications',
      body: 'We reserve the right to modify these Terms at any time. Continued use of this website following any modification constitutes acceptance of the updated terms. We will make reasonable efforts to notify clients of material changes.',
    },
    {
      title: '7. Governing Law',
      body: 'These Terms are governed by the laws of the State of Florida, United States. Any disputes arising under these terms shall be resolved in the appropriate courts of Florida.',
    },
    {
      title: '8. Contact',
      body: 'For questions about these Terms, contact us at JaheimSalesman@gmail.com or by phone at 954-830-6310.',
    },
  ]

  return (
    <>
      {/* Header */}
      <section style={{ background: '#1E2A4A', padding: '140px 24px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>LEGAL</span>
          <h1 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Terms of Service
          </h1>
          <p className="font-body mt-4" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)' }}>Last updated: March 2025</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#FDFBF7', padding: '80px 24px 120px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {sections.map((s) => (
            <div key={s.title} style={{ marginBottom: '44px' }}>
              <h2 className="font-display font-bold" style={{ fontSize: '20px', color: '#2B3A67', letterSpacing: '-0.01em', marginBottom: '12px' }}>
                {s.title}
              </h2>
              <p className="font-body" style={{ fontSize: '16px', color: 'rgba(43,58,103,0.7)', lineHeight: 1.8 }}>
                {s.body}
              </p>
            </div>
          ))}

          <div style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid rgba(43,58,103,0.1)', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/legal/privacy" className="font-body" style={{ fontSize: '14px', color: '#B8862A', textDecoration: 'none' }}>
              Privacy Policy →
            </Link>
            <Link href="/contact" className="font-body" style={{ fontSize: '14px', color: 'rgba(43,58,103,0.5)', textDecoration: 'none' }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
