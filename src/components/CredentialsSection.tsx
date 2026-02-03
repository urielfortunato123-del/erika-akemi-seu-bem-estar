import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, GraduationCap, BookOpen, Building2 } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Nutrição',
    institution: 'CRN Ativo',
    description: 'Nutricionista clínica e funcional',
  },
  {
    icon: Award,
    title: 'Acupuntura',
    institution: 'Formação Completa',
    description: 'Especialista em acupuntura sistêmica',
  },
  {
    icon: BookOpen,
    title: 'Pós-Graduação',
    institution: 'Estética Avançada',
    description: 'Protocolos faciais e corporais',
  },
  {
    icon: Building2,
    title: 'Docente',
    institution: 'Senac Bauru',
    description: 'Professora de estética e bem-estar',
  },
];

export function CredentialsSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-16 bg-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 dots-pattern" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)' }} />
      </div>

      <div className="container-wide relative z-10">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {credentials.map((item, index) => (
            <div
              key={item.title}
              className="text-center group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-background/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-background/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-medium text-background mb-1">
                {item.title}
              </h3>
              <p className="font-body text-xs tracking-wider text-background/60 uppercase mb-2">
                {item.institution}
              </p>
              <p className="font-body text-sm text-background/50 hidden md:block">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}