import { createServiceClient } from '@/lib/supabase/server'
import { adminFetchSections, adminFetchSettings } from '@/lib/db/queries'
import ContentAdmin from './ContentAdmin'

export default async function AdminContentPage() {
  const svc = createServiceClient()
  const [sections, settings] = await Promise.all([
    adminFetchSections(svc).catch(() => []),
    adminFetchSettings(svc).catch(() => []),
  ])
  return <ContentAdmin initialSections={sections} initialSettings={settings} />
}
