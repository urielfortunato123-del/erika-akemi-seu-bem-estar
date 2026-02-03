import { Button } from '@/components/ui/button';
import erikaHero from '@/assets/erika-hero.png';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center gradient-hero pt-20 overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sand rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-beige rounded-full blur-3xl opacity-30" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            <p className="font-body text-sm tracking-[0.2em] text-primary uppercase mb-4">
              Nutrição • Acupuntura • Estética
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Cuidado completo para sua{' '}
              <span className="text-primary">saúde e beleza</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Tratamentos integrativos com ciência e acolhimento, focados em resultados sustentáveis e bem-estar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5" asChild>
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full font-body">
                Nutricionista
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full font-body">
                Acupunturista
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full font-body">
                Especialista em Estética
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Elegant frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-sand/30 rounded-2xl transform rotate-2" />
              <img
                src={erikaHero}
                alt="Erika Akemi - Nutricionista e Acupunturista"
                className="relative w-80 md:w-96 lg:w-[420px] h-auto rounded-2xl shadow-card object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
