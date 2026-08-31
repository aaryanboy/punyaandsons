import { WHATSAPP_URL } from './Nav';

export default function WhatsAppCta({
  label = 'Chat on WhatsApp →',
  productName,
}: {
  label?: string;
  productName?: string;
}) {
  const message = productName
    ? `Hi, I'm interested in the ${productName}`
    : "Hi, I'd like to ask about a piece from your catalog";
  const href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 bg-oxblood text-ivory px-6 py-3.5 text-sm font-semibold rounded-sm"
    >
      {label}
    </a>
  );
}
