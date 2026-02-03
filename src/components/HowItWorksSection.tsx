import { Button } from '@/components/ui/button';
import { MessageCircle, ClipboardList, FileText, RefreshCcw } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Conversa inicial e objetivos',
    description: 'Entendemos suas metas e expectativas para criar um plano personalizado.',
    color: 'bg-rose-light',
    iconColor: 'text-rose',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Avaliação e entendimento da rotina',
    description: 'Análise completa do seu estilo de vida, hábitos e necessidades.',
    color: 'bg-lavender-light',
    iconColor: 'text-lavender',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Plano personalizado',
    description: 'Orientações claras e práticas, adaptadas à sua realidade.',
    color: 'bg-mint-light',
    iconColor: 'text-mint',
  },
  {
    number: '04',
    icon: RefreshCcw,
    title: 'Acompanhamento e ajustes',
    description: 'Suporte contínuo para garantir resultados sustentáveis.',
    color: 'bg-coral-light',
    iconColor: 'text-coral',
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-rose/15 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm text-rose uppercase tracking-widest mb-4 block">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Atendimento{' '}
            <span className="bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">
              sem complicação
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-rose/30 to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center lg:text-left">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${step.color} rounded-2xl mb-4 shadow-soft`}>
                  <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>
                <div className="font-display text-sm text-rose font-semibold mb-2">{step.number}</div>
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
          <Button variant="hero" size="xl" asChild className="shadow-glow">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}