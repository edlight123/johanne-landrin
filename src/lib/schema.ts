import { siteConfig } from './siteConfig';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': siteConfig.seo.url,
    name: siteConfig.name,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Port-au-Prince',
      addressCountry: 'HT',
      streetAddress: siteConfig.office.detailedAddress,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add actual coordinates if available
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Port-au-Prince',
    },
    serviceType: ['Psychotherapy', 'Psychological Counseling', 'Mental Health Services'],
    knowsLanguage: ['French', 'Haitian Creole'],
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.seo.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Port-au-Prince',
      addressCountry: 'HT',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: '[University Name - To be configured]',
    },
    knowsLanguage: ['French', 'Haitian Creole'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: siteConfig.credentials,
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.seo.url,
    description: siteConfig.seo.description,
    inLanguage: ['fr', 'ht'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.seo.url}/ressources?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
