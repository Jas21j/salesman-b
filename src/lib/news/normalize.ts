import type { NewsArticle, TheNewsAPIArticle, GNewsArticle } from './types'

export function normalizeTheNewsArticle(article: TheNewsAPIArticle): NewsArticle {
  return {
    id: article.uuid,
    title: article.title,
    summary: article.description || article.snippet || '',
    source: article.source,
    url: article.url,
    publishedAt: article.published_at,
    image: article.image_url ?? undefined,
  }
}

export function normalizeGNewsArticle(article: GNewsArticle): NewsArticle {
  return {
    id: Buffer.from(article.url).toString('base64').slice(0, 16),
    title: article.title,
    summary: article.description || '',
    source: article.source.name,
    url: article.url,
    publishedAt: article.publishedAt,
    image: article.image ?? undefined,
  }
}
