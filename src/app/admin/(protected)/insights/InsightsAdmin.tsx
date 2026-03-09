'use client'

import { useState } from 'react'
import type { Insight, ContentStatus } from '@/lib/db/types'
import StatusBadge from '../../components/StatusBadge'

type Props = { initialInsights: Insight[] }

const EMPTY_INSIGHT: Partial<Insight> = {
  title: '',
  summary: '',
  body: '',
  category: 'OPERATIONAL INTELLIGENCE',
  platform: undefined,
  source_name: '',
  source_url: '',
  read_time: '4 min read',
  status: 'draft',
  featured: false,
}

const CATEGORIES = [
  'OPERATIONAL INTELLIGENCE',
  'INFRASTRUCTURE ANALYSIS',
  'WORKFORCE SYSTEMS',
  'ECONOMIC RESEARCH',
  'PROPERTY SYSTEMS',
  'LOGISTICS INNOVATION',
  'DIGITAL TRANSFORMATION',
]

async function revalidatePaths() {
  await fetch('/api/admin/revalidate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paths: ['/', '/insights'] }),
  })
}

export default function InsightsAdmin({ initialInsights }: Props) {
  const [insights, setInsights] = useState<Insight[]>(initialInsights)
  const [editing, setEditing] = useState<Partial<Insight> | null>(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  function openNew() {
    setEditing({ ...EMPTY_INSIGHT })
    setMessage('')
  }

  function openEdit(insight: Insight) {
    setEditing({ ...insight })
    setMessage('')
  }

  function closeEditor() {
    setEditing(null)
    setMessage('')
  }

  async function handleSave() {
    if (!editing || !editing.title) return
    setSaving(true)
    try {
      const res = await fetch('/api/admin/insights', {
        method: editing.id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      })
      if (!res.ok) throw new Error(await res.text())
      const saved: Insight = await res.json()
      setInsights((prev) => {
        const exists = prev.find((i) => i.id === saved.id)
        return exists ? prev.map((i) => (i.id === saved.id ? saved : i)) : [saved, ...prev]
      })
      if (saved.status === 'live') await revalidatePaths()
      setMessage('Saved.')
      setTimeout(closeEditor, 800)
    } catch (e) {
      setMessage('Error saving. Check console.')
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this insight?')) return
    try {
      await fetch(`/api/admin/insights?id=${id}`, { method: 'DELETE' })
      setInsights((prev) => prev.filter((i) => i.id !== id))
    } catch (e) {
      console.error(e)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '9px 12px',
    background: '#0F1422',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 6,
    color: '#fff',
    fontSize: 13,
    fontFamily: 'var(--font-inter, Inter, sans-serif)',
    outline: 'none',
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

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            Insights
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: '4px 0 0' }}>
            Manage curated insight articles
          </p>
        </div>
        <button
          onClick={openNew}
          style={{ padding: '10px 20px', background: '#B8862A', color: '#1A1A2E', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
        >
          + New Insight
        </button>
      </div>

      {/* Editor modal */}
      {editing && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', overflowY: 'auto' }}>
          <div style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32, width: '100%', maxWidth: 640 }}>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              {editing.id ? 'Edit Insight' : 'New Insight'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={labelStyle}>Title *</label>
                <input style={inputStyle} value={editing.title ?? ''} onChange={e => setEditing(p => ({ ...p, title: e.target.value }))} placeholder="Insight title" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Status</label>
                  <select style={inputStyle} value={editing.status ?? 'draft'} onChange={e => setEditing(p => ({ ...p, status: e.target.value as ContentStatus }))}>
                    <option value="draft">Draft</option>
                    <option value="live">Live</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Platform</label>
                  <select style={inputStyle} value={editing.platform ?? ''} onChange={e => setEditing(p => ({ ...p, platform: (e.target.value as 'IRIS' | 'ASSAN') || undefined }))}>
                    <option value="">None</option>
                    <option value="IRIS">IRIS</option>
                    <option value="ASSAN">ASSAN</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Category</label>
                <select style={inputStyle} value={editing.category ?? ''} onChange={e => setEditing(p => ({ ...p, category: e.target.value }))}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Summary</label>
                <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={editing.summary ?? ''} onChange={e => setEditing(p => ({ ...p, summary: e.target.value }))} placeholder="Brief summary (shown in card previews)" />
              </div>

              <div>
                <label style={labelStyle}>Body</label>
                <textarea style={{ ...inputStyle, minHeight: 160, resize: 'vertical' }} value={editing.body ?? ''} onChange={e => setEditing(p => ({ ...p, body: e.target.value }))} placeholder="Full article body" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Source Name</label>
                  <input style={inputStyle} value={editing.source_name ?? ''} onChange={e => setEditing(p => ({ ...p, source_name: e.target.value }))} placeholder="McKinsey, WEF, etc." />
                </div>
                <div>
                  <label style={labelStyle}>Read Time</label>
                  <input style={inputStyle} value={editing.read_time ?? ''} onChange={e => setEditing(p => ({ ...p, read_time: e.target.value }))} placeholder="4 min read" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Source URL</label>
                <input style={inputStyle} value={editing.source_url ?? ''} onChange={e => setEditing(p => ({ ...p, source_url: e.target.value }))} placeholder="https://..." />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input type="checkbox" id="featured" checked={editing.featured ?? false} onChange={e => setEditing(p => ({ ...p, featured: e.target.checked }))} />
                <label htmlFor="featured" style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>
                  Featured (shown on homepage preview)
                </label>
              </div>
            </div>

            {message && (
              <p style={{ marginTop: 12, fontSize: 12, color: '#B8862A' }}>{message}</p>
            )}

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={handleSave} disabled={saving} style={{ flex: 1, padding: '11px', background: '#B8862A', color: '#1A1A2E', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer' }}>
                {saving ? 'Saving...' : 'Save Insight'}
              </button>
              <button onClick={closeEditor} style={{ padding: '11px 20px', background: 'transparent', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Insights table */}
      <div style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden' }}>
        {insights.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>
            No insights yet. Click "+ New Insight" to create one.
          </div>
        ) : (
          insights.map((insight, i) => (
            <div
              key={insight.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 20px',
                borderBottom: i < insights.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {insight.title}
                  </span>
                  {insight.featured && (
                    <span style={{ fontSize: 10, padding: '1px 6px', background: 'rgba(184,134,42,0.15)', color: '#B8862A', borderRadius: 4, fontWeight: 600, letterSpacing: '0.06em', flexShrink: 0 }}>
                      FEATURED
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
                  {insight.category ?? '—'} · {insight.platform ?? 'No platform'}
                </div>
              </div>
              <StatusBadge status={insight.status} />
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => openEdit(insight)} style={{ padding: '6px 12px', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, fontSize: 12, cursor: 'pointer' }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(insight.id)} style={{ padding: '6px 12px', background: 'transparent', color: 'rgba(239,68,68,0.6)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 6, fontSize: 12, cursor: 'pointer' }}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
