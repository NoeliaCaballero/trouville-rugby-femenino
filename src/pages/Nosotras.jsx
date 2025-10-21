// Página Nosotras - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar información sobre el club, historia y misión

import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { clubInfo, coaches } from '../services/clubService';

const Nosotras = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section
        title="Nosotras"
        subtitle="Conoce la historia y valores de Trouville Rugby Femenino"
        variant="primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            Somos más que un club de rugby, somos una comunidad que transforma vidas a través del deporte.
          </p>
        </div>
      </Section>

      {/* Historia */}
      <Section
        title="Nuestra Historia"
        subtitle="Desde 2018 construyendo el rugby femenino en Uruguay"
      >
        <div className="max-w-4xl mx-auto">
          <Card>
            <Card.Body>
              <p className="text-lg text-gray-700 mb-6">
                {clubInfo.history}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
                  <p className="text-gray-600">{clubInfo.mission}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Nuestra Visión</h3>
                  <p className="text-gray-600">{clubInfo.vision}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Valores */}
      <Section
        title="Nuestros Valores"
        subtitle="Los pilares que nos guían cada día"
        variant="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubInfo.values.map((value, index) => (
            <Card key={index} hover className="text-center">
              <Card.Body>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-500 text-2xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{value}</h3>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* Logros */}
      <Section
        title="Nuestros Logros"
        subtitle="Momentos que nos llenan de orgullo"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubInfo.achievements.map((achievement, index) => (
            <Card key={index} variant="outlined">
              <Card.Body>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-500 text-xl">🏆</span>
                  </div>
                  <p className="text-lg font-medium">{achievement}</p>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* Entrenadoras */}
      <Section
        title="Nuestro Staff Técnico"
        subtitle="Profesionales apasionadas por el rugby femenino"
        variant="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <Card key={coach.name} hover>
              <div className="aspect-square bg-gray-200 rounded-t-lg mb-4">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <Card.Body>
                <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>
                <p className="text-secondary-600 font-medium mb-2">{coach.position}</p>
                <p className="text-sm text-gray-500 mb-3">{coach.experience} de experiencia</p>
                <p className="text-gray-600 mb-4">{coach.bio}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonios */}
      <Section
        title="Lo que dicen nuestras jugadoras"
        subtitle="Testimonios reales de nuestra comunidad"
        variant="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <Card.Body>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-500 font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ana Rodríguez</h4>
                  <p className="text-sm text-gray-500">Apertura</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Trouville no solo me enseñó rugby, me enseñó valores que aplico en mi vida diaria. 
                Es mi segunda familia."
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-secondary-500 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">María González</h4>
                  <p className="text-sm text-gray-500">Segunda línea</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Llegué sin saber nada de rugby y ahora soy capitana. 
                El club me dio confianza y me ayudó a crecer como persona."
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-500 font-bold">L</span>
                </div>
                <div>
                  <h4 className="font-semibold">Laura Martínez</h4>
                  <p className="text-sm text-gray-500">Wing</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "El ambiente de Trouville es único. Aquí todas nos apoyamos 
                y celebramos los logros de cada una. Es increíble."
              </p>
            </Card.Body>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Nosotras;
