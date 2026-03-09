import { createServiceClient } from '@/lib/supabase/server'
import { adminFetchInsights } from '@/lib/db/queries'
import InsightsAdmin from './InsightsAdmin'

export default async function AdminInsightsPage() {
  const insights = await adminFetchInsights(createServiceClient()).catch(() => [])
  return <InsightsAdmin initialInsights={insights} />
}
