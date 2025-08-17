import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      role: 'Directrice RH',
      company: 'TechCorp France',
      companySize: '450 employés',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      linkedinVerified: true,
      quote: `FaceKey a révolutionné notre gestion des présences. Nous avons économisé 12 heures par semaine et éliminé complètement le buddy punching. Le ROI a été immédiat.`,
      metrics: {
        timeSaved: '80%',
        accuracy: '99.9%',
        satisfaction: '4.9/5'
      },
      beforeAfter: {
        before: 'Gestion manuelle, 15h/semaine, 85% précision',
        after: 'Automatisation complète, 3h/semaine, 99.9% précision'
      },
      videoThumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Marc Dubois',
      role: 'Responsable Paie',
      company: 'Groupe Industriel Lyon',
      companySize: '1200 employés',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      linkedinVerified: true,
      quote: `L'intégration avec notre SIRH s'est faite en quelques clics. Plus d'erreurs de calcul, plus de litiges sur les heures. Notre équipe paie peut enfin se concentrer sur des tâches à valeur ajoutée.`,
      metrics: {
        timeSaved: '75%',accuracy: '99.8%',satisfaction: '4.8/5'
      },
      beforeAfter: {
        before: 'Erreurs fréquentes, litiges, recalculs manuels',after: 'Zéro erreur, calculs automatiques, équipe sereine'
      },
      videoThumbnail: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Claire Rousseau',role: 'IT Manager',company: 'Services Financiers Paris',companySize: '800 employés',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      linkedinVerified: true,
      quote: `La sécurité et la conformité RGPD étaient nos principales préoccupations. FaceKey dépasse toutes nos exigences avec un niveau de sécurité exceptionnel et une documentation complète.`,
      metrics: {
        timeSaved: '70%',accuracy: '99.9%',satisfaction: '5/5'
      },
      beforeAfter: {
        before: 'Préoccupations sécurité, conformité incertaine',after: 'Sécurité maximale, conformité RGPD garantie'
      },
      videoThumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
    }
  ];

  const successMetrics = [
    {
      metric: '10 000+',
      label: 'Employés utilisent FaceKey quotidiennement',
      icon: 'Users'
    },
    {
      metric: '200+',
      label: 'Entreprises nous font confiance',
      icon: 'Building'
    },
    {
      metric: '99.9%',
      label: 'Taux de satisfaction client',
      icon: 'Star'
    },
    {
      metric: '< 30j',
      label: 'Temps d\'amortissement moyen',
      icon: 'TrendingUp'
    }
  ];

  const enterpriseLogos = [
    { name: 'TotalEnergies', industry: 'Énergie' },
    { name: 'Carrefour', industry: 'Distribution' },
    { name: 'Société Générale', industry: 'Banque' },
    { name: 'Airbus', industry: 'Aéronautique' },
    { name: 'Renault', industry: 'Automobile' },
    { name: 'Orange', industry: 'Télécoms' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="temoignages" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Témoignages clients
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ils ont transformé leur{' '}
            <span className="text-primary">gestion RH</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nos clients ont révolutionné leur gestion des présences 
            et obtenu des résultats mesurables dès le premier mois.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Left - Video/Image */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Play" size={32} color="var(--color-primary)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Témoignage vidéo de {testimonials?.[activeTestimonial]?.name}
                  </p>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all duration-250 hover:scale-110">
                  <Icon name="Play" size={24} color="white" />
                </div>
              </div>
            </div>

            {/* Right - Testimonial Content */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="opacity-20 absolute -top-2 -left-2" />
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed pl-8">
                    {testimonials?.[activeTestimonial]?.quote}
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-lg font-medium">
                        {testimonials?.[activeTestimonial]?.name?.split(' ')?.map(n => n?.[0])?.join('')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-foreground">
                        {testimonials?.[activeTestimonial]?.name}
                      </h4>
                      {testimonials?.[activeTestimonial]?.linkedinVerified && (
                        <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                          <Icon name="Check" size={12} color="white" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonials?.[activeTestimonial]?.role}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonials?.[activeTestimonial]?.company} • {testimonials?.[activeTestimonial]?.companySize}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">
                      {testimonials?.[activeTestimonial]?.metrics?.timeSaved}
                    </div>
                    <div className="text-xs text-muted-foreground">Temps économisé</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {testimonials?.[activeTestimonial]?.metrics?.accuracy}
                    </div>
                    <div className="text-xs text-muted-foreground">Précision</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warning">
                      {testimonials?.[activeTestimonial]?.metrics?.satisfaction}
                    </div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>

                {/* Before/After */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="grid gap-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-error/10 text-error rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="X" size={12} />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Avant FaceKey</div>
                        <div className="text-sm text-foreground">
                          {testimonials?.[activeTestimonial]?.beforeAfter?.before}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={12} />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Avec FaceKey</div>
                        <div className="text-sm text-foreground">
                          {testimonials?.[activeTestimonial]?.beforeAfter?.after}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex justify-center space-x-4">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialChange(index)}
                  className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-250 ${
                    activeTestimonial === index
                      ? 'ring-2 ring-primary scale-110' :'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {testimonials?.[index]?.name?.split(' ')?.map(n => n?.[0])?.join('')}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {successMetrics?.map((item, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={item?.icon} size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {item?.metric}
              </div>
              <div className="text-sm text-muted-foreground">
                {item?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">
            Ils nous font confiance pour gérer leurs présences
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {enterpriseLogos?.map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    {company?.name}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {company?.industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl shadow-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-muted-foreground mb-6">
              Découvrez pourquoi plus de 200 entreprises ont choisi FaceKey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Users"
                iconPosition="left"
              >
                Voir tous les témoignages
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Parler à un client
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;