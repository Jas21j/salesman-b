import { redirect } from 'next/navigation'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminFetchCaseStudies } from '@/lib/db/queries'
import { caseStudies } from '@/data/caseStudies'
import CaseStudiesAdmin from './CaseStudiesAdmin'

export default async function AdminCaseStudiesPage() {
  const supabase = await createClient()
  if (!(await isAuthorizedAdmin(supabase))) redirect('/admin/unauthorized')

  const records = await adminFetchCaseStudies(createServiceClient()).catch(() => [])
  return <CaseStudiesAdmin staticCaseStudies={caseStudies} dbRecords={records} />
}
