import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Instagram, Send, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WHATSAPP_NUMBER = "5514999999999";

export function ContactSection() {
  const [name, setName] = useState('');
  const [objective, setObjective] = useState('');
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Erika! Meu nome é ${name}. Meu objetivo é: ${objective}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="shape-blob w-[500px] h-[500px] bg-primary/5 -bottom-40 -left-40" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge-modern mb-4">Fale Comigo</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
              Vamos cuidar de{' '}
              <span className="gradient-text">você</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-6 max-w-md mx-auto">
              Me conte seu objetivo e eu te explico o melhor caminho para alcançá-lo.
            </p>
            <div className="line-decorator max-w-xs mx-auto mt-8" />
          </div>

          {/* Form Card */}
          <div className={`glass-card p-8 md:p-12 rounded-3xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-3">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como posso te chamar?"
                    className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-3">
                    Seu objetivo
                  </label>
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Ex: emagrecer, cuidar da pele..."
                    className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    required
                  />
                </div>
              </div>
              
              <Button 
                size="lg" 
                type="submit" 
                className="w-full btn-modern gradient-primary text-primary-foreground hover:opacity-90 group py-6 btn-pulse btn-pop ripple"
              >
                <span className="flex items-center justify-center gap-2">
                  Enviar pelo WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" />
                </span>
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-border/50" />
              <span className="font-body text-sm text-muted-foreground">ou me encontre em</span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            {/* Location & Social */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-secondary/50">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-foreground">Bauru, SP</span>
              </div>
              <a
                href="https://instagram.com/erika._akemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-secondary/50 hover:bg-primary/10 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary" />
                <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">@erika._akemi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}