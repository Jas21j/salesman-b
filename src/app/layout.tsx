import type { Metadata } from 'next'
import { Outfit, Inter, Cormorant_Garamond } from 'next/font/google'
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

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Salesman Solutions — Global Venture Platform',
  description:
    'Salesman Solutions is a global venture platform that builds operational systems that improve industries. IRIS and ASSAN — two platforms, one operating philosophy.',
  keywords: 'operational systems, venture platform, IRIS, ASSAN, property operations, digital infrastructure, logistics',
  authors: [{ name: 'Jaheim Salesman' }],
  openGraph: {
    title: 'Salesman Solutions — Global Venture Platform',
    description: 'Building operational systems that simplify complexity and transform how industries function.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${cormorant.variable}`}>
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
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
