import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5514999999999?text=Ol%C3%A1%20Erika!%20Quero%20agendar%20uma%20consulta.";

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-4 shadow-soft'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-[0.15em] group-hover:opacity-80 transition-opacity">
                EA
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-sm tracking-wider text-foreground">Erika Akemi</span>
              <span className="block font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Nutrição • Estética
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className="btn-modern gradient-primary text-primary-foreground hover:opacity-90 group px-6"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Agendar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 glass shadow-elevated transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="container-wide py-8 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-lg text-foreground hover:text-primary transition-all py-3 px-4 rounded-xl hover:bg-primary/5"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-border/50">
            <Button 
              size="lg" 
              className="w-full btn-modern gradient-primary text-primary-foreground" 
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Agendar Consulta
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}