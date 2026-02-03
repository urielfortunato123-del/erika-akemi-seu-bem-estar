import erikaProfessional from '@/assets/erika-professional.png';
import erikaTeaching from '@/assets/erika-teaching.png';

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-full h-px bg-primary/20 mb-8"></div>
          <h2 className="font-display text-sm md:text-base tracking-[0.3em] text-primary uppercase mb-4">
            Minha Trajetória
          </h2>
          <div className="w-full h-px bg-primary/20 mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={erikaProfessional}
                alt="Erika Akemi - Profissional"
                className="w-full h-80 md:h-[450px] object-cover object-top"
              />
              <img
                src={erikaTeaching}
                alt="Erika Akemi - Docente"
                className="w-full h-80 md:h-[450px] object-cover object-top mt-8"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-8">
              Uma jornada de cuidado e evolução
            </h3>
            
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                Minha primeira escolha profissional foi a Estética — e até hoje eu tenho orgulho disso. 
                Ao longo dos anos, fui somando conhecimento e prática para cuidar das pessoas de forma mais completa.
              </p>
              <p>
                Hoje atuo como <span className="text-primary">Nutricionista</span> e <span className="text-primary">Acupunturista</span>, 
                com pós-graduação em Estética Avançada, além de ser docente no Senac Bauru.
              </p>
              <p className="text-foreground">
                Minha maior motivação sempre foi a minha família. É por eles que eu busco evoluir todos os dias — 
                e é com esse mesmo cuidado que eu acolho cada paciente.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mt-10">
              <span className="px-4 py-2 border border-primary/20 text-muted-foreground text-sm tracking-[0.05em]">
                Nutricionista
              </span>
              <span className="px-4 py-2 border border-primary/20 text-muted-foreground text-sm tracking-[0.05em]">
                Acupunturista
              </span>
              <span className="px-4 py-2 border border-primary/20 text-muted-foreground text-sm tracking-[0.05em]">
                Estética Avançada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
