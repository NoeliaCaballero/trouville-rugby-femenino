// Página Inscripciones - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar información de inscripciones

import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { categories } from '../services/clubService';

const Inscripciones = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section
        title="Inscripciones"
        subtitle="Únete a Trouville Rugby Femenino"
        variant="primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            Estamos buscando nuevas jugadoras para fortalecer nuestro equipo. 
            ¡No importa tu experiencia previa, todas son bienvenidas!
          </p>
        </div>
      </Section>

              {/* Categorías */}
              <Section
                title="Categorías Disponibles"
                subtitle="Elige la categoría que mejor se adapte a tu edad y experiencia"
                variant="gray"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="card-modern">
              <Card.Body className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">
                      {category.name === 'Juveniles' ? 'J' : 'M'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Edad:</span>
                    <span className="text-gray-600">{category.ageRange}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Horarios:</span>
                    <span className="text-gray-600">{category.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Horario:</span>
                    <span className="text-gray-600">{category.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Costo:</span>
                    <span className="text-primary-500 font-bold text-lg">{category.price}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* Información de Contacto */}
      <Section
        title="¿Cómo inscribirse?"
        subtitle="Contacta con nosotros para comenzar tu aventura rugbística"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-modern">
              <Card.Body className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Contacto Directo</h3>
                  <p className="text-gray-600 mb-6">
                    Envíanos un email con tus datos y te contactaremos para coordinar tu primera práctica.
                  </p>
                  <Button
                    variant="primary"
                    size="large"
                    onClick={() => window.location.href = 'mailto:noelia.caballero212@gmail.com?subject=Inscripción Trouville Rugby'}
                    className="w-full"
                  >
                    Enviar Email
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-modern">
              <Card.Body className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏃‍♀️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ven a Conocernos</h3>
                  <p className="text-gray-600 mb-6">
                    Puedes venir directamente a nuestros entrenamientos. El primer día es gratuito.
                  </p>
                  <Button
                    variant="secondary"
                    size="large"
                    onClick={() => window.location.href = '/entrenamientos'}
                    className="w-full"
                  >
                    Ver Horarios
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Section>

      {/* Información Importante */}
      <Section
        title="Información Importante"
        subtitle="Lo que necesitas saber antes de comenzar"
        variant="gray"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-modern border-l-4 border-l-primary-500">
              <Card.Body className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-500">Requisitos</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Ropa deportiva cómoda</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Botas de rugby o zapatillas con tapones</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Protector bucal</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Botella de agua</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Actitud positiva y ganas de aprender</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-modern border-l-4 border-l-secondary-500">
              <Card.Body className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-500">Beneficios</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Primer mes completamente gratuito</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Entrenamiento profesional</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Ambiente familiar y de apoyo</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Desarrollo físico y mental</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Participación en torneos</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Amistades para toda la vida</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section
        title="¿Lista para comenzar?"
        subtitle="Únete a nuestra familia rugbística"
        variant="primary"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-primary-100 mb-8">
            No esperes más. El rugby femenino te está esperando en Trouville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="large"
              onClick={() => window.location.href = 'mailto:noelia.caballero212@gmail.com?subject=Inscripción Trouville Rugby'}
            >
              Contactar Ahora
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => window.location.href = '/entrenamientos'}
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Ver Entrenamientos
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Inscripciones;