import { Button } from '@/components/ui/button';
import { MessageCircle, ClipboardList, FileText, RefreshCcw } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Conversa inicial e objetivos',
    description: 'Entendemos suas metas e expectativas para criar um plano personalizado.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Avaliação e entendimento da rotina',
    description: 'Análise completa do seu estilo de vida, hábitos e necessidades.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Plano personalizado',
    description: 'Orientações claras e práticas, adaptadas à sua realidade.',
  },
  {
    number: '04',
    icon: RefreshCcw,
    title: 'Acompanhamento e ajustes',
    description: 'Suporte contínuo para garantir resultados sustentáveis.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Atendimento sem complicação
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-light rounded-2xl mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-sm text-primary mb-2">{step.number}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
