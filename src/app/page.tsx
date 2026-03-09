import Hero from '@/components/home/Hero'
import CostOfComplexity from '@/components/home/CostOfComplexity'
import PlatformArchitecture from '@/components/home/PlatformArchitecture'
import DeploymentDomains from '@/components/home/DeploymentDomains'
import Doctrine from '@/components/home/Doctrine'
import ProofOfSystem from '@/components/home/ProofOfSystem'
import FounderBlock from '@/components/home/FounderBlock'
import Statistics from '@/components/home/Statistics'
import Insights from '@/components/home/Insights'
import CTABand from '@/components/home/CTABand'
import { createClient } from '@/lib/supabase/server'
import { fetchFeaturedInsights } from '@/lib/db/queries'
import { fetchNewsArticles } from '@/lib/news/fetcher'

// Revalidate homepage every 6 hours
export const revalidate = 21600

async function fetchInsightsPreview() {
  try {
    const supabase = await createClient()
    const [curated, news] = await Promise.all([
      fetchFeaturedInsights(supabase, 3).catch(() => []),
      fetchNewsArticles(3).catch(() => []),
    ])

    const curatedMapped = curated.map(i => ({
      tag: i.category ?? 'OPERATIONAL INTELLIGENCE',
      title: i.title,
      body: i.summary ?? '',
      source: i.source_name ?? 'Salesman Solutions Research',
    }))

    if (curatedMapped.length >= 3) return curatedMapped.slice(0, 3)

    const newsMapped = news.slice(0, 3 - curatedMapped.length).map(a => ({
      tag: 'OPERATIONAL INTELLIGENCE',
      title: a.title,
      body: a.summary,
      source: a.source,
    }))

    return [...curatedMapped, ...newsMapped].slice(0, 3)
  } catch {
    return []
  }
}

export default async function HomePage() {
  const insightsPreview = await fetchInsightsPreview()

  return (
    <>
      <Hero />
      <CostOfComplexity />
      <PlatformArchitecture />
      <DeploymentDomains />
      <Doctrine />
      <ProofOfSystem />
      <FounderBlock />
      <Statistics />
      <Insights articles={insightsPreview.length > 0 ? insightsPreview : undefined} />
      <CTABand />
    </>
  )
}
