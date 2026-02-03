import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X, ZoomIn, Camera } from 'lucide-react';

// Placeholder images - in production these would be real before/after images
const galleryItems = [
  {
    id: 1,
    title: 'Tratamento Facial',
    category: 'Estética',
    description: 'Resultado após 8 sessões de protocolo anti-aging',
  },
  {
    id: 2,
    title: 'Reeducação Alimentar',
    category: 'Nutrição',
    description: 'Transformação em 6 meses de acompanhamento',
  },
  {
    id: 3,
    title: 'Harmonização Facial',
    category: 'Estética',
    description: 'Procedimento minimamente invasivo',
  },
  {
    id: 4,
    title: 'Emagrecimento Saudável',
    category: 'Nutrição',
    description: 'Perda de 15kg em 8 meses',
  },
  {
    id: 5,
    title: 'Tratamento Corporal',
    category: 'Estética',
    description: 'Redução de medidas e celulite',
  },
  {
    id: 6,
    title: 'Saúde da Pele',
    category: 'Nutrição + Estética',
    description: 'Protocolo integrado de 4 meses',
  },
];

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-modern mb-4">
            <Camera className="w-3.5 h-3.5 mr-1" />
            Resultados
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-6">
            Transformações{' '}
            <span className="gradient-text">Reais</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Alguns resultados de pacientes que confiaram em nosso trabalho.
          </p>
          <div className="line-decorator max-w-xs mx-auto mt-8" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40" />
              
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-primary/40" />
                </div>
                <span className="text-sm text-muted-foreground text-center">Foto em breve</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg md:text-xl text-white font-medium">
                    {item.title}
                  </h3>
                </div>
                
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={`text-center text-sm text-muted-foreground mt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          * Resultados podem variar de pessoa para pessoa. Todas as fotos são de pacientes reais com autorização de uso.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full glass-card rounded-3xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Image placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                  <span className="text-muted-foreground">Foto em breve</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <span className="badge-modern mb-4 self-start">{selectedItem.category}</span>
                <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                  {selectedItem.title}
                </h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  {selectedItem.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Quer resultados como este?{' '}
                    <a href="#contato" className="text-primary hover:underline font-medium">
                      Agende sua consulta
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}