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
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Botones con onClick:</h2>
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
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Botones con navegación (Link):</h2>
        <Button to="/" variant="primary">
          Ir a Home
        </Button>
        
        <Button to="/inscripciones" variant="secondary">
          Ir a Inscripciones
        </Button>
        
        <Button to="/entrenamientos" variant="accent">
          Ir a Entrenamientos
        </Button>
        
        <Button to="/galeria" variant="outline">
          Ir a Galería
        </Button>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Botón HTML Simple:</h2>
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
