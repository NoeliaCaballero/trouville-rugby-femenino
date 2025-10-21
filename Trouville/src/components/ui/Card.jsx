// Componente Card - Principio SRP (Single Responsibility)
// Responsabilidad única: renderizar tarjetas reutilizables
// Principio ISP: interfaces específicas para cada parte de la card

import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  const variants = {
    default: 'bg-white rounded-lg shadow-card border border-gray-100',
    elevated: 'bg-white rounded-lg shadow-lg border border-gray-200',
    outlined: 'bg-white rounded-lg border-2 border-gray-200',
    filled: 'bg-gray-50 rounded-lg border border-gray-200',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg shadow-card border border-primary-200',
    glass: 'bg-white/10 backdrop-blur-sm rounded-lg border border-white/20'
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-t border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
