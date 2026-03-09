import { isServiceRoleConfigured } from '@/lib/supabase/server'
import InsightsAdmin from './InsightsAdmin'

export default async function AdminInsightsPage() {
  if (!isServiceRoleConfigured()) {
    return <InsightsAdmin initialInsights={[]} />
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminFetchInsights } = await import('@/lib/db/queries')
    const insights = await adminFetchInsights(createServiceClient()).catch(() => [])
    return <InsightsAdmin initialInsights={insights} />
  } catch {
    return <InsightsAdmin initialInsights={[]} />
  }
}
