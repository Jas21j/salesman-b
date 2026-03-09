import Link from 'next/link'
import { isServiceRoleConfigured } from '@/lib/supabase/server'

export default async function AdminDashboard() {
  let counts: { insights: Record<string, number>; solutions: Record<string, number>; case_studies: Record<string, number> } | null = null
  let recentLogs: { id: string; action: string; entity_type: string | null; created_at: string }[] = []

  if (isServiceRoleConfigured()) {
    try {
      const { createServiceClient } = await import('@/lib/supabase/server')
      const { adminFetchStatusCounts, adminFetchLogs } = await import('@/lib/db/queries')
      const serviceClient = createServiceClient()
      const [c, l] = await Promise.all([
        adminFetchStatusCounts(serviceClient).catch(() => null),
        adminFetchLogs(serviceClient, 10).catch(() => []),
      ])
      counts = c
      recentLogs = l
    } catch {
      // Service client not available
    }
  }

  const sections = [
    { label: 'Insights', counts: counts?.insights },
    { label: 'Solutions', counts: counts?.solutions },
    { label: 'Case Studies', counts: counts?.case_studies },
  ]

  const quickLinks = [
    { href: '/admin/insights', label: 'Manage Insights' },
    { href: '/admin/solutions', label: 'Manage Solutions' },
    { href: '/admin/case-studies', label: 'Manage Case Studies' },
    { href: '/admin/content', label: 'Page Content' },
    { href: '/admin/media', label: 'Media Library' },
    { href: '/admin/settings', label: 'Settings' },
  ]

  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-outfit, Outfit, sans-serif)',
          fontSize: 24,
          fontWeight: 700,
          color: '#fff',
          margin: '0 0 4px',
          letterSpacing: '-0.02em',
        }}
      >
        Dashboard
      </h1>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: '0 0 40px' }}>
        Salesman Solutions content control center
      </p>

      {!isServiceRoleConfigured() && (
        <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 10, padding: '16px 20px', marginBottom: 24 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,100,100,0.9)', lineHeight: 1.6 }}>
            <strong>Configuration required:</strong> The SUPABASE_SERVICE_ROLE_KEY environment variable is not set. Add it to your Netlify environment variables to enable database operations.
          </p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 40 }}>
        {sections.map(({ label, counts: c }) => (
          <div
            key={label}
            style={{
              background: '#1A1A2E',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 12,
              padding: '20px 24px',
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 16 }}>
              {label}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {(['live', 'draft', 'scheduled', 'archived'] as const).map((status) => (
                <div key={status}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-outfit)' }}>
                    {c ? (c as Record<string, number>)[status] : '—'}
                  </div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'capitalize' }}>
                    {status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <h2 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Quick Links
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {quickLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  background: '#1A1A2E',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 8,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Recent Activity
          </h2>
          <div
            style={{
              background: '#1A1A2E',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            {recentLogs.length === 0 ? (
              <div style={{ padding: '20px 16px', fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
                No activity yet.
              </div>
            ) : (
              recentLogs.map((log) => (
                <div
                  key={log.id}
                  style={{
                    padding: '12px 16px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    fontSize: 12,
                  }}
                >
                  <div style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>
                    {log.action}
                    {log.entity_type && (
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}> · {log.entity_type}</span>
                    )}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11 }}>
                    {new Date(log.created_at).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
