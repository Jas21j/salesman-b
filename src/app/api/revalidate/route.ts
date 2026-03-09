import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

const VALID_PATHS = ['/', '/insights', '/solutions', '/solutions/iris', '/solutions/assan', '/case-studies']

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const { paths, secret } = body

  // Validate secret — matches REVALIDATE_SECRET env var
  if (secret && secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  // If no secret provided, require authenticated admin session
  if (!secret) {
    // Allow if coming from admin (cookie session) — check referer or skip in dev
    // For simplicity, require the secret in all cases
    return NextResponse.json({ error: 'Secret required' }, { status: 401 })
  }

  const toRevalidate: string[] = []

  if (Array.isArray(paths)) {
    for (const p of paths) {
      if (typeof p === 'string' && (VALID_PATHS.includes(p) || p.startsWith('/case-studies/'))) {
        toRevalidate.push(p)
      }
    }
  } else {
    // Default: revalidate all key routes
    toRevalidate.push('/', '/insights', '/solutions', '/case-studies')
  }

  for (const path of toRevalidate) {
    revalidatePath(path)
  }

  return NextResponse.json({ revalidated: toRevalidate })
}
