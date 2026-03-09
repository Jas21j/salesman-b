import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Checks whether the currently authenticated user is the authorized admin.
 * Validates against the GitHub username stored in user metadata.
 */
export async function isAuthorizedAdmin(supabase: SupabaseClient): Promise<boolean> {
  const allowedUsername = process.env.ALLOWED_GITHUB_USERNAME
  if (!allowedUsername) return false

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) return false

  const githubUsername: string | undefined = user.user_metadata?.user_name
  return !!githubUsername && githubUsername.toLowerCase() === allowedUsername.toLowerCase()
}

/**
 * Returns the current session user, or null if unauthenticated.
 */
export async function getAdminUser(supabase: SupabaseClient) {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}
