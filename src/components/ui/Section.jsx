// Componente Section - Principio SRP (Single Responsibility) y OCP (Open/Closed)
// Responsabilidad única: crear secciones con diferentes estilos
// Abierto para extensión: nuevas variantes sin modificar código base

import React from 'react';

const Section = ({ 
  children, 
  title, 
  subtitle, 
  variant = 'default',
  className = '',
  container = true,
  ...props 
}) => {
  const variants = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
    dark: 'bg-gray-900 text-white'
  };
  
  const textColor = variant === 'default' || variant === 'gray' ? 'text-gray-900' : 'text-white';
  const subtitleColor = variant === 'default' || variant === 'gray' ? 'text-gray-600' : 'text-gray-200';
  
  return (
    <section className={`${variants[variant]} section-padding ${className}`} {...props}>
      {container ? (
        <div className="container-max">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-lg md:text-xl max-w-3xl mx-auto ${subtitleColor}`}>
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
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-lg md:text-xl max-w-3xl mx-auto ${subtitleColor}`}>
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

export default Section;
