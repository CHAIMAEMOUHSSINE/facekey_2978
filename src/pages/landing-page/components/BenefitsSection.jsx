import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    timeSaved: 0,
    accuracy: 0,
    automation: 0,
    reports: 0
  });

  const benefits = [
    {
      id: 'time-savings',
      title: 'Économie de temps',
      subtitle: '80% de réduction du temps administratif',
      icon: 'Clock',
      color: 'accent',
      metrics: {
        before: '15h/semaine',
        after: '3h/semaine',
        saving: '12h économisées'
      },
      features: [
        'Pointage automatique instantané',
        'Élimination de la saisie manuelle',
        'Calculs automatiques des heures',
        'Génération automatique des rapports'
      ],
      testimonial: {
        quote: "Nous avons récupéré 12 heures par semaine que nous consacrons maintenant au développement RH.",
        author: "Sophie Martin, DRH chez TechCorp"
      }
    },
    {
      id: 'accuracy',
      title: 'Précision maximale',
      subtitle: '99.9% de précision garantie',
      icon: 'Target',
      color: 'primary',
      metrics: {
        before: '85% précision',
        after: '99.9% précision',
        saving: '+14.9% amélioration'
      },
      features: [
        'Reconnaissance faciale avancée',
        'Élimination du buddy punching',
        'Détection anti-fraude',
        'Validation biométrique sécurisée'
      ],
      testimonial: {
        quote: "Fini les erreurs de pointage ! Notre précision est passée de 85% à 99.9%.",
        author: "Marc Dubois, Responsable Paie"
      }
    },
    {
      id: 'automation',
      title: 'Automatisation complète',
      subtitle: 'Workflow 100% automatisé',
      icon: 'Zap',
      color: 'secondary',
      metrics: {
        before: '100% manuel',
        after: '5% manuel',
        saving: '95% automatisé'
      },
      features: [
        'Intégration SIRH native',
        'Synchronisation temps réel',
        'Alertes automatiques',
        'Workflows personnalisables'
      ],
      testimonial: {
        quote: "L\'intégration avec notre SIRH s\'est faite en quelques clics. Tout est automatique maintenant.",
        author: "Claire Rousseau, IT Manager"
      }
    },
    {
      id: 'reporting',
      title: 'Reporting avancé',
      subtitle: 'Analytics en temps réel',
      icon: 'BarChart3',
      color: 'warning',
      metrics: {
        before: 'Rapports hebdomadaires',
        after: 'Données temps réel',
        saving: 'Visibilité instantanée'
      },
      features: [
        'Tableaux de bord interactifs',
        'Analyses prédictives',
        'Alertes personnalisées',
        'Export multi-formats'
      ],
      testimonial: {
        quote: "Les insights en temps réel nous permettent d\'optimiser nos équipes comme jamais.",
        author: "Thomas Leroy, Directeur Opérations"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedMetrics(prev => ({
        timeSaved: Math.min(prev?.timeSaved + 2, 80),
        accuracy: Math.min(prev?.accuracy + 3, 99.9),
        automation: Math.min(prev?.automation + 3, 95),
        reports: Math.min(prev?.reports + 5, 100)
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      accent: 'bg-accent/10 text-accent border-accent/20',
      primary: 'bg-primary/10 text-primary border-primary/20',
      secondary: 'bg-secondary/10 text-secondary border-secondary/20',
      warning: 'bg-warning/10 text-warning border-warning/20'
    };
    return colors?.[color] || colors?.accent;
  };

  return (
    <section id="avantages" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Avantages mesurables
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Des résultats{' '}
            <span className="text-primary">spectaculaires</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment FaceKey transforme la gestion des présences avec 
            des bénéfices concrets et mesurables dès le premier mois.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits?.map((benefit, index) => (
            <div
              key={benefit?.id}
              className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredBenefit(benefit?.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(benefit?.color)}`}>
                    <Icon name={benefit?.icon} size={24} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {benefit?.id === 'time-savings' && `${Math.round(animatedMetrics?.timeSaved)}%`}
                      {benefit?.id === 'accuracy' && `${animatedMetrics?.accuracy}%`}
                      {benefit?.id === 'automation' && `${Math.round(animatedMetrics?.automation)}%`}
                      {benefit?.id === 'reporting' && `${Math.round(animatedMetrics?.reports)}%`}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit?.title}</h3>
                <p className="text-muted-foreground">{benefit?.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Before/After Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-error/5 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Avant</div>
                    <div className="text-sm font-medium text-error">{benefit?.metrics?.before}</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="ArrowRight" size={20} color="var(--color-muted-foreground)" />
                  </div>
                  <div className="text-center p-3 bg-accent/5 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Après</div>
                    <div className="text-sm font-medium text-accent">{benefit?.metrics?.after}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {benefit?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} color="var(--color-accent)" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                {hoveredBenefit === benefit?.id && (
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-l-accent animate-fade-in">
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "{benefit?.testimonial?.quote}"
                    </p>
                    <p className="text-xs font-medium text-foreground">
                      — {benefit?.testimonial?.author}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Summary */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Retour sur investissement
            </h3>
            <p className="text-muted-foreground">
              Calcul basé sur une entreprise de 200 employés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Investment */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Euro" size={24} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">2 400€</div>
              <div className="text-sm text-muted-foreground">Investissement mensuel</div>
            </div>

            {/* Savings */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">8 500€</div>
              <div className="text-sm text-muted-foreground">Économies mensuelles</div>
            </div>

            {/* ROI */}
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} />
              </div>
              <div className="text-3xl font-bold text-success mb-2">254%</div>
              <div className="text-sm text-muted-foreground">ROI dès le 1er mois</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-accent/5 rounded-xl text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              Amortissement complet en moins de 30 jours
            </p>
            <p className="text-muted-foreground">
              Les économies générées couvrent l'investissement dès le premier mois d'utilisation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;