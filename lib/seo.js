import { seoConfig } from '@/config/seo';

export const generateMetaTags = (page) => {
  const config = page
    ? seoConfig.pages[page]
    : seoConfig.defaultMeta;

  return {
    title: config.title || seoConfig.defaultMeta.title,
    description: config.description || seoConfig.defaultMeta.description,
    keywords: seoConfig.defaultMeta.keywords,
    canonical: seoConfig.defaultMeta.canonical,
    ogImage: seoConfig.defaultMeta.ogImage,
    twitterHandle: seoConfig.defaultMeta.twitterHandle,
  };
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QuantFund AI',
    description: seoConfig.defaultMeta.description,
    url: seoConfig.defaultMeta.canonical,
    logo: `${seoConfig.defaultMeta.canonical}/logo.png`,
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: seoConfig.defaultMeta.canonical,
    name: 'QuantFund AI',
    description: seoConfig.defaultMeta.description,
  },
};
