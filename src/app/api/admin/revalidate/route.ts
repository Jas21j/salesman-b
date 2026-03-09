import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isSupabaseConfigured } from '@/lib/supabase/server'

const VALID_PATHS = ['/', '/insights', '/solutions', '/solutions/iris', '/solutions/assan', '/case-studies']

export async function POST(req: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  try {
    const { createClient } = await import('@/lib/supabase/server')
    const { isAuthorizedAdmin } = await import('@/lib/auth/utils')
    if (!(await isAuthorizedAdmin(await createClient()))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  } catch {
    return NextResponse.json({ error: 'Auth failed' }, { status: 401 })
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
