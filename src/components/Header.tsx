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
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-narrow">
        {/* Top row: CTA - Logo - Empty */}
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground tracking-[0.1em] text-xs uppercase"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agende sua consulta
              </a>
            </Button>
          </div>

          {/* Logo - Centered */}
          <a href="#inicio" className="flex flex-col items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <span className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-[0.2em]">
              EA
            </span>
            <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1">
              Erika Akemi
            </span>
          </a>

          {/* Empty space for balance / Mobile Menu Button */}
          <div className="hidden lg:block w-32"></div>
          
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-200 uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <nav className="container-narrow py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors py-2 uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="lg" 
              className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground tracking-[0.1em]" 
              asChild
            >
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
