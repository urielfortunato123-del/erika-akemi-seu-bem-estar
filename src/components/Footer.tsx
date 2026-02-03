import { Instagram, Heart, ArrowUpRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="bg-foreground text-background py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Logo & Brand */}
            <div className="md:col-span-5">
              <a href="#inicio" className="inline-block group">
                <span className="font-display text-5xl font-semibold tracking-[0.2em] text-background group-hover:opacity-80 transition-opacity">
                  EA
                </span>
                <div className="w-16 h-px bg-primary mt-2" />
              </a>
              <p className="font-body text-sm tracking-wider uppercase mt-4 text-background/60">
                Erika Akemi
              </p>
              <p className="font-body text-sm text-background/60 mt-4 max-w-sm leading-relaxed">
                Nutrição, Acupuntura e Estética Avançada. Cuidado integrativo com ciência e acolhimento.
              </p>
              
              {/* Social */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.instagram.com/erika._akemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/40 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/40 transition-all"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="font-display text-lg font-medium mb-6 text-background">
                Navegação
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-2 font-body text-sm text-background/60 hover:text-background transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h4 className="font-display text-lg font-medium mb-6 text-background">
                Atendimento
              </h4>
              <div className="space-y-4 text-background/60">
                <p className="font-body text-sm">
                  <span className="block text-background font-medium mb-1">Localização</span>
                  Bauru, SP
                </p>
                <p className="font-body text-sm">
                  <span className="block text-background font-medium mb-1">Instagram</span>
                  @erika._akemi
                </p>
              </div>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm hover:opacity-90 transition-opacity"
              >
                Agendar consulta
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-background/40">
              © {new Date().getFullYear()} Erika Akemi — Todos os direitos reservados
            </p>
            <p className="font-body text-xs text-background/40 flex items-center gap-1">
              Feito com <Heart className="w-3 h-3 text-primary" /> em Bauru
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}