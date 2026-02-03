import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CredentialsSection } from '@/components/CredentialsSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { GallerySection } from '@/components/GallerySection';
import { WhyMeSection } from '@/components/WhyMeSection';
import { FAQSection } from '@/components/FAQSection';
import { SkincareChatSection } from '@/components/SkincareChatSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CredentialsSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <GallerySection />
        <WhyMeSection />
        <FAQSection />
        <SkincareChatSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;