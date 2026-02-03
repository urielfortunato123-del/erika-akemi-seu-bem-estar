import { Button } from '@/components/ui/button';
import { MessageCircle, ClipboardList, FileText, RefreshCcw } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Conversa inicial',
    description: 'Entendemos suas metas e expectativas para criar um plano personalizado.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Avaliação completa',
    description: 'Análise do seu estilo de vida, hábitos e necessidades.',
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
    title: 'Acompanhamento',
    description: 'Suporte contínuo para garantir resultados sustentáveis.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle decorative */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sand rounded-full blur-3xl opacity-30" />
      
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm text-primary uppercase tracking-[0.2em] mb-4 block">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Atendimento <span className="text-primary">sem complicação</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary rounded-xl mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-sm text-primary font-semibold mb-2">{step.number}</div>
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
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
