'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type WishlistContextType = {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  toggleWishlist: () => {},
  isWishlisted: () => false,
  clearWishlist: () => {},
});

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('punya_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('punya_wishlist', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const isWishlisted = (id: string) => (mounted ? wishlist.includes(id) : false);

  const clearWishlist = () => {
    setWishlist([]);
    try {
      localStorage.removeItem('punya_wishlist');
    } catch {
      // Ignore
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist: mounted ? wishlist : [], toggleWishlist, isWishlisted, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
