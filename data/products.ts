export type Metal = 'gold' | 'silver';

export type Category = {
  slug: string;
  label: string;
};

export const CATEGORIES: Category[] = [
  { slug: 'rings', label: 'Rings' },
  { slug: 'tilhari', label: 'Tilhari' },
  { slug: 'bala', label: 'Bala / Chura' },
  { slug: 'earrings', label: 'Jhumka / Dungri' },
  { slug: 'naugedi', label: 'Naugedi' },
  { slug: 'pote', label: 'Pote' },
  { slug: 'payal', label: 'Payal' },
];

export type Product = {
  id: string;
  cat: string;
  label: string;
  name: string;
  metal: Metal;
  spec: string;
  img: string;
  desc: string;
};

const RING_ANTIQUE_IMG = '/photos/stock-ring-gold.jpg';
const RING_STONE_IMG = '/photos/hands-rings-bangles.jpg';
const RING_SILVER_IMG = '/photos/stock-rings-silver.jpg';
const TILHARI_CHADKE_IMG = '/photos/tilhari-bride-profile.jpg';
const TILHARI_MAILI_IMG = '/photos/bride-veil-necklace.jpg';
const BALA_CARVED_IMG = '/photos/bride-portrait-bangles.jpg';
const BALA_SILVER_IMG = '/photos/silver-jewelry-model.jpg';
const EARRING_JHUMKA_IMG = '/photos/earring-chandbali-model.jpg';
const EARRING_DUNGRI_IMG = '/photos/earring-gold-closeup.jpg';
const EARRING_SILVER_IMG = '/photos/silver-necklace-earring-closeup.jpg';
const NAUGEDI_IMG = '/photos/pendant-necklace-closeup.jpg';
const POTE_IMG = '/photos/stock-bridal-necklace-set.jpg';
const PAYAL_IMG = '/photos/anklet-payal.jpg';

export const PRODUCTS: Product[] = [
  { id: 'ring-antique-gold', cat: 'rings', label: 'Rings', name: 'Antique gold ring', metal: 'gold', spec: 'Gold used: ~4.2g (approx.)', img: RING_ANTIQUE_IMG,
    desc: 'A hand-finished band with a soft antique texture, the kind that catches light without shouting for attention. Sized to order at the shop.' },
  { id: 'ring-stone-set', cat: 'rings', label: 'Rings', name: 'Stone-set ring', metal: 'gold', spec: 'Gold used: ~5.1g (approx.)', img: RING_STONE_IMG,
    desc: 'A single centre stone set into a gold mount, finished with a narrow decorative border. A popular pick for engagements.' },
  { id: 'ring-silver-band', cat: 'rings', label: 'Rings', name: 'Plain silver band', metal: 'silver', spec: 'Silver used: ~3.8g (approx.)', img: RING_SILVER_IMG,
    desc: 'A clean, everyday silver band with a matte finish — easy to layer or wear alone.' },
  { id: 'tilhari-chadke', cat: 'tilhari', label: 'Tilhari', name: 'Chadke tilhari', metal: 'gold', spec: 'Gold used: ~28g (approx.)', img: TILHARI_CHADKE_IMG,
    desc: 'A long chadke-style tilhari, worn sideways in the traditional way. Strung with coloured potey and finished with a gold pendant.' },
  { id: 'tilhari-maili', cat: 'tilhari', label: 'Tilhari', name: 'Maili tilhari', metal: 'gold', spec: 'Gold used: ~16g (approx.)', img: TILHARI_MAILI_IMG,
    desc: 'The most commonly worn tilhari length — medium-sized, comfortable for daily wear during festival season.' },
  { id: 'bala-carved', cat: 'bala', label: 'Bala / Chura', name: 'Carved bala', metal: 'gold', spec: 'Gold used: ~35g (approx.)', img: BALA_CARVED_IMG,
    desc: 'A heavy, carved bala with a raised pattern running the full circumference. Made to order in your wrist size.' },
  { id: 'bala-silver-chura', cat: 'bala', label: 'Bala / Chura', name: 'Plain silver chura', metal: 'silver', spec: 'Silver used: ~40g (approx.)', img: BALA_SILVER_IMG,
    desc: 'A simple, sturdy silver chura with a polished finish — a lighter-weight alternative to gold bala.' },
  { id: 'earring-jhumka', cat: 'earrings', label: 'Jhumka / Dungri', name: 'Jhumka earrings', metal: 'gold', spec: 'Gold used: ~6.4g (approx.)', img: EARRING_JHUMKA_IMG,
    desc: 'Bell-shaped jhumka with fine surface detailing, sized for comfortable all-day wear.' },
  { id: 'earring-dungri', cat: 'earrings', label: 'Jhumka / Dungri', name: 'Dungri earrings', metal: 'gold', spec: 'Gold used: ~2.9g (approx.)', img: EARRING_DUNGRI_IMG,
    desc: 'Small, rounded dungri studs — a lighter everyday earring in solid gold.' },
  { id: 'earring-silver-dungri', cat: 'earrings', label: 'Jhumka / Dungri', name: 'Silver dungri', metal: 'silver', spec: 'Silver used: ~4g (approx.)', img: EARRING_SILVER_IMG,
    desc: 'The silver version of our dungri stud, finished with a soft brushed texture.' },
  { id: 'naugedi-nine-bead', cat: 'naugedi', label: 'Naugedi', name: 'Nine-bead naugedi', metal: 'gold', spec: 'Gold used: ~18g (approx.)', img: NAUGEDI_IMG,
    desc: 'Nine gold beads strung with potey in the traditional naugedi style, often gifted to brides as a symbol of prosperity.' },
  { id: 'pote-layered', cat: 'pote', label: 'Pote', name: 'Layered pote necklace', metal: 'gold', spec: 'Gold accents: ~2g (approx.)', img: POTE_IMG,
    desc: 'Layered glass pote beads finished with small gold accent beads throughout.' },
  { id: 'payal-silver', cat: 'payal', label: 'Payal', name: 'Silver payal', metal: 'silver', spec: 'Silver used: ~22g (approx.)', img: PAYAL_IMG,
    desc: 'A delicate lace-pattern silver anklet finished with small hanging bells, worn as a pair.' },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
