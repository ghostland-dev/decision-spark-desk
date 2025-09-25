import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Users, Building } from "lucide-react";

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "pour toujours",
    description: "Parfait pour découvrir la méthode",
    icon: Zap,
    color: "muted",
    features: [
      "5 modèles décisionnels",
      "Exports limités (PDF)",
      "Usage personnel uniquement",
      "Support communautaire",
      "Tutoriels intégrés"
    ],
    limitations: [
      "Pas de collaboration",
      "Pas d'intégrations",
      "Historique limité (30 jours)"
    ],
    cta: "Commencer gratuitement",
    popular: false
  },
  {
    name: "Pro",
    price: "15€",
    period: "par mois",
    description: "L'essentiel pour les professionnels",
    icon: Crown,
    color: "primary",
    features: [
      "50+ modèles décisionnels",
      "40+ méthodes productivité",
      "Exports illimités (PDF, PNG, PPTX)",
      "Intégrations (Calendar, Trello...)",
      "Assistant IA intelligent",
      "Historique complet",
      "Support prioritaire"
    ],
    limitations: [],
    cta: "Essayer 14 jours gratuits",
    popular: true
  },
  {
    name: "Équipe",
    price: "49€",
    period: "par mois (10 utilisateurs)",
    description: "Collaboration et analytics avancés",
    icon: Users,
    color: "accent",
    features: [
      "Tout du plan Pro",
      "Espaces partagés illimités",
      "Co-édition temps réel",
      "Analytics d'équipe",
      "Gestion des rôles",
      "API avancée",
      "Formations dédiées"
    ],
    limitations: [],
    cta: "Démarrer l'essai équipe",
    popular: false
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    period: "selon vos besoins",
    description: "Solution complète pour les grandes organisations",
    icon: Building,
    color: "focus-purple",
    features: [
      "Tout des plans précédents",
      "SSO et sécurité avancée",
      "Support dédié 24/7",
      "Formations sur site",
      "Personnalisation interface",
      "Développements spécifiques",
      "SLA garantis"
    ],
    limitations: [],
    cta: "Nous contacter",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Crown className="w-3 h-3 mr-1" />
            Tarification
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Un plan pour chaque
            <span className="text-gradient"> ambition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Commencez gratuitement et évoluez selon vos besoins. 
            Tous les plans incluent les mises à jour et nouveaux modèles.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'ring-2 ring-primary shadow-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Plus populaire
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-xl bg-${plan.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-6 h-6 text-${plan.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="py-4">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations if any */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">Limitations :</p>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'variant-outline hover:bg-muted'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ or additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Questions sur nos tarifs ?
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Annulation à tout moment
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Données exportables
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Support réactif
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}