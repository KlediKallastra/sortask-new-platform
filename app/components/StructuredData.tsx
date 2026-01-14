export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sortask GmbH',
    legalName: 'Sortask GmbH',
    url: 'https://sortask.com',
    logo: 'https://sortask.com/icon.svg',
    description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures. Expert AI automation and web development services.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Münzgrabenstraße 44/12',
      addressLocality: 'Graz',
      postalCode: '8010',
      addressRegion: 'Styria',
      addressCountry: 'AT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+43-676-4414020',
      contactType: 'Customer Service',
      email: 'office@sortask.com',
      areaServed: 'Worldwide',
      availableLanguage: ['en', 'de'],
    },
    sameAs: [
      // Add your social media profiles here when available
      // 'https://twitter.com/sortask',
      // 'https://linkedin.com/company/sortask',
      // 'https://github.com/sortask',
    ],
    taxID: 'ATU82037804',
    vatID: 'ATU82037804',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sortask GmbH',
    url: 'https://sortask.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sortask.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

