import { Check } from 'lucide-react';

const benefits = [
  { text: 'Escuta real e atendimento acolhedor', color: 'bg-rose-light border-rose/20' },
  { text: 'Orientações práticas (sem terrorismo alimentar)', color: 'bg-lavender-light border-lavender/30' },
  { text: 'Integração entre estética, nutrição e acupuntura', color: 'bg-mint-light border-mint/20' },
  { text: 'Responsabilidade e ética profissional', color: 'bg-coral-light border-coral/20' },
];

export function WhyMeSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-lavender-light/50 via-rose-light/30 to-mint-light/40 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-rose/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-mint/15 rounded-full blur-2xl" />
      
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-body text-sm text-rose uppercase tracking-widest mb-4 block">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12">
            O que você pode{' '}
            <span className="bg-gradient-to-r from-rose to-coral bg-clip-text text-transparent">
              esperar
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className={`flex items-center gap-4 p-5 bg-card/80 backdrop-blur-sm ${benefit.color} rounded-2xl shadow-soft text-left border`}
              >
                <div className="w-10 h-10 bg-rose/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-rose" />
                </div>
                <span className="font-body text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}