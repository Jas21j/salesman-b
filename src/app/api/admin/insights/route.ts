import { NextRequest, NextResponse } from 'next/server'
import { isSupabaseConfigured, isServiceRoleConfigured } from '@/lib/supabase/server'

async function checkAuth() {
  if (!isSupabaseConfigured()) return false
  try {
    const { createClient } = await import('@/lib/supabase/server')
    const { isAuthorizedAdmin } = await import('@/lib/auth/utils')
    const supabase = await createClient()
    return await isAuthorizedAdmin(supabase)
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!isServiceRoleConfigured()) {
    return NextResponse.json({ error: 'Service role not configured' }, { status: 500 })
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminUpsertInsight, adminWriteLog } = await import('@/lib/db/queries')
    const body = await req.json()
    const serviceClient = createServiceClient()
    const saved = await adminUpsertInsight(serviceClient, body)
    await adminWriteLog(serviceClient, 'create_insight', 'insights', saved?.id, { title: saved?.title })
    return NextResponse.json(saved)
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!isServiceRoleConfigured()) {
    return NextResponse.json({ error: 'Service role not configured' }, { status: 500 })
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminUpsertInsight, adminWriteLog } = await import('@/lib/db/queries')
    const body = await req.json()
    if (!body.id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const serviceClient = createServiceClient()
    const saved = await adminUpsertInsight(serviceClient, body)
    await adminWriteLog(serviceClient, 'update_insight', 'insights', saved?.id, { title: saved?.title, status: saved?.status })
    return NextResponse.json(saved)
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (!isServiceRoleConfigured()) {
    return NextResponse.json({ error: 'Service role not configured' }, { status: 500 })
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminDeleteInsight, adminWriteLog } = await import('@/lib/db/queries')
    const id = req.nextUrl.searchParams.get('id')
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const serviceClient = createServiceClient()
    await adminDeleteInsight(serviceClient, id)
    await adminWriteLog(serviceClient, 'delete_insight', 'insights', id)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
