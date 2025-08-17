import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [liveData, setLiveData] = useState({
    present: 187,
    absent: 13,
    late: 5,
    remote: 23
  });
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: 'BarChart3' },
    { id: 'attendance', label: 'Présences', icon: 'Users' },
    { id: 'reports', label: 'Rapports', icon: 'FileText' },
    { id: 'analytics', label: 'Analytics', icon: 'TrendingUp' }
  ];

  const periods = [
    { id: 'today', label: 'Aujourd\'hui' },
    { id: 'week', label: 'Cette semaine' },
    { id: 'month', label: 'Ce mois' }
  ];

  const recentActivity = [
    {
      id: 1,
      employee: 'Marie Dubois',
      action: 'Arrivée',
      time: '08:45',
      status: 'present',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 2,
      employee: 'Thomas Martin',
      action: 'Départ',
      time: '17:30',
      status: 'left',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 3,
      employee: 'Sophie Leroy',
      action: 'Arrivée tardive',
      time: '09:15',
      status: 'late',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 4,
      employee: 'Pierre Rousseau',
      action: 'Télétravail',
      time: '08:00',
      status: 'remote',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    }
  ];

  const departmentData = [
    { name: 'Marketing', present: 45, total: 50, percentage: 90 },
    { name: 'Développement', present: 38, total: 42, percentage: 90.5 },
    { name: 'Ventes', present: 28, total: 35, percentage: 80 },
    { name: 'RH', present: 12, total: 15, percentage: 80 },
    { name: 'Finance', present: 18, total: 20, percentage: 90 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        present: prev?.present + (Math.random() > 0.7 ? 1 : 0),
        absent: Math.max(0, prev?.absent + (Math.random() > 0.8 ? -1 : 0)),
        late: prev?.late + (Math.random() > 0.9 ? 1 : 0),
        remote: prev?.remote + (Math.random() > 0.85 ? Math.random() > 0.5 ? 1 : -1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      present: 'text-accent bg-accent/10',
      left: 'text-muted-foreground bg-muted',
      late: 'text-warning bg-warning/10',
      remote: 'text-secondary bg-secondary/10'
    };
    return colors?.[status] || colors?.present;
  };

  const getStatusIcon = (status) => {
    const icons = {
      present: 'CheckCircle',
      left: 'LogOut',
      late: 'Clock',
      remote: 'Home'
    };
    return icons?.[status] || 'CheckCircle';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="Monitor" size={16} className="mr-2" />
            Dashboard en temps réel
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Visibilité complète sur vos{' '}
            <span className="text-primary">équipes</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suivez les présences, analysez les tendances et prenez des décisions 
            éclairées grâce à notre tableau de bord interactif.
          </p>
        </div>

        {/* Dashboard Interface */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          {/* Dashboard Header */}
          <div className="p-6 border-b border-border bg-muted/30">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Tableau de bord RH
                </h3>
                <p className="text-sm text-muted-foreground">
                  Données mises à jour en temps réel
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Period Selector */}
                <div className="flex bg-background rounded-lg p-1">
                  {periods?.map((period) => (
                    <button
                      key={period?.id}
                      onClick={() => setSelectedPeriod(period?.id)}
                      className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
                        selectedPeriod === period?.id
                          ? 'bg-primary text-white' :'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {period?.label}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Mis à jour il y a 2s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-border">
            <div className="flex overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-accent/5 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Users" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {liveData?.present}
                    </div>
                    <div className="text-sm text-muted-foreground">Présents</div>
                  </div>
                  
                  <div className="bg-error/5 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-error/10 text-error rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="UserX" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {liveData?.absent}
                    </div>
                    <div className="text-sm text-muted-foreground">Absents</div>
                  </div>
                  
                  <div className="bg-warning/5 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-warning/10 text-warning rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {liveData?.late}
                    </div>
                    <div className="text-sm text-muted-foreground">En retard</div>
                  </div>
                  
                  <div className="bg-secondary/5 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Home" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {liveData?.remote}
                    </div>
                    <div className="text-sm text-muted-foreground">Télétravail</div>
                  </div>
                </div>

                {/* Department Overview */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Présences par département
                    </h4>
                    <div className="space-y-4">
                      {departmentData?.map((dept, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                          <div>
                            <div className="font-medium text-foreground">{dept?.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {dept?.present}/{dept?.total} employés
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-accent">
                              {dept?.percentage}%
                            </div>
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-accent transition-all duration-500"
                                style={{ width: `${dept?.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Activité récente
                    </h4>
                    <div className="space-y-3">
                      {recentActivity?.map((activity) => (
                        <div key={activity?.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                              <span className="text-xs font-medium">
                                {activity?.employee?.split(' ')?.map(n => n?.[0])?.join('')}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground text-sm">
                              {activity?.employee}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {activity?.action}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-foreground">
                              {activity?.time}
                            </div>
                            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getStatusColor(activity?.status)}`}>
                              <Icon name={getStatusIcon(activity?.status)} size={12} className="mr-1" />
                              {activity?.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'overview' && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={tabs?.find(t => t?.id === activeTab)?.icon} size={24} color="var(--color-muted-foreground)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {tabs?.find(t => t?.id === activeTab)?.label}
                </h4>
                <p className="text-muted-foreground mb-6">
                  Cette section sera disponible dans votre tableau de bord complet
                </p>
                <Button variant="outline" size="sm">
                  Voir la démo complète
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Découvrez toutes les fonctionnalités de notre tableau de bord
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Play"
              iconPosition="left"
            >
              Voir la démo interactive
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
            >
              Réserver une présentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;