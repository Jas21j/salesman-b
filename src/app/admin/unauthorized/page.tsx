import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AdminUnauthorizedClient from './AdminUnauthorizedClient'

export default async function UnauthorizedPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Not even logged in → send to login
  if (!user) redirect('/admin/login')

  return <AdminUnauthorizedClient />
}
