import { Button } from '@/components/ui/button';
import erikaHero from '@/assets/erika-hero.png';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center gradient-hero pt-20"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Nutrição integrativa, acupuntura e estética avançada
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Cuidado completo, com ciência e acolhimento.
            </p>
            <p className="font-body text-base text-muted-foreground mb-8">
              Atendimento humanizado, foco em resultados sustentáveis e bem-estar físico e emocional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" asChild>
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
              <span className="px-4 py-2 bg-sage-light text-foreground text-sm rounded-full font-body">
                Nutricionista e Acupunturista
              </span>
              <span className="px-4 py-2 bg-sand text-foreground text-sm rounded-full font-body">
                Pós-graduada em Estética Avançada
              </span>
              <span className="px-4 py-2 bg-accent text-foreground text-sm rounded-full font-body">
                Docente no Senac Bauru
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105" />
              <img
                src={erikaHero}
                alt="Erika Akemi - Nutricionista e Acupunturista"
                className="relative w-80 md:w-96 lg:w-[420px] h-auto rounded-3xl shadow-elevated object-cover"
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
