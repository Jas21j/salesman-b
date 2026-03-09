import { caseStudies } from '@/data/caseStudies'
import CaseStudyContent from './CaseStudyContent'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return <CaseStudyContent slug={params.slug} />
}
