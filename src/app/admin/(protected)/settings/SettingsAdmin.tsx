'use client'

import { useState } from 'react'
import type { SiteSetting } from '@/lib/db/types'

type Props = { initialSettings: SiteSetting[] }

const ALL_SETTINGS = [
  { key: 'contact_email', label: 'Contact Email' },
  { key: 'contact_phone', label: 'Contact Phone' },
  { key: 'contact_location', label: 'Contact Location' },
  { key: 'social_linkedin', label: 'LinkedIn URL' },
  { key: 'seo_title', label: 'SEO Title' },
  { key: 'seo_description', label: 'SEO Description' },
]

export default function SettingsAdmin({ initialSettings }: Props) {
  const [settings, setSettings] = useState<SiteSetting[]>(initialSettings)
  const [saving, setSaving] = useState<string | null>(null)
  const [saved, setSaved] = useState<string | null>(null)

  async function handleSave(key: string, value: string) {
    setSaving(key)
    try {
      await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value }),
      })
      setSettings(prev => prev.find(s => s.key === key) ? prev.map(s => s.key === key ? { ...s, value } : s) : [...prev, { id: key, key, value, updated_at: new Date().toISOString() }])
      setSaved(key)
      setTimeout(() => setSaved(null), 2000)
    } catch (e) { console.error(e) }
    finally { setSaving(null) }
  }

  const inputStyle = {
    flex: 1,
    padding: '9px 12px',
    background: '#0F1422',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 6,
    color: '#fff',
    fontSize: 13,
    fontFamily: 'var(--font-inter)',
    outline: 'none',
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>Settings</h1>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: '0 0 40px' }}>Global site configuration</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 560 }}>
        {ALL_SETTINGS.map(({ key, label }) => {
          const current = settings.find(s => s.key === key)?.value ?? ''
          return (
            <div key={key}>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                {label}
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  style={inputStyle}
                  defaultValue={current}
                  onBlur={e => handleSave(key, e.target.value)}
                  placeholder={`Enter ${label.toLowerCase()}...`}
                />
                {saving === key && <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', alignSelf: 'center' }}>Saving...</span>}
                {saved === key && <span style={{ fontSize: 12, color: '#22c55e', alignSelf: 'center' }}>✓</span>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
