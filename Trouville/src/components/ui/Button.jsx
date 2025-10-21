// Componente Button - Principio SRP (Single Responsibility)
// Responsabilidad única: renderizar botones reutilizables
// Principio OCP: extensible sin modificar código base

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  to, // Nueva prop para enlaces
  href, // Para enlaces externos
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none inline-block text-center';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-card hover:shadow-card-hover focus:ring-primary-500',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-card hover:shadow-card-hover focus:ring-secondary-500',
    accent: 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-card hover:shadow-card-hover focus:ring-primary-500',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white shadow-card hover:shadow-card-hover focus:ring-primary-500',
    ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-card hover:shadow-card-hover focus:ring-red-500'
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
    xlarge: 'px-8 py-4 text-xl'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Si tiene 'to', renderizar como Link interno
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  // Si tiene 'href', renderizar como enlace externo
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Si no tiene 'to' ni 'href', renderizar como botón normal
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
