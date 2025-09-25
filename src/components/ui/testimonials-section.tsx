import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Product Manager",
    company: "TechStart",
    avatar: "/api/placeholder/40/40",
    content: "Cette plateforme a révolutionné notre façon de prendre des décisions en équipe. Les modèles SWOT collaboratifs nous font gagner des heures de réflexion.",
    rating: 5,
    highlight: "Gain de temps spectaculaire"
  },
  {
    name: "Pierre Martin",
    role: "Consultant Strategy",
    company: "Freelance",
    avatar: "/api/placeholder/40/40",
    content: "J'utilise Decision Hub avec tous mes clients. La matrice d'Eisenhower interactive rend mes ateliers beaucoup plus engageants et productifs.",
    rating: 5,
    highlight: "Ateliers plus engageants"
  },
  {
    name: "Sophie Laurent",
    role: "Directrice Innovation",
    company: "GrandGroupe",
    avatar: "/api/placeholder/40/40",
    content: "L'intégration avec nos outils existants est parfaite. Nos équipes ont adopté la méthode Pomodoro intégrée en quelques jours.",
    rating: 5,
    highlight: "Adoption rapide"
  },
  {
    name: "Thomas Bernard",
    role: "Chef de Projet",
    company: "AgenceDigital",
    avatar: "/api/placeholder/40/40",
    content: "Les analytics sur nos décisions nous permettent d'améliorer continuellement nos processus. C'est devenu indispensable.",
    rating: 5,
    highlight: "Amélioration continue"
  },
  {
    name: "Julie Moreau",
    role: "Entrepreneur",
    company: "StartupTech",
    avatar: "/api/placeholder/40/40",
    content: "En tant que solo entrepreneur, j'avais besoin d'un cadre pour structurer mes décisions. Cette plateforme est exactement ce qu'il me fallait.",
    rating: 5,
    highlight: "Parfait pour les solos"
  },
  {
    name: "Alexandre Petit",
    role: "Manager Équipe",
    company: "ServiceCorp",
    avatar: "/api/placeholder/40/40",
    content: "La collaboration temps réel change tout. Plus besoin de réunions interminables, on co-construit nos analyses directement sur la plateforme.",
    rating: 5,
    highlight: "Moins de réunions"
  }
];

const stats = [
  { number: "1000+", label: "Utilisateurs actifs", icon: Users },
  { number: "15 000+", label: "Décisions prises", icon: Quote },
  { number: "4.9/5", label: "Satisfaction client", icon: Star }
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Star className="w-3 h-3 mr-1" />
            Témoignages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils ont transformé leurs
            <span className="text-gradient"> décisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment des professionnels et équipes utilisent notre plateforme 
            pour prendre de meilleures décisions plus rapidement.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Highlight */}
                <Badge variant="secondary" className="mb-4 text-xs">
                  {testimonial.highlight}
                </Badge>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Rejoignez des milliers de professionnels qui ont déjà transformé leurs décisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              +200 nouvelles inscriptions ce mois
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Note moyenne 4.9/5
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}