const WHATSAPP_URL = 'https://wa.me/9779847465703';

export function getWhatsAppHref(message = "Hi, I'd like to ask about a piece from your catalog") {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
