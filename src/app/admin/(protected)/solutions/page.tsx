import { createServiceClient } from '@/lib/supabase/server'
import { adminFetchSolutions } from '@/lib/db/queries'
import SolutionsAdmin from './SolutionsAdmin'

export default async function AdminSolutionsPage() {
  const solutions = await adminFetchSolutions(createServiceClient()).catch(() => [])
  return <SolutionsAdmin initialSolutions={solutions} />
}
