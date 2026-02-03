import { Apple, Sparkles, Leaf, Heart } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20saber%20mais%20sobre%20";

const services = [
  {
    icon: Apple,
    title: 'Nutrição clínica e reeducação alimentar',
    description: 'Plano alimentar individualizado com foco em saúde, rotina e constância.',
    whatsappText: 'Nutrição%20clínica',
    iconBg: 'bg-rose-light',
    iconColor: 'text-rose',
    accent: 'group-hover:shadow-rose/20',
  },
  {
    icon: Sparkles,
    title: 'Nutrição estética',
    description: 'Estratégias para composição corporal, pele e bem-estar, respeitando sua realidade.',
    whatsappText: 'Nutrição%20estética',
    iconBg: 'bg-lavender-light',
    iconColor: 'text-lavender',
    accent: 'group-hover:shadow-lavender/20',
  },
  {
    icon: Leaf,
    title: 'Acupuntura',
    description: 'Apoio para equilíbrio do corpo e da mente, dores e estresse, com abordagem integrativa.',
    whatsappText: 'Acupuntura',
    iconBg: 'bg-mint-light',
    iconColor: 'text-mint',
    accent: 'group-hover:shadow-mint/20',
  },
  {
    icon: Heart,
    title: 'Estética avançada',
    description: 'Cuidados estéticos com foco em autoestima e resultados consistentes.',
    whatsappText: 'Estética%20avançada',
    iconBg: 'bg-coral-light',
    iconColor: 'text-coral',
    accent: 'group-hover:shadow-coral/20',
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-rose-light/30 via-lavender-light/30 to-mint-light/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-rose/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-mint/10 rounded-full blur-2xl" />
      
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm text-rose uppercase tracking-widest mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Como eu posso{' '}
            <span className="bg-gradient-to-r from-rose via-coral to-gold bg-clip-text text-transparent">
              te ajudar
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 ${service.accent}`}
            >
              <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
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
                className="inline-flex items-center gap-2 font-body text-sm text-rose hover:text-rose-dark transition-colors"
              >
                Quero saber mais no WhatsApp
                <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}