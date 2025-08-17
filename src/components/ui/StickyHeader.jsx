import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyHeader = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'accueil', label: 'Accueil', href: '#accueil' },
    { id: 'solution', label: 'Solution', href: '#solution' },
    { id: 'avantages', label: 'Avantages', href: '#avantages' },
    { id: 'temoignages', label: 'Témoignages', href: '#temoignages' },
    { id: 'tarifs', label: 'Tarifs', href: '#tarifs' },
    { id: 'demo', label: 'Démo', href: '#demo' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navigationItems?.map(item => document.getElementById(item?.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = sections?.[i];
        if (section && section?.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems?.[i]?.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-250 ease-in-out ${
      isScrolled ? 'shadow-card border-b border-border' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Scan" size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-foreground font-inter">FaceKey</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <button
                key={item?.id}
                onClick={() => handleNavClick(item?.href)}
                className={`text-sm font-medium transition-colors duration-250 ease-in-out hover:text-primary ${
                  activeSection === item?.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item?.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick('#demo')}
            >
              Essai Gratuit
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleNavClick('#demo')}
              className="btn-shadow"
            >
              Réserver une Démo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-250"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-card animate-slide-down">
            <nav className="px-6 py-4 space-y-4">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => handleNavClick(item?.href)}
                  className={`block w-full text-left text-sm font-medium transition-colors duration-250 ease-in-out hover:text-primary ${
                    activeSection === item?.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => handleNavClick('#demo')}
                >
                  Essai Gratuit
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  onClick={() => handleNavClick('#demo')}
                  className="btn-shadow"
                >
                  Réserver une Démo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;