import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sortask.com' // Update this with your actual domain

  const routes = [
    '',
    '/about',
    '/solutions',
    '/portfolio',
    '/pricing',
    '/contact',
    '/faqs',
    '/cookie-policy',
    '/imprint',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : route === '/solutions' || route === '/portfolio' ? 0.8 : 0.6,
  }))
}

