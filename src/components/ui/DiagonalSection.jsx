// Componente DiagonalSection - Principio SRP (Single Responsibility)
// Responsabilidad única: crear secciones con formas dinámicas y diagonales
// Diseño estético moderno para rugby femenino

import React from 'react';

const DiagonalSection = ({ 
  children, 
  title, 
  subtitle, 
  variant = 'default',
  className = '',
  container = true,
  diagonal = 'normal',
  ...props 
}) => {
  const variants = {
    default: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
    diagonal: 'bg-diagonal text-white',
    diagonalReverse: 'bg-diagonal-reverse text-white'
  };
  
  const diagonalClasses = {
    normal: 'clip-path-diagonal',
    reverse: 'clip-path-diagonal-reverse',
    wave: 'clip-path-wave'
  };
  
  const textColor = variant === 'default' || variant === 'gray' ? 'text-neutral-900' : 'text-white';
  const subtitleColor = variant === 'default' || variant === 'gray' ? 'text-neutral-600' : 'text-white/90';
  
  return (
    <section className={`${variants[variant]} ${diagonalClasses[diagonal]} ${className}`} {...props}>
      {container ? (
        <div className="container-max">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className={`text-section-title md:text-section-title font-display font-black mb-4 ${textColor}`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-lg md:text-xl max-w-3xl mx-auto font-light ${subtitleColor}`}>
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      ) : (
        <>
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className={`text-section-title md:text-section-title font-display font-black mb-4 ${textColor}`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-lg md:text-xl max-w-3xl mx-auto font-light ${subtitleColor}`}>
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </>
      )}
    </section>
  );
};

export default DiagonalSection;
