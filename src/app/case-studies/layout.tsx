import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real operations, documented. See how Salesman Solutions has deployed systems across property management, hospitality, logistics, and digital infrastructure.',
  openGraph: {
    title: 'Case Studies — Salesman Solutions',
    description: 'Documented operational transformations across multiple industries.',
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
