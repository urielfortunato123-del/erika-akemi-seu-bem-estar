import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-elevated hover:bg-[#20BD5A] transition-all duration-300 hover:scale-105 animate-pulse-soft"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-body text-sm font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
}
