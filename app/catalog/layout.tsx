import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Browse our full collection of handcrafted Nepali gold and silver jewellery — rings, tilhari, bala, jhumka, naugedi, pote, and payal. Chat with us to order.',
  openGraph: {
    title: 'Catalog — Punya & Sons',
    description: 'Browse our full collection of handcrafted Nepali gold and silver jewellery.',
  },
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
