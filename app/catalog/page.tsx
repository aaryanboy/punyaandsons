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

      <div className="px-8 md:px-16 pb-10 flex flex-col gap-4 items-center">
        <div className="flex gap-2.5 flex-wrap justify-center">
          <FilterButton active={activeCat === 'all'} onClick={() => setActiveCat('all')}>
            All categories
          </FilterButton>
          {CATEGORIES.map((c) => (
            <FilterButton key={c.slug} active={activeCat === c.slug} onClick={() => setActiveCat(c.slug)}>
              {c.label}
            </FilterButton>
          ))}
        </div>
        <div className="flex gap-2.5 flex-wrap justify-center">
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
      </div>

      <div className="px-8 md:px-16 pb-24">
        {filtered.length === 0 ? (
          <p className="text-center py-16 text-ink/50 text-sm">No pieces match that filter yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="block border border-line bg-paper group">
                <div className="aspect-square relative overflow-hidden border-b border-line">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
      className={`px-4.5 py-2 text-sm rounded-full border ${
        active ? 'bg-ink text-ivory border-ink' : `bg-ivory ${gold ? 'border-gold' : 'border-line'}`
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
