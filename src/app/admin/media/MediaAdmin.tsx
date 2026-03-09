'use client'

import { useState, useRef } from 'react'
import type { MediaAsset } from '@/lib/db/types'

type Props = { initialAssets: MediaAsset[] }

export default function MediaAdmin({ initialAssets }: Props) {
  const [assets, setAssets] = useState<MediaAsset[]>(initialAssets)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setMessage('')
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/admin/media', { method: 'POST', body: formData })
      if (!res.ok) throw new Error(await res.text())
      const asset: MediaAsset = await res.json()
      setAssets(prev => [asset, ...prev])
      setMessage('Uploaded successfully.')
    } catch (e) {
      setMessage('Upload failed.')
      console.error(e)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>Media Library</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: '4px 0 0' }}>Upload and manage assets</p>
        </div>
        <label style={{ padding: '10px 20px', background: '#C9A96E', color: '#1A1A2E', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          {uploading ? 'Uploading...' : '+ Upload'}
          <input ref={fileRef} type="file" accept="image/*,video/*,.pdf,.svg" style={{ display: 'none' }} onChange={handleUpload} disabled={uploading} />
        </label>
      </div>

      {message && <p style={{ fontSize: 13, color: '#C9A96E', marginBottom: 16 }}>{message}</p>}

      {assets.length === 0 ? (
        <div style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>
          No assets yet. Upload files to get started.
          <div style={{ marginTop: 8, fontSize: 12 }}>Requires Supabase Storage bucket &ldquo;media&rdquo; to be created.</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
          {assets.map(asset => (
            <div key={asset.id} style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: 120, background: '#0F1422', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {asset.filename.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i) ? (
                  <img src={`/api/admin/media/serve?path=${encodeURIComponent(asset.storage_path)}`} alt={asset.alt_text ?? asset.filename} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: 24 }}>📄</span>
                )}
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontSize: 11, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{asset.label ?? asset.filename}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{asset.category ?? 'general'}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
