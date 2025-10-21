// Página Home - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar la página de inicio del club
// Diseño estético moderno con storytelling y imágenes reales

import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { clubInfo } from '../services/clubService';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section Simple */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(211, 47, 47, 0.8), rgba(26, 35, 126, 0.8)), url('/backgroundImage.jpeg')`
        }}
      >
        <div className="container-max text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 px-4">
            Trouville Rugby Femenino
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            "El rugby también es nuestro"
          </p>
          <div className="flex flex-col items-center space-y-3 md:space-y-4 px-4">
            <Button
              variant="accent"
              size="large"
              onClick={() => window.location.href = '/inscripciones'}
              className="text-lg sm:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-primary-500 hover:bg-primary-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-glow-red border-2 border-white/20 hover:border-white/40 w-full sm:w-auto"
            >
              <span className="font-black tracking-wide">SUMATE AL EQUIPO</span>
            </Button>
            
            <p className="text-white/80 text-xs sm:text-sm font-medium">
              Primer mes GRATIS
            </p>
          </div>
        </div>
      </section>

      {/* Sección de crecimiento y comunidad */}
      <Section
        title="Un equipo en crecimiento"
        subtitle="Únete a nuestra comunidad rugbística"
        variant="gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="card-modern text-center">
            <Card.Body className="p-6">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-500">Creciendo Juntas</h3>
              <p className="text-gray-600">
                Somos un equipo que está creciendo día a día. Cada nueva jugadora nos hace más fuertes.
              </p>
            </Card.Body>
          </Card>

          <Card className="card-modern text-center">
            <Card.Body className="p-6">
              <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-500">Pioneras del Rugby</h3>
              <p className="text-gray-600">
                Estamos abriendo camino para que más mujeres descubran este deporte en Uruguay.
              </p>
            </Card.Body>
          </Card>

          <Card className="card-modern text-center">
            <Card.Body className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Desde Cero</h3>
              <p className="text-gray-600">
                No necesitas experiencia previa. Te enseñamos todo desde el primer día.
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">
              ¿Nunca jugaste rugby? No hay problema
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              El rugby femenino está creciendo en Uruguay y queremos que seas parte de esta historia. 
              No importa si nunca tocaste una pelota ovalada, aquí aprenderás paso a paso, 
              rodeada de compañeras que también están comenzando.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Lo que aprenderás:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fundamentos básicos del rugby</li>
                  <li>• Trabajo en equipo y comunicación</li>
                  <li>• Condición física y resistencia</li>
                  <li>• Valores deportivos y disciplina</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Lo que ganarás:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Amistades para toda la vida</li>
                  <li>• Confianza y autoestima</li>
                  <li>• Fortaleza física y mental</li>
                  <li>• Pertenecer a una familia rugbística</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA final elegante */}
      <Section
        title="¿Lista para ser parte de la historia?"
        subtitle="Únete a Trouville Rugby Femenino"
        variant="primary"
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/20">
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              No importa tu experiencia previa. Todas las mujeres son bienvenidas en nuestro equipo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button
                variant="accent"
                size="large"
                onClick={() => window.location.href = '/inscripciones'}
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-white to-gray-100 text-primary-600 hover:from-gray-100 hover:to-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold w-full sm:w-auto"
              >
                Inscribirse ahora
              </Button>
              <Button
                variant="outline"
                size="large"
                onClick={() => window.location.href = '/entrenamientos'}
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-white/60 text-white hover:bg-white/10 hover:border-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-lg font-bold w-full sm:w-auto"
              >
                Ver entrenamientos
              </Button>
            </div>
            
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs md:text-sm">
                Primer mes gratuito • Sin experiencia necesaria • Ambiente familiar
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;