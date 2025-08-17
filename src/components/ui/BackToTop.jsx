import React, { useState, useEffect } from 'react';

import Icon from '../AppIcon';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Show after 50% scroll progress
      setIsVisible(scrollPercent > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-muted hover:bg-muted-foreground/10 border border-border rounded-full flex items-center justify-center transition-all duration-250 ease-in-out hover:scale-110 shadow-card animate-fade-in"
      aria-label="Back to top"
    >
      <Icon name="ChevronUp" size={20} color="var(--color-muted-foreground)" />
    </button>
  );
};

export default BackToTop;