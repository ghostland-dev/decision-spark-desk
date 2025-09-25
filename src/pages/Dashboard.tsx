import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  Plus,
  Calendar,
  Grid,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

// Données mock pour la démonstration
const recentDecisions = [
  {
    id: 1,
    title: "Choix du stack technique",
    model: "Matrice d'Eisenhower",
    status: "completed",
    date: "Il y a 2 jours",
    collaborators: ["MD", "PL", "JD"]
  },
  {
    id: 2,
    title: "Stratégie produit Q1",
    model: "Analyse SWOT",
    status: "in-progress",
    date: "Il y a 5 jours",
    collaborators: ["MD", "SL"]
  },
  {
    id: 3,
    title: "Priorisation features",
    model: "Matrice BCG",
    status: "pending",
    date: "Il y a 1 semaine",
    collaborators: ["MD"]
  }
];

const stats = [
  {
    name: "Décisions prises",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Target
  },
  {
    name: "Temps moyen",
    value: "2.3h",
    change: "-18%",
    trend: "down",
    icon: Clock
  },
  {
    name: "Taux de satisfaction",
    value: "94%",
    change: "+5%",
    trend: "up",
    icon: TrendingUp
  },
  {
    name: "Collaborations",
    value: "18",
    change: "+25%",
    trend: "up",
    icon: Users
  }
];

const quickActions = [
  {
    name: "Matrice d'Eisenhower",
    description: "Prioriser vos tâches",
    icon: Grid,
    color: "focus-green"
  },
  {
    name: "Analyse SWOT",
    description: "Analyser une situation",
    icon: TrendingUp,
    color: "focus-orange"
  },
  {
    name: "Session Pomodoro",
    description: "Focus de 25 minutes",
    icon: Clock,
    color: "focus-purple"
  },
  {
    name: "Deep Work",
    description: "Travail en profondeur",
    icon: Brain,
    color: "primary"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Tableau de bord</h1>
              <p className="text-muted-foreground mt-1">
                Bienvenue, Marie ! Voici un aperçu de vos décisions récentes.
              </p>
            </div>
            <Button className="shadow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau modèle
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="hover:shadow-primary transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.name}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <Badge 
                      variant={stat.trend === 'up' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {stat.change} ce mois
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent decisions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Décisions récentes
                </CardTitle>
                <CardDescription>
                  Vos derniers modèles et analyses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDecisions.map((decision) => (
                    <div 
                      key={decision.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium">{decision.title}</h4>
                          <Badge 
                            variant={
                              decision.status === 'completed' ? 'default' :
                              decision.status === 'in-progress' ? 'secondary' :
                              'outline'
                            }
                            className="text-xs"
                          >
                            {decision.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {decision.status === 'completed' ? 'Terminé' :
                             decision.status === 'in-progress' ? 'En cours' :
                             'En attente'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {decision.model} • {decision.date}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {decision.collaborators.map((collab, idx) => (
                              <Avatar key={idx} className="w-6 h-6 border border-background">
                                <AvatarFallback className="text-xs bg-primary/10 text-primary">
                                  {collab}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {decision.collaborators.length} collaborateur{decision.collaborators.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick actions */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Actions rapides
                </CardTitle>
                <CardDescription>
                  Commencez un nouveau modèle
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-auto p-4 hover:bg-muted"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-${action.color}/10 flex items-center justify-center mr-3`}>
                        <IconComponent className={`w-4 h-4 text-${action.color}`} />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-sm">{action.name}</p>
                        <p className="text-xs text-muted-foreground">{action.description}</p>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Progress card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Objectifs mensuels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Décisions prises</span>
                    <span className="text-sm text-muted-foreground">24/30</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Sessions Pomodoro</span>
                    <span className="text-sm text-muted-foreground">45/60</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Collaborations</span>
                    <span className="text-sm text-muted-foreground">18/20</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}