import React from 'react';
import Icon from '../../../components/AppIcon';


const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Produit',
      links: [
        { label: 'Fonctionnalités', href: '#solution' },
        { label: 'Tarifs', href: '#tarifs' },
        { label: 'Sécurité', href: '#securite' },
        { label: 'Intégrations', href: '#integrations' },
        { label: 'API', href: '#api' },
        { label: 'Nouveautés', href: '#changelog' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Petites entreprises', href: '#pme' },
        { label: 'Moyennes entreprises', href: '#eti' },
        { label: 'Grandes entreprises', href: '#enterprise' },
        { label: 'Secteur public', href: '#public' },
        { label: 'Industrie', href: '#industrie' },
        { label: 'Services', href: '#services' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Guides', href: '#guides' },
        { label: 'Blog', href: '#blog' },
        { label: 'Webinaires', href: '#webinaires' },
        { label: 'Cas clients', href: '#cas-clients' },
        { label: 'Centre d\'aide', href: '#aide' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { label: 'À propos', href: '#about' },
        { label: 'Carrières', href: '#careers' },
        { label: 'Presse', href: '#presse' },
        { label: 'Partenaires', href: '#partenaires' },
        { label: 'Contact', href: '#contact' },
        { label: 'Investisseurs', href: '#investors' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#linkedin' },
    { name: 'Twitter', icon: 'Twitter', href: '#twitter' },
    { name: 'Facebook', icon: 'Facebook', href: '#facebook' },
    { name: 'YouTube', icon: 'Youtube', href: '#youtube' }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Sécurité de l\'information' },
    { name: 'RGPD', description: 'Conformité européenne' },
    { name: 'SOC 2', description: 'Contrôles de sécurité' },
    { name: 'HDS', description: 'Hébergement données santé' }
  ];

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element?.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Scan" size={24} color="white" />
                </div>
                <span className="text-2xl font-bold text-foreground">FaceKey</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-md">
                La solution de reconnaissance faciale la plus avancée pour la gestion 
                des présences. Transformez votre RH avec 99.9% de précision et une 
                conformité RGPD garantie.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>123 Avenue des Champs-Élysées, 75008 Paris</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Icon name="Phone" size={16} />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Icon name="Mail" size={16} />
                  <span>contact@facekey.fr</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks?.map((social) => (
                  <button
                    key={social?.name}
                    onClick={() => handleLinkClick(social?.href)}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-250"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections?.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-foreground">{section?.title}</h4>
                <ul className="space-y-3">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => handleLinkClick(link?.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link?.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-border">
          <div className="text-center mb-8">
            <h4 className="font-semibold text-foreground mb-4">
              Certifications et conformité
            </h4>
            <p className="text-sm text-muted-foreground">
              FaceKey respecte les plus hauts standards de sécurité et de conformité
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={20} />
                </div>
                <div className="font-medium text-foreground text-sm mb-1">
                  {cert?.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {cert?.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-border">
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Restez informé des nouveautés
              </h4>
              <p className="text-muted-foreground">
                Recevez nos dernières actualités, guides et conseils RH directement dans votre boîte mail
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="votre.email@entreprise.com"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-250 flex items-center space-x-2">
                  <span>S'abonner</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Pas de spam. Désabonnement en un clic.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} FaceKey SAS. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Mentions légales
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Politique de confidentialité
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Conditions d'utilisation
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Cookies
              </button>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="py-6 border-t border-border bg-muted/20">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ils nous font confiance pour sécuriser leurs données
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                'Microsoft Azure',
                'AWS',
                'Google Cloud',
                'OVHcloud',
                'Scaleway'
              ]?.map((partner, index) => (
                <div key={index} className="text-xs font-medium text-muted-foreground">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;