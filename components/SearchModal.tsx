'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.cat.toLowerCase().includes(q) ||
          p.label.toLowerCase().includes(q) ||
          p.metal.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div className="bg-ivory text-ink w-full max-w-2xl rounded-sm shadow-2xl border border-gold/40 overflow-hidden animate-fade-in-up">
        {/* Search Header Input */}
        <div className="flex items-center px-6 py-4 border-b border-line bg-paper">
          <svg className="w-5 h-5 text-gold mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search rings, tilhari, bangles, jhumka, silver..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-ink text-base sm:text-lg focus:outline-none placeholder:text-ink/40 font-serif"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-xs text-ink/50 hover:text-ink mr-2 px-2 py-1">
              Clear
            </button>
          )}
          <button onClick={onClose} className="text-ink/60 hover:text-ink text-xl font-bold p-1 ml-2" aria-label="Close search">
            &times;
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {!query.trim() ? (
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-3">Popular Searches</span>
              <div className="flex flex-wrap gap-2">
                {['Tilhari', 'Jhumka', 'Antique Ring', 'Silver Band', 'Naugedi', 'Payal'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-paper hover:bg-gold/15 text-ink text-xs px-3.5 py-1.5 rounded-full border border-line transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-ink/60 text-sm">No jewellery matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-gold mt-1">Try searching by category like &apos;ring&apos;, &apos;tilhari&apos;, or &apos;silver&apos;</p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Found {filtered.length} piece{filtered.length > 1 ? 's' : ''}
              </span>
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-2.5 rounded-sm hover:bg-paper border border-transparent hover:border-line transition-all group"
                >
                  <div className="w-14 h-14 relative overflow-hidden border border-line bg-paper shrink-0">
                    <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-base font-medium text-ink group-hover:text-oxblood transition-colors truncate">
                        {p.name}
                      </h4>
                      <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${p.metal === 'silver' ? 'bg-ink/10 text-ink/70' : 'bg-gold/15 text-gold'}`}>
                        {p.metal}
                      </span>
                    </div>
                    <p className="text-xs text-ink/60 truncate mt-0.5">{p.spec}</p>
                  </div>
                  <span className="text-xs text-oxblood font-semibold shrink-0 group-hover:translate-x-1 transition-transform">
                    View &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
