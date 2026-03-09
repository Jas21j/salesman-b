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
import { isSupabaseConfigured } from '@/lib/supabase/server'
import { fetchNewsArticles } from '@/lib/news/fetcher'

export const revalidate = 21600

async function fetchHomeData() {
  try {
    let insightsPreview: { tag: string; title: string; body: string; source: string }[] = []

    if (isSupabaseConfigured()) {
      try {
        const { createClient } = await import('@/lib/supabase/server')
        const { fetchFeaturedInsights } = await import('@/lib/db/queries')
        const supabase = await createClient()
        const curated = await fetchFeaturedInsights(supabase, 3).catch(() => [])
        insightsPreview = curated.map(i => ({
          tag: i.category ?? 'OPERATIONAL INTELLIGENCE',
          title: i.title,
          body: i.summary ?? '',
          source: i.source_name ?? 'Salesman Solutions Research',
        }))
      } catch {
        // Supabase not available
      }
    }

    const news = await fetchNewsArticles(10).catch(() => [])

    if (insightsPreview.length < 3) {
      const newsMapped = news.slice(0, Math.max(0, 3 - insightsPreview.length)).map(a => ({
        tag: 'OPERATIONAL INTELLIGENCE',
        title: a.title,
        body: a.summary,
        source: a.source,
      }))
      insightsPreview = [...insightsPreview, ...newsMapped].slice(0, 3)
    }

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
