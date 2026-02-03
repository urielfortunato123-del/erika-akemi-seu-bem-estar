import { Button } from '@/components/ui/button';
import erikaHero from '@/assets/erika-hero.png';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center gradient-hero pt-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-light rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-lavender rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-peach rounded-full blur-3xl opacity-50" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Nutrição integrativa, acupuntura e{' '}
              <span className="bg-gradient-to-r from-rose to-coral bg-clip-text text-transparent">
                estética avançada
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Cuidado completo, com ciência e acolhimento.
            </p>
            <p className="font-body text-base text-muted-foreground mb-8">
              Atendimento humanizado, foco em resultados sustentáveis e bem-estar físico e emocional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" asChild className="shadow-glow">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-rose-light text-foreground text-sm rounded-full font-body border border-rose/20">
                Nutricionista e Acupunturista
              </span>
              <span className="px-4 py-2 bg-lavender-light text-foreground text-sm rounded-full font-body border border-lavender/30">
                Pós-graduada em Estética Avançada
              </span>
              <span className="px-4 py-2 bg-mint-light text-foreground text-sm rounded-full font-body border border-mint/20">
                Docente no Senac Bauru
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Colorful decorative rings */}
              <div className="absolute -inset-4 bg-gradient-to-br from-rose/20 via-lavender/20 to-mint/20 rounded-3xl transform rotate-3 scale-105 blur-sm" />
              <div className="absolute -inset-2 bg-gradient-to-tl from-coral/10 to-gold/10 rounded-3xl transform -rotate-2" />
              <img
                src={erikaHero}
                alt="Erika Akemi - Nutricionista e Acupunturista"
                className="relative w-80 md:w-96 lg:w-[420px] h-auto rounded-3xl shadow-elevated object-cover ring-4 ring-white/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}