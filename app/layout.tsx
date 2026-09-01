import type { Metadata, Viewport } from 'next';
import '@fontsource/fraunces/300.css';
import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/500-italic.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/noto-serif-devanagari/500.css';
import '@fontsource/noto-serif-devanagari/700.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://punyaandsons.com'),
  title: {
    default: 'Punya & Sons — Fine Jewellery, Kathmandu',
    template: '%s — Punya & Sons',
  },
  description: 'Fine gold and silver jewellery, handcrafted in Kathmandu, Nepal. Explore our collection of tilhari, bala, jhumka, and traditional pieces.',
  keywords: ['gold jewellery', 'silver jewellery', 'tilhari', 'bala', 'jhumka', 'Kathmandu', 'Nepal', 'handcrafted', 'Punya & Sons'],
  openGraph: {
    title: 'Punya & Sons — Fine Jewellery, Kathmandu',
    description: 'Fine gold and silver jewellery, handcrafted in Kathmandu, Nepal. Explore our collection of tilhari, bala, jhumka, and traditional pieces.',
    url: 'https://punyaandsons.com',
    siteName: 'Punya & Sons',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punya & Sons — Fine Jewellery, Kathmandu',
    description: 'Fine gold and silver jewellery, handcrafted in Kathmandu, Nepal. Explore our collection of tilhari, bala, jhumka, and traditional pieces.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F1',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "name": "Punya & Sons",
  "description": "Fine gold and silver jewellery, handcrafted in Kathmandu since generations.",
  "url": "https://punyaandsons.com",
  "address": { 
    "@type": "PostalAddress", 
    "addressLocality": "Kathmandu", 
    "addressCountry": "NP" 
  },
  "sameAs": [
    "https://www.instagram.com/punyajewellery/", 
    "https://www.tiktok.com/@punyajewellery1"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
