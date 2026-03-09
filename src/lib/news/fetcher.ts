import type { NewsArticle, TheNewsAPIResponse, GNewsResponse } from './types'
import { normalizeTheNewsArticle, normalizeGNewsArticle } from './normalize'
import { filterAndRank } from './filter'

const THE_NEWS_API_BASE = 'https://api.thenewsapi.com/v1/news/all'
const GNEWS_API_BASE = 'https://gnews.io/api/v4/search'

const SEARCH_QUERY =
  'operational systems OR infrastructure technology OR logistics innovation OR property technology OR digital transformation OR automation OR artificial intelligence OR machine learning'

const GNEWS_QUERY =
  'operational systems OR infrastructure technology OR property technology OR digital transformation OR automation'

async function fetchFromTheNewsAPI(limit: number): Promise<NewsArticle[]> {
  const token = process.env.THE_NEWS_API_TOKEN
  if (!token) return []

  const url = new URL(THE_NEWS_API_BASE)
  url.searchParams.set('api_token', token)
  url.searchParams.set('search', SEARCH_QUERY)
  url.searchParams.set('language', 'en')
  url.searchParams.set('limit', String(Math.min(limit * 2, 20)))
  url.searchParams.set('sort', 'published_at')

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  })

  if (!res.ok) return []

  const json: TheNewsAPIResponse = await res.json()
  return (json.data ?? []).map(normalizeTheNewsArticle)
}

async function fetchFromGNews(limit: number): Promise<NewsArticle[]> {
  const token = process.env.GNEWS_API_KEY
  if (!token) return []

  const url = new URL(GNEWS_API_BASE)
  url.searchParams.set('q', GNEWS_QUERY)
  url.searchParams.set('lang', 'en')
  url.searchParams.set('token', token)
  url.searchParams.set('max', String(Math.min(limit * 2, 10)))
  url.searchParams.set('expand', 'content')
  url.searchParams.set('sortby', 'publishedAt')

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  })

  if (!res.ok) return []

  const json: GNewsResponse = await res.json()
  return (json.articles ?? []).map(normalizeGNewsArticle)
}

/**
 * Fetch news articles. Primary: TheNewsAPI. Fallback: GNews.
 * Returns empty array on total failure (caller handles static fallback).
 */
export async function fetchNewsArticles(limit: number = 6): Promise<NewsArticle[]> {
  try {
    const primary = await fetchFromTheNewsAPI(limit)
    if (primary.length >= Math.floor(limit / 2)) {
      return filterAndRank(primary, limit)
    }

    // Primary came up short — try fallback
    const fallback = await fetchFromGNews(limit)
    const combined = [...primary, ...fallback]
    return filterAndRank(combined, limit)
  } catch {
    // Fail silently — caller uses static fallback
    return []
  }
}
