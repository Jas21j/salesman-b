import type { NewsArticle } from './types'

const RELEVANCE_KEYWORDS = [
  'operational', 'operations', 'infrastructure', 'logistics', 'property',
  'digital transformation', 'automation', 'system', 'platform', 'technology',
  'artificial intelligence', 'machine learning', 'AI', 'efficiency',
  'deployment', 'supply chain', 'real estate', 'proptech', 'hospitality',
  'workforce', 'management', 'enterprise', 'innovation', 'integration',
]

const IRRELEVANCE_SIGNALS = [
  'sports', 'celebrity', 'entertainment', 'music', 'movie', 'film',
  'fashion', 'gossip', 'recipe', 'cooking', 'beauty', 'gaming',
]

function scoreRelevance(article: NewsArticle): number {
  const text = `${article.title} ${article.summary}`.toLowerCase()
  let score = 0
  for (const kw of RELEVANCE_KEYWORDS) {
    if (text.includes(kw.toLowerCase())) score += 1
  }
  for (const kw of IRRELEVANCE_SIGNALS) {
    if (text.includes(kw.toLowerCase())) score -= 3
  }
  return score
}

function isValidArticle(article: NewsArticle): boolean {
  return (
    article.title.length > 10 &&
    article.summary.length > 20 &&
    article.url.startsWith('http')
  )
}

export function filterAndRank(articles: NewsArticle[], limit: number): NewsArticle[] {
  // Deduplicate by title similarity (same first 40 chars)
  const seen = new Set<string>()
  const deduped = articles.filter((a) => {
    const key = a.title.slice(0, 40).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  return deduped
    .filter(isValidArticle)
    .map((a) => ({ ...a, relevanceScore: scoreRelevance(a) }))
    .filter((a) => (a.relevanceScore ?? 0) >= 0)
    .sort((a, b) => (b.relevanceScore ?? 0) - (a.relevanceScore ?? 0))
    .slice(0, limit)
}
