import type { Metadata } from 'next';
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
  title: 'Punya & Sons — Fine Jewellery, Kathmandu',
  description:
    'Punya & Sons is a curated catalog of fine gold and silver jewellery, handcrafted in Kathmandu. Browse the collection and chat with us directly — no online checkout.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
