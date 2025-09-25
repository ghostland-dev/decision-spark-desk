import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Calendar,
  Shield,
  Zap,
  Users,
  Download
} from "lucide-react";

const faqs = [
  {
    category: "Général",
    questions: [
      {
        question: "Qu'est-ce qui différencie Decision & Focus Hub des autres outils ?",
        answer: "Nous combinons pour la première fois les modèles décisionnels éprouvés (SWOT, Eisenhower, BCG...) avec les méthodes de productivité modernes (Pomodoro, Deep Work, Time Blocking) dans une seule plateforme collaborative. Plus besoin de jongler entre plusieurs outils."
      },
      {
        question: "Combien de modèles sont disponibles ?",
        answer: "Notre bibliothèque contient plus de 50 modèles décisionnels et 40 méthodes de productivité. Nous ajoutons régulièrement de nouveaux frameworks basés sur les dernières recherches et les demandes de nos utilisateurs."
      },
      {
        question: "Puis-je utiliser la plateforme sans équipe ?",
        answer: "Absolument ! Beaucoup de nos utilisateurs sont des freelances, consultants ou managers qui utilisent nos modèles pour structurer leur réflexion personnelle. Le plan Pro est parfait pour un usage individuel."
      }
    ]
  },
  {
    category: "Collaboration",
    questions: [
      {
        question: "Comment fonctionne la collaboration en temps réel ?",
        answer: "Comme Google Docs, plusieurs personnes peuvent travailler simultanément sur un même canevas. Vous voyez les curseurs des autres utilisateurs, les modifications en direct, et vous pouvez chatter directement dans l'interface."
      },
      {
        question: "Peut-on gérer les permissions d'accès ?",
        answer: "Oui, vous pouvez attribuer différents rôles : propriétaire, éditeur, commentateur ou lecteur. Chaque espace de travail peut avoir ses propres permissions et vous contrôlez qui peut voir ou modifier quoi."
      },
      {
        question: "Y a-t-il un historique des modifications ?",
        answer: "Chaque canevas garde un historique complet des révisions avec horodatage et auteur. Vous pouvez revenir à n'importe quelle version précédente en un clic."
      }
    ]
  },
  {
    category: "Intégrations",
    questions: [
      {
        question: "Quelles intégrations sont disponibles ?",
        answer: "Nous nous intégrons avec Google Calendar, Outlook, Trello, Asana, Notion, Slack, Teams et bien d'autres. Notre API ouverte permet aussi de créer des intégrations personnalisées."
      },
      {
        question: "Mes données peuvent-elles être exportées ?",
        answer: "Toutes vos données peuvent être exportées en PDF, PNG, PowerPoint, Excel ou via notre API. Nous croyons que vos données vous appartiennent et doivent rester portables."
      },
      {
        question: "L'API est-elle documentée ?",
        answer: "Oui, nous avons une documentation API complète avec des exemples de code. Les plans Équipe et Entreprise incluent l'accès à l'API avec différents niveaux de quotas."
      }
    ]
  },
  {
    category: "Sécurité & Données",
    questions: [
      {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Vos données sont chiffrées AES-256 au repos et en transit. Nous sommes conformes RGPD, hébergés en Europe, avec des sauvegardes quotidiennes et une architecture haute disponibilité."
      },
      {
        question: "Puis-je supprimer définitivement mes données ?",
        answer: "Conformément au RGPD, vous pouvez demander la suppression complète de vos données à tout moment. Nous vous fournirons également un export complet avant suppression si souhaité."
      },
      {
        question: "Y a-t-il un SSO pour les entreprises ?",
        answer: "Le plan Entreprise inclut l'authentification unique (SSO) via SAML 2.0, compatible avec Active Directory, Okta, Auth0 et autres fournisseurs d'identité d'entreprise."
      }
    ]
  }
];

const supportOptions = [
  {
    name: "Chat en direct",
    description: "Réponse en moins de 2h",
    icon: MessageSquare,
    color: "focus-green"
  },
  {
    name: "Email support",
    description: "support@decisionfocus.com",
    icon: Mail,
    color: "focus-orange"
  },
  {
    name: "Rendez-vous démo",
    description: "30 min avec un expert",
    icon: Calendar,
    color: "focus-purple"
  }
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Général");
  
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions
            <span className="text-gradient"> fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur Decision & Focus Hub. 
            Vous ne trouvez pas votre réponse ? Contactez notre équipe.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqs.map((category) => (
              <Button
                key={category.category}
                variant={activeCategory === category.category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.category)}
                className="transition-all"
              >
                {category.category}
              </Button>
            ))}
          </div>

          {/* Questions */}
          {faqs.map((category) => (
            activeCategory === category.category && (
              <div key={category.category} className="mb-12">
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))}

          {/* Support options */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Besoin d'aide supplémentaire ?</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {supportOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className={`w-12 h-12 rounded-xl bg-${option.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 text-${option.color}`} />
                      </div>
                      <CardTitle className="text-lg">{option.name}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <MessageSquare className="w-4 h-4 mr-2" />
                Ouvrir le chat
              </Button>
              <Button size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Réserver une démo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}