import React, { useEffect } from 'react';
import StickyHeader from '../../components/ui/StickyHeader';
import ScrollProgress from '../../components/ui/ScrollProgress';
import CTAFloat from '../../components/ui/CTAFloat';
import BackToTop from '../../components/ui/BackToTop';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import DashboardPreview from './components/DashboardPreview';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import DemoSection from './components/DemoSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'FaceKey - Solution de Reconnaissance Faciale pour la Gestion des Présences';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 
        'Transformez votre gestion des présences avec FaceKey. 99.9% de précision, conformité RGPD, économisez 15h/semaine. Essai gratuit 14 jours.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "FaceKey",
      "description": "Solution de reconnaissance faciale pour la gestion des présences en entreprise",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "2.50",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "2.50",
          "priceCurrency": "EUR",
          "unitText": "par employé par mois"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "200"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head?.appendChild(script);

    // Cleanup
    return () => {
      document.head?.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed UI Elements */}
      <StickyHeader />
      <ScrollProgress />
      <CTAFloat />
      <BackToTop />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Dashboard Preview */}
        <DashboardPreview />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Demo Section */}
        <DemoSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;