import erikaLifestyle from '@/assets/erika-lifestyle.png';
import erikaCertificates from '@/assets/erika-certificates.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20saber%20mais%20sobre%20";

const services = [
  {
    title: 'Nutrição Clínica',
    items: [
      'Reeducação alimentar',
      'Plano alimentar individualizado',
      'Acompanhamento nutricional',
      'Nutrição funcional',
    ],
    whatsappText: 'Nutrição%20Clínica',
  },
  {
    title: 'Nutrição Estética',
    items: [
      'Composição corporal',
      'Saúde da pele',
      'Protocolos anti-aging',
      'Suplementação estratégica',
    ],
    whatsappText: 'Nutrição%20Estética',
  },
];

const servicesAlt = [
  {
    title: 'Acupuntura',
    items: [
      'Equilíbrio energético',
      'Alívio de dores',
      'Redução de estresse',
      'Tratamento integrativo',
    ],
    whatsappText: 'Acupuntura',
  },
  {
    title: 'Estética Avançada',
    items: [
      'Protocolos faciais',
      'Tratamentos corporais',
      'Harmonização facial',
      'Cuidados com a pele',
    ],
    whatsappText: 'Estética%20Avançada',
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="servicos" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div ref={ref} className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-modern mb-4">O Que Ofereço</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
            Serviços
          </h2>
          <div className="line-decorator max-w-xs mx-auto mt-8" />
        </div>

        {/* First Row - Image Left */}
        <div className={`grid lg:grid-cols-2 gap-0 mb-0 rounded-3xl overflow-hidden shadow-elevated transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative h-72 lg:h-auto overflow-hidden group">
            <img
              src={erikaLifestyle}
              alt="Nutrição"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
          <div className="glass-card backdrop-blur-none bg-card/95 p-10 lg:p-14 flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <div key={service.title} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="font-body text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP_LINK}${service.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 font-body text-sm text-primary hover:text-primary/80 transition-all group/link"
                  >
                    Saber mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Image Right */}
        <div className={`grid lg:grid-cols-2 gap-0 mt-8 rounded-3xl overflow-hidden shadow-elevated transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card backdrop-blur-none bg-card/95 p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
            <div className="grid md:grid-cols-2 gap-10">
              {servicesAlt.map((service, index) => (
                <div key={service.title} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="font-body text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP_LINK}${service.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 font-body text-sm text-primary hover:text-primary/80 transition-all group/link"
                  >
                    Saber mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-72 lg:h-auto overflow-hidden order-1 lg:order-2 group">
            <img
              src={erikaCertificates}
              alt="Acupuntura e Estética"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}