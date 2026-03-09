import Hero from '@/components/home/Hero'
import NewsTickerSection from '@/components/home/NewsTickerSection'
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

async function fetchHomeData() {
  try {
    const supabase = await createClient()
    const [curated, news] = await Promise.all([
      fetchFeaturedInsights(supabase, 3).catch(() => []),
      fetchNewsArticles(10).catch(() => []),
    ])

    const curatedMapped = curated.map(i => ({
      tag: i.category ?? 'OPERATIONAL INTELLIGENCE',
      title: i.title,
      body: i.summary ?? '',
      source: i.source_name ?? 'Salesman Solutions Research',
    }))

    const newsMapped = news.slice(0, Math.max(0, 3 - curatedMapped.length)).map(a => ({
      tag: 'OPERATIONAL INTELLIGENCE',
      title: a.title,
      body: a.summary,
      source: a.source,
    }))

    const insightsPreview = [...curatedMapped, ...newsMapped].slice(0, 3)

    const tickerArticles = news.slice(0, 6).map(a => ({
      title: a.title,
      source: a.source,
      url: a.url,
      publishedAt: a.publishedAt,
      image: a.image,
    }))

    return { insightsPreview, tickerArticles }
  } catch {
    return { insightsPreview: [], tickerArticles: [] }
  }
}

export default async function HomePage() {
  const { insightsPreview, tickerArticles } = await fetchHomeData()

  return (
    <>
      <Hero />
      <NewsTickerSection articles={tickerArticles} />
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
