import { Instagram, Heart } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-rose-light/40 via-lavender-light/30 to-mint-light/40 border-t border-rose/10">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold bg-gradient-to-r from-rose to-coral bg-clip-text text-transparent mb-1">
              Erika Akemi
            </p>
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} — Todos os direitos reservados
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/erika._akemi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-rose transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-rose transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-rose/10 text-center">
          <p className="font-body text-xs text-muted-foreground flex items-center justify-center gap-1">
            Este site não substitui uma consulta profissional. Feito com <Heart className="w-3 h-3 text-rose" /> para Erika
          </p>
        </div>
      </div>
    </footer>
  );
}