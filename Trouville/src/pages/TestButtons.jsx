// Test simple para verificar que los botones funcionen
import React from 'react';
import Button from '../components/ui/Button';

const TestButtons = () => {
  const handleClick = () => {
    alert('¡Botón funcionando!');
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Test de Botones</h1>
      
      <Button onClick={handleClick} variant="primary">
        Botón Primario
      </Button>
      
      <Button onClick={handleClick} variant="secondary">
        Botón Secundario
      </Button>
      
      <Button onClick={handleClick} variant="accent">
        Botón Accent
      </Button>
      
      <Button onClick={handleClick} variant="outline">
        Botón Outline
      </Button>
      
      <div className="mt-8">
        <button 
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Botón HTML Simple
        </button>
      </div>
    </div>
  );
};

export default TestButtons;
