import { NextRequest, NextResponse } from 'next/server'
import { isSupabaseConfigured, isServiceRoleConfigured } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  if (!isSupabaseConfigured()) return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  try {
    const { createClient, createServiceClient } = await import('@/lib/supabase/server')
    const { isAuthorizedAdmin } = await import('@/lib/auth/utils')
    if (!(await isAuthorizedAdmin(await createClient()))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (!isServiceRoleConfigured()) return NextResponse.json({ error: 'Service role not configured' }, { status: 500 })

    const formData = await req.formData()
    const file = formData.get('file') as File | null
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const { adminInsertMediaRecord } = await import('@/lib/db/queries')
    const svc = createServiceClient()
    const filename = file.name
    const storagePath = `uploads/${Date.now()}-${filename}`

    const arrayBuffer = await file.arrayBuffer()
    const { error: uploadError } = await svc.storage
      .from('media')
      .upload(storagePath, arrayBuffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }

    const asset = await adminInsertMediaRecord(svc, {
      filename,
      storage_path: storagePath,
      storage_bucket: 'media',
      label: null,
      alt_text: null,
      category: 'general',
      usage_context: null,
      archived: false,
    })

    return NextResponse.json(asset)
  } catch (e) { return NextResponse.json({ error: String(e) }, { status: 500 }) }
}
