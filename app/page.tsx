import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppCta from '@/components/WhatsAppCta';
import { CATEGORIES, PRODUCTS } from '@/data/products';

const CATEGORY_IMG: Record<string, string> = {
  rings: '/photos/stock-ring-gold.jpg',
  tilhari: '/photos/tilhari-bride-profile.jpg',
  bala: '/photos/bride-portrait-bangles.jpg',
  earrings: '/photos/earring-chandbali-model.jpg',
  naugedi: '/photos/pendant-necklace-closeup.jpg',
  payal: '/photos/anklet-payal.jpg',
};

const TEASER_IDS = [
  'ring-antique-gold',
  'tilhari-chadke',
  'earring-jhumka',
  'bala-carved',
  'ring-stone-set',
  'naugedi-nine-bead',
];

export default function HomePage() {
  const teaser = TEASER_IDS.map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean);

  return (
    <>
      <Nav active="home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] min-h-[580px] lg:min-h-[640px]">
          <div className="relative min-h-[360px] lg:min-h-full overflow-hidden">
            <Image
              src="/photos/maang-tikka-portrait.jpg"
              alt="Bride wearing handcrafted Nepali gold maang tikka and jhumka earrings"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-ink/80 via-transparent to-transparent lg:via-ink/20" />
          </div>
          
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-20 relative z-10">
            <div className="inline-flex items-center gap-2 text-goldLight text-xs tracking-[0.2em] uppercase font-semibold mb-5">
              <span className="w-6 h-[1px] bg-goldLight inline-block" />
              Kathmandu · Handcrafted Heritage
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] mb-6">
              Jewellery carrying <br />
              <span className="italic font-light text-goldLight">the weight of merit.</span>
            </h1>
            
            <p className="text-sm sm:text-base leading-relaxed text-ivory/80 max-w-md mb-8">
              Punya &amp; Sons is a curated catalog of fine gold and silver jewellery, rooted in Nepali artistry. Each piece is crafted to order with generational mastery.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 bg-gold text-ivory px-7 py-4 text-sm font-semibold tracking-wide rounded-sm hover:bg-goldLight hover:text-ink transition-colors duration-200 shadow-md"
              >
                Explore Catalog →
              </Link>
              <WhatsAppCta label="Chat on WhatsApp" />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative bg-ivory py-2">
        <svg className="w-full h-8 text-gold/60" viewBox="0 0 1400 34" preserveAspectRatio="none">
          <path d="M0 17 Q 350 34 700 17 T 1400 17" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      {/* Trust Pillars / Badges */}
      <section className="bg-paper border-y border-line py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-3 bg-ivory">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457-.39-2.823-1.07-4" />
              </svg>
            </div>
            <h3 className="font-serif text-sm font-semibold text-ink">Handcrafted Artistry</h3>
            <p className="text-xs text-ink/65 mt-1">Made by master Newar artisans in Kathmandu</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-3 bg-ivory">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-sm font-semibold text-ink">3 Generations</h3>
            <p className="text-xs text-ink/65 mt-1">Time-tested techniques &amp; trusted purity</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-3 bg-ivory">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-serif text-sm font-semibold text-ink">Gold &amp; Silver</h3>
            <p className="text-xs text-ink/65 mt-1">24K / 22K Gold &amp; Fine Silver ornaments</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-3 bg-ivory">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-serif text-sm font-semibold text-ink">Personal Service</h3>
            <p className="text-xs text-ink/65 mt-1">Direct WhatsApp chat &amp; custom sizing</p>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="px-8 md:px-16 py-20 text-center bg-ivory">
        <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold block mb-3">
          Explore By Category
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3">Rooted in Nepali Tradition</h2>
        <p className="text-sm text-ink/60 max-w-md mx-auto mb-14">
          From classic Tilhari and Naugedi to contemporary silver bands and Jhumkas.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {CATEGORIES.filter((c) => c.slug !== 'pote').map((cat) => (
            <Link key={cat.slug} href={`/catalog?cat=${cat.slug}`} className="flex flex-col items-center group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold/30 p-1 group-hover:border-gold transition-all duration-300 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={CATEGORY_IMG[cat.slug]}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
              </div>
              <span className="font-serif text-base font-medium mt-4 text-ink group-hover:text-oxblood transition-colors">
                {cat.label}
              </span>
              <span className="text-xs text-gold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Catalog Teaser / Featured Collection */}
      <section className="px-8 md:px-16 py-20 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold block mb-2">Curated Pieces</span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium">Featured Collection</h2>
            </div>
            <Link
              href="/catalog"
              className="text-sm font-semibold text-oxblood hover:text-ink border-b border-oxblood pb-0.5 transition-colors"
            >
              Browse Full Catalog ({PRODUCTS.length}+ pieces) →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teaser.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group border border-line bg-ivory overflow-hidden block transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="aspect-square relative overflow-hidden border-b border-line">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className={`absolute top-3 left-3 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-semibold ${
                      p.metal === 'silver' ? 'bg-ink/80 text-ivory' : 'bg-gold text-ivory'
                    }`}
                  >
                    {p.metal === 'gold' ? '22K Gold' : 'Fine Silver'}
                  </span>
                </div>
                
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-[11px] tracking-widest uppercase text-gold font-medium">{p.label}</span>
                  <h3 className="font-serif text-lg font-medium text-ink group-hover:text-oxblood transition-colors">{p.name}</h3>
                  <span className="text-xs text-ink/60">{p.spec}</span>
                  <span className="mt-2 text-xs font-semibold text-oxblood inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View piece details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / Social Section */}
      <section className="px-8 md:px-16 py-20 text-center bg-ivory border-t border-line">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold block mb-2">Follow Along</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3">As Seen On Instagram</h2>
          <p className="text-sm text-ink/65 mb-10 max-w-md mx-auto">
            A glimpse of our latest bridal sets, custom orders, and daily workshop craft in Kathmandu.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              '/photos/maang-tikka-portrait.jpg',
              '/photos/earring-chandbali-model.jpg',
              '/photos/bride-portrait-bangles.jpg',
              '/photos/tilhari-bride-profile.jpg',
              '/photos/stock-bridal-necklace-set.jpg',
            ].map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/punyajewellery/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square relative overflow-hidden border border-line group block shadow-sm"
              >
                <Image
                  src={src}
                  alt="Punya Jewellery Kathmandu craftsmanship"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                  <span className="text-ivory text-[11px] font-semibold tracking-wider text-center uppercase border border-ivory/60 px-2 py-1">
                    @punyajewellery
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://www.instagram.com/punyajewellery/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-oxblood font-semibold hover:underline"
            >
              Follow on Instagram →
            </a>
            <span className="text-ink/30 hidden sm:inline">•</span>
            <a
              href="https://www.tiktok.com/@punyajewellery1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-oxblood font-semibold hover:underline"
            >
              Follow on TikTok →
            </a>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="story" className="bg-ink text-ivory px-8 md:px-16 py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-square border border-ivory/20 overflow-hidden shadow-2xl">
            <Image
              src="/photos/stock-bridal-fulllook.jpg"
              alt="Handcrafted Nepali bridal gold jewellery set"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-center border-t border-goldLight/30 pt-4">
              <span className="font-deva text-2xl text-goldLight font-bold">पुण्य एण्ड सन्स</span>
              <p className="text-xs text-ivory/60 mt-1">Kathmandu, Nepal</p>
            </div>
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-goldLight font-semibold block mb-4">Our Heritage</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-tight mb-6">
              Three Generations of Craftsmanship
            </h2>
            <blockquote className="font-serif text-xl sm:text-2xl font-light italic text-goldLight leading-relaxed mb-6 border-l-2 border-goldLight pl-4">
              &ldquo;Every piece we shape carries an intention — punya, merit passed from hand to hand, generation to generation.&rdquo;
            </blockquote>
            <p className="text-sm text-ivory/70 leading-relaxed mb-6">
              Based in Kathmandu, Punya &amp; Sons has preserved the gold and silver metalsmith traditions of Nepal. We specialize in bespoke bridal sets, classic Tilhari, Naugedi, carved bangles, and everyday fine silver.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-sm text-goldLight font-semibold underline underline-offset-4 hover:text-ivory transition-colors"
            >
              Explore our full collection →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section id="contact" className="px-8 md:px-16 py-20 text-center bg-paper border-t border-line">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold block mb-3">Direct Orders</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Found Something You Love?</h2>
          <p className="text-sm text-ink/75 leading-relaxed mb-8">
            We don&apos;t run a standard add-to-cart checkout — every order is personal. Chat with us directly on WhatsApp to confirm gold weight, custom sizes, daily gold/silver rates, and delivery details.
          </p>
          <WhatsAppCta label="Start WhatsApp Consultation →" />
        </div>
      </section>

      <Footer />
    </>
  );
}

