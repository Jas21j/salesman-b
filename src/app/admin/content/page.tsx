import { redirect } from 'next/navigation'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminFetchSections, adminFetchSettings } from '@/lib/db/queries'
import ContentAdmin from './ContentAdmin'

export default async function AdminContentPage() {
  const supabase = await createClient()
  if (!(await isAuthorizedAdmin(supabase))) redirect('/admin/unauthorized')

  const svc = createServiceClient()
  const [sections, settings] = await Promise.all([
    adminFetchSections(svc).catch(() => []),
    adminFetchSettings(svc).catch(() => []),
  ])

  return <ContentAdmin initialSections={sections} initialSettings={settings} />
}
