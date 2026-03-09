import { redirect } from 'next/navigation'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminFetchSettings } from '@/lib/db/queries'
import SettingsAdmin from './SettingsAdmin'

export default async function AdminSettingsPage() {
  const supabase = await createClient()
  if (!(await isAuthorizedAdmin(supabase))) redirect('/admin/unauthorized')
  const settings = await adminFetchSettings(createServiceClient()).catch(() => [])
  return <SettingsAdmin initialSettings={settings} />
}
