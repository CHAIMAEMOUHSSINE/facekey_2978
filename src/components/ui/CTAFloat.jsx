import React, { useState, useEffect } from 'react';
import Button from './Button';


const CTAFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCTA, setCurrentCTA] = useState('demo');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement?.scrollHeight;
      
      // Show after scrolling 50% of viewport height
      const shouldShow = scrollY > windowHeight * 0.5;
      
      // Hide when near bottom (last 200px)
      const nearBottom = scrollY + windowHeight >= documentHeight - 200;
      
      setIsVisible(shouldShow && !nearBottom);
      
      // Determine CTA based on current section
      const sections = ['accueil', 'solution', 'avantages', 'temoignages', 'tarifs', 'demo'];
      const scrollPosition = scrollY + 100;
      
      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections?.[i]);
        if (section && section?.offsetTop <= scrollPosition) {
          if (sections?.[i] === 'tarifs' || sections?.[i] === 'demo') {
            setCurrentCTA('demo');
          } else {
            setCurrentCTA('trial');
          }
          break;
        }
      }
      
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleCTAClick = () => {
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <div className="hidden sm:block">
        <Button
          variant={currentCTA === 'demo' ? 'default' : 'secondary'}
          size="lg"
          onClick={handleCTAClick}
          className="btn-shadow hover:scale-105 transition-transform duration-250"
          iconName={currentCTA === 'demo' ? 'Calendar' : 'Play'}
          iconPosition="left"
        >
          {currentCTA === 'demo' ? 'Réserver Démo' : 'Essai Gratuit'}
        </Button>
      </div>
      
      {/* Mobile version - bottom sticky bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-card">
        <Button
          variant={currentCTA === 'demo' ? 'default' : 'secondary'}
          size="lg"
          fullWidth
          onClick={handleCTAClick}
          iconName={currentCTA === 'demo' ? 'Calendar' : 'Play'}
          iconPosition="left"
        >
          {currentCTA === 'demo' ? 'Réserver une Démo' : 'Essai Gratuit'}
        </Button>
      </div>
    </div>
  );
};

export default CTAFloat;