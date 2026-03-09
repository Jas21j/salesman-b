import type { Metadata } from 'next'
import { isSupabaseConfigured } from '@/lib/supabase/server'
import { fetchNewsArticles } from '@/lib/news/fetcher'
import type { InsightItem } from './fallback'
import { FALLBACK_INSIGHTS } from './fallback'
import InsightsContent from './InsightsContent'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Operational intelligence and industry analysis from Salesman Solutions. Stay informed on digital transformation, logistics innovation, property technology, and systems thinking.',
  openGraph: {
    title: 'Insights — Salesman Solutions',
    description: 'Industry signals and operational intelligence curated by Salesman Solutions.',
  },
}

export const revalidate = 3600

function curatedToInsightItem(insight: {
  id: string
  title: string
  summary: string | null
  body: string | null
  category: string | null
  platform: string | null
  source_name: string | null
  source_url: string | null
  read_time: string | null
}): InsightItem {
  return {
    id: insight.id,
    tag: insight.category ?? 'OPERATIONAL INTELLIGENCE',
    title: insight.title,
    summary: insight.summary ?? '',
    body: insight.body ? insight.body.split('\n\n').filter(Boolean) : [],
    source: insight.source_name ?? 'Salesman Solutions Research',
    readTime: insight.read_time ?? '4 min read',
    platform: insight.platform ?? 'ASSAN',
    url: insight.source_url ?? undefined,
  }
}

function newsToInsightItem(article: {
  id: string
  title: string
  summary: string
  source: string
  url: string
  publishedAt: string
  image?: string
}): InsightItem {
  const text = (article.title + ' ' + article.summary).toLowerCase()
  const platform =
    text.includes('property') || text.includes('logistics') || text.includes('supply chain') || text.includes('hospitality')
      ? 'ASSAN'
      : 'IRIS'

  const tag =
    text.includes('ai') || text.includes('artificial intelligence') || text.includes('machine learning')
      ? 'DIGITAL TRANSFORMATION'
      : text.includes('property') || text.includes('real estate')
      ? 'PROPERTY SYSTEMS'
      : text.includes('logistics') || text.includes('supply chain')
      ? 'LOGISTICS INNOVATION'
      : 'OPERATIONAL INTELLIGENCE'

  return {
    id: article.id,
    tag,
    title: article.title,
    summary: article.summary,
    body: [article.summary],
    source: article.source,
    readTime: '3 min read',
    platform,
    url: article.url,
    isExternal: true,
    image: article.image,
  }
}

export default async function InsightsPage() {
  let curated: InsightItem[] = []
  let news: InsightItem[] = []

  try {
    if (isSupabaseConfigured()) {
      const { createClient } = await import('@/lib/supabase/server')
      const { fetchLiveInsights } = await import('@/lib/db/queries')
      const supabase = await createClient()
      const curatedRaw = await fetchLiveInsights(supabase, 6).catch(() => [])
      curated = curatedRaw.map(curatedToInsightItem)
    }
  } catch {
    // Supabase not available — continue with news API only
  }

  try {
    const newsRaw = await fetchNewsArticles(10).catch(() => [])
    news = newsRaw.map(newsToInsightItem)
  } catch {
    // News API not available
  }

  const combined = [...curated, ...news]

  const seen = new Set<string>()
  const deduped = combined.filter(item => {
    const key = item.title.slice(0, 50).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  const final = deduped.slice(0, 8)
  const insights = final.length > 0 ? final : FALLBACK_INSIGHTS
  const hasLiveData = news.length > 0 || curated.length > 0

  return <InsightsContent insights={insights} hasLiveData={hasLiveData} />
}
