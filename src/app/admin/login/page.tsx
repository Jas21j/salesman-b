import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import AdminLoginClient from './AdminLoginClient'

export default async function AdminLoginPage() {
  const supabase = await createClient()
  const authorized = await isAuthorizedAdmin(supabase)

  // Already logged in as admin → go straight to dashboard
  if (authorized) redirect('/admin')

  return <AdminLoginClient />
}
