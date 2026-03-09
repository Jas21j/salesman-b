import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

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
    '/admin/:path*',
    '/api/auth/:path*',
  ],
}
