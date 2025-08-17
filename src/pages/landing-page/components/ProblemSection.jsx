import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    timeTheft: 0,
    buddyPunching: 0,
    excelErrors: 0,
    hrTime: 0
  });

  const problemTabs = [
    {
      id: 'time-theft',
      title: 'Vol de temps',
      icon: 'Clock',
      stat: '37%',
      description: 'des employés admettent voler du temps de travail',
      details: 'Le vol de temps coûte en moyenne 4 200€ par employé et par an aux entreprises françaises.',
      visual: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
    },
    {
      id: 'buddy-punching',
      title: 'Buddy Punching',
      icon: 'Users',
      stat: '75%',
      description: 'des entreprises subissent du buddy punching',
      details: 'Un employé sur quatre a déjà pointé pour un collègue absent, créant des pertes de 2-8% de la masse salariale.',
      visual: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 'excel-errors',
      title: 'Erreurs Excel',
      icon: 'AlertTriangle',
      stat: '88%',
      description: 'des feuilles Excel contiennent des erreurs',
      details: 'Les erreurs de saisie manuelle dans les feuilles de temps génèrent des litiges et des recalculs coûteux.',
      visual: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    },
    {
      id: 'hr-time',
      title: 'Temps RH perdu',
      icon: 'Timer',
      stat: '15h',
      description: 'par semaine perdues en gestion manuelle',
      details: 'Les équipes RH passent plus de 60% de leur temps sur des tâches administratives répétitives.',
      visual: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        timeTheft: Math.min(prev?.timeTheft + 1, 37),
        buddyPunching: Math.min(prev?.buddyPunching + 2, 75),
        excelErrors: Math.min(prev?.excelErrors + 3, 88),
        hrTime: Math.min(prev?.hrTime + 0.5, 15)
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const autoSwitch = setInterval(() => {
      setActiveTab(prev => (prev + 1) % problemTabs?.length);
    }, 4000);

    return () => clearInterval(autoSwitch);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-error/10 text-error rounded-full text-sm font-medium mb-6">
            <Icon name="AlertCircle" size={16} className="mr-2" />
            Problèmes actuels des entreprises
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Votre système actuel vous{' '}
            <span className="text-error">coûte cher</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les méthodes traditionnelles de gestion des présences génèrent des pertes 
            financières importantes et une charge administrative excessive.
          </p>
        </div>

        {/* Interactive Problem Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Tab Navigation */}
          <div className="space-y-4">
            {problemTabs?.map((tab, index) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-card shadow-card border-l-4 border-l-error'
                    : 'bg-background hover:bg-card hover:shadow-card'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeTab === index ? 'bg-error text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={tab?.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{tab?.title}</h3>
                      <p className="text-sm text-muted-foreground">{tab?.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      activeTab === index ? 'text-error' : 'text-muted-foreground'
                    }`}>
                      {tab?.stat}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right - Active Tab Content */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-error/10 to-error/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-error/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={problemTabs?.[activeTab]?.icon} size={32} color="var(--color-error)" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {problemTabs?.[activeTab]?.title}
                  </h3>
                  <div className="text-4xl font-bold text-error">
                    {problemTabs?.[activeTab]?.stat}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                {problemTabs?.[activeTab]?.details}
              </p>
              
              <div className="mt-4 p-4 bg-error/5 rounded-lg border-l-4 border-l-error">
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingDown" size={20} color="var(--color-error)" className="mt-0.5" />
                  <div>
                    <p className="font-medium text-error">Impact financier</p>
                    <p className="text-sm text-muted-foreground">
                      Ces problèmes représentent une perte moyenne de 15-25% 
                      des coûts de main-d'œuvre pour les entreprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Calculator Preview */}
        <div className="mt-16 bg-card rounded-2xl shadow-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Calculez vos pertes actuelles
            </h3>
            <p className="text-muted-foreground">
              Estimation basée sur une entreprise de 100 employés
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-error/5 rounded-xl">
              <div className="text-3xl font-bold text-error mb-2">
                {Math.round(animatedStats?.timeTheft * 100)}€
              </div>
              <div className="text-sm text-muted-foreground">Vol de temps / mois</div>
            </div>
            
            <div className="text-center p-6 bg-error/5 rounded-xl">
              <div className="text-3xl font-bold text-error mb-2">
                {Math.round(animatedStats?.buddyPunching * 50)}€
              </div>
              <div className="text-sm text-muted-foreground">Buddy punching / mois</div>
            </div>
            
            <div className="text-center p-6 bg-error/5 rounded-xl">
              <div className="text-3xl font-bold text-error mb-2">
                {Math.round(animatedStats?.excelErrors * 25)}€
              </div>
              <div className="text-sm text-muted-foreground">Erreurs Excel / mois</div>
            </div>
            
            <div className="text-center p-6 bg-error/5 rounded-xl">
              <div className="text-3xl font-bold text-error mb-2">
                {Math.round(animatedStats?.hrTime * 200)}€
              </div>
              <div className="text-sm text-muted-foreground">Temps RH / mois</div>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 bg-error/10 rounded-xl">
            <div className="text-4xl font-bold text-error mb-2">
              {Math.round((animatedStats?.timeTheft * 100 + animatedStats?.buddyPunching * 50 + animatedStats?.excelErrors * 25 + animatedStats?.hrTime * 200) * 12)?.toLocaleString('fr-FR')}€
            </div>
            <div className="text-lg font-medium text-foreground">Perte annuelle estimée</div>
            <p className="text-sm text-muted-foreground mt-2">
              Sans compter les coûts cachés : litiges, démotivation, turnover...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;