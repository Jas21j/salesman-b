import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminFetchInsights } from '@/lib/db/queries'
import InsightsAdmin from './InsightsAdmin'

export default async function AdminInsightsPage() {
  const supabase = await createClient()
  const authorized = await isAuthorizedAdmin(supabase)
  if (!authorized) redirect('/admin/unauthorized')

  const serviceClient = createServiceClient()
  const insights = await adminFetchInsights(serviceClient).catch(() => [])

  return <InsightsAdmin initialInsights={insights} />
}
