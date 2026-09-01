import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppCta from '@/components/WhatsAppCta';
import { getProduct, PRODUCTS } from '@/data/products';

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.desc,
    openGraph: {
      title: `${product.name} — Punya & Sons`,
      description: product.desc,
      images: [{ url: product.img, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  
  // JSON-LD structured data for Product
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.img,
    description: product.desc,
    brand: { '@type': 'Brand', name: 'Punya & Sons' },
    material: product.metal === 'gold' ? 'Gold' : 'Silver',
  };
  
  // Get related products (same category, exclude current)
  const related = PRODUCTS.filter((p) => p.cat === product.cat && p.id !== product.id).slice(0, 4);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Nav active="catalog" />
      
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-8 md:px-16 pt-6">
        <ol className="flex items-center gap-2 text-sm text-ink/55">
          <li><Link href="/" className="hover:text-oxblood">Home</Link></li>
          <li className="text-ink/30">/</li>
          <li><Link href="/catalog" className="hover:text-oxblood">Catalog</Link></li>
          <li className="text-ink/30">/</li>
          <li className="text-ink/80 font-medium">{product.name}</li>
        </ol>
      </nav>
      
      <div className="px-8 md:px-16 pt-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Image */}
        <div className="aspect-square relative border border-line bg-paper overflow-hidden group">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="text-xs tracking-widest uppercase text-gold font-semibold">{product.label}</span>
          <h1 className="font-serif text-3xl md:text-4xl font-medium mt-3 mb-4">{product.name}</h1>
          <span
            className={`inline-flex w-fit text-[11px] tracking-wide uppercase px-3 py-1 rounded-full mb-6 ${
              product.metal === 'silver' ? 'bg-ink/[0.08] text-ink/65' : 'bg-gold/[0.12] text-gold'
            }`}
          >
            {product.metal === 'gold' ? '✦ Gold' : '◆ Silver'}
          </span>
          <div className="border-t border-b border-line py-4 mb-6">
            <strong className="block text-xs uppercase tracking-wide text-ink/50 mb-1.5">Approximate metal weight</strong>
            <span className="text-base">{product.spec}</span>
          </div>
          <p className="text-[15px] leading-relaxed text-ink/75 mb-8">{product.desc}</p>
          <p className="text-[12.5px] text-ink/50 mb-7">
            Exact weight and final pricing depend on the day&apos;s gold or silver rate and any customisation — confirm with us directly.
          </p>
          <WhatsAppCta label="Chat about this piece →" productName={product.name} />
        </div>
      </div>
      
      {/* Related Products */}
      {related.length > 0 && (
        <section className="px-8 md:px-16 py-16 bg-paper border-t border-line">
          <h2 className="font-serif text-2xl font-medium mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="block border border-line bg-ivory group">
                <div className="aspect-square relative overflow-hidden border-b border-line">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <span className="text-[11px] tracking-wide uppercase text-gold">{p.label}</span>
                  <h3 className="font-serif text-sm">{p.name}</h3>
                  <span className="text-oxblood text-xs font-semibold mt-1">View piece →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      
      <Footer />
    </>
  );
}
