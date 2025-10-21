// Página Comunidad - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar sponsors, formas de apoyo y comunidad

import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { sponsors, supportOptions, socialMedia } from '../services/communityService';

const Comunidad = () => {
  return (
    <div>
      {/* Hero Section */}
      <Section
        title="Comunidad"
        subtitle="Juntos construimos el rugby femenino en Uruguay"
        variant="primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            Trouville Rugby Femenino existe gracias al apoyo de nuestra comunidad. 
            Conoce cómo puedes ser parte de nuestro crecimiento.
          </p>
        </div>
      </Section>

      {/* Sponsors */}
      <Section
        title="Nuestros Sponsors"
        subtitle="Empresas que creen en el rugby femenino"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.id} hover className="text-center">
              <Card.Body>
                <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-1">{sponsor.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{sponsor.category}</p>
                <p className="text-xs text-gray-600">{sponsor.description}</p>
                <Button
                  variant="ghost"
                  size="small"
                  className="mt-2"
                  onClick={() => window.open(sponsor.website, '_blank')}
                >
                  Visitar sitio
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* Formas de Apoyo */}
      <Section
        title="Cómo Apoyar al Club"
        subtitle="Diferentes formas de contribuir con Trouville"
        variant="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <Card key={index} hover>
              <Card.Body>
                <h3 className="text-xl font-semibold mb-4">{option.type}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Beneficios:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">✓</span>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">Contacto:</p>
                  <a
                    href={`mailto:${option.contact}`}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    {option.contact}
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* Estadísticas */}
      <Section
        title="Nuestro Impacto"
        subtitle="Números que nos llenan de orgullo"
        variant="secondary"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-100 mb-2">50+</div>
            <p className="text-secondary-200">Jugadoras activas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-100 mb-2">6</div>
            <p className="text-secondary-200">Años de historia</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-100 mb-2">15+</div>
            <p className="text-secondary-200">Partidos por temporada</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-100 mb-2">100%</div>
            <p className="text-secondary-200">Amateur</p>
          </div>
        </div>
      </Section>

      {/* Testimonios de Sponsors */}
      <Section
        title="Lo que dicen nuestros sponsors"
        subtitle="Empresas que confían en nosotros"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <Card.Body>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-500 font-bold">D</span>
                </div>
                <div>
                  <h4 className="font-semibold">Deportes Montevideo</h4>
                  <p className="text-sm text-gray-500">Equipamiento</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Apoyar a Trouville Rugby Femenino es invertir en el futuro del deporte uruguayo. 
                Su dedicación y profesionalismo nos inspiran a seguir colaborando."
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-secondary-500 font-bold">B</span>
                </div>
                <div>
                  <h4 className="font-semibold">Banco República</h4>
                  <p className="text-sm text-gray-500">Patrocinador Principal</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Creemos en el poder transformador del deporte. Trouville representa valores 
                que compartimos: trabajo en equipo, disciplina y superación personal."
              </p>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Redes Sociales */}
      <Section
        title="Síguenos en Redes Sociales"
        subtitle="Mantente conectada con nuestra comunidad"
        variant="gray"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📷</span>
              </div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-sm text-gray-600 mb-4">@trouville_rugby_femenino</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(socialMedia.instagram, '_blank')}
              >
                Seguir
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📘</span>
              </div>
              <h3 className="font-semibold mb-2">Facebook</h3>
              <p className="text-sm text-gray-600 mb-4">Trouville Rugby Femenino</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(socialMedia.facebook, '_blank')}
              >
                Seguir
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="font-semibold mb-2">TikTok</h3>
              <p className="text-sm text-gray-600 mb-4">@trouville_rugby</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(socialMedia.tiktok, '_blank')}
              >
                Seguir
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-4">+598 99 123 456</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(`https://wa.me/${socialMedia.whatsapp.replace(/\s/g, '')}`, '_blank')}
              >
                Contactar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* CTA Final */}
      <Section
        title="¿Quieres ser parte de nuestra comunidad?"
        subtitle="Hay muchas formas de apoyar el rugby femenino"
        variant="primary"
      >
        <div className="text-center">
          <p className="text-xl text-primary-100 mb-8">
            Ya seas una empresa, una persona individual o simplemente quieras apoyar, 
            tu contribución hace la diferencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="large"
              onClick={() => window.location.href = '/contacto'}
            >
              Contactar
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => window.location.href = '/inscripciones'}
            >
              Unirse al equipo
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Comunidad;
