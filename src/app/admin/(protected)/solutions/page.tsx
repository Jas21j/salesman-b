import { isServiceRoleConfigured } from '@/lib/supabase/server'
import SolutionsAdmin from './SolutionsAdmin'

export default async function AdminSolutionsPage() {
  if (!isServiceRoleConfigured()) {
    return <SolutionsAdmin initialSolutions={[]} />
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminFetchSolutions } = await import('@/lib/db/queries')
    const solutions = await adminFetchSolutions(createServiceClient()).catch(() => [])
    return <SolutionsAdmin initialSolutions={solutions} />
  } catch {
    return <SolutionsAdmin initialSolutions={[]} />
  }
}
