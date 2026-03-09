import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminUpsertSetting } from '@/lib/db/queries'

export async function PUT(req: NextRequest) {
  if (!(await isAuthorizedAdmin(await createClient()))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { key, value } = await req.json()
  if (!key) return NextResponse.json({ error: 'Missing key' }, { status: 400 })
  await adminUpsertSetting(createServiceClient(), key, value ?? '')
  return NextResponse.json({ success: true })
}
