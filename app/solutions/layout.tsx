import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'We deploy intelligent systems that scale, speak, and solve complex problems autonomously. Business websites, AI assistants, voice assistants, workflow automation, chatbots, and data organization.',
  alternates: {
    canonical: '/solutions',
  },
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

