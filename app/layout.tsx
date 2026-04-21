import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "./components/RecaptchaProvider";
import CookieConsentBanner from "./components/CookieConsentBanner";
import AnalyticsScripts from "./components/analytics/AnalyticsScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobili per Albergo - Arredamento Contract per Hotel e Strutture Ricettive",
  description: "Soluzioni di arredamento contract per hotel, alberghi e strutture ricettive. Design, qualità e funzionalità per ambienti di accoglienza.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <RecaptchaProvider>
          {children}
        </RecaptchaProvider>

        {/* Carica script non essenziali SOLO se l'utente ha accettato (vedi componente) */}
        <AnalyticsScripts />

        {/* Banner cookie (compare solo finché non viene espresso un consenso) */}
        <CookieConsentBanner
          companyName="Mobili per Albergo"
          cookiePolicyHref="/cookie-policy"
          privacyPolicyHref="/privacy-policy"
        />
      </body>
    </html>
  )
}

