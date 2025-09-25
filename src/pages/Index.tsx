import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { ModelsShowcase } from "@/components/ui/models-showcase";
import { FeaturesSection } from "@/components/ui/features-section";
import { DemoSection } from "@/components/ui/demo-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { FAQSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="models">
        <ModelsShowcase />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <DemoSection />
      <TestimonialsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
