import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'CariSponsorPadel - Platform Sponsorship Padel #1 Indonesia',
  description: 'Hubungkan brand Anda dengan 50+ venue padel dan ribuan pemain premium. Mulai dari IDR 50 juta. Proses mudah, hasil terukur.',
  keywords: 'sponsorship padel, sponsor padel indonesia, padel marketing, venue padel, tournament padel, brand activation, sports sponsorship',
  authors: [{ name: 'CariSponsorPadel' }],
  creator: 'CariSponsorPadel',
  publisher: 'CariSponsorPadel',
  metadataBase: new URL('https://carisponsorpadel.com'),
  openGraph: {
    title: 'CariSponsorPadel - Platform Sponsorship Padel #1 Indonesia',
    description: 'Hubungkan brand Anda dengan 50+ venue padel dan ribuan pemain premium',
    url: 'https://carisponsorpadel.com',
    siteName: 'CariSponsorPadel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CariSponsorPadel - Platform Sponsorship Padel Indonesia',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CariSponsorPadel - Platform Sponsorship Padel #1 Indonesia',
    description: 'Hubungkan brand Anda dengan 50+ venue padel dan ribuan pemain premium',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
