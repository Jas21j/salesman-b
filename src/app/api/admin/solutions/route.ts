import { NextRequest, NextResponse } from 'next/server'
import { isSupabaseConfigured, isServiceRoleConfigured } from '@/lib/supabase/server'

async function checkAuth() {
  if (!isSupabaseConfigured()) return false
  try {
    const { createClient } = await import('@/lib/supabase/server')
    const { isAuthorizedAdmin } = await import('@/lib/auth/utils')
    return await isAuthorizedAdmin(await createClient())
  } catch { return false }
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!isServiceRoleConfigured()) return NextResponse.json({ error: 'Service role not configured' }, { status: 500 })
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminUpsertSolution, adminWriteLog } = await import('@/lib/db/queries')
    const body = await req.json()
    const svc = createServiceClient()
    const saved = await adminUpsertSolution(svc, body)
    await adminWriteLog(svc, 'create_solution', 'solutions', saved?.id)
    return NextResponse.json(saved)
  } catch (e) { return NextResponse.json({ error: String(e) }, { status: 500 }) }
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!isServiceRoleConfigured()) return NextResponse.json({ error: 'Service role not configured' }, { status: 500 })
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminUpsertSolution, adminWriteLog } = await import('@/lib/db/queries')
    const body = await req.json()
    if (!body.id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const svc = createServiceClient()
    const saved = await adminUpsertSolution(svc, body)
    await adminWriteLog(svc, 'update_solution', 'solutions', saved?.id)
    return NextResponse.json(saved)
  } catch (e) { return NextResponse.json({ error: String(e) }, { status: 500 }) }
}
