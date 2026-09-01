import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-paper px-8 md:px-16 pt-16 pb-8 border-t border-line">
      <div className="flex flex-wrap justify-between gap-10 mb-12">
        <div className="max-w-xs">
          <h4 className="text-xs tracking-widest uppercase text-gold mb-2">Punya &amp; Sons</h4>
          <h3 className="font-deva text-2xl text-oxblood font-bold mb-4">पुण्य एण्ड सन्स</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Fine gold and silver jewellery, handcrafted in Kathmandu since generations.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase text-gold mb-4">Explore</h4>
          <Link href="/catalog" className="block text-sm opacity-75 hover:opacity-100 hover:text-oxblood mb-2 transition-colors">Catalog</Link>
          <Link href="/#story" className="block text-sm opacity-75 hover:opacity-100 hover:text-oxblood mb-2 transition-colors">Our story</Link>
          <Link href="/#contact" className="block text-sm opacity-75 hover:opacity-100 hover:text-oxblood mb-2 transition-colors">Contact</Link>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase text-gold mb-4">Reach us</h4>
          <a href="https://wa.me/9779847465703" target="_blank" rel="noopener noreferrer" className="block text-sm opacity-75 hover:opacity-100 hover:text-oxblood mb-2 transition-colors">WhatsApp</a>
          <a href="https://www.instagram.com/punyajewellery/" target="_blank" rel="noopener noreferrer" className="block text-sm opacity-75 hover:opacity-100 hover:text-oxblood mb-2 transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@punyajewellery1" target="_blank" rel="noopener noreferrer" className="block text-sm opacity-75 hover:opacity-100 hover:text-oxblood mb-2 transition-colors">TikTok</a>
          <a href="https://maps.app.goo.gl/wSrxzYy5fXzUe1N39" target="_blank" rel="noopener noreferrer" className="block text-sm opacity-75 hover:opacity-100 hover:text-oxblood mb-2 transition-colors">Kathmandu, Nepal</a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2 pt-6 border-t border-line text-xs opacity-50">
        <span>© 2026 Punya &amp; Sons</span>
        <span>Catalog only — no online checkout</span>
      </div>
    </footer>
  );
}
