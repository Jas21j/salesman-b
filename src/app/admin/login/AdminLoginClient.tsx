'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginClient() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGitHubLogin() {
    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const { data, error: authError } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/api/auth/callback`,
        },
      })

      if (authError) {
        setError('Authentication failed. Please try again.')
        setLoading(false)
        return
      }

      if (data?.url) {
        window.location.href = data.url
        return
      }

      setError('Could not initiate sign-in.')
      setLoading(false)
    } catch {
      setError('An unexpected error occurred.')
      setLoading(false)
    }
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
        padding: '24px',
      }}
    >
      <div style={{ marginBottom: 48, textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8862A', marginBottom: 8 }}>
          Salesman Solutions
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>Admin Access</div>
      </div>

      <div style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '40px 48px', width: '100%', maxWidth: 380, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit, Outfit, sans-serif)', fontSize: 22, fontWeight: 600, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
          Sign in
        </h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: '0 0 32px' }}>
          Access is restricted to authorized accounts only.
        </p>

        {error && (
          <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 8, padding: '10px 14px', marginBottom: 20, fontSize: 12, color: 'rgba(255,100,100,0.9)' }}>
            {error}
          </div>
        )}

        <button
          onClick={handleGitHubLogin}
          disabled={loading}
          style={{ width: '100%', padding: '13px 24px', background: loading ? 'rgba(184,134,42,0.6)' : '#B8862A', color: '#1A1A2E', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
        >
          {loading ? 'Connecting...' : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Continue with GitHub
            </>
          )}
        </button>
      </div>

      <p style={{ marginTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
        Unauthorized access attempts are logged.
      </p>
    </div>
  )
}
