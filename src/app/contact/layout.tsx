import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with Salesman Solutions. Tell us what you\'re working on and we\'ll show you how to systematize it.',
  openGraph: {
    title: 'Contact — Salesman Solutions',
    description: 'The system starts with a conversation.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
