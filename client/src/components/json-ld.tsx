export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tilzgroup.com/#organization",
        name: "Tilz Group",
        url: "https://tilzgroup.com",
        logo: {
          "@type": "ImageObject",
          url: "https://tilzgroup.com/favicon.png",
          width: 512,
          height: 512,
        },
        description:
          "Tilz Group delivers end-to-end commerce capability — marketplace consulting, UK 3PL logistics, and digital B2B trade — for manufacturers and brands ready to grow globally.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Unit 3A, Eagle Industrial Estate, 4 Torre Road",
          addressLocality: "Leeds",
          addressRegion: "West Yorkshire",
          postalCode: "LS9 7QL",
          addressCountry: "GB",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@tilzgroup.com",
          contactType: "customer service",
          areaServed: ["GB", "US", "EU"],
          availableLanguage: "English",
        },
        sameAs: ["https://www.linkedin.com/company/tilzgroup"],
        foundingDate: "2023",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1, maxValue: 50 },
        areaServed: "Worldwide",
        knowsAbout: [
          "Ecommerce consulting",
          "Amazon marketplace management",
          "3PL logistics",
          "B2B trade platforms",
          "Supply chain management",
          "International market entry",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://tilzgroup.com/#website",
        url: "https://tilzgroup.com",
        name: "Tilz Group",
        description:
          "Commerce Infrastructure for Brands Built to Scale",
        publisher: { "@id": "https://tilzgroup.com/#organization" },
        inLanguage: "en-GB",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tilzgroup.com/#localbusiness",
        name: "Tilz Group",
        image: "https://tilzgroup.com/og-image.png",
        url: "https://tilzgroup.com",
        telephone: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Unit 3A, Eagle Industrial Estate, 4 Torre Road",
          addressLocality: "Leeds",
          addressRegion: "West Yorkshire",
          postalCode: "LS9 7QL",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 53.798,
          longitude: -1.508,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:30",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  category: string;
}

export function ArticleJsonLd({ title, description, slug, category }: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://tilzgroup.com/insights/${slug}`,
    image: "https://tilzgroup.com/og-image.png",
    publisher: {
      "@type": "Organization",
      "@id": "https://tilzgroup.com/#organization",
      name: "Tilz Group",
      logo: {
        "@type": "ImageObject",
        url: "https://tilzgroup.com/favicon.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "Tilz Group",
      url: "https://tilzgroup.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tilzgroup.com/insights/${slug}`,
    },
    articleSection: category,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "Blog",
      name: "Tilz Group Insights",
      url: "https://tilzgroup.com/insights",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: { name: string; path: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://tilzgroup.com${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}

export function ServiceJsonLd({ name, description, path, serviceType }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: `https://tilzgroup.com${path}`,
    provider: {
      "@type": "Organization",
      "@id": "https://tilzgroup.com/#organization",
      name: "Tilz Group",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://tilzgroup.com${path}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
