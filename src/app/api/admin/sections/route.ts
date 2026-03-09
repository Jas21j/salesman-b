import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminToggleSectionVisibility } from '@/lib/db/queries'

export async function PUT(req: NextRequest) {
  if (!(await isAuthorizedAdmin(await createClient()))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id, visible } = await req.json()
  await adminToggleSectionVisibility(createServiceClient(), id, visible)
  return NextResponse.json({ success: true })
}
