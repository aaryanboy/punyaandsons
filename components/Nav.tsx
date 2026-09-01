'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WHATSAPP_URL = 'https://wa.me/9779847465703';

export default function Nav({ active }: { active?: 'home' | 'catalog' }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm flex items-center justify-between px-8 md:px-16 py-6 border-b border-line">
      <Link href="/" className="flex items-baseline gap-2.5 z-50" onClick={() => setIsOpen(false)}>
        <span className="font-deva text-2xl text-oxblood font-bold">पुण्य</span>
        <span className="font-serif text-lg tracking-wide">PUNYA</span>
        <span className="font-serif text-xs tracking-widest text-gold self-end mb-0.5">&amp; SONS</span>
      </Link>
      
      <ul className="hidden md:flex gap-10 text-sm tracking-wide">
        <li>
          <Link href="/" className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-oxblood hover:after:scale-x-100 after:transition-transform after:duration-300 ${active === 'home' ? 'border-b-[1.5px] border-oxblood pb-1 after:hidden' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/catalog" className={`relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-oxblood hover:after:scale-x-100 after:transition-transform after:duration-300 ${active === 'catalog' ? 'border-b-[1.5px] border-oxblood pb-1 after:hidden' : ''}`}>
            Catalog
          </Link>
        </li>
        <li>
          <Link href="/#story" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-oxblood hover:after:scale-x-100 after:transition-transform after:duration-300">Our story</Link>
        </li>
        <li>
          <Link href="/#contact" className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-oxblood hover:after:scale-x-100 after:transition-transform after:duration-300">Contact</Link>
        </li>
      </ul>

      <div className="hidden md:block">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink px-5 py-2 text-sm rounded-sm hover:bg-ink hover:text-ivory transition-colors"
        >
          Chat with us
        </a>
      </div>

      <button 
        className="md:hidden z-50 flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-0.5 bg-ink transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ul className="flex flex-col gap-8 text-xl tracking-wide text-center">
          <li className={isOpen ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <Link href="/" onClick={() => setIsOpen(false)} className={active === 'home' ? 'text-oxblood font-semibold' : ''}>
              Home
            </Link>
          </li>
          <li className={isOpen ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Link href="/catalog" onClick={() => setIsOpen(false)} className={active === 'catalog' ? 'text-oxblood font-semibold' : ''}>
              Catalog
            </Link>
          </li>
          <li className={isOpen ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <Link href="/#story" onClick={() => setIsOpen(false)}>Our story</Link>
          </li>
          <li className={isOpen ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li className={`mt-4 ${isOpen ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-6 py-3 text-base rounded-sm inline-block"
            >
              Chat with us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { WHATSAPP_URL };
