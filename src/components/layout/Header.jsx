// Componente Header - Principio SRP (Single Responsibility)
// Responsabilidad única: manejar la navegación y el header del sitio
// Diseño simple y limpio

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: 'Inicio' },
    { path: '/inscripciones', label: 'Inscripciones' },
    { path: '/entrenamientos', label: 'Entrenamientos' },
    { path: '/galeria', label: 'Galería' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo oficial */}
          <Link to="/">
            <Logo className="w-12 h-12" showText={true} textSize="text-xl" />
          </Link>

                  {/* Desktop Navigation - Simple */}
                  <nav className="hidden md:flex items-center space-x-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'bg-primary-500 text-white'
                            : 'text-gray-700 hover:text-primary-500 hover:bg-primary-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

          {/* CTA Button - Removed */}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-500"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Simple */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-700 hover:text-primary-500 hover:bg-primary-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
