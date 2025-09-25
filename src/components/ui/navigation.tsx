import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  Users,
  BookOpen,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Fonctionnalités", href: "#features" },
  { name: "Modèles", href: "#models" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Resources", href: "#resources", hasDropdown: true },
];

const resourcesDropdown = [
  { name: "Documentation", href: "#docs", icon: BookOpen },
  { name: "Templates", href: "#templates", icon: Zap },
  { name: "Support", href: "#support", icon: Mail },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-card/95 backdrop-blur-lg border-b border-border shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">Decision & Focus Hub</span>
              <Badge variant="secondary" className="text-xs px-2 py-0.5">
                Bêta
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      {item.name}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-primary border border-border p-2">
                        {resourcesDropdown.map((subItem) => {
                          const IconComponent = subItem.icon;
                          return (
                            <button
                              key={subItem.name}
                              onClick={() => scrollToSection(subItem.href)}
                              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                            >
                              <IconComponent className="w-4 h-4" />
                              {subItem.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Se connecter
            </Button>
            <Button size="sm" className="shadow-primary">
              Essai gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-lg">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-2 mt-2">
                      {resourcesDropdown.map((subItem) => {
                        const IconComponent = subItem.icon;
                        return (
                          <button
                            key={subItem.name}
                            onClick={() => scrollToSection(subItem.href)}
                            className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <IconComponent className="w-4 h-4" />
                            {subItem.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                <Button variant="ghost" size="sm" className="w-full">
                  Se connecter
                </Button>
                <Button size="sm" className="w-full">
                  Essai gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}