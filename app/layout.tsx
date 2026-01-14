import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '../lib/i18n'
import StructuredData from './components/StructuredData'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sortask.com'),
  title: {
    default: 'Sortask GmbH | Future-Ready AI & Web Solutions',
    template: '%s | Sortask GmbH',
  },
  description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures. Based in Graz, Austria, operating globally. Expert AI automation, web development, and intelligent business solutions.',
  keywords: [
    'AI solutions',
    'autonomous agents',
    'voice AI',
    'web development',
    'business automation',
    'AI assistants',
    'chatbots',
    'workflow automation',
    'custom software',
    'AI consulting',
    'machine learning',
    'artificial intelligence',
    'digital transformation',
    'Graz',
    'Austria',
    'Europe',
    'enterprise AI',
    'AI integration',
    'software development',
    'headless CMS',
    'modern web applications',
  ],
  authors: [{ name: 'Sortask GmbH' }],
  creator: 'Sortask GmbH',
  publisher: 'Sortask GmbH',
  applicationName: 'Sortask',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://sortask.com',
    languages: {
      'en': 'https://sortask.com',
      'de': 'https://sortask.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['de_AT'],
    url: 'https://sortask.com',
    siteName: 'Sortask GmbH',
    title: 'Sortask GmbH | Future-Ready AI & Web Solutions',
    description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures. Expert AI automation and web development services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sortask GmbH - AI & Web Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sortask GmbH | Future-Ready AI & Web Solutions',
    description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures.',
    images: ['/og-image.jpg'],
    creator: '@sortask',
    site: '@sortask',
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Business Technology Solutions',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Sortask',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
    { media: '(prefers-color-scheme: light)', color: '#0F172A' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} bg-tech-bg text-tech-text font-sans antialiased overflow-x-hidden`}>
        <StructuredData />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}

