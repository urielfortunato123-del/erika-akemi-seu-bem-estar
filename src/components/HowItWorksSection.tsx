import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MessageCircle, ClipboardCheck, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Conversa inicial',
    description: 'Entendemos suas metas e expectativas.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Avaliação',
    description: 'Análise do seu estilo de vida e necessidades.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Plano personalizado',
    description: 'Orientações práticas adaptadas à sua realidade.',
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Acompanhamento',
    description: 'Suporte contínuo para resultados sustentáveis.',
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="como-funciona" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      <div ref={ref} className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-modern mb-4">Processo</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
            Como Funciona
          </h2>
          <div className="line-decorator max-w-xs mx-auto mt-8" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`card-modern p-8 text-center group transition-all duration-700 hover:shadow-glow ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className="relative mx-auto mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-12'}`}
                     style={{ transitionDelay: `${300 + index * 150}ms` }}>
                  <step.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                {/* Number badge */}
                <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                     style={{ transitionDelay: `${400 + index * 150}ms` }}>
                  {step.number}
                </div>
              </div>
              
              <h3 className={`font-display text-xl md:text-2xl font-medium text-foreground mb-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${450 + index * 150}ms` }}>
                {step.title}
              </h3>
              <p className={`font-body text-sm text-muted-foreground leading-relaxed transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                 style={{ transitionDelay: `${500 + index * 150}ms` }}>
                {step.description}
              </p>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                     style={{ transitionDelay: `${600 + index * 150}ms`, transformOrigin: 'left' }} />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card max-w-2xl mx-auto p-10 md:p-12 rounded-3xl">
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6">
              Pronta para começar sua{' '}
              <span className="gradient-text">transformação</span>?
            </h3>
            <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
              Agende sua consulta e descubra como posso ajudar você a alcançar seus objetivos de saúde e bem-estar.
            </p>
            <Button 
              size="lg" 
              className="btn-modern gradient-primary text-primary-foreground hover:opacity-90 group btn-pulse btn-pop" 
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 ripple">
                Agendar Consulta
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}