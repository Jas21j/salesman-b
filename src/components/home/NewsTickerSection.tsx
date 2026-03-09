'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type TickerArticle = {
  title: string
  source: string
  url: string
  publishedAt: string
  image?: string
}

type Props = {
  articles: TickerArticle[]
}

export default function NewsTickerSection({ articles }: Props) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const visibleCount = 3
  const maxArticles = Math.min(articles.length, 9)

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index)
    },
    []
  )

  useEffect(() => {
    if (maxArticles <= visibleCount || paused) return
    const totalPages = Math.ceil(maxArticles / visibleCount)
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages)
    }, 6000)
    return () => clearInterval(id)
  }, [maxArticles, paused])

  if (!articles.length) return null

  const totalPages = Math.ceil(maxArticles / visibleCount)
  const pageArticles = articles.slice(
    current * visibleCount,
    current * visibleCount + visibleCount
  )

  function formatDate(dateStr: string) {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    } catch {
      return ''
    }
  }

  return (
    <section
      style={{
        background: '#1E2A4A',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(184,134,42,0.2) 30%, rgba(184,134,42,0.2) 70%, transparent)',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <span
              className="font-body font-semibold uppercase tracking-[0.15em]"
              style={{ fontSize: 12, color: '#B8862A', display: 'block', marginBottom: 12 }}
            >
              INTELLIGENCE FEED
            </span>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#fff',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Industry Signals
            </h2>
          </div>

          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    width: current === i ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: 'none',
                    background:
                      current === i
                        ? '#B8862A'
                        : 'rgba(255,255,255,0.15)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: 20,
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {pageArticles.map((article, i) => (
              <a
                key={`${current}-${i}`}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <motion.div
                  style={{
                    background: '#2B3A67',
                    borderRadius: 14,
                    overflow: 'hidden',
                    borderTop: '3px solid #B8862A',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
                  }}
                >
                  {article.image && (
                    <div
                      style={{
                        height: 180,
                        background: `url(${article.image}) center/cover no-repeat`,
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, rgba(43,58,103,0.6) 0%, transparent 60%)',
                        }}
                      />
                    </div>
                  )}

                  <div
                    style={{
                      padding: article.image ? '20px 24px 24px' : '28px 24px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                      }}
                    >
                      <span
                        className="font-body font-semibold uppercase tracking-[0.1em]"
                        style={{
                          fontSize: 10,
                          color: '#B8862A',
                        }}
                      >
                        {article.source}
                      </span>
                      {article.publishedAt && (
                        <span
                          className="font-body"
                          style={{
                            fontSize: 10,
                            color: 'rgba(255,255,255,0.3)',
                          }}
                        >
                          {formatDate(article.publishedAt)}
                        </span>
                      )}
                    </div>

                    <h3
                      className="font-display font-semibold"
                      style={{
                        fontSize: 16,
                        color: '#fff',
                        lineHeight: 1.4,
                        letterSpacing: '-0.01em',
                        margin: 0,
                        flex: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {article.title}
                    </h3>

                    <div
                      style={{
                        marginTop: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      <span
                        className="font-body font-medium"
                        style={{
                          fontSize: 12,
                          color: '#B8862A',
                          letterSpacing: '0.02em',
                        }}
                      >
                        Read Article
                      </span>
                      <span style={{ fontSize: 12, color: '#B8862A' }}>→</span>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
