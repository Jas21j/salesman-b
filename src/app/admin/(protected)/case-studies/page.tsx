import { isServiceRoleConfigured } from '@/lib/supabase/server'
import { caseStudies } from '@/data/caseStudies'
import CaseStudiesAdmin from './CaseStudiesAdmin'

export default async function AdminCaseStudiesPage() {
  if (!isServiceRoleConfigured()) {
    return <CaseStudiesAdmin staticCaseStudies={caseStudies} dbRecords={[]} />
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminFetchCaseStudies } = await import('@/lib/db/queries')
    const records = await adminFetchCaseStudies(createServiceClient()).catch(() => [])
    return <CaseStudiesAdmin staticCaseStudies={caseStudies} dbRecords={records} />
  } catch {
    return <CaseStudiesAdmin staticCaseStudies={caseStudies} dbRecords={[]} />
  }
}
