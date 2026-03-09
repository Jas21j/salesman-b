'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: '⬛' },
  { href: '/admin/content', label: 'Content', icon: '📄' },
  { href: '/admin/solutions', label: 'Solutions', icon: '⚡' },
  { href: '/admin/case-studies', label: 'Case Studies', icon: '📋' },
  { href: '/admin/insights', label: 'Insights', icon: '🔍' },
  { href: '/admin/media', label: 'Media', icon: '🖼' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside
      style={{
        width: 220,
        background: '#141927',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        padding: '24px 0',
        flexShrink: 0,
        minHeight: 'calc(100vh - 56px)',
      }}
    >
      <nav>
        {NAV_ITEMS.map(({ href, label }) => {
          const isActive = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 20px',
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#C9A96E' : 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                borderLeft: isActive ? '2px solid #C9A96E' : '2px solid transparent',
                background: isActive ? 'rgba(201, 169, 110, 0.06)' : 'transparent',
                transition: 'all 0.15s ease',
              }}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
