'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

export default function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY non configurata');
    console.warn('reCAPTCHA non sarà disponibile. Verifica le variabili d\'ambiente.');
    return <>{children}</>;
  }

  // Verifica formato chiave (dovrebbe iniziare con 6L e avere almeno 20 caratteri)
  if (siteKey.length < 20 || !siteKey.startsWith('6L')) {
    console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY potrebbe avere formato non valido. Lunghezza:', siteKey.length);
  } else {
    console.log('reCAPTCHA Site Key configurata correttamente (lunghezza:', siteKey.length, ')');
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      language="it"
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
