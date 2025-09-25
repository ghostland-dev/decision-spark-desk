import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Grid, 
  TrendingUp, 
  Clock, 
  Zap, 
  Users, 
  BarChart3,
  Target,
  Brain,
  ArrowRight,
  Timer
} from "lucide-react";

const decisionModels = [
  {
    id: "eisenhower",
    name: "Matrice d'Eisenhower",
    description: "Priorisez vos tâches selon leur urgence et importance",
    icon: Grid,
    category: "Priorisation",
    color: "focus-green",
    features: ["Quadrants visuels", "Drag & drop", "Export PDF"]
  },
  {
    id: "swot",
    name: "Analyse SWOT",
    description: "Évaluez forces, faiblesses, opportunities et menaces",
    icon: TrendingUp,
    category: "Stratégie",
    color: "focus-orange", 
    features: ["Analyse collaborative", "Templates sectoriels", "Synthèse auto"]
  },
  {
    id: "bcg",
    name: "Matrice BCG",
    description: "Optimisez votre portefeuille de projets et produits",
    icon: BarChart3,
    category: "Portfolio",
    color: "focus-purple",
    features: ["Visualisation graphique", "Métriques intégrées", "Scenarios"]
  }
];

const productivityMethods = [
  {
    id: "pomodoro",
    name: "Technique Pomodoro",
    description: "25 min de focus intense, 5 min de pause",
    icon: Clock,
    category: "Concentration",
    color: "focus-green"
  },
  {
    id: "deep-work",
    name: "Deep Work",
    description: "Blocs de travail profond sans distraction",
    icon: Brain,  
    category: "Productivité",
    color: "focus-orange"
  },
  {
    id: "time-blocking",
    name: "Time Blocking",
    description: "Planifiez chaque heure de votre journée",
    icon: Target,
    category: "Planning",
    color: "focus-purple"
  }
];

export function ModelsShowcase() {
  const { toast } = useToast();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Boîte à outils
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Modèles & Méthodes
            <span className="text-gradient"> Éprouvés</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinez les meilleurs frameworks de décision avec des techniques 
            de productivité reconnues pour maximiser votre impact.
          </p>
        </div>

        {/* Decision Models */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Grid className="w-4 h-4 text-primary" />
            </div>
            Modèles Décisionnels
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {decisionModels.map((model) => {
              const IconComponent = model.icon;
              return (
                <Card key={model.id} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-${model.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 text-${model.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {model.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <CardDescription>{model.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {model.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => {
                        toast({
                          title: `Modèle ${model.name} sélectionné`,
                          description: "Redirection vers l'interface de création...",
                        });
                      }}
                    >
                      Essayer ce modèle
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Productivity Methods */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Timer className="w-4 h-4 text-accent" />
            </div>
            Méthodes de Productivité
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {productivityMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.id} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-${method.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 text-${method.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {method.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{method.name}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      onClick={() => {
                        toast({
                          title: `Session ${method.name} démarrée`,
                          description: "Votre session de productivité commence maintenant !",
                        });
                      }}
                    >
                      Démarrer une session
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}