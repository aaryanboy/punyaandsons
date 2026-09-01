import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppCta from '@/components/WhatsAppCta';
import { getProduct, PRODUCTS } from '@/data/products';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) return {};
  return {
    title: `${product.name} — Punya & Sons`,
    description: product.desc,
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  if (!product) notFound();

  return (
    <>
      <Nav active="catalog" />

      <p className="px-8 md:px-16 pt-6 text-sm text-ink/55">
        <Link href="/catalog" className="hover:text-oxblood">
          Catalog
        </Link>{' '}
        / {product.name}
      </p>

      <div className="px-8 md:px-16 pt-8 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="aspect-square relative border border-line bg-paper overflow-hidden">
          <Image src={product.img} alt={product.name} fill className="object-cover" priority />
        </div>
        <div>
          <span className="text-xs tracking-widest uppercase text-gold font-semibold">{product.label}</span>
          <h1 className="font-serif text-3xl font-medium mt-3 mb-4.5">{product.name}</h1>
          <span
            className={`inline-flex w-fit text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-full mb-5 ${
              product.metal === 'silver' ? 'bg-ink/[0.08] text-ink/65' : 'bg-gold/[0.12] text-gold'
            }`}
          >
            {product.metal}
          </span>
          <div className="border-t border-b border-line py-4 mb-6 text-base">
            <strong className="block text-xs uppercase tracking-wide text-ink/50 mb-1.5">
              Approximate metal weight
            </strong>
            {product.spec}
          </div>
          <p className="text-[15px] leading-relaxed text-ink/75 mb-8">{product.desc}</p>
          <p className="text-[12.5px] text-ink/50 mb-7">
            Exact weight and final pricing depend on the day&apos;s gold or silver rate and any customisation —
            confirm with us directly.
          </p>
          <WhatsAppCta label="Chat about this piece →" productName={product.name} />
        </div>
      </div>

      <Footer />
    </>
  );
}
