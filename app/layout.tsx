import type { Metadata } from 'next';
import { Fraunces, Inter, Noto_Serif_Devanagari } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-devanagari',
  weight: ['500', '700'],
});

export const metadata: Metadata = {
  title: 'Punya & Sons — Fine Jewellery, Kathmandu',
  description:
    'Punya & Sons is a curated catalog of fine gold and silver jewellery, handcrafted in Kathmandu. Browse the collection and chat with us directly — no online checkout.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} ${notoDevanagari.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
