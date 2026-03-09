import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'

const VALID_PATHS = ['/', '/insights', '/solutions', '/solutions/iris', '/solutions/assan', '/case-studies']

export async function POST(req: NextRequest) {
  // Validate session — admin only
  if (!(await isAuthorizedAdmin(await createClient()))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json().catch(() => ({}))
  const { paths } = body

  const toRevalidate: string[] = []

  if (Array.isArray(paths)) {
    for (const p of paths) {
      if (typeof p === 'string' && (VALID_PATHS.includes(p) || p.startsWith('/case-studies/'))) {
        toRevalidate.push(p)
      }
    }
  } else {
    toRevalidate.push('/', '/insights', '/solutions', '/case-studies')
  }

  for (const path of toRevalidate) {
    revalidatePath(path)
  }

  return NextResponse.json({ revalidated: toRevalidate })
}
