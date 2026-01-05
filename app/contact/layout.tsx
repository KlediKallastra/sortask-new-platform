import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ready to transform your business with AI? Let\'s discuss how we can help. Get in touch with Sortask GmbH.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

