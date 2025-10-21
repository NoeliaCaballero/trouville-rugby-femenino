// Componente Logo - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar el logo del club
// Logo oficial de Trouville Rugby Femenino

import React from 'react';

const Logo = ({ 
  className = "w-10 h-10", 
  showText = false, 
  textSize = "text-xl",
  variant = "default" 
}) => {
  const variants = {
    default: "object-contain",
    rounded: "object-contain rounded-lg",
    circle: "object-contain rounded-full"
  };

  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/trouville.png" 
        alt="Trouville Rugby Femenino" 
        className={`${className} ${variants[variant]}`}
      />
      {showText && (
        <div>
          <h1 className={`font-display ${textSize} font-bold text-primary-500`}>
            Trouville
          </h1>
          <p className="text-xs text-gray-600">Rugby Femenino</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
