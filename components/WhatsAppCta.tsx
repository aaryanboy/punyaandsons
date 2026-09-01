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
      className="inline-flex items-center justify-center gap-2.5 bg-oxblood text-ivory px-6 py-3.5 text-sm font-semibold rounded-sm animate-pulse-soft hover:bg-ink transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      {label}
    </a>
  );
}
