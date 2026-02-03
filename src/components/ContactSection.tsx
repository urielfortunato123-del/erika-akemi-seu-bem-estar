import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = "5514999999999";

export function ContactSection() {
  const [name, setName] = useState('');
  const [objective, setObjective] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Erika! Meu nome é ${name}. Meu objetivo é: ${objective}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-full h-px bg-primary/20 mb-8"></div>
            <h2 className="font-display text-sm md:text-base tracking-[0.3em] text-primary uppercase">
              Contato
            </h2>
            <div className="w-full h-px bg-primary/20 mt-8"></div>
          </div>

          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
              Vamos cuidar de você?
            </h3>
            <p className="font-body text-muted-foreground">
              Me conte seu objetivo e eu te explico o melhor caminho.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label className="block font-body text-xs tracking-[0.1em] text-muted-foreground uppercase mb-2">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/50 border-0 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                required
              />
            </div>
            <div>
              <label className="block font-body text-xs tracking-[0.1em] text-muted-foreground uppercase mb-2">
                Objetivo
              </label>
              <textarea
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                rows={3}
                placeholder="Ex: perder peso, cuidar da pele, reduzir estresse..."
                className="w-full px-4 py-3 bg-secondary/50 border-0 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                required
              />
            </div>
            <Button 
              size="lg" 
              type="submit" 
              className="w-full bg-muted-foreground hover:bg-muted-foreground/80 text-background tracking-[0.1em] uppercase text-sm"
            >
              Enviar
            </Button>
          </form>

          {/* Location & Social */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body text-sm">Bauru/SP</span>
            </div>
            <a
              href="https://instagram.com/erika._akemi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-body text-sm">@erika._akemi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
