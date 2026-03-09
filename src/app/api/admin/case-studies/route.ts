import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminUpsertCaseStudy, adminWriteLog } from '@/lib/db/queries'

async function checkAuth() {
  return isAuthorizedAdmin(await createClient())
}

export async function POST(req: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const svc = createServiceClient()
  const saved = await adminUpsertCaseStudy(svc, body)
  await adminWriteLog(svc, 'create_case_study', 'case_studies', saved?.id)
  return NextResponse.json(saved)
}

export async function PUT(req: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  if (!body.id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  const svc = createServiceClient()
  const saved = await adminUpsertCaseStudy(svc, body)
  await adminWriteLog(svc, 'update_case_study', 'case_studies', saved?.id)
  return NextResponse.json(saved)
}
