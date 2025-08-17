import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const DemoSection = () => {
  const [activeForm, setActiveForm] = useState('demo');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    industry: '',
    currentSolution: '',
    challenges: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const industryOptions = [
    { value: 'manufacturing', label: 'Industrie manufacturière' },
    { value: 'retail', label: 'Commerce de détail' },
    { value: 'healthcare', label: 'Santé' },
    { value: 'education', label: 'Éducation' },
    { value: 'finance', label: 'Services financiers' },
    { value: 'technology', label: 'Technologie' },
    { value: 'construction', label: 'BTP' },
    { value: 'logistics', label: 'Logistique' },
    { value: 'hospitality', label: 'Hôtellerie' },
    { value: 'other', label: 'Autre' }
  ];

  const employeeRanges = [
    { value: '10-50', label: '10-50 employés' },
    { value: '51-100', label: '51-100 employés' },
    { value: '101-250', label: '101-250 employés' },
    { value: '251-500', label: '251-500 employés' },
    { value: '501-1000', label: '501-1000 employés' },
    { value: '1000+', label: '1000+ employés' }
  ];

  const currentSolutions = [
    { value: 'manual', label: 'Pointage manuel / Excel' },
    { value: 'badge', label: 'Système de badges' },
    { value: 'biometric', label: 'Biométrie (empreinte)' },
    { value: 'software', label: 'Logiciel RH existant' },
    { value: 'none', label: 'Aucun système' },
    { value: 'other', label: 'Autre' }
  ];

  const timeSlots = [
    { value: '09:00', label: '09h00 - 09h30' },
    { value: '09:30', label: '09h30 - 10h00' },
    { value: '10:00', label: '10h00 - 10h30' },
    { value: '10:30', label: '10h30 - 11h00' },
    { value: '11:00', label: '11h00 - 11h30' },
    { value: '14:00', label: '14h00 - 14h30' },
    { value: '14:30', label: '14h30 - 15h00' },
    { value: '15:00', label: '15h00 - 15h30' },
    { value: '15:30', label: '15h30 - 16h00' },
    { value: '16:00', label: '16h00 - 16h30' }
  ];

  const demoFeatures = [
    {
      title: 'Reconnaissance faciale en direct',
      description: 'Testez notre technologie avec votre propre équipe',
      icon: 'Scan',
      duration: '10 min'
    },
    {
      title: 'Tableau de bord interactif',
      description: 'Explorez toutes les fonctionnalités de reporting',
      icon: 'BarChart3',
      duration: '15 min'
    },
    {
      title: 'Intégrations SIRH',
      description: 'Découvrez comment connecter vos outils existants',
      icon: 'Link',
      duration: '10 min'
    },
    {
      title: 'ROI personnalisé',
      description: 'Calcul des économies pour votre entreprise',
      icon: 'Calculator',
      duration: '10 min'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          employees: '',
          industry: '',
          currentSolution: '',
          challenges: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow?.setDate(tomorrow?.getDate() + 1);
    return tomorrow?.toISOString()?.split('T')?.[0];
  };

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Icon name="Calendar" size={16} className="mr-2" />
            Réservez votre démonstration
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Voyez FaceKey en{' '}
            <span className="text-primary">action</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment FaceKey peut transformer votre gestion des présences 
            lors d'une démonstration personnalisée de 45 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Demo Information */}
          <div className="space-y-8">
            {/* Form Toggle */}
            <div className="flex bg-card rounded-lg p-1 shadow-card">
              <button
                onClick={() => setActiveForm('demo')}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeForm === 'demo' ?'bg-primary text-white' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Réserver une démo
              </button>
              <button
                onClick={() => setActiveForm('trial')}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeForm === 'trial' ?'bg-accent text-white' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Essai gratuit
              </button>
            </div>

            {/* Demo Features */}
            <div className="bg-card rounded-2xl shadow-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Ce que vous verrez pendant la démo
              </h3>
              
              <div className="space-y-6">
                {demoFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{feature?.title}</h4>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          {feature?.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature?.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-start space-x-3">
                  <Icon name="Gift" size={20} color="var(--color-accent)" className="mt-0.5" />
                  <div>
                    <p className="font-medium text-accent mb-1">Offre spéciale démo</p>
                    <p className="text-sm text-muted-foreground">
                      Réservez votre démo cette semaine et bénéficiez de 2 mois gratuits 
                      sur votre premier abonnement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} color="var(--color-accent)" />
                <span>Données sécurisées et conformes RGPD</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} color="var(--color-accent)" />
                <span>Réponse garantie sous 2h ouvrées</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Icon name="Users" size={16} color="var(--color-accent)" />
                <span>Plus de 200 entreprises nous font confiance</span>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl shadow-card p-8">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {activeForm === 'demo' ? 'Démo réservée !' : 'Essai activé !'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {activeForm === 'demo' ?'Nous vous avons envoyé un email de confirmation avec le lien de la réunion.' :'Vos identifiants d\'accès vous ont été envoyés par email.'
                  }
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitStatus(null)}
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {activeForm === 'demo' ? 'Réserver votre démo' : 'Commencer l\'essai gratuit'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activeForm === 'demo' ?'Remplissez ce formulaire et nous vous contacterons sous 2h' :'Accès immédiat à toutes les fonctionnalités pendant 14 jours'
                    }
                  </p>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Prénom"
                    type="text"
                    required
                    value={formData?.firstName}
                    onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                    placeholder="Votre prénom"
                  />
                  <Input
                    label="Nom"
                    type="text"
                    required
                    value={formData?.lastName}
                    onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                    placeholder="Votre nom"
                  />
                </div>

                <Input
                  label="Email professionnel"
                  type="email"
                  required
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  placeholder="votre.email@entreprise.com"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Entreprise"
                    type="text"
                    required
                    value={formData?.company}
                    onChange={(e) => handleInputChange('company', e?.target?.value)}
                    placeholder="Nom de votre entreprise"
                  />
                  <Input
                    label="Téléphone"
                    type="tel"
                    value={formData?.phone}
                    onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Nombre d'employés"
                    required
                    options={employeeRanges}
                    value={formData?.employees}
                    onChange={(value) => handleInputChange('employees', value)}
                    placeholder="Sélectionnez"
                  />
                  <Select
                    label="Secteur d'activité"
                    required
                    options={industryOptions}
                    value={formData?.industry}
                    onChange={(value) => handleInputChange('industry', value)}
                    placeholder="Sélectionnez"
                  />
                </div>

                <Select
                  label="Solution actuelle"
                  required
                  options={currentSolutions}
                  value={formData?.currentSolution}
                  onChange={(value) => handleInputChange('currentSolution', value)}
                  placeholder="Comment gérez-vous actuellement les présences ?"
                />

                {activeForm === 'demo' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Date souhaitée"
                      type="date"
                      value={formData?.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
                      min={getTomorrowDate()}
                    />
                    <Select
                      label="Créneau horaire"
                      options={timeSlots}
                      value={formData?.preferredTime}
                      onChange={(value) => handleInputChange('preferredTime', value)}
                      placeholder="Sélectionnez un horaire"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Défis actuels (optionnel)
                  </label>
                  <textarea
                    value={formData?.challenges}
                    onChange={(e) => handleInputChange('challenges', e?.target?.value)}
                    placeholder="Décrivez vos principaux défis en gestion des présences..."
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName={activeForm === 'demo' ? 'Calendar' : 'Play'}
                  iconPosition="left"
                  className="btn-shadow"
                >
                  {isSubmitting 
                    ? 'Envoi en cours...' 
                    : activeForm === 'demo' ?'Réserver ma démo' :'Commencer l\'essai gratuit'
                  }
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. 
                  Vos données sont protégées selon notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Besoin d'aide pour choisir ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nos experts sont là pour vous accompagner dans votre choix
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Appeler un expert
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Chat en direct
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;