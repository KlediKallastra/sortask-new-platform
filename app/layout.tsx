import type { Metadata } from 'next'
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
  metadataBase: new URL('https://sortask.com'), // Update with your actual domain
  title: {
    default: 'Sortask GmbH | Future-Ready AI & Web Solutions',
    template: '%s | Sortask GmbH',
  },
  description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures. Based in Zurich, operating globally.',
  keywords: [
    'AI solutions',
    'autonomous agents',
    'voice AI',
    'web development',
    'business automation',
    'AI assistants',
    'chatbots',
    'workflow automation',
    'Zurich',
    'Switzerland',
  ],
  authors: [{ name: 'Sortask GmbH' }],
  creator: 'Sortask GmbH',
  publisher: 'Sortask GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sortask.com',
    siteName: 'Sortask GmbH',
    title: 'Sortask GmbH | Future-Ready AI & Web Solutions',
    description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures.',
    images: [
      {
        url: '/og-image.jpg', // You should add an Open Graph image
        width: 1200,
        height: 630,
        alt: 'Sortask GmbH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sortask GmbH | Future-Ready AI & Web Solutions',
    description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures.',
    images: ['/og-image.jpg'], // You should add a Twitter image
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
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
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

