import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Grid, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";

const demoModels = {
  eisenhower: {
    name: "Matrice d'Eisenhower",
    description: "Priorisez vos tâches selon urgence et importance",
    icon: Grid,
    color: "focus-green",
    quadrants: [
      { name: "Urgent & Important", items: ["Crise client", "Deadline projet"], color: "bg-red-100 text-red-800" },
      { name: "Important, pas urgent", items: ["Stratégie long terme", "Formation équipe"], color: "bg-yellow-100 text-yellow-800" },
      { name: "Urgent, pas important", items: ["Emails non critiques", "Réunions routines"], color: "bg-blue-100 text-blue-800" },
      { name: "Ni urgent, ni important", items: ["Réseaux sociaux", "Tâches administratives"], color: "bg-gray-100 text-gray-800" }
    ]
  },
  swot: {
    name: "Analyse SWOT",
    description: "Évaluez forces, faiblesses, opportunités et menaces",
    icon: TrendingUp,
    color: "focus-orange",
    sections: [
      { name: "Forces", items: ["Équipe experte", "Technologie avancée", "Clients fidèles"], color: "bg-green-100 text-green-800" },
      { name: "Faiblesses", items: ["Budget limité", "Processus lents"], color: "bg-red-100 text-red-800" },
      { name: "Opportunités", items: ["Marché en croissance", "Partenariats"], color: "bg-blue-100 text-blue-800" },
      { name: "Menaces", items: ["Concurrence", "Réglementation"], color: "bg-yellow-100 text-yellow-800" }
    ]
  },
  pomodoro: {
    name: "Session Pomodoro",
    description: "25 minutes de focus intense",
    icon: Clock,
    color: "focus-purple",
    sessions: [
      { name: "Session 1", duration: "25 min", status: "completed", task: "Rédaction présentation" },
      { name: "Pause", duration: "5 min", status: "completed", task: "Repos" },
      { name: "Session 2", duration: "25 min", status: "active", task: "Révision document" },
      { name: "Pause", duration: "5 min", status: "pending", task: "Repos" }
    ]
  }
};

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState<keyof typeof demoModels>("eisenhower");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // Simulate demo completion
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Play className="w-3 h-3 mr-1" />
            Démonstration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Voyez la
            <span className="text-gradient"> magie en action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nos modèles transforment vos défis en décisions claires 
            et plans d'action concrets en quelques minutes.
          </p>
        </div>

        {/* Demo tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeDemo} onValueChange={(value) => setActiveDemo(value as keyof typeof demoModels)}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="eisenhower" className="flex items-center gap-2">
                <Grid className="w-4 h-4" />
                Eisenhower
              </TabsTrigger>
              <TabsTrigger value="swot" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                SWOT
              </TabsTrigger>
              <TabsTrigger value="pomodoro" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Pomodoro
              </TabsTrigger>
            </TabsList>

            {/* Eisenhower Demo */}
            <TabsContent value="eisenhower" className="space-y-6">
              <Card className="shadow-primary">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-focus-green/10 flex items-center justify-center mx-auto mb-4">
                    <Grid className="w-6 h-6 text-focus-green" />
                  </div>
                  <CardTitle className="text-2xl">Matrice d'Eisenhower Interactive</CardTitle>
                  <CardDescription>
                    Glissez-déposez vos tâches dans les quadrants appropriés
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {demoModels.eisenhower.quadrants.map((quadrant, index) => (
                      <div key={index} className="border-2 border-dashed border-border rounded-lg p-4 min-h-32">
                        <h4 className="font-semibold text-sm mb-3">{quadrant.name}</h4>
                        <div className="space-y-2">
                          {quadrant.items.map((item, idx) => (
                            <div 
                              key={idx} 
                              className={`p-2 rounded text-xs font-medium ${quadrant.color} cursor-move hover:scale-105 transition-transform`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button onClick={handlePlayDemo} disabled={isPlaying}>
                      {isPlaying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                          Génération en cours...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Lancer la démo interactive
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SWOT Demo */}
            <TabsContent value="swot" className="space-y-6">
              <Card className="shadow-primary">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-focus-orange/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-focus-orange" />
                  </div>
                  <CardTitle className="text-2xl">Analyse SWOT Collaborative</CardTitle>
                  <CardDescription>
                    Analysez votre situation avec votre équipe en temps réel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {demoModels.swot.sections.map((section, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          {section.name}
                          {index < 2 ? <Lightbulb className="w-4 h-4" /> : <Target className="w-4 h-4" />}
                        </h4>
                        <div className="space-y-2">
                          {section.items.map((item, idx) => (
                            <div 
                              key={idx} 
                              className={`p-2 rounded text-xs ${section.color}`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button onClick={handlePlayDemo} disabled={isPlaying}>
                      {isPlaying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                          Analyse en cours...
                        </>
                      ) : (
                        <>
                          <Users className="w-4 h-4 mr-2" />
                          Collaborer sur cette analyse
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pomodoro Demo */}
            <TabsContent value="pomodoro" className="space-y-6">
              <Card className="shadow-primary">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-focus-purple/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-focus-purple" />
                  </div>
                  <CardTitle className="text-2xl">Session Pomodoro Active</CardTitle>
                  <CardDescription>
                    Boostez votre productivité avec des sessions de focus chronométrées
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {demoModels.pomodoro.sessions.map((session, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          session.status === 'completed' ? 'bg-green-50 border-green-200' :
                          session.status === 'active' ? 'bg-blue-50 border-blue-200' :
                          'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {session.status === 'completed' ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : session.status === 'active' ? (
                            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Clock className="w-5 h-5 text-gray-400" />
                          )}
                          <div>
                            <p className="font-medium text-sm">{session.name}</p>
                            <p className="text-xs text-muted-foreground">{session.task}</p>
                          </div>
                        </div>
                        <Badge variant={session.status === 'active' ? 'default' : 'secondary'}>
                          {session.duration}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button onClick={handlePlayDemo} disabled={isPlaying}>
                      {isPlaying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                          Session en cours...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Démarrer une session
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Prêt à transformer vos décisions en actions ?
            </p>
            <Button size="lg" className="shadow-primary">
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}