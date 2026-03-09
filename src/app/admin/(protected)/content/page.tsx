import { isServiceRoleConfigured } from '@/lib/supabase/server'
import ContentAdmin from './ContentAdmin'

export default async function AdminContentPage() {
  if (!isServiceRoleConfigured()) {
    return <ContentAdmin initialSections={[]} initialSettings={[]} />
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminFetchSections, adminFetchSettings } = await import('@/lib/db/queries')
    const svc = createServiceClient()
    const [sections, settings] = await Promise.all([
      adminFetchSections(svc).catch(() => []),
      adminFetchSettings(svc).catch(() => []),
    ])
    return <ContentAdmin initialSections={sections} initialSettings={settings} />
  } catch {
    return <ContentAdmin initialSections={[]} initialSettings={[]} />
  }
}
