'use client'

import { useState } from 'react'
import type { CaseStudyRecord, ContentStatus } from '@/lib/db/types'
import type { CaseStudy } from '@/data/caseStudies'
import StatusBadge from '../components/StatusBadge'

type Props = {
  staticCaseStudies: CaseStudy[]
  dbRecords: CaseStudyRecord[]
}

export default function CaseStudiesAdmin({ staticCaseStudies, dbRecords }: Props) {
  const [records, setRecords] = useState<CaseStudyRecord[]>(dbRecords)
  const [editing, setEditing] = useState<Partial<CaseStudyRecord> | null>(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  // Build merged view: static content + DB overlay
  const merged = staticCaseStudies.map(sc => {
    const db = records.find(r => r.slug === sc.slug)
    return { static: sc, db }
  })

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
  const labelStyle = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: 6,
  }

  async function handleSave() {
    if (!editing || !editing.slug) return
    setSaving(true)
    try {
      const res = await fetch('/api/admin/case-studies', {
        method: editing.id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      })
      const saved: CaseStudyRecord = await res.json()
      setRecords(prev => prev.find(r => r.id === saved.id) ? prev.map(r => r.id === saved.id ? saved : r) : [saved, ...prev])
      if (saved.status === 'live') {
        await fetch('/api/admin/revalidate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ paths: ['/case-studies', `/case-studies/${saved.slug}`] }) })
      }
      setMessage('Saved.')
      setTimeout(() => setEditing(null), 800)
    } catch (e) { setMessage('Error saving.'); console.error(e) }
    finally { setSaving(false) }
  }

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>Case Studies</h1>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: '4px 0 0' }}>
          Manage publish state, featured status, and sort order. Narrative content is managed in code.
        </p>
      </div>

      {editing && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', overflowY: 'auto' }}>
          <div style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, width: '100%', maxWidth: 480 }}>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{editing.title}</h2>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: '0 0 24px' }}>/{editing.slug}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Status</label>
                  <select style={inputStyle} value={editing.status ?? 'live'} onChange={e => setEditing(p => ({ ...p, status: e.target.value as ContentStatus }))}>
                    <option value="draft">Draft</option>
                    <option value="live">Live</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Sort Order</label>
                  <input type="number" style={inputStyle} value={editing.sort_order ?? 0} onChange={e => setEditing(p => ({ ...p, sort_order: Number(e.target.value) }))} />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input type="checkbox" id="cs-featured" checked={editing.featured ?? false} onChange={e => setEditing(p => ({ ...p, featured: e.target.checked }))} />
                <label htmlFor="cs-featured" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>Featured</label>
              </div>
            </div>
            {message && <p style={{ marginTop: 12, fontSize: 12, color: '#C9A96E' }}>{message}</p>}
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={handleSave} disabled={saving} style={{ flex: 1, padding: '11px', background: '#C9A96E', color: '#1A1A2E', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                {saving ? 'Saving...' : 'Save'}
              </button>
              <button onClick={() => setEditing(null)} style={{ padding: '11px 20px', background: 'transparent', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden' }}>
        {merged.map(({ static: sc, db }, i) => (
          <div key={sc.slug} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderBottom: i < merged.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#fff', marginBottom: 2 }}>{sc.name}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
                {sc.platform} · /{sc.slug} · {sc.period}
              </div>
            </div>
            {db?.featured && <span style={{ fontSize: 10, padding: '1px 6px', background: 'rgba(201,169,110,0.15)', color: '#C9A96E', borderRadius: 4, fontWeight: 600, letterSpacing: '0.06em' }}>FEATURED</span>}
            <StatusBadge status={db?.status ?? 'live'} />
            <button
              onClick={() => setEditing(db ?? { slug: sc.slug, platform: sc.platform as 'IRIS' | 'ASSAN', title: sc.name, status: 'live', featured: false, sort_order: i + 1 })}
              style={{ padding: '6px 12px', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 12, cursor: 'pointer' }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
