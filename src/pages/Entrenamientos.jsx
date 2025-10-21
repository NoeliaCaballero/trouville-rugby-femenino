// Página Entrenamientos - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar horarios, ubicación y entrenadoras

import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import MapaInteractivo from '../components/ui/MapaInteractivo';
import { trainingSchedule } from '../services/clubService';

const Entrenamientos = () => {
  const { location, address, coordinates, googleMapsLink, sessions } = trainingSchedule;

  return (
    <div>
      {/* Hero Section */}
      <Section
        title="Entrenamientos"
        subtitle="Horarios, ubicación y nuestro staff técnico"
        variant="primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            Entrenamos con pasión y dedicación para desarrollar el mejor rugby femenino de Montevideo.
          </p>
        </div>
      </Section>

      {/* Ubicación */}
      <Section
        title="Nuestra Cancha"
        subtitle="Rambla Gandhi y Solano García"
      >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div>
            <Card>
              <Card.Body>
                <h3 className="text-xl font-semibold mb-4">{location}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">📍</span>
                    <div>
                      <p className="font-medium">Dirección:</p>
                      <p className="text-gray-600">{address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button
                    variant="primary"
                    onClick={() => window.open(googleMapsLink, '_blank')}
                  >
                    Ver en Google Maps
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          
          <div>
            <MapaInteractivo 
              lat={coordinates.lat}
              lng={coordinates.lng}
              address={address}
              googleMapsLink={googleMapsLink}
              className="w-full h-96"
            />
          </div>
        </div>
      </Section>

      {/* Horarios */}
      <Section
        title="Horarios de Entrenamiento"
        subtitle="Planifica tu semana con nuestros horarios"
        variant="gray"
      >
        <div className="max-w-4xl mx-auto">
          <Card>
            <Card.Body>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold">Día</th>
                      <th className="text-left py-3 px-4 font-semibold">Horario</th>
                      <th className="text-left py-3 px-4 font-semibold">Categoría</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.map((session, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{session.day}</td>
                        <td className="py-3 px-4">{session.time}</td>
                        <td className="py-3 px-4">
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                            {session.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Entrenamientos;
