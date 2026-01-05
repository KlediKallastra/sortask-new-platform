export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sortask GmbH',
    url: 'https://sortask.com',
    logo: 'https://sortask.com/logo.png', // Update with your actual logo URL
    description: 'Transforming businesses with autonomous agents, voice AI, and custom software architectures.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zurich',
      addressCountry: 'CH',
    },
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/sortask',
      // 'https://linkedin.com/company/sortask',
      // 'https://github.com/sortask',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+43-676-4414020',
      contactType: 'Customer Service',
      email: 'office@sortask.com',
    },
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

