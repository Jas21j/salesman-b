import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminFetchStatusCounts, adminFetchLogs } from '@/lib/db/queries'

export default async function AdminDashboard() {
  const supabase = await createClient()
  const authorized = await isAuthorizedAdmin(supabase)
  if (!authorized) redirect('/admin/unauthorized')

  // Use service client for admin queries
  const serviceClient = createServiceClient()
  const [counts, recentLogs] = await Promise.all([
    adminFetchStatusCounts(serviceClient).catch(() => null),
    adminFetchLogs(serviceClient, 10).catch(() => []),
  ])

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

      {/* Status counts */}
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
                    {c ? c[status] : '—'}
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
        {/* Quick links */}
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

        {/* Recent activity */}
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
