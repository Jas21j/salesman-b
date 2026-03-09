export type NewsArticle = {
  id: string
  title: string
  summary: string
  source: string
  url: string
  publishedAt: string
  image?: string
  relevanceScore?: number
}

// TheNewsAPI response shape
export type TheNewsAPIArticle = {
  uuid: string
  title: string
  description: string
  snippet: string
  url: string
  image_url: string | null
  published_at: string
  source: string
  categories: string[]
  locale: string
}

export type TheNewsAPIResponse = {
  meta: { found: number; returned: number; limit: number; page: number }
  data: TheNewsAPIArticle[]
}

// GNews response shape
export type GNewsArticle = {
  title: string
  description: string
  content: string
  url: string
  image: string | null
  publishedAt: string
  source: { name: string; url: string }
}

export type GNewsResponse = {
  totalArticles: number
  articles: GNewsArticle[]
}
