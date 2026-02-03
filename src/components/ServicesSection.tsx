import erikaLifestyle from '@/assets/erika-lifestyle.png';

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
  return (
    <section id="servicos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="w-full h-px bg-primary/20 mb-8"></div>
          <h2 className="font-display text-sm md:text-base tracking-[0.3em] text-primary uppercase">
            Serviços
          </h2>
          <div className="w-full h-px bg-primary/20 mt-8"></div>
        </div>

        {/* First Row - Image Left */}
        <div className="grid lg:grid-cols-2 gap-0 mb-0">
          <div className="bg-sand h-64 lg:h-auto">
            <img
              src={erikaLifestyle}
              alt="Nutrição"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-sand/50 p-10 lg:p-16 flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service) => (
                <div key={service.title}>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP_LINK}${service.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 font-body text-sm text-primary hover:text-primary/80 transition-colors tracking-[0.05em]"
                  >
                    Saber mais →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Image Right */}
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="bg-sand/50 p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <div className="grid md:grid-cols-2 gap-10">
              {servicesAlt.map((service) => (
                <div key={service.title}>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${WHATSAPP_LINK}${service.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 font-body text-sm text-primary hover:text-primary/80 transition-colors tracking-[0.05em]"
                  >
                    Saber mais →
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-sand h-64 lg:h-auto order-1 lg:order-2">
            <img
              src={erikaLifestyle}
              alt="Acupuntura e Estética"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
