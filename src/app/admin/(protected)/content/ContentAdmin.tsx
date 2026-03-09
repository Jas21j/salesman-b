'use client'

import { useState } from 'react'
import type { SiteSection, SiteSetting } from '@/lib/db/types'

type Props = {
  initialSections: SiteSection[]
  initialSettings: SiteSetting[]
}

export default function ContentAdmin({ initialSections, initialSettings }: Props) {
  const [sections, setSections] = useState<SiteSection[]>(initialSections)
  const [settings, setSettings] = useState<SiteSetting[]>(initialSettings)
  const [settingMessage, setSettingMessage] = useState('')

  const inputStyle = {
    width: '100%',
    padding: '9px 12px',
    background: '#0F1422',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 6,
    color: '#fff',
    fontSize: 13,
    fontFamily: 'var(--font-inter)',
    boxSizing: 'border-box' as const,
  }

  async function toggleSection(id: string, visible: boolean) {
    await fetch('/api/admin/sections', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, visible }),
    })
    setSections(prev => prev.map(s => s.id === id ? { ...s, visible } : s))
    await fetch('/api/admin/revalidate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ paths: ['/'] }) })
  }

  async function saveSetting(key: string, value: string) {
    await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value }),
    })
    setSettingMessage('Saved.')
    setTimeout(() => setSettingMessage(''), 2000)
  }

  const EDITABLE_SETTINGS = ['contact_email', 'contact_phone', 'contact_location', 'social_linkedin', 'seo_title', 'seo_description']

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>Content</h1>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: '0 0 40px' }}>Manage section visibility and site settings</p>

      {/* Section visibility */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
          Homepage Sections
        </h2>
        <div style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden' }}>
          {sections.length === 0 ? (
            <div style={{ padding: '20px 16px', fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
              Run the database migration to populate sections.
            </div>
          ) : sections.map((section, i) => (
            <div key={section.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: i < sections.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <div>
                <div style={{ fontSize: 13, color: '#fff' }}>{section.label ?? section.section_key}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{section.section_key}</div>
              </div>
              <button
                onClick={() => toggleSection(section.id, !section.visible)}
                style={{
                  padding: '6px 16px',
                  background: section.visible ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  color: section.visible ? '#22c55e' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {section.visible ? 'Visible' : 'Hidden'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Site settings */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
            Site Settings
          </h2>
          {settingMessage && <span style={{ fontSize: 12, color: '#B8862A' }}>{settingMessage}</span>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {EDITABLE_SETTINGS.map(key => {
            const setting = settings.find(s => s.key === key)
            return (
              <div key={key}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                  {key.replace(/_/g, ' ')}
                </label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    style={inputStyle}
                    defaultValue={setting?.value ?? ''}
                    onBlur={e => saveSetting(key, e.target.value)}
                    placeholder={`Enter ${key.replace(/_/g, ' ')}...`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
