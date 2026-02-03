import { Button } from '@/components/ui/button';
import erikaHero from '@/assets/erika-hero.png';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useParallax } from '@/hooks/useParallax';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

export function HeroSection() {
  const yearsCounter = useAnimatedCounter({ end: 10, duration: 2000, delay: 500 });
  const patientsCounter = useAnimatedCounter({ end: 500, duration: 2500, delay: 700 });
  const specialtiesCounter = useAnimatedCounter({ end: 4, duration: 1500, delay: 900 });
  const { ref: parallaxRef, offset: parallaxOffset } = useParallax({ speed: 0.15 });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      
      {/* Floating shapes */}
      <div className="shape-blob w-[500px] h-[500px] bg-primary/10 -top-20 -right-20" 
           style={{ animationDelay: '0s' }} />
      <div className="shape-blob w-[400px] h-[400px] bg-secondary/40 bottom-20 -left-20" 
           style={{ animationDelay: '2s' }} />
      <div className="shape-blob w-[300px] h-[300px] bg-accent/30 top-1/2 right-1/3" 
           style={{ animationDelay: '4s' }} />
      
      {/* Decorative circles */}
      <div className="shape-circle w-[600px] h-[600px] -right-40 top-20 hidden lg:block" />
      <div className="shape-circle w-[400px] h-[400px] -left-20 bottom-40 hidden lg:block" />

      {/* Dots pattern */}
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <div className="container-wide relative z-10 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left stagger-children">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-modern mb-6 md:mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cuidado Integrativo</span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1] mb-6 md:mb-8">
              <span className="block">Nutrição, Acupuntura</span>
              <span className="block mt-2">
                e{' '}
                <span className="relative inline-block">
                  <span className="gradient-text">Estética</span>
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
                  </svg>
                </span>
              </span>
            </h1>
            
            <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
              Transforme sua saúde com tratamentos integrativos que unem ciência, 
              acolhimento e resultados sustentáveis.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-modern gradient-primary text-primary-foreground hover:opacity-90 group w-full sm:w-auto" 
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-modern border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 group w-full sm:w-auto" 
                asChild
              >
                <a href="#servicos" className="flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Explorar Serviços
                </a>
              </Button>
            </div>

            {/* Stats with animated counters */}
            <div ref={yearsCounter.ref} className="grid grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16 pt-6 md:pt-8 border-t border-primary/10">
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                  {yearsCounter.count}+
                </div>
                <div className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Anos de experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                  {patientsCounter.count}+
                </div>
                <div className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Pacientes atendidos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                  {specialtiesCounter.count}
                </div>
                <div className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Especialidades</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-blur-in mb-6 lg:mb-0">
            <div 
              ref={parallaxRef}
              className="relative transition-transform duration-100 ease-out"
              style={{ transform: `translateY(${parallaxOffset}px)` }}
            >
              {/* Image frame decoration */}
              <div className="absolute -inset-4 md:-inset-6 border border-primary/20 rounded-2xl md:rounded-3xl -z-10 hidden sm:block" />
              <div className="absolute -inset-2 md:-inset-3 border border-primary/10 rounded-xl md:rounded-2xl -z-10 hidden sm:block" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-20" />
              
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={erikaHero}
                  alt="Erika Akemi - Nutricionista e Acupunturista"
                  className="w-56 sm:w-72 md:w-80 lg:w-[420px] xl:w-[480px] h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass-card p-3 md:p-4 rounded-xl shadow-elevated hidden sm:block animate-float">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-xs md:text-sm font-medium text-foreground">Docente Senac</div>
                    <div className="font-body text-[10px] md:text-xs text-muted-foreground">Bauru, SP</div>
                  </div>
                </div>
              </div>

              {/* Second floating card */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 glass-card p-2 md:p-3 rounded-lg md:rounded-xl shadow-elevated hidden sm:block animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-body text-[10px] md:text-xs text-muted-foreground">Atendendo agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex">
        <div className="font-body text-xs tracking-widest uppercase text-muted-foreground animate-pulse">Scroll</div>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}