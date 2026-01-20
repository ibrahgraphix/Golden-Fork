
import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, ChevronLeft } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  view: 'home' | 'full-menu';
  onViewChange: (view: 'home' | 'full-menu') => void;
}

const Navbar: React.FC<NavbarProps> = ({ view, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (view === 'full-menu') {
      onViewChange('home');
      // Small timeout to allow state change before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-[60] transition-all duration-300 ${scrolled || view === 'full-menu' ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onViewChange('home')} 
          className="flex items-center space-x-2 group"
        >
          <div className="bg-brand-gold p-2 rounded-full transition-transform group-hover:scale-110">
            <Utensils className="text-white w-5 h-5" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${scrolled || view === 'full-menu' ? 'text-brand-gold' : 'text-white'}`}>
            Golden Fork
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {view === 'full-menu' ? (
            <button
              onClick={() => onViewChange('home')}
              className="flex items-center text-sm font-medium uppercase tracking-widest text-white hover:text-brand-gold transition-colors"
            >
              <ChevronLeft className="mr-2 w-4 h-4" />
              Back to Home
            </button>
          ) : (
            NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-gold ${scrolled ? 'text-gray-300' : 'text-white/90'}`}
              >
                {link.label}
              </a>
            ))
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-dark transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        {view === 'full-menu' ? (
           <button
            onClick={() => { onViewChange('home'); setIsOpen(false); }}
            className="text-2xl font-serif text-brand-gold flex items-center"
          >
            <ChevronLeft className="mr-2 w-6 h-6" />
            Back to Home
          </button>
        ) : (
          NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-2xl font-serif text-gray-300 hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))
        )}
      </div>
    </nav>
  );
};

export default Navbar;
