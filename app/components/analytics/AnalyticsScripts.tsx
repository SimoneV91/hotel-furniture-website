'use client';

/**
 * Esempio: blocco degli script non essenziali finché non c'è consenso.
 *
 * - Se NON hai Google Analytics, puoi lasciare questo componente così com'è (non carica nulla).
 * - Se vuoi GA4, aggiungi NEXT_PUBLIC_GA_MEASUREMENT_ID nelle env e decommenta gli Script.
 */

import Script from 'next/script';
import { useCookieConsent } from '../CookieConsentBanner';

export default function AnalyticsScripts() {
  const { loaded, consent } = useCookieConsent();

  // Non caricare nulla finché non sappiamo il consenso
  if (!loaded) return null;

  // Carica solo se consentito
  if (!consent?.categories.analytics) return null;

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

