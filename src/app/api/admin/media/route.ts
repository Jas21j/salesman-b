import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminInsertMediaRecord } from '@/lib/db/queries'

export async function POST(req: NextRequest) {
  if (!(await isAuthorizedAdmin(await createClient()))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const formData = await req.formData()
  const file = formData.get('file') as File | null
  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

  const svc = createServiceClient()
  const filename = file.name
  const storagePath = `uploads/${Date.now()}-${filename}`

  // Upload to Supabase Storage
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

  // Record in DB
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
}
