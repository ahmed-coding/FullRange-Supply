/**
 * SEO Configuration for AMZ Global Sourcing
 * This file provides metadata and SEO strategies for the website
 */

export const seoConfig = {
  // Base URL - UPDATE THIS with your production domain
  baseUrl: 'https://amzglobalsourcing.com',

  // Languages supported (hreflang)
  languages: {
    en: { code: 'en', name: 'English', default: true },
    ar: { code: 'ar', name: 'Arabic', direction: 'rtl' },
    zh: { code: 'zh', name: 'Chinese' }
  },

  // Organization metadata
  organization: {
    name: 'AMZ Global Sourcing',
    alternateNames: ['FullRange Supply', 'AMZ Sourcing'],
    description: 'Professional China sourcing and trading office providing comprehensive solutions for global buyers seeking verified manufacturers.',
    url: 'https://amzglobalsourcing.com',
    logo: 'https://amzglobalsourcing.com/logo.png',
    email: 'ahmedhamzah171@gmail.com',
    phone: '+86 156 0871 4980',
    location: {
      country: 'CN',
      region: 'Serving All Major Manufacturing Cities'
    }
  },

  // Page-level metadata
  pages: {
    home: {
      title: 'AMZ Global Sourcing | China Trading & Sourcing Office - Verified Suppliers',
      description: 'Connect with verified China factories, negotiate deals, ensure quality control, and manage international logistics. Professional B2B sourcing partner.',
      keywords: 'China sourcing, supplier sourcing, factory finder, quality control, international logistics, B2B trading, import export',
      canonicalUrl: 'https://amzglobalsourcing.com/',
      ogImage: 'https://amzglobalsourcing.com/og-image.png'
    }
  },

  // Service keywords for targeting
  serviceKeywords: {
    sourcing: [
      'China supplier sourcing',
      'factory finder',
      'manufacturer sourcing',
      'supplier verification',
      'China factory connections',
      'B2B sourcing',
      'direct factory contact'
    ],
    quality: [
      'quality control China',
      'product inspection',
      'factory audits',
      'quality assurance',
      'third-party inspection',
      'pre-shipment inspection',
      'ISO certification'
    ],
    logistics: [
      'China shipping',
      'international logistics',
      'customs clearance',
      'sea freight',
      'air freight',
      'consolidated shipping',
      'import export services'
    ],
    trading: [
      'B2B trading platform',
      'business matching',
      'trade facilitation',
      'secure trade',
      'supplier matching',
      'buyer supplier connection'
    ]
  },

  // Geographic targeting
  targetGeographies: [
    'United States', 'United Kingdom', 'Europe', 'Middle East',
    'Australia', 'Canada', 'Japan', 'South Korea', 'India',
    'Southeast Asia', 'Africa', 'South America'
  ],

  // Long-tail keywords for content strategy
  longtailKeywords: [
    'how to find suppliers in China',
    'best China sourcing companies',
    'reliable factory finder',
    'China quality control services',
    'how to import from China',
    'Chinese manufacturer contacts',
    'B2B China trading',
    'verify Chinese factories',
    'China supplier verification',
    'international shipping from China',
    'China export company',
    'buying from China safely',
    'China product sourcing tips'
  ],

  // Blog/Content topic ideas
  contentTopics: [
    'Complete Guide to China Sourcing',
    'How to Verify Chinese Manufacturers',
    'Quality Control Best Practices in China',
    'Understanding China\'s Manufacturing Sectors',
    'International Shipping: Sea vs Air Freight',
    'Negotiating with Chinese Suppliers',
    'China Trade Certifications Explained',
    'Supply Chain Transparency in Manufacturing',
    'Common China Sourcing Mistakes to Avoid',
    'Building Long-term Supplier Relationships'
  ],

  // Social signals optimization
  social: {
    twitterHandle: '@amzglobalsourcing',
    linkedinProfile: 'https://www.linkedin.com/company/amz-global-sourcing',
    facebookPage: 'https://www.facebook.com/amzglobalsourcing',
    instagramProfile: 'https://www.instagram.com/amzglobalsourcing'
  },

  // Schema markup types to implement
  schemaMarkup: [
    'Organization',
    'LocalBusiness',
    'BreadcrumbList',
    'FAQPage',
    'BlogPosting', // When blog is added
    'ReviewRating' // When reviews are added
  ],

  // Performance targets
  performance: {
    // Core Web Vitals targets
    LCP: '< 2.5s', // Largest Contentful Paint
    FID: '< 100ms', // First Input Delay
    CLS: '< 0.1', // Cumulative Layout Shift

    // Additional metrics
    PageLoadTime: '< 3s',
    FirstPaint: '< 1s'
  },

  // Crawlability & Indexability
  crawling: {
    sitemap: 'https://amzglobalsourcing.com/sitemap.xml',
    robotsTxt: 'https://amzglobalsourcing.com/robots.txt',
    allowedCrawlers: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider'],
    crawlDelay: 1
  }
};

export default seoConfig;
