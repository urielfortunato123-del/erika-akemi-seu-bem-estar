import { Instagram } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function Footer() {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Logo & Info */}
          <div>
            <span className="font-display text-4xl font-semibold tracking-[0.2em] text-primary-foreground">
              EA
            </span>
            <p className="font-body text-xs tracking-[0.2em] uppercase mt-2 text-primary-foreground/70">
              Erika Akemi
            </p>
            
            <div className="mt-8 space-y-2 text-primary-foreground/80">
              <p className="font-body text-sm">
                <span className="font-medium text-primary-foreground">Bauru:</span> Atendimento presencial
              </p>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:text-right">
            <h4 className="font-display text-sm tracking-[0.2em] uppercase mb-6 text-primary-foreground/70">
              Redes Sociais
            </h4>
            <div className="flex md:justify-end gap-6 mb-8">
              <a
                href="https://www.instagram.com/erika._akemi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Erika Akemi — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
