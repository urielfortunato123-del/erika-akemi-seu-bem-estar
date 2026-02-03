import { Instagram, Heart } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function Footer() {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="text-center">
            <span className="font-display text-2xl font-semibold text-primary tracking-[0.2em]">
              EA
            </span>
            <p className="font-body text-xs tracking-[0.15em] text-muted-foreground uppercase mt-1">
              Erika Akemi
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/erika._akemi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border w-full">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} Erika Akemi — Todos os direitos reservados
            </p>
            <p className="font-body text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              Este site não substitui uma consulta profissional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
