import { Apple, Sparkles, Leaf, Heart } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20saber%20mais%20sobre%20";

const services = [
  {
    icon: Apple,
    title: 'Nutrição clínica e reeducação alimentar',
    description: 'Plano alimentar individualizado com foco em saúde, rotina e constância.',
    whatsappText: 'Nutrição%20clínica',
  },
  {
    icon: Sparkles,
    title: 'Nutrição estética',
    description: 'Estratégias para composição corporal, pele e bem-estar, respeitando sua realidade.',
    whatsappText: 'Nutrição%20estética',
  },
  {
    icon: Leaf,
    title: 'Acupuntura',
    description: 'Apoio para equilíbrio do corpo e da mente, dores e estresse, com abordagem integrativa.',
    whatsappText: 'Acupuntura',
  },
  {
    icon: Heart,
    title: 'Estética avançada',
    description: 'Cuidados estéticos com foco em autoestima e resultados consistentes.',
    whatsappText: 'Estética%20avançada',
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm text-primary uppercase tracking-[0.2em] mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Como eu posso <span className="text-primary">te ajudar</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-border"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href={`${WHATSAPP_LINK}${service.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Saber mais
                <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
