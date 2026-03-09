'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminUnauthorizedClient() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0F1422',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
        textAlign: 'center',
        padding: 24,
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'rgba(201, 169, 110, 0.12)',
            border: '1px solid rgba(201, 169, 110, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-outfit, Outfit, sans-serif)',
            fontSize: 20,
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 8px',
          }}
        >
          Access Restricted
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', maxWidth: 280, margin: '0 auto 32px' }}>
          This admin panel is restricted to authorized accounts only.
        </p>

        <button
          onClick={handleSignOut}
          style={{
            padding: '10px 24px',
            background: 'transparent',
            color: '#C9A96E',
            border: '1px solid rgba(201, 169, 110, 0.4)',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
