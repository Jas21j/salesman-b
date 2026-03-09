import { createServiceClient } from '@/lib/supabase/server'
import { adminFetchSettings } from '@/lib/db/queries'
import SettingsAdmin from './SettingsAdmin'

export default async function AdminSettingsPage() {
  const settings = await adminFetchSettings(createServiceClient()).catch(() => [])
  return <SettingsAdmin initialSettings={settings} />
}
