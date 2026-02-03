import { Button } from '@/components/ui/button';
import erikaHero from '@/assets/erika-hero.png';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-background pt-32 overflow-hidden"
    >
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            {/* Decorative line */}
            <div className="w-16 h-px bg-primary/40 mb-8 mx-auto lg:mx-0"></div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6 tracking-tight">
              Nutrição, Acupuntura e{' '}
              <span className="text-primary">Estética Avançada</span>
            </h1>
            
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              Cuidado completo com ciência e acolhimento. Tratamentos integrativos focados em resultados sustentáveis e bem-estar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 tracking-[0.1em] uppercase text-sm" 
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 text-primary hover:bg-primary/5 px-8 tracking-[0.1em] uppercase text-sm" 
                asChild
              >
                <a href="#servicos">Ver Serviços</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src={erikaHero}
                alt="Erika Akemi - Nutricionista e Acupunturista"
                className="w-80 md:w-96 lg:w-[450px] h-auto object-cover"
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
