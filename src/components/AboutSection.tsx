import erikaProfessional from '@/assets/erika-professional.png';
import erikaTeaching from '@/assets/erika-teaching.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';
import { Award, BookOpen, Heart } from 'lucide-react';

const credentials = [
  { icon: Award, label: 'Nutricionista' },
  { icon: Heart, label: 'Acupunturista' },
  { icon: BookOpen, label: 'Estética Avançada' },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { ref: parallaxRef1, offset: offset1 } = useParallax({ speed: 0.1 });
  const { ref: parallaxRef2, offset: offset2 } = useParallax({ speed: 0.15, direction: 'down' });

  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent" />
      <div className="shape-blob w-[400px] h-[400px] bg-primary/5 -bottom-40 -right-40" />

      <div ref={ref} className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-modern mb-4">Sobre Mim</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
            Minha Trajetória
          </h2>
          <div className="line-decorator max-w-xs mx-auto mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Images */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="grid grid-cols-5 gap-4">
              {/* Main image */}
              <div 
                ref={parallaxRef1}
                className="col-span-3 image-modern transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${offset1}px)` }}
              >
                <img
                  src={erikaProfessional}
                  alt="Erika Akemi - Profissional"
                  className="w-full h-[350px] md:h-[450px] object-cover object-top rounded-2xl"
                />
              </div>
              {/* Secondary image with offset */}
              <div 
                ref={parallaxRef2}
                className="col-span-2 mt-12 transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${offset2}px)` }}
              >
                <div className="image-modern">
                  <img
                    src={erikaTeaching}
                    alt="Erika Akemi - Docente"
                    className="w-full h-[300px] md:h-[400px] object-cover object-top rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 right-20 w-16 h-16 border border-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight">
              Uma jornada de{' '}
              <span className="gradient-text">cuidado</span>{' '}
              e evolução
            </h3>
            
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Minha primeira escolha profissional foi a Estética — e até hoje eu tenho orgulho disso. 
                Ao longo dos anos, fui somando conhecimento e prática para cuidar das pessoas de forma mais completa.
              </p>
              <p>
                Hoje atuo como <span className="text-primary font-medium">Nutricionista</span> e{' '}
                <span className="text-primary font-medium">Acupunturista</span>, 
                com pós-graduação em Estética Avançada, além de ser docente no Senac Bauru.
              </p>
              <p className="text-foreground font-medium">
                Minha maior motivação sempre foi a minha família. É por eles que eu busco evoluir todos os dias — 
                e é com esse mesmo cuidado que eu acolho cada paciente.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 mt-10">
              {credentials.map((item, index) => (
                <div 
                  key={item.label}
                  className="tag-elegant flex items-center gap-3 rounded-full hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}