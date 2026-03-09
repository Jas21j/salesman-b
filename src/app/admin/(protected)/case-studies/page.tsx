import { createServiceClient } from '@/lib/supabase/server'
import { adminFetchCaseStudies } from '@/lib/db/queries'
import { caseStudies } from '@/data/caseStudies'
import CaseStudiesAdmin from './CaseStudiesAdmin'

export default async function AdminCaseStudiesPage() {
  const records = await adminFetchCaseStudies(createServiceClient()).catch(() => [])
  return <CaseStudiesAdmin staticCaseStudies={caseStudies} dbRecords={records} />
}
