import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Building the cognitive layer for modern enterprises. We transform businesses with autonomous agents, voice AI, and custom software architectures. Based in Zurich, operating globally.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

