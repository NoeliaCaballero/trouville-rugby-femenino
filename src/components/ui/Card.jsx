// Componente Card - Principio SRP (Single Responsibility) y OCP (Open/Closed)
// Responsabilidad única: renderizar tarjetas con diferentes estilos
// Abierto para extensión: nuevas variantes sin modificar código base
// Diseño moderno y femenino

import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'border border-white/20',
    elevated: 'shadow-xl',
    outlined: 'border-2 border-primary-200',
    filled: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50 border border-primary-200',
    gradient: 'bg-gradient-to-br from-white via-primary-50 to-secondary-50 border border-white/30',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20'
  };
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-2 hover:bg-white/90 hover:scale-105' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Componente CardHeader - Principio ISP (Interface Segregation)
const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-white/20 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 ${className}`}>
    {children}
  </div>
);

// Componente CardBody - Principio ISP (Interface Segregation)
const CardBody = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

// Componente CardFooter - Principio ISP (Interface Segregation)
const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-white/20 bg-gradient-to-r from-neutral-50/50 to-primary-50/50 ${className}`}>
    {children}
  </div>
);

// Exportar componentes individuales y compuestos
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
