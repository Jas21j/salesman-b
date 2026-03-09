'use client'

import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminTopBar() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <header
      style={{
        height: 56,
        background: '#1A1A2E',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#B8862A',
          }}
        >
          Salesman Solutions
        </span>
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>·</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
          Admin
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link
          href="/"
          target="_blank"
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.35)',
            textDecoration: 'none',
          }}
        >
          View Site ↗
        </Link>
        <button
          onClick={handleSignOut}
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.35)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 8px',
          }}
        >
          Sign Out
        </button>
      </div>
    </header>
  )
}
