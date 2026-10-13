'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CATEGORIES, PRODUCTS, Metal } from '@/data/products';

function CatalogInner() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') ?? 'all';

  const [activeCat, setActiveCat] = useState(initialCat);
  const [activeMetal, setActiveMetal] = useState<'all' | Metal>('all');

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) => (activeCat === 'all' || p.cat === activeCat) && (activeMetal === 'all' || p.metal === activeMetal)
      ),
    [activeCat, activeMetal]
  );

  return (
    <>
      <Nav active="catalog" />

      <div className="px-8 md:px-16 pt-14 pb-8 text-center">
        <span className="text-xs tracking-widest uppercase text-gold font-semibold">Full collection</span>
        <h1 className="font-serif text-4xl font-medium mt-2.5 mb-2.5">The catalog</h1>
        <p className="text-sm text-ink/60 max-w-md mx-auto">
          Every piece shown here is for browsing only. Found something you like? Chat with us directly and we&apos;ll
          take it from there.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-4 px-5 pb-24 sm:px-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 md:px-10 lg:px-16">
        <aside className="w-full rounded-sm border border-line bg-paper/60 p-3 sm:p-5">
          <h2 className="mb-2 font-serif text-base font-medium sm:mb-4 sm:text-lg">Filter collection</h2>
          <fieldset className="min-w-0">
            <legend className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/55 sm:mb-3 sm:text-[11px]">
              Category
            </legend>
            <div className="flex flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-col md:overflow-visible md:pb-0">
              <FilterButton active={activeCat === 'all'} onClick={() => setActiveCat('all')}>
                All categories
              </FilterButton>
              {CATEGORIES.map((c) => (
                <FilterButton key={c.slug} active={activeCat === c.slug} onClick={() => setActiveCat(c.slug)}>
                  {c.label}
                </FilterButton>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-3 min-w-0 border-t border-line pt-3 sm:mt-5 sm:pt-4">
            <legend className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/55 sm:mb-3 sm:text-[11px]">
              Metal
            </legend>
            <div className="flex flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-col md:overflow-visible md:pb-0">
              <FilterButton gold active={activeMetal === 'all'} onClick={() => setActiveMetal('all')}>
                Gold + Silver
              </FilterButton>
              <FilterButton gold active={activeMetal === 'gold'} onClick={() => setActiveMetal('gold')}>
                Gold only
              </FilterButton>
              <FilterButton gold active={activeMetal === 'silver'} onClick={() => setActiveMetal('silver')}>
                Silver only
              </FilterButton>
            </div>
          </fieldset>
        </aside>

        <div className="min-w-0">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-ink/50">No pieces match that filter yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
              {filtered.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="block border border-line bg-paper group">
                  <div className="aspect-square relative overflow-hidden border-b border-line">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] pointer-events-none" />
                  </div>
                  <div className="p-4 flex flex-col gap-1.5">
                    <span className="text-[11px] tracking-wide uppercase text-gold">{p.label}</span>
                    <h3 className="font-serif text-base">{p.name}</h3>
                    <span
                      className={`inline-flex w-fit text-[10.5px] tracking-wide uppercase px-2 py-0.5 rounded-full mt-0.5 ${
                        p.metal === 'silver' ? 'bg-ink/[0.08] text-ink/65' : 'bg-gold/[0.12] text-gold'
                      }`}
                    >
                      {p.metal}
                    </span>
                    <span className="text-[12.5px] text-ink/65">{p.spec}</span>
                    <span className="mt-2 text-[12.5px] text-oxblood font-semibold">View piece →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

function FilterButton({
  active,
  gold,
  onClick,
  children,
}: {
  active: boolean;
  gold?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-pressed={active}
      className={`min-h-9 whitespace-nowrap rounded-sm border px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:min-h-11 sm:px-4 sm:py-2 sm:text-sm md:w-full md:text-left ${
        active
          ? 'border-oxblood bg-oxblood text-ivory hover:border-ink hover:bg-ink'
          : `bg-ivory text-ink hover:border-gold hover:bg-paper hover:text-oxblood ${gold ? 'border-gold/60' : 'border-line'}`
      }`}
    >
      {children}
    </button>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={null}>
      <CatalogInner />
    </Suspense>
  );
}
