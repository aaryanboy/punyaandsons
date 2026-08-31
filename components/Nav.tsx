import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/9770000000000'; // TODO: replace with the real WhatsApp number

export default function Nav({ active }: { active?: 'home' | 'catalog' }) {
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-line">
      <Link href="/" className="flex items-baseline gap-2.5">
        <span className="font-deva text-2xl text-oxblood font-bold">पुण्य</span>
        <span className="font-serif text-lg tracking-wide">PUNYA</span>
        <span className="font-serif text-xs tracking-widest text-gold self-end mb-0.5">&amp; SONS</span>
      </Link>
      <ul className="hidden md:flex gap-10 text-sm tracking-wide">
        <li>
          <Link href="/" className={active === 'home' ? 'border-b-[1.5px] border-oxblood pb-1' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/catalog" className={active === 'catalog' ? 'border-b-[1.5px] border-oxblood pb-1' : ''}>
            Catalog
          </Link>
        </li>
        <li>
          <Link href="/#story">Our story</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-ink px-5 py-2 text-sm rounded-sm"
      >
        Chat with us
      </a>
    </nav>
  );
}

export { WHATSAPP_URL };
