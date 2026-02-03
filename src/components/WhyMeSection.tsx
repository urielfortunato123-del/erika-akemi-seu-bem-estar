import { Check } from 'lucide-react';

const benefits = [
  'Escuta real e atendimento acolhedor',
  'Orientações práticas, sem terrorismo alimentar',
  'Integração entre estética, nutrição e acupuntura',
  'Responsabilidade e ética profissional',
];

export function WhyMeSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <div className="w-full h-px bg-primary/20 mb-8"></div>
            <h2 className="font-display text-sm md:text-base tracking-[0.3em] text-primary uppercase">
              Diferenciais
            </h2>
            <div className="w-full h-px bg-primary/20 mt-8"></div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-12">
            O que você pode esperar
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 p-6 bg-card border border-border"
              >
                <div className="w-6 h-6 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="font-body text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
