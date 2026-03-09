import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Explore IRIS and ASSAN — two platforms that power Salesman Solutions. IRIS delivers digital intelligence and analytics. ASSAN deploys operational systems across property, logistics, and hospitality.',
  openGraph: {
    title: 'Solutions — Salesman Solutions',
    description: 'IRIS for digital intelligence. ASSAN for operational deployment. Two platforms, one philosophy.',
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
