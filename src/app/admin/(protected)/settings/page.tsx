import { isServiceRoleConfigured } from '@/lib/supabase/server'
import SettingsAdmin from './SettingsAdmin'

export default async function AdminSettingsPage() {
  if (!isServiceRoleConfigured()) {
    return <SettingsAdmin initialSettings={[]} />
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminFetchSettings } = await import('@/lib/db/queries')
    const settings = await adminFetchSettings(createServiceClient()).catch(() => [])
    return <SettingsAdmin initialSettings={settings} />
  } catch {
    return <SettingsAdmin initialSettings={[]} />
  }
}
