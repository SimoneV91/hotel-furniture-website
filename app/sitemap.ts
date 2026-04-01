import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://www.mobiliperalbergo.it';
  const categories = ['/catalogo/5-stelle','/catalogo/4-stelle','/catalogo/3-stelle','/catalogo/bb'];
  const staticPages = ['/', '/catalogo', '/referenze', '/contact', '/privacy-policy', '/termini-e-condizioni'];
  const weekly: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly';

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      changeFrequency: weekly,
      priority: p === '/' ? 1.0 : 0.6,
    })),
    ...categories.map((p) => ({
      url: `${base}${p}`,
      changeFrequency: weekly,
      priority: 0.8,
    })),
  ];
  return entries;
}

