import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // ── OAuth code rescue ───────────────────────────────────────────────────────
  // Supabase may redirect the OAuth code to the site root (or any path) if the
  // callback URL isn't on its allowed-redirect list. We catch that here and
  // forward the code to the real handler so auth always completes.
  const code = searchParams.get('code')
  if (code && pathname !== '/api/auth/callback') {
    const callbackUrl = new URL('/api/auth/callback', request.url)
    callbackUrl.searchParams.set('code', code)
    const state = searchParams.get('state')
    if (state) callbackUrl.searchParams.set('state', state)
    return NextResponse.redirect(callbackUrl)
  }

  // Refresh Supabase session on every request
  const { supabaseResponse, user } = await updateSession(request)

  // ── Protect /admin routes ──────────────────────────────────────────────────
  if (pathname.startsWith('/admin')) {
    // Allow login and unauthorized pages through — they handle their own logic
    if (pathname === '/admin/login' || pathname === '/admin/unauthorized') {
      return supabaseResponse
    }

    // No session → redirect to login
    if (!user) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }

    // Session exists but username not yet validated here.
    // The admin layout.tsx performs full username validation as a second layer.
    // This middleware only checks session presence for fast redirection.
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Run on all paths except static assets. This is required so the OAuth
     * code-rescue logic above can intercept codes that land on any route.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
