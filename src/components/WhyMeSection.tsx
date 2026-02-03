import { Check } from 'lucide-react';

const benefits = [
  'Escuta real e atendimento acolhedor',
  'Orientações práticas (sem terrorismo alimentar)',
  'Integração entre estética, nutrição e acupuntura',
  'Responsabilidade e ética profissional',
];

export function WhyMeSection() {
  return (
    <section className="section-padding bg-sage-light/50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            O que você pode esperar
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 p-5 bg-card rounded-2xl shadow-soft text-left"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
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
