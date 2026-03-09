import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#2B3A67',
        'navy-deep': '#1E2A4A',
        'navy-light': '#3D4F7C',
        charcoal: '#1A1A2E',
        gold: '#C9A96E',
        'gold-light': '#D4B87E',
        'gold-dark': '#B8985D',
        sand: '#E8DCC8',
        'sand-light': '#F5F0E8',
        cream: '#FDFBF7',
      },
      fontFamily: {
        display: ['var(--font-outfit)', '"Outfit"', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', '"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        'dot-grid': "radial-gradient(circle, #2B3A67 1px, transparent 1px)",
      },
      animation: {
        'bounce-chevron': 'bounceChevron 2s ease-in-out infinite',
        'hero-fade-up': 'heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        bounceChevron: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        },
        heroFadeUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.15)',
        'card-lg': '0 20px 50px rgba(43, 58, 103, 0.12), 0 8px 20px rgba(43, 58, 103, 0.07)',
        'founder': '0 30px 60px rgba(43, 58, 103, 0.15), 0 10px 20px rgba(43, 58, 103, 0.08)',
        'gold-glow': '0 12px 35px rgba(201, 169, 110, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
