import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import erikaLifestyle from '@/assets/erika-lifestyle.png';

const FamiliaPage = () => {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-primary mx-auto animate-float" />
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
          Para a minha família
        </h1>
        
        <img
          src={erikaLifestyle}
          alt="Erika Akemi"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto mb-8 shadow-elevated border-4 border-card"
        />
        
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          Minha maior motivação é a minha família. Eles me lembram diariamente por que vale a pena 
          evoluir, estudar e cuidar com propósito.
        </p>
        
        <p className="font-display text-2xl text-foreground italic mb-10">
          Vocês são minha razão de tudo. 💚
        </p>
        
        <Button variant="heroOutline" size="lg" asChild>
          <a href="/">Voltar ao site</a>
        </Button>
      </div>
    </div>
  );
};

export default FamiliaPage;
