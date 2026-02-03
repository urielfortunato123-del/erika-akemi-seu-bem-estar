import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'Na primeira consulta, fazemos uma anamnese completa para entender seu histórico de saúde, hábitos alimentares, rotina e objetivos. A partir disso, elaboramos um plano personalizado para você.',
  },
  {
    question: 'Qual a duração das consultas?',
    answer: 'A primeira consulta dura em média 1 hora. Os retornos têm duração de 30 a 45 minutos, dependendo da necessidade de cada paciente.',
  },
  {
    question: 'Vocês atendem por convênio?',
    answer: 'Trabalhamos apenas com atendimento particular. Porém, fornecemos nota fiscal e recibo para você solicitar reembolso junto ao seu convênio, se aplicável.',
  },
  {
    question: 'Como funcionam as sessões de acupuntura?',
    answer: 'As sessões de acupuntura duram cerca de 40 minutos. Geralmente recomendamos sessões semanais no início do tratamento, podendo ser espaçadas conforme a evolução.',
  },
  {
    question: 'É possível fazer nutrição e estética juntos?',
    answer: 'Sim! Na verdade, essa é uma das melhores formas de potencializar resultados. A nutrição adequada é fundamental para a saúde da pele e para os tratamentos estéticos.',
  },
  {
    question: 'Vocês atendem online?',
    answer: 'Sim, oferecemos consultas online para nutrição e acompanhamento nutricional. Para acupuntura e estética, o atendimento é presencial em Bauru/SP.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-modern mb-4">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <div className="line-decorator max-w-xs mx-auto mt-8" />
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`card-modern overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className="font-display text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-primary/20' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-primary" />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-border/50 mb-4" />
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-body text-muted-foreground">
            Ainda tem dúvidas?{' '}
            <a href="#contato" className="text-primary hover:underline font-medium">
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}