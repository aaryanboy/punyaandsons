import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppCta from '@/components/WhatsAppCta';
import { CATEGORIES, PRODUCTS } from '@/data/products';

const CATEGORY_IMG: Record<string, string> = {
  rings: 'https://images.pexels.com/photos/14058109/pexels-photo-14058109.jpeg?auto=compress&cs=tinysrgb&w=300',
  tilhari: 'https://images.pexels.com/photos/15272716/pexels-photo-15272716.jpeg?auto=compress&cs=tinysrgb&w=300',
  bala: 'https://images.pexels.com/photos/12194316/pexels-photo-12194316.jpeg?auto=compress&cs=tinysrgb&w=300',
  earrings: 'https://images.pexels.com/photos/12144990/pexels-photo-12144990.jpeg?auto=compress&cs=tinysrgb&w=300',
  naugedi: 'https://images.pexels.com/photos/7679654/pexels-photo-7679654.jpeg?auto=compress&cs=tinysrgb&w=300',
};

const TEASER_IDS = [
  'ring-antique-gold',
  'tilhari-chadke',
  'earring-jhumka',
  'bala-carved',
  'ring-stone-set',
  'naugedi-nine-bead',
  'earring-dungri',
];

export default function HomePage() {
  const teaser = TEASER_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean);

  return (
    <>
      <Nav active="home" />

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] min-h-[560px] md:min-h-[620px]">
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/15272716/pexels-photo-15272716.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Gold necklace, hero piece"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="bg-ink text-ivory flex flex-col justify-center px-8 md:px-14 py-14">
          <span className="text-xs tracking-widest uppercase text-goldLight font-semibold mb-4">
            Handcrafted in Nepal, three generations strong
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-5">
            Jewellery carrying
            <br />
            the weight of merit.
          </h1>
          <p className="text-sm leading-relaxed text-ivory/70 max-w-sm mb-8">
            Punya &amp; Sons is a curated catalog of fine gold and silver jewellery, rooted in Nepali craft. Browse the
            collection, then speak to us directly about the piece you love.
          </p>
          <Link
            href="/catalog"
            className="inline-flex bg-goldLight text-ink px-6 py-3.5 text-sm font-semibold rounded-sm w-fit"
          >
            View the catalog →
          </Link>
          <Link href="/#contact" className="mt-3 text-sm underline underline-offset-4 text-ivory/80 w-fit">
            or chat with us on WhatsApp
          </Link>
        </div>
      </section>

      <svg className="w-full h-8" viewBox="0 0 1400 34" preserveAspectRatio="none">
        <path d="M0 17 Q 350 34 700 17 T 1400 17" stroke="#A67C3D" strokeWidth="1.4" fill="none" />
      </svg>

      {/* Categories */}
      <section className="px-8 md:px-16 pt-16 pb-10 text-center">
        <span className="text-xs tracking-widest uppercase text-gold font-semibold block mb-2">
          Shop by category
        </span>
        <h2 className="font-serif text-3xl font-medium mb-12">Rooted in tradition</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {CATEGORIES.filter((c) => c.slug !== 'pote').map((cat) => (
            <Link key={cat.slug} href={`/catalog?cat=${cat.slug}`} className="flex flex-col items-center gap-3.5">
              <div className="w-28 h-28 rounded-full overflow-hidden border border-line hover:border-gold transition-colors relative">
                <Image src={CATEGORY_IMG[cat.slug]} alt={cat.label} fill className="object-cover" />
              </div>
              <span className="text-sm">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Catalog teaser */}
      <section className="px-8 md:px-16 py-20 bg-paper">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-11">
          <h2 className="font-serif text-3xl font-medium">From the catalog</h2>
          <Link href="/catalog" className="text-sm text-oxblood border-b border-oxblood pb-0.5 w-fit">
            View all 100+ pieces →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] gap-4">
          {teaser.map((p, i) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className={`relative border border-line overflow-hidden block ${i === 0 || i === 3 ? 'row-span-2' : ''}`}
            >
              <Image src={p.img} alt={p.name} fill className="object-cover" />
              <span className="absolute bottom-2.5 left-3 text-[11px] bg-ivory/85 px-2 py-0.5">
                {p.name} · {p.spec.replace('Gold used: ', '').replace('Silver used: ', '').replace('Gold accents: ', '')}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Instagram / TikTok */}
      <section className="px-8 md:px-16 py-20 text-center">
        <span className="text-xs tracking-widest uppercase text-gold font-semibold block mb-2">Follow along</span>
        <h2 className="font-serif text-3xl font-medium mb-2.5">As seen on Instagram &amp; TikTok</h2>
        <p className="text-sm text-ink/60 mb-10">
          This grid will pull directly from your real posts and reels once your handles are connected.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="aspect-square bg-paper border border-line" />
          ))}
        </div>
        <p className="mt-8 text-sm">
          @punyaandsons on Instagram · TikTok — <em>update these handles in Nav.tsx and Footer.tsx</em>
        </p>
      </section>

      {/* Story */}
      <section id="story" className="bg-ink text-ivory px-8 md:px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="h-72 border border-ivory/20 flex items-center justify-center">
          <svg viewBox="0 0 60 60" fill="none" stroke="#C9A465" strokeWidth="1" className="w-1/2">
            <circle cx="30" cy="30" r="22" />
            <circle cx="30" cy="30" r="14" />
            <circle cx="30" cy="30" r="4" fill="#C9A465" />
          </svg>
        </div>
        <div>
          <span className="text-xs tracking-widest uppercase text-goldLight font-semibold">Our story</span>
          <blockquote className="font-serif text-2xl md:text-[27px] font-light italic text-goldLight leading-relaxed my-6">
            &ldquo;Every piece we shape carries an intention — punya, merit passed from hand to hand, generation to
            generation.&rdquo;
          </blockquote>
          <p className="text-sm text-ivory/60">— Punya &amp; Sons, Kathmandu</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-8 md:px-16 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Found something you love?</h2>
        <p className="text-sm text-ink/65 mb-8">
          We don&apos;t sell online — talk to us directly and we&apos;ll help you take it home.
        </p>
        <WhatsAppCta />
      </section>

      <Footer />
    </>
  );
}
