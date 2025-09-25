import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Brain, Target, Timer, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative container mx-auto px-6 text-center text-white">
        {/* Beta badge */}
        <Badge 
          variant="secondary" 
          className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-smooth"
        >
          <Brain className="w-3 h-3 mr-1" />
          Bêta ouverte - Accès anticipé
        </Badge>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Décidez</span>
          <br />
          <span className="text-gradient">& Accomplissez</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
          La plateforme qui transforme vos décisions complexes en plans d'action 
          concrets grâce aux modèles éprouvés de productivité.
        </p>
        
        {/* Key benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-white/80">
            <Target className="w-5 h-5 text-focus-green" />
            <span>+50 modèles décisionnels</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Timer className="w-5 h-5 text-focus-orange" />
            <span>Méthodes productivité</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Users className="w-5 h-5 text-focus-purple" />
            <span>Collaboration équipe</span>
          </div>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-glow px-8 py-4 text-lg font-semibold transition-bounce"
          >
            Commencer gratuitement
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-smooth"
          >
            Voir la démo
          </Button>
        </div>
        
        {/* Trust indicators */}
        <p className="text-sm text-white/60 mt-8">
          Déjà utilisé par plus de 1000+ professionnels et équipes
        </p>
      </div>
    </section>
  );
}