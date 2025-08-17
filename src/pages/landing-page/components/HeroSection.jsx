import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [liveMetrics, setLiveMetrics] = useState({
    employees: 10000,
    companies: 200,
    accuracy: 99.9
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        employees: prev?.employees + Math.floor(Math.random() * 5),
        companies: prev?.companies + (Math.random() > 0.8 ? 1 : 0),
        accuracy: 99.9
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDemoClick = () => {
    const element = document.querySelector('#demo');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleTrialClick = () => {
    const element = document.querySelector('#tarifs');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <Icon name="Shield" size={16} className="mr-2" />
                Conforme RGPD • Sécurisé • Certifié ISO 27001
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Éliminez les erreurs de{' '}
                <span className="text-primary">pointage manuel</span>{' '}
                pour toujours
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent">99.9% de précision garantie</span> - 
                Économisez 15+ heures par semaine avec notre système de reconnaissance faciale 
                automatisé. Fini les erreurs Excel et le buddy punching.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleTrialClick}
                iconName="Play"
                iconPosition="left"
                className="btn-shadow hover:scale-105 transition-transform duration-250"
              >
                Commencer l'essai gratuit
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDemoClick}
                iconName="Calendar"
                iconPosition="left"
              >
                Réserver une démo
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {liveMetrics?.employees?.toLocaleString('fr-FR')}+
                </div>
                <div className="text-sm text-muted-foreground">Employés font confiance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {liveMetrics?.companies}+
                </div>
                <div className="text-sm text-muted-foreground">Entreprises clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {liveMetrics?.accuracy}%
                </div>
                <div className="text-sm text-muted-foreground">Précision garantie</div>
              </div>
            </div>
          </div>

          {/* Right Content - Demo Video */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <div className="text-center space-y-4">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-20 h-20 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all duration-250 hover:scale-110 btn-shadow"
                    >
                      <Icon name="Play" size={32} color="white" />
                    </button>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Démo de reconnaissance faciale</p>
                      <p className="text-sm text-muted-foreground">Voir comment ça fonctionne en 2 minutes</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-sm text-muted-foreground">Analyse en cours...</p>
                      <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        Précision: 99.9%
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Demo Stats Overlay */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">En direct</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Temps de traitement: &lt;0.5s
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-accent text-white p-3 rounded-lg shadow-card animate-bounce">
              <div className="text-sm font-semibold">+80% de temps économisé</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-lg shadow-card">
              <div className="text-sm font-semibold">Zéro buddy punching</div>
            </div>
          </div>
        </div>

        {/* Enterprise Logos */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Ils nous font confiance pour gérer leurs présences
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              { name: "TotalEnergies", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
              { name: "Carrefour", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop" },
              { name: "Société Générale", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
              { name: "Airbus", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop" },
              { name: "Renault", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" }
            ]?.map((company, index) => (
              <div key={index} className="h-12 w-24 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">{company?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;