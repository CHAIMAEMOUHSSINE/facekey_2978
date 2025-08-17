import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [employeeCount, setEmployeeCount] = useState(200);
  const [isAnnual, setIsAnnual] = useState(true);
  const [calculatedPricing, setCalculatedPricing] = useState({});

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Parfait pour les petites équipes',
      basePrice: 2.5,
      minEmployees: 10,
      maxEmployees: 100,
      features: [
        'Reconnaissance faciale basique',
        'Tableau de bord simple',
        'Rapports mensuels',
        'Support email',
        'Intégration SIRH basique',
        'Stockage 1 an'
      ],
      limitations: [
        'Pas d\'analytics avancées',
        'Support limité aux heures ouvrables'
      ],
      popular: false,
      color: 'secondary'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Le choix des entreprises en croissance',
      basePrice: 3.5,
      minEmployees: 50,
      maxEmployees: 1000,
      features: [
        'Reconnaissance faciale avancée',
        'Tableau de bord complet',
        'Rapports en temps réel',
        'Support prioritaire',
        'Intégrations multiples',
        'Analytics avancées',
        'API complète',
        'Stockage 3 ans',
        'Alertes personnalisées'
      ],
      limitations: [],
      popular: true,
      color: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Solution sur mesure pour les grandes entreprises',
      basePrice: 'custom',
      minEmployees: 500,
      maxEmployees: 10000,
      features: [
        'Toutes les fonctionnalités Professional',
        'IA personnalisée',
        'Déploiement multi-sites',
        'Support dédié 24/7',
        'Formation sur site',
        'SLA garantie 99.9%',
        'Sécurité renforcée',
        'Stockage illimité',
        'Développements sur mesure'
      ],
      limitations: [],
      popular: false,
      color: 'accent',
      customPricing: true
    }
  ];

  const addOns = [
    {
      id: 'mobile-app',
      name: 'Application mobile',
      description: 'App iOS/Android pour employés',
      price: 0.5,
      icon: 'Smartphone'
    },
    {
      id: 'advanced-analytics',
      name: 'Analytics avancées',
      description: 'Tableaux de bord personnalisés',
      price: 1.0,
      icon: 'BarChart3'
    },
    {
      id: 'api-premium',
      name: 'API Premium',
      description: 'Intégrations illimitées',
      price: 0.8,
      icon: 'Code'
    },
    {
      id: 'training',
      name: 'Formation équipe',
      description: 'Formation sur site incluse',
      price: 2.0,
      icon: 'GraduationCap'
    }
  ];

  const companySliders = [
    { employees: 50, label: '50 employés' },
    { employees: 100, label: '100 employés' },
    { employees: 200, label: '200 employés' },
    { employees: 500, label: '500 employés' },
    { employees: 1000, label: '1000 employés' },
    { employees: 2000, label: '2000+ employés' }
  ];

  useEffect(() => {
    const calculatePricing = () => {
      const pricing = {};
      plans?.forEach(plan => {
        if (plan?.basePrice === 'custom') {
          pricing[plan.id] = 'Sur devis';
        } else {
          const monthlyPrice = plan?.basePrice * employeeCount;
          const annualPrice = monthlyPrice * 12 * 0.85; // 15% discount
          pricing[plan.id] = {
            monthly: monthlyPrice,
            annual: annualPrice,
            perEmployee: plan?.basePrice
          };
        }
      });
      setCalculatedPricing(pricing);
    };

    calculatePricing();
  }, [employeeCount]);

  const getRecommendedPlan = () => {
    if (employeeCount <= 100) return 'starter';
    if (employeeCount <= 1000) return 'professional';
    return 'enterprise';
  };

  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(price);
  };

  const getPlanColor = (color) => {
    const colors = {
      primary: 'border-primary bg-primary/5 text-primary',
      secondary: 'border-secondary bg-secondary/5 text-secondary',
      accent: 'border-accent bg-accent/5 text-accent'
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section id="tarifs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="Euro" size={16} className="mr-2" />
            Tarification transparente
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Un prix juste pour{' '}
            <span className="text-primary">chaque entreprise</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choisissez le plan qui correspond à vos besoins. 
            Tous nos plans incluent la conformité RGPD et un support en français.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Annuel
            </span>
            {isAnnual && (
              <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                -15%
              </span>
            )}
          </div>
        </div>

        {/* Company Size Selector */}
        <div className="bg-card rounded-2xl shadow-card p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Taille de votre entreprise
            </h3>
            <p className="text-muted-foreground">
              Ajustez le nombre d'employés pour voir le prix adapté
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              {companySliders?.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setEmployeeCount(size?.employees)}
                  className={`text-xs px-3 py-2 rounded-lg transition-colors duration-200 ${
                    employeeCount === size?.employees
                      ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-muted-foreground/10'
                  }`}
                >
                  {size?.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="range"
                min="10"
                max="2000"
                step="10"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(parseInt(e?.target?.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-4">
                <div className="text-3xl font-bold text-primary">
                  {employeeCount} employés
                </div>
                <div className="text-sm text-muted-foreground">
                  Plan recommandé: {plans?.find(p => p?.id === getRecommendedPlan())?.name}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans?.map((plan) => (
            <div
              key={plan?.id}
              className={`relative bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan?.popular ? 'ring-2 ring-primary scale-105' : ''
              } ${selectedPlan === plan?.id ? 'ring-2 ring-accent' : ''}`}
            >
              {/* Popular Badge */}
              {plan?.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Le plus populaire
                  </div>
                </div>
              )}

              {/* Recommended Badge */}
              {plan?.id === getRecommendedPlan() && !plan?.popular && (
                <div className="absolute top-4 right-4">
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Recommandé
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan?.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {plan?.description}
                  </p>

                  {/* Pricing */}
                  <div className="space-y-2">
                    {plan?.customPricing ? (
                      <div>
                        <div className="text-4xl font-bold text-foreground">
                          Sur devis
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Tarification personnalisée
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-4xl font-bold text-foreground">
                          {formatPrice(
                            isAnnual 
                              ? calculatedPricing?.[plan?.id]?.annual / 12
                              : calculatedPricing?.[plan?.id]?.monthly
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          par mois • {formatPrice(plan?.basePrice)} par employé
                        </div>
                        {isAnnual && (
                          <div className="text-xs text-accent">
                            Économie annuelle: {formatPrice(calculatedPricing?.[plan?.id]?.monthly * 12 - calculatedPricing?.[plan?.id]?.annual)}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan?.limitations?.map((limitation, index) => (
                    <div key={index} className="flex items-start space-x-3 opacity-60">
                      <Icon name="X" size={16} color="var(--color-error)" className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan?.popular ? 'default' : 'outline'}
                  size="lg"
                  fullWidth
                  onClick={() => setSelectedPlan(plan?.id)}
                  iconName={plan?.customPricing ? 'Phone' : 'ArrowRight'}
                  iconPosition="right"
                >
                  {plan?.customPricing ? 'Contacter les ventes' : 'Commencer l\'essai'}
                </Button>

                {/* Additional Info */}
                <div className="text-center mt-4">
                  <p className="text-xs text-muted-foreground">
                    {plan?.customPricing 
                      ? 'Devis personnalisé sous 24h' :'14 jours d\'essai gratuit • Sans engagement'
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Options supplémentaires
            </h3>
            <p className="text-muted-foreground">
              Personnalisez votre solution avec nos modules complémentaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns?.map((addon) => (
              <div key={addon?.id} className="bg-card rounded-xl p-6 text-center hover:shadow-card transition-shadow duration-250">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={addon?.icon} size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {addon?.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {addon?.description}
                </p>
                <div className="text-lg font-bold text-primary">
                  +{formatPrice(addon?.price * employeeCount)}/mois
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatPrice(addon?.price)} par employé
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Pricing */}
        <div className="bg-card rounded-2xl shadow-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Questions fréquentes sur les tarifs
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Y a-t-il des frais cachés ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Non, nos tarifs sont transparents. Seuls les modules optionnels 
                  peuvent générer des coûts supplémentaires.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Puis-je changer de plan ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. 
                  Les changements prennent effet le mois suivant.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Que comprend l'essai gratuit ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  14 jours d'accès complet au plan Professional, 
                  sans limitation et sans carte bancaire requise.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Support technique inclus ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Oui, tous nos plans incluent le support technique. 
                  Le niveau varie selon votre plan (email, prioritaire, ou dédié).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prêt à transformer votre gestion des présences ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez plus de 200 entreprises qui ont déjà fait le choix de FaceKey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="btn-shadow"
              >
                Commencer l'essai gratuit
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Parler à un expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;