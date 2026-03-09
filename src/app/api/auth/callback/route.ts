import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const ALLOWED_USERNAME = process.env.ALLOWED_GITHUB_USERNAME ?? 'jas21j'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${origin}/admin/login`)
  }

  const supabase = await createClient()

  const { data, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error || !data.user) {
    return NextResponse.redirect(`${origin}/admin/login`)
  }

  // Validate GitHub username
  const githubUsername: string | undefined = data.user.user_metadata?.user_name

  if (githubUsername !== ALLOWED_USERNAME) {
    // Sign out the unauthorized user immediately
    await supabase.auth.signOut()
    return NextResponse.redirect(`${origin}/admin/unauthorized`)
  }

  return NextResponse.redirect(`${origin}/admin`)
}
