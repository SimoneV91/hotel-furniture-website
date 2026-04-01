import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.mobiliperalbergo.it';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/preview']
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

