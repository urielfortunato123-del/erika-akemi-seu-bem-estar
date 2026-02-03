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
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Vamos cuidar de você do jeito certo?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            Me conte seu objetivo e eu te explico o melhor caminho.
          </p>

          {/* Quick Message Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-10">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 bg-card border border-border rounded-2xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              required
            />
            <textarea
              placeholder="Qual seu objetivo? (ex: perder peso, cuidar da pele, reduzir estresse...)"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              rows={3}
              className="w-full px-5 py-4 bg-card border border-border rounded-2xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              required
            />
            <Button variant="whatsapp" size="xl" type="submit" className="w-full sm:w-auto">
              Chamar no WhatsApp
            </Button>
          </form>

          {/* Location */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body">Bauru/SP</span>
            </div>
            <a
              href="https://instagram.com/erika._akemi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary" />
              <span className="font-body">@erika._akemi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
