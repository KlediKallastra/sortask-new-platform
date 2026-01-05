import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Find answers to common questions about our AI solutions, implementation timelines, support, integrations, security, ROI, and training.',
  alternates: {
    canonical: '/faqs',
  },
}

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

