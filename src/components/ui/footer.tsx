import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Twitter, 
  Linkedin, 
  Mail, 
  Github,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Modèles décisionnels", href: "#models" },
    { name: "Méthodes productivité", href: "#productivity" },
    { name: "Collaboration", href: "#collaboration" },
    { name: "Intégrations", href: "#integrations" },
    { name: "API", href: "#api" }
  ],
  company: [
    { name: "À propos", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Carrières", href: "#careers" },
    { name: "Presse", href: "#press" },
    { name: "Partenaires", href: "#partners" }
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Guides", href: "#guides" },
    { name: "Templates", href: "#templates" },
    { name: "Webinaires", href: "#webinars" },
    { name: "Support", href: "#support" }
  ],
  legal: [
    { name: "Confidentialité", href: "#privacy" },
    { name: "Conditions", href: "#terms" },
    { name: "RGPD", href: "#gdpr" },
    { name: "Cookies", href: "#cookies" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#twitter" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
  { name: "GitHub", icon: Github, href: "#github" },
  { name: "Email", icon: Mail, href: "mailto:contact@decisionfocus.com" }
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter CTA */}
      <div className="border-b border-border bg-gradient-card">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              <Mail className="w-3 h-3 mr-1" />
              Newsletter
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Restez au top de vos
              <span className="text-gradient"> décisions</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recevez chaque semaine nos meilleurs conseils, nouveaux modèles 
              et techniques de productivité directement dans votre boîte mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="px-6 py-3">
                S'abonner
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Pas de spam. Désinscription en un clic.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Decision & Focus Hub</h4>
                <p className="text-sm text-muted-foreground">Bêta</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              La plateforme qui transforme vos décisions complexes en plans d'action 
              concrets grâce aux modèles éprouvés de productivité.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h5 className="font-semibold mb-4">Produit</h5>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Entreprise</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Ressources</h5>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    {link.name === "Documentation" && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Légal</h5>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Decision & Focus Hub. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Fait avec ❤️ en France</span>
              <Badge variant="outline" className="text-xs">
                Bêta v1.0
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}