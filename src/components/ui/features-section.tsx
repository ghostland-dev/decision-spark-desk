import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Users, 
  BarChart3, 
  Zap, 
  Download, 
  MessageSquare,
  Clock,
  Brain,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Canevas Interactifs",
    description: "Drag & drop de post-its virtuels avec sauvegarde automatique et export multi-format",
    benefits: ["Interface intuitive", "Collaboration temps réel", "Export PDF/PNG/PowerPoint"]
  },
  {
    icon: Users,
    title: "Collaboration d'Équipe",
    description: "Espaces partagés avec co-édition en temps réel et gestion des rôles",
    benefits: ["Chat intégré", "Historique des révisions", "Attribution de responsabilités"]
  },
  {
    icon: BarChart3,
    title: "Suivi & Analytics",
    description: "Tableau de bord personnel avec indicateurs de performance et recommandations IA",
    benefits: ["Métriques personnalisées", "Insights intelligents", "Journal de décisions"]
  },
  {
    icon: Zap,
    title: "Assistant Intelligent",
    description: "IA qui suggère les modèles adaptés selon votre contexte et vos objectifs",
    benefits: ["Recommandations contextuelles", "Synthèse automatique", "Notifications smart"]
  },
  {
    icon: Download,
    title: "Intégrations Natives",
    description: "Connectez vos outils favoris : Google Calendar, Trello, Notion, Slack...",
    benefits: ["API ouverte", "Webhooks", "Synchronisation bidirectionnelle"]
  },
  {
    icon: MessageSquare,
    title: "Recherche Intelligente",
    description: "Trouvez instantanément le bon modèle en décrivant votre situation",
    benefits: ["NLP avancé", "Suggestions proactives", "Historique accessible"]
  }
];

const workflowSteps = [
  {
    number: "01",
    title: "Décrivez votre défi",
    description: "L'assistant analyse votre situation",
    icon: MessageSquare,
    color: "focus-green"
  },
  {
    number: "02", 
    title: "Choisissez votre modèle",
    description: "Sélectionnez parmi les suggestions",
    icon: Brain,
    color: "focus-orange"
  },
  {
    number: "03",
    title: "Collaborez en équipe",
    description: "Remplissez le canevas ensemble",
    icon: Users,
    color: "focus-purple"
  },
  {
    number: "04",
    title: "Passez à l'action",
    description: "Transformez en plan concret",
    icon: CheckCircle,
    color: "primary"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Main features grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Clock className="w-3 h-3 mr-1" />
              Fonctionnalités
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tout ce dont vous avez besoin
              <span className="text-gradient"> en un seul endroit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une plateforme complète qui réunit les meilleurs outils de décision 
              et de productivité dans une interface moderne et collaborative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Workflow section */}
        <div className="bg-gradient-card rounded-3xl p-12 shadow-card">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Comment ça marche ?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processus simple en 4 étapes pour transformer vos défis 
              en décisions claires et actions concrètes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 text-${step.color}`} />
                  </div>
                  <div className={`text-3xl font-bold text-${step.color} mb-2`}>
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                  
                  {/* Connection line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}