import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminUpsertInsight, adminDeleteInsight, adminWriteLog } from '@/lib/db/queries'

async function checkAuth() {
  const supabase = await createClient()
  const authorized = await isAuthorizedAdmin(supabase)
  return authorized
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  const serviceClient = createServiceClient()
  const saved = await adminUpsertInsight(serviceClient, body)
  await adminWriteLog(serviceClient, 'create_insight', 'insights', saved?.id, { title: saved?.title })
  return NextResponse.json(saved)
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  if (!body.id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  const serviceClient = createServiceClient()
  const saved = await adminUpsertInsight(serviceClient, body)
  await adminWriteLog(serviceClient, 'update_insight', 'insights', saved?.id, { title: saved?.title, status: saved?.status })
  return NextResponse.json(saved)
}

export async function DELETE(req: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  const serviceClient = createServiceClient()
  await adminDeleteInsight(serviceClient, id)
  await adminWriteLog(serviceClient, 'delete_insight', 'insights', id)
  return NextResponse.json({ success: true })
}
