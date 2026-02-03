import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const steps = [
  {
    number: '01',
    title: 'Conversa inicial',
    description: 'Entendemos suas metas e expectativas.',
  },
  {
    number: '02',
    title: 'Avaliação',
    description: 'Análise do seu estilo de vida e necessidades.',
  },
  {
    number: '03',
    title: 'Plano personalizado',
    description: 'Orientações práticas adaptadas à sua realidade.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Suporte contínuo para resultados sustentáveis.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="w-full h-px bg-primary/20 mb-8"></div>
          <h2 className="font-display text-sm md:text-base tracking-[0.3em] text-primary uppercase">
            Como Funciona
          </h2>
          <div className="w-full h-px bg-primary/20 mt-8"></div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="font-display text-4xl text-primary/30 mb-4">{step.number}</div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="w-full h-px bg-primary/20 mb-12"></div>
          <h3 className="font-display text-xl md:text-2xl tracking-[0.2em] text-foreground uppercase mb-8">
            Agende sua consulta personalizada
          </h3>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 tracking-[0.1em] uppercase text-sm" 
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
          <div className="w-full h-px bg-primary/20 mt-12"></div>
        </div>
      </div>
    </section>
  );
}
