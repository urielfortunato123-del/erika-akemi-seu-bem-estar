import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Silva',
    role: 'Paciente há 2 anos',
    content: 'A Erika mudou minha relação com a alimentação. Sem dietas malucas, sem terrorismo. Emagreci 12kg e aprendi a comer de verdade.',
    rating: 5,
    avatar: 'MS',
  },
  {
    name: 'Juliana Oliveira',
    role: 'Paciente há 1 ano',
    content: 'As sessões de acupuntura me ajudaram muito com a ansiedade e as dores nas costas. A Erika é muito atenciosa e profissional.',
    rating: 5,
    avatar: 'JO',
  },
  {
    name: 'Carla Santos',
    role: 'Paciente há 6 meses',
    content: 'Fiz o tratamento de estética facial e nutrição juntos. Minha pele nunca esteve tão bonita! Recomendo de olhos fechados.',
    rating: 5,
    avatar: 'CS',
  },
  {
    name: 'Fernanda Lima',
    role: 'Paciente há 3 anos',
    content: 'Profissional excepcional! Me acompanha há anos e sempre com muito carinho e competência. Os resultados são reais e duradouros.',
    rating: 5,
    avatar: 'FL',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/30 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-modern mb-4">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
            O que dizem{' '}
            <span className="gradient-text">minhas pacientes</span>
          </h2>
          <div className="line-decorator max-w-xs mx-auto mt-8" />
        </div>

        {/* Testimonials Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-semibold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="font-display text-lg font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-card shadow-elevated flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-card shadow-elevated flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}