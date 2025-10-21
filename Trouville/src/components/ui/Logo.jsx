// Componente Logo - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar el logo del club

import React from 'react';

const Logo = ({ 
  className = "w-8 h-8", 
  showText = false, 
  textSize = "text-sm",
  variant = "default" 
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img
        src="/trouville.png"
        alt="Trouville Rugby Femenino"
        className="w-full h-full object-contain"
      />
      {showText && (
        <span className={`font-bold text-primary-500 ${textSize}`}>
          Trouville Rugby
        </span>
      )}
    </div>
  );
};

export default Logo;
