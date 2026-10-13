'use client';

import { useState } from 'react';

export default function GoldRateTicker() {
  const [showDetails, setShowDetails] = useState(false);

  // Approximate daily market rates in Kathmandu (NRs per Tola / 11.66g)
  const rates = {
    gold24k: '1,68,500',
    gold22k: '1,55,000',
    silver: '1,980',
    date: 'Today',
  };

  return (
    <>
      <div className="bg-ink text-ivory text-[11px] sm:text-xs py-2 px-4 sm:px-8 flex flex-wrap items-center justify-between border-b border-gold/20 tracking-wider">
        <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-none mx-auto sm:mx-0 py-0.5">
          <span className="inline-flex items-center gap-1.5 font-semibold text-goldLight uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Daily Market Rate ({rates.date})
          </span>
          <span className="text-ivory/30">•</span>
          <span className="text-ivory/90">
            <strong>24K Gold:</strong> NRs. {rates.gold24k} / Tola
          </span>
          <span className="text-ivory/30">•</span>
          <span className="text-ivory/90">
            <strong>22K Gold:</strong> NRs. {rates.gold22k} / Tola
          </span>
          <span className="text-ivory/30">•</span>
          <span className="text-ivory/90">
            <strong>Silver:</strong> NRs. {rates.silver} / Tola
          </span>
        </div>

        <button
          onClick={() => setShowDetails(true)}
          className="hidden md:inline-flex items-center gap-1 text-goldLight hover:text-ivory underline underline-offset-2 transition-colors ml-4 text-[11px]"
        >
          Rate Calculation Info &rarr;
        </button>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-ivory text-ink max-w-md w-full p-6 md:p-8 rounded-sm shadow-2xl border border-gold/40 relative animate-fade-in-up">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-ink/50 hover:text-ink text-xl font-bold p-1"
              aria-label="Close modal"
            >
              &times;
            </button>

            <span className="text-xs tracking-widest uppercase text-gold font-semibold block mb-1">
              Nepali Market Standard
            </span>
            <h3 className="font-serif text-2xl font-medium mb-3">About Daily Metal Rates</h3>

            <p className="text-sm text-ink/75 leading-relaxed mb-4">
              In Nepal, gold and silver rates are published daily by the <strong>Federation of Nepal Gold and Silver Dealers&apos; Association (FENEGOSA)</strong> based on international bullion pricing.
            </p>

            <div className="bg-paper p-4 border border-line rounded-sm mb-4 text-xs space-y-2">
              <div className="flex justify-between border-b border-line/60 pb-1.5">
                <span className="font-semibold text-ink">1 Tola</span>
                <span className="text-ink/80">11.664 Grams</span>
              </div>
              <div className="flex justify-between border-b border-line/60 pb-1.5">
                <span className="font-semibold text-ink">24K Hallmarked Gold</span>
                <span className="text-ink/80">99.9% Pure Gold</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-ink">22K / Traditional Gold</span>
                <span className="text-ink/80">91.6% Pure Gold (Ideal for ornaments)</span>
              </div>
            </div>

            <p className="text-xs text-ink/60 leading-relaxed mb-6">
              Final piece cost = (Metal Weight &times; Daily Rate) + Making Charge (Jyala) + Stones/Beads if applicable.
            </p>

            <button
              onClick={() => setShowDetails(false)}
              className="w-full bg-gold text-ivory py-2.5 text-sm font-semibold rounded-sm hover:bg-goldLight hover:text-ink transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </>
  );
}
