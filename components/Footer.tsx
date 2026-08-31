import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-paper px-8 md:px-16 pt-14 pb-8 border-t border-line">
      <div className="flex flex-wrap justify-between gap-10 mb-12">
        <div>
          <h4 className="text-xs tracking-widest uppercase text-gold mb-4">Punya &amp; Sons</h4>
          <p className="text-sm max-w-[220px] opacity-100">
            Fine gold and silver jewellery, handcrafted in Kathmandu since generations.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase text-gold mb-4">Explore</h4>
          <Link href="/catalog" className="block text-sm opacity-75 mb-2">Catalog</Link>
          <Link href="/#story" className="block text-sm opacity-75 mb-2">Our story</Link>
          <Link href="/#contact" className="block text-sm opacity-75 mb-2">Contact</Link>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase text-gold mb-4">Reach us</h4>
          <a href="#" className="block text-sm opacity-75 mb-2">WhatsApp</a>
          <a href="#" className="block text-sm opacity-75 mb-2">Instagram</a>
          <a href="#" className="block text-sm opacity-75 mb-2">TikTok</a>
          <span className="block text-sm opacity-75 mb-2">Kathmandu, Nepal</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2 pt-6 border-t border-line text-xs opacity-50">
        <span>© 2026 Punya &amp; Sons</span>
        <span>Catalog only — no online checkout</span>
      </div>
    </footer>
  );
}
