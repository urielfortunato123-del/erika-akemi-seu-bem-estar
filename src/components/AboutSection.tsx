import { Heart, BookOpen, Sparkles } from 'lucide-react';
import erikaProfessional from '@/assets/erika-professional.png';
import erikaTeaching from '@/assets/erika-teaching.png';

const badges = [
  { icon: Heart, label: 'Cuidado humanizado', color: 'bg-rose-light border-rose/20' },
  { icon: BookOpen, label: 'Tradição + ciência', color: 'bg-lavender-light border-lavender/30' },
  { icon: Sparkles, label: 'Educação e transformação', color: 'bg-mint-light border-mint/20' },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-coral-light rounded-full blur-3xl opacity-50" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={erikaProfessional}
                alt="Erika Akemi - Profissional"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-card ring-2 ring-rose/10"
              />
              <img
                src={erikaTeaching}
                alt="Erika Akemi - Docente"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-card mt-8 ring-2 ring-lavender/10"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-rose-light rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-mint-light rounded-full -z-10" />
            <div className="absolute top-1/2 -left-4 w-12 h-12 bg-lavender rounded-full -z-10 opacity-60" />
          </div>

          {/* Content */}
          <div>
            <span className="font-body text-sm text-rose uppercase tracking-widest mb-4 block">
              Minha trajetória
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Uma jornada de{' '}
              <span className="bg-gradient-to-r from-rose to-coral bg-clip-text text-transparent">
                cuidado e evolução
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Minha primeira escolha profissional foi a Estética — e até hoje eu tenho orgulho disso. 
                Ao longo dos anos, fui somando conhecimento e prática para cuidar das pessoas de forma mais completa: 
                da autoestima ao bem-estar físico e emocional.
              </p>
              <p>
                Hoje atuo como Nutricionista e Acupunturista, com pós-graduação em Estética Avançada, 
                além de ser docente no Senac Bauru e graduanda em Biomedicina.
              </p>
              <p className="text-foreground font-medium">
                Minha maior motivação sempre foi a minha família. É por eles que eu busco evoluir todos os dias — 
                e é com esse mesmo cuidado e responsabilidade que eu acolho cada paciente.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className={`flex items-center gap-3 px-5 py-3 ${badge.color} rounded-2xl shadow-soft border`}
                >
                  <badge.icon className="w-5 h-5 text-rose" />
                  <span className="font-body text-sm text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}