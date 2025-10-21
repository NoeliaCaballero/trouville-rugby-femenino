// Componente Hero - Principio SRP (Single Responsibility) y OCP (Open/Closed)
// Responsabilidad única: mostrar sección hero con diferentes variantes
// Abierto para extensión: nuevas variantes sin modificar código base

import React from 'react';
import Button from './Button';

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  primaryAction, 
  secondaryAction,
  backgroundImage,
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-gradient-to-r from-primary-500 to-primary-700',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-700',
    image: 'bg-cover bg-center bg-no-repeat',
    split: 'bg-white'
  };
  
  const textColor = variant === 'split' ? 'text-gray-900' : 'text-white';
  const overlay = variant === 'image' ? 'bg-black bg-opacity-50' : '';
  
  const backgroundStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};
  
  return (
    <section 
      className={`${variants[variant]} ${overlay} section-padding ${className}`}
      style={backgroundStyle}
    >
      <div className="container-max">
        <div className={`${variant === 'split' ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : 'text-center max-w-4xl mx-auto'}`}>
          {/* Contenido de texto */}
          <div className={`${variant === 'split' ? '' : 'text-center'}`}>
            {title && (
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${textColor}`}>
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 className={`text-xl md:text-2xl font-semibold mb-4 ${textColor}`}>
                {subtitle}
              </h2>
            )}
            {description && (
              <p className={`text-lg md:text-xl mb-8 ${variant === 'split' ? 'text-gray-600' : textColor}`}>
                {description}
              </p>
            )}
            
            {/* Acciones */}
            {(primaryAction || secondaryAction) && (
              <div className={`flex flex-col sm:flex-row gap-4 ${variant === 'split' ? '' : 'justify-center'}`}>
                {primaryAction && (
                  <Button
                    variant={variant === 'split' ? 'primary' : 'secondary'}
                    size="large"
                    onClick={primaryAction.onClick}
                    className="w-full sm:w-auto"
                  >
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button
                    variant={variant === 'split' ? 'outline' : 'ghost'}
                    size="large"
                    onClick={secondaryAction.onClick}
                    className="w-full sm:w-auto"
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          
          {/* Imagen para variante split */}
          {variant === 'split' && backgroundImage && (
            <div className="relative">
              <img
                src={backgroundImage}
                alt={title || 'Imagen del equipo'}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
