'use client';

import React, { useEffect, useId, useMemo, useState } from 'react';

/**
 * GDPR Cookie Consent (Next.js 13+ App Router)
 *
 * - Banner mostrato SOLO se l'utente non ha ancora espresso una scelta
 * - Pulsanti: Accetta tutto / Rifiuta tutto / Gestisci preferenze
 * - Salvataggio consenso in localStorage
 * - Blocco cookie non essenziali: NON caricare script (Analytics/Marketing) finché non c'è consenso
 *   -> vedi esempio d'uso in app/layout.tsx con componente client che monta gli Script solo se consentito
 * - Responsive + accessibile (ruoli ARIA, focus)
 */

type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

export type CookieConsent = {
  version: number;
  updatedAt: string; // ISO
  categories: Record<ConsentCategory, boolean>;
};

// Incrementa se cambi la logica e vuoi riproporre il banner a tutti gli utenti
const CONSENT_VERSION = 1;
const STORAGE_KEY = 'cookie_consent_v1';

// Event custom per far reagire altre parti dell'app (es. caricamento script)
export const COOKIE_CONSENT_EVENT = 'cookie-consent-changed';

function safeJsonParse<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function getStoredConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = safeJsonParse<CookieConsent>(raw);
  if (!parsed) return null;
  if (parsed.version !== CONSENT_VERSION) return null;
  if (!parsed.categories) return null;
  return parsed;
}

function storeConsent(consent: CookieConsent) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: consent }));
}

function makeConsent(categories: Partial<CookieConsent['categories']>): CookieConsent {
  return {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    categories: {
      necessary: true, // Sempre true
      analytics: false,
      marketing: false,
      ...categories,
    },
  };
}

/**
 * Hook riusabile:
 * - `consent === null` => nessuna scelta: mostra banner
 * - `consent.categories.analytics === true` => puoi montare GA, pixel, ecc.
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existing = getStoredConsent();
    setConsent(existing);
    setLoaded(true);

    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<CookieConsent>).detail;
      setConsent(detail);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  const acceptAll = () => {
    const next = makeConsent({ analytics: true, marketing: true });
    storeConsent(next);
    setConsent(next);
  };

  const rejectAll = () => {
    const next = makeConsent({ analytics: false, marketing: false });
    storeConsent(next);
    setConsent(next);
  };

  const savePreferences = (prefs: { analytics: boolean; marketing: boolean }) => {
    const next = makeConsent({ analytics: prefs.analytics, marketing: prefs.marketing });
    storeConsent(next);
    setConsent(next);
  };

  return { loaded, consent, acceptAll, rejectAll, savePreferences };
}

export default function CookieConsentBanner({
  cookiePolicyHref = '/cookie-policy',
  privacyPolicyHref = '/privacy-policy',
  companyName = 'Questo sito',
}: {
  cookiePolicyHref?: string;
  privacyPolicyHref?: string;
  companyName?: string;
}) {
  const { loaded, consent, acceptAll, rejectAll, savePreferences } = useCookieConsent();

  // Mostra solo dopo aver letto lo storage e se non esiste consenso
  const shouldShow = loaded && !consent;

  const [isPreferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const titleId = useId();
  const descId = useId();

  const policyLinks = useMemo(() => {
    return (
      <p className="text-sm text-sage-700">
        Usiamo cookie tecnici necessari e, solo con il tuo consenso, cookie per analisi e marketing.{' '}
        <a href={cookiePolicyHref} className="underline font-semibold text-sage-900 hover:text-sage-700">
          Leggi la Cookie Policy
        </a>
        {privacyPolicyHref ? (
          <>
            {' '}
            e la{' '}
            <a href={privacyPolicyHref} className="underline font-semibold text-sage-900 hover:text-sage-700">
              Privacy Policy
            </a>
            .
          </>
        ) : (
          '.'
        )}
      </p>
    );
  }, [cookiePolicyHref, privacyPolicyHref]);

  // (Opzionale) se l'utente apre preferenze dopo una scelta precedente
  useEffect(() => {
    if (!consent) return;
    setAnalytics(!!consent.categories.analytics);
    setMarketing(!!consent.categories.marketing);
  }, [consent]);

  // Accessibilità: ESC chiude il modal preferenze
  useEffect(() => {
    if (!isPreferencesOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreferencesOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isPreferencesOpen]);

  if (!shouldShow) return null;

  return (
    <>
      {/* Banner */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-sage-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <h2 id={titleId} className="text-base font-semibold text-sage-900">
                Preferenze Cookie
              </h2>
              <div id={descId} className="mt-1">
                <p className="text-sm text-sage-700">
                  {companyName} rispetta la tua privacy. Puoi accettare, rifiutare o gestire le preferenze.
                </p>
                <div className="mt-2">{policyLinks}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              <button
                type="button"
                className="w-full sm:w-auto rounded-lg border border-sage-300 px-4 py-2 text-sm font-semibold text-sage-900 hover:bg-sage-50"
                onClick={rejectAll}
              >
                Rifiuta tutto
              </button>

              <button
                type="button"
                className="w-full sm:w-auto rounded-lg border border-sage-300 px-4 py-2 text-sm font-semibold text-sage-900 hover:bg-sage-50"
                onClick={() => setPreferencesOpen(true)}
              >
                Gestisci preferenze
              </button>

              <button
                type="button"
                className="w-full sm:w-auto rounded-lg bg-sage-900 px-4 py-2 text-sm font-semibold text-white hover:bg-sage-800"
                onClick={acceptAll}
              >
                Accetta tutto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal preferenze */}
      {isPreferencesOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gestisci preferenze cookie"
          onClick={() => setPreferencesOpen(false)}
        >
          <div className="w-full max-w-xl rounded-lg bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-sage-200 p-4">
              <h3 className="text-lg font-semibold text-sage-900">Gestisci preferenze</h3>
              <button
                type="button"
                aria-label="Chiudi"
                className="text-sage-700 hover:text-sage-900 transition-colors"
                onClick={() => setPreferencesOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="rounded-lg border border-sage-200 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-sage-900">Cookie necessari</div>
                    <div className="text-sm text-sage-700">
                      Sempre attivi. Servono al funzionamento del sito e non possono essere disattivati.
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-sage-600">Attivi</div>
                </div>
              </div>

              <label className="rounded-lg border border-sage-200 p-3 flex items-start justify-between gap-3 cursor-pointer">
                <div>
                  <div className="font-semibold text-sage-900">Cookie analitici</div>
                  <div className="text-sm text-sage-700">
                    Ci aiutano a capire come viene usato il sito (es. Google Analytics).
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-sage-900"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
              </label>

              <label className="rounded-lg border border-sage-200 p-3 flex items-start justify-between gap-3 cursor-pointer">
                <div>
                  <div className="font-semibold text-sage-900">Cookie marketing</div>
                  <div className="text-sm text-sage-700">
                    Usati per personalizzazione e contenuti di terze parti (es. remarketing).
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-sage-900"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
              </label>

              <div className="flex flex-col sm:flex-row gap-2 sm:justify-end pt-2">
                <button
                  type="button"
                  className="rounded-lg border border-sage-300 px-4 py-2 text-sm font-semibold text-sage-900 hover:bg-sage-50"
                  onClick={() => {
                    rejectAll();
                    setPreferencesOpen(false);
                  }}
                >
                  Rifiuta tutto
                </button>

                <button
                  type="button"
                  className="rounded-lg bg-sage-900 px-4 py-2 text-sm font-semibold text-white hover:bg-sage-800"
                  onClick={() => {
                    savePreferences({ analytics, marketing });
                    setPreferencesOpen(false);
                  }}
                >
                  Salva preferenze
                </button>
              </div>

              <div className="text-xs text-sage-600">
                Puoi cambiare queste preferenze in qualsiasi momento dalla Cookie Policy.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

