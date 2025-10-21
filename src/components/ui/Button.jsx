// Componente Button - Principio SRP (Single Responsibility) y OCP (Open/Closed)
// Responsabilidad única: renderizar botones con diferentes variantes
// Abierto para extensión: nuevas variantes sin modificar código base
// Diseño moderno y femenino

import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-secondary-500 text-white focus:ring-primary-200 shadow-card hover:shadow-glow-red',
    secondary: 'bg-secondary-500 hover:bg-primary-500 text-white focus:ring-secondary-200 shadow-card hover:shadow-glow-blue',
    accent: 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-secondary-500 hover:to-primary-500 text-white focus:ring-primary-200 shadow-card hover:shadow-glow-red',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-200 hover:shadow-glow-red',
    ghost: 'text-primary-500 hover:bg-primary-50 hover:text-primary-600 focus:ring-primary-200 hover:shadow-soft'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
