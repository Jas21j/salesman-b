import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Salesman Solutions',
}

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      body: 'We collect information you voluntarily provide through our contact form, email correspondence, or direct engagement. This includes your name, email address, phone number, and the content of your inquiry. We do not collect payment information through this website.',
    },
    {
      title: '2. How We Use Your Information',
      body: 'Information collected is used exclusively to respond to inquiries, assess service fit, and fulfill engagement obligations. We do not use your information for advertising, profiling, or any purpose unrelated to the services you have requested.',
    },
    {
      title: '3. Data Storage and Security',
      body: 'Contact form submissions are processed via email and stored in our internal communication systems. We use industry-standard security practices to protect this information. We do not store financial or sensitive personal information on our servers.',
    },
    {
      title: '4. Third-Party Sharing',
      body: 'We do not sell, rent, or share your personal information with third parties, except as required by law or as necessary to fulfill the services you have engaged us for (for example, coordinating with partner vendors on your behalf).',
    },
    {
      title: '5. Cookies and Analytics',
      body: 'This website may use minimal cookies for functionality purposes. We do not use tracking cookies for advertising. If analytics tools are employed, they are configured to collect only aggregate, anonymized traffic data.',
    },
    {
      title: '6. Your Rights',
      body: 'You have the right to request access to the personal information we hold about you, to request correction of inaccurate information, and to request deletion of your data. To exercise these rights, contact us at JaheimSalesman@gmail.com.',
    },
    {
      title: '7. Data Retention',
      body: 'We retain client information for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. Inquiry data from non-clients is retained for a reasonable period to allow for follow-up, then deleted.',
    },
    {
      title: '8. Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised date. Continued use of our services after any changes constitutes acceptance of the updated policy.',
    },
    {
      title: '9. Contact',
      body: 'For questions about this Privacy Policy or your personal data, contact us at JaheimSalesman@gmail.com or 954-830-6310.',
    },
  ]

  return (
    <>
      {/* Header */}
      <section style={{ background: '#1E2A4A', padding: '140px 24px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="font-body font-semibold uppercase tracking-[0.15em]" style={{ fontSize: '12px', color: '#B8862A' }}>LEGAL</span>
          <h1 className="font-display font-bold text-white mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Privacy Policy
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
            <Link href="/legal/terms" className="font-body" style={{ fontSize: '14px', color: '#B8862A', textDecoration: 'none' }}>
              Terms of Service →
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
