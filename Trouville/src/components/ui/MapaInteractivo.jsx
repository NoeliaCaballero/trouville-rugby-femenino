// Componente MapaInteractivo - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar mapa interactivo del club

import React from 'react';

const MapaInteractivo = ({
  lat = -34.9011,
  lng = -56.1645,
  address = "Rambla Gandhi y Solano García, Montevideo",
  googleMapsLink = "https://maps.app.goo.gl/egzcBLNDHhnx2wfK6",
  className = "w-full h-96"
}) => {
  const handleOpenMaps = () => {
    // Abrir Google Maps con el enlace específico del club
    window.open(googleMapsLink, '_blank');
  };

  return (
    <div className={`${className} bg-gray-100 rounded-lg overflow-hidden relative`}>
      {/* Imagen de fondo con overlay */}
      <div className="relative w-full h-full">
        <img
          src="/direccion.png"
          alt={`Ubicación de Trouville Rugby - ${address}`}
          className="w-full h-full object-cover"
        />

        {/* Overlay con información */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Trouville Rugby Femenino</h3>
            <p className="text-lg mb-4">{address}</p>

            {/* Botones de navegación */}
            <div className="flex justify-center">
              <button
                onClick={handleOpenMaps}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>🗺️</span>
                <span>Google Maps</span>
              </button>
            </div>

            {/* Coordenadas */}
            <p className="text-sm text-gray-300 mt-4">
              Coordenadas: {lat}, {lng}
            </p>
          </div>
        </div>

        {/* Indicador de ubicación */}
        <div className="absolute top-4 right-4">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <div className="w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaInteractivo;
