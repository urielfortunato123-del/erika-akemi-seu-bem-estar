import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        {/* Logo - Centered */}
        <a href="#inicio" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-[0.3em]">
            EA
          </span>
          <span className="font-body text-[10px] md:text-xs tracking-[0.25em] text-muted-foreground uppercase mt-1">
            Erika Akemi
          </span>
          <div className="w-12 h-[1px] bg-primary/30 mt-2 hidden md:block"></div>
        </a>

        {/* Empty space for balance */}
        <div className="w-24 lg:hidden"></div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-muted-foreground hover:text-rose transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <nav className="container-narrow py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-base text-muted-foreground hover:text-rose transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" size="lg" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}