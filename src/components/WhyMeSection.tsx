import { Check, Sparkles, Heart, Shield, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  {
    icon: Heart,
    title: 'Escuta real',
    description: 'Atendimento acolhedor e personalizado',
  },
  {
    icon: Sparkles,
    title: 'Sem terrorismo alimentar',
    description: 'Orientações práticas e sustentáveis',
  },
  {
    icon: Users,
    title: 'Abordagem integrada',
    description: 'União de estética, nutrição e acupuntura',
  },
  {
    icon: Shield,
    title: 'Ética profissional',
    description: 'Responsabilidade em cada atendimento',
  },
];

export function WhyMeSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge-modern mb-4">Diferenciais</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
              O que você pode{' '}
              <span className="gradient-text">esperar</span>
            </h2>
            <div className="line-decorator max-w-xs mx-auto mt-8" />
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`card-modern p-8 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Checkmark */}
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Check className="w-3 h-3 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}