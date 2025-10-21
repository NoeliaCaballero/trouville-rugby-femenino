// Componente Section - Principio SRP (Single Responsibility)
// Responsabilidad única: crear secciones con título y subtítulo

import React from 'react';

const Section = ({ 
  children, 
  title, 
  subtitle, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white',
    secondary: 'bg-gradient-to-br from-secondary-500 to-primary-500 text-white'
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <section className={classes} {...props}>
      <div className="container-max section-padding">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                variant === 'primary' || variant === 'secondary' 
                  ? 'text-white' 
                  : 'text-gray-900'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
                variant === 'primary' || variant === 'secondary' 
                  ? 'text-white/90' 
                  : 'text-gray-600'
              }`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
