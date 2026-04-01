'use client';

import Script from 'next/script';

type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const baseUrl = 'https://www.mobiliperalbergo.it';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      ...(c.href ? { "item": `${baseUrl}${c.href}` } : {})
    }))
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="text-sm mb-6">
        <ol className="flex flex-wrap gap-2 text-sage-700">
          {items.map((c, i) => (
            <li key={i} className="flex items-center gap-2">
              {c.href ? <a href={c.href} className="hover:text-sage-900">{c.name}</a> : (
                <span className="text-sage-900 font-medium">{c.name}</span>
              )}
              {i < items.length - 1 && <span>/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <Script id="jsonld-breadcrumbs" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  );
}

