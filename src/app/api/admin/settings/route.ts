import { NextRequest, NextResponse } from 'next/server'
import { isSupabaseConfigured, isServiceRoleConfigured } from '@/lib/supabase/server'

export async function PUT(req: NextRequest) {
  if (!isSupabaseConfigured()) return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  try {
    const { createClient, createServiceClient } = await import('@/lib/supabase/server')
    const { isAuthorizedAdmin } = await import('@/lib/auth/utils')
    if (!(await isAuthorizedAdmin(await createClient()))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (!isServiceRoleConfigured()) return NextResponse.json({ error: 'Service role not configured' }, { status: 500 })
    const { adminUpsertSetting } = await import('@/lib/db/queries')
    const { key, value } = await req.json()
    if (!key) return NextResponse.json({ error: 'Missing key' }, { status: 400 })
    await adminUpsertSetting(createServiceClient(), key, value ?? '')
    return NextResponse.json({ success: true })
  } catch (e) { return NextResponse.json({ error: String(e) }, { status: 500 }) }
}
