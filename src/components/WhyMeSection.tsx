import { Check } from 'lucide-react';

const benefits = [
  'Escuta real e atendimento acolhedor',
  'Orientações práticas (sem terrorismo alimentar)',
  'Integração entre estética, nutrição e acupuntura',
  'Responsabilidade e ética profissional',
];

export function WhyMeSection() {
  return (
    <section className="section-padding bg-secondary/40 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-body text-sm text-primary uppercase tracking-[0.2em] mb-4 block">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            O que você pode <span className="text-primary">esperar</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-soft text-left border border-border"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
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
