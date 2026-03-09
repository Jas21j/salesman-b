import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Salesman Solutions, the global venture platform founded by Jaheim Salesman. We build operational systems through IRIS (digital intelligence) and ASSAN (operational deployment).',
  openGraph: {
    title: 'About — Salesman Solutions',
    description: 'The story behind the operational systems platform transforming industries.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
