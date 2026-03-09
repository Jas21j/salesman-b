import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})


const SITE_URL = 'https://salesmansolutions.net'
const SITE_NAME = 'Salesman Solutions'
const SITE_DESC =
  'Salesman Solutions is a global venture platform building operational systems that improve industries. IRIS powers digital intelligence. ASSAN deploys operational infrastructure.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Salesman Solutions — Global Venture Platform',
    template: '%s | Salesman Solutions',
  },
  description: SITE_DESC,
  keywords: [
    'Salesman Solutions',
    'operational systems',
    'venture platform',
    'IRIS',
    'ASSAN',
    'property operations',
    'digital infrastructure',
    'logistics systems',
    'digital transformation',
    'automation',
    'operational intelligence',
    'property technology',
    'hospitality systems',
    'Jaheim Salesman',
  ],
  authors: [{ name: 'Jaheim Salesman', url: SITE_URL }],
  creator: 'Jaheim Salesman',
  publisher: SITE_NAME,
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Salesman Solutions — Global Venture Platform',
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Salesman Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesman Solutions — Global Venture Platform',
    description: SITE_DESC,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/*
          Anti-FOUC inline script:
          Framer Motion initializes elements with opacity:0 before hydration,
          causing a "flash then reappear" effect. We set a class immediately
          after paint that controls visibility, preventing the double-load glitch.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Mark document as ready so CSS transitions don't trigger before hydration
                  document.documentElement.classList.add('js-loading');
                  window.addEventListener('DOMContentLoaded', function() {
                    // After DOM is ready, CSS transitions are safe to run
                    document.documentElement.classList.remove('js-loading');
                    document.documentElement.classList.add('js-loaded');
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-white text-charcoal overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              description: SITE_DESC,
              founder: {
                '@type': 'Person',
                name: 'Jaheim Salesman',
                jobTitle: 'Founder & Systems Architect',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tallahassee',
                addressRegion: 'FL',
                addressCountry: 'US',
              },
              telephone: '+1-954-830-6310',
              email: 'JaheimSalesman@gmail.com',
              sameAs: ['https://github.com/Jas21j'],
              knowsAbout: [
                'Operational Systems',
                'Digital Infrastructure',
                'Property Technology',
                'Logistics Innovation',
                'Automation',
                'Digital Transformation',
              ],
            }),
          }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
