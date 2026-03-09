import { redirect } from 'next/navigation'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminFetchSolutions } from '@/lib/db/queries'
import SolutionsAdmin from './SolutionsAdmin'

export default async function AdminSolutionsPage() {
  const supabase = await createClient()
  if (!(await isAuthorizedAdmin(supabase))) redirect('/admin/unauthorized')
  const solutions = await adminFetchSolutions(createServiceClient()).catch(() => [])
  return <SolutionsAdmin initialSolutions={solutions} />
}
