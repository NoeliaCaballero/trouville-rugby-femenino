// Página Noticias - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar noticias y blog del club

import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { newsData, playerSpotlight, getNewsByCategory } from '../services/newsService';

const Noticias = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  const categories = ['Todas', 'Noticias', 'Resultados', 'Entrenamientos', 'Competiciones'];
  
  const filteredNews = selectedCategory === 'Todas' 
    ? newsData 
    : getNewsByCategory(selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <Section
        title="Noticias"
        subtitle="Mantente al día con las últimas novedades del club"
        variant="primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            Sigue de cerca el crecimiento de Trouville Rugby Femenino y nuestras jugadoras.
          </p>
        </div>
      </Section>

      {/* Filtros de Categoría */}
      <Section variant="gray">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="small"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </Section>

      {/* Lista de Noticias */}
      <Section
        title={selectedCategory === 'Todas' ? 'Todas las Noticias' : `Noticias - ${selectedCategory}`}
        subtitle={`${filteredNews.length} artículo${filteredNews.length !== 1 ? 's' : ''} encontrado${filteredNews.length !== 1 ? 's' : ''}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <Card key={news.id} hover>
              <div className="aspect-video bg-gray-200 rounded-t-lg mb-4">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <Card.Body>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-500 font-medium">{news.category}</span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Button variant="outline" size="small">
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay noticias en esta categoría.</p>
          </div>
        )}
      </Section>

      {/* Jugadora Destacada */}
      <Section
        title="Jugadora del Mes"
        subtitle="Conoce a nuestras estrellas"
        variant="secondary"
      >
        <div className="max-w-4xl mx-auto">
          <Card variant="filled">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={playerSpotlight.image}
                  alt={playerSpotlight.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{playerSpotlight.name}</h3>
                <p className="text-lg text-secondary-200 mb-4">{playerSpotlight.position}</p>
                <p className="text-secondary-100 mb-6">{playerSpotlight.bio}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Logros:</h4>
                  <ul className="space-y-1">
                    {playerSpotlight.achievements.map((achievement, index) => (
                      <li key={index} className="text-secondary-100 flex items-center">
                        <span className="text-secondary-300 mr-2">🏆</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Resultados Recientes */}
      <Section
        title="Resultados Recientes"
        subtitle="Nuestros últimos partidos"
        variant="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <Card.Body>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Trouville vs Old Christians</h3>
                <span className="text-sm text-gray-500">15/01/2024</span>
              </div>
              <div className="text-center py-4">
                <div className="text-3xl font-bold text-primary-500 mb-2">24 - 18</div>
                <p className="text-gray-600">Victoria de Trouville</p>
              </div>
              <p className="text-sm text-gray-600">
                Gran partido donde demostramos nuestra fortaleza en el scrum y nuestra velocidad en el backline.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Trouville vs Carrasco Polo</h3>
                <span className="text-sm text-gray-500">08/01/2024</span>
              </div>
              <div className="text-center py-4">
                <div className="text-3xl font-bold text-gray-500 mb-2">12 - 15</div>
                <p className="text-gray-600">Derrota de Trouville</p>
              </div>
              <p className="text-sm text-gray-600">
                Partido muy parejo donde aprendimos mucho para los próximos encuentros.
              </p>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Suscripción a Noticias */}
      <Section
        title="Mantente Informada"
        subtitle="Recibe nuestras noticias directamente en tu email"
        variant="primary"
      >
        <div className="max-w-md mx-auto text-center">
          <p className="text-primary-100 mb-6">
            Suscríbete a nuestro boletín y no te pierdas ninguna novedad.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Button variant="secondary">
              Suscribirse
            </Button>
          </div>
          <p className="text-sm text-primary-200 mt-2">
            Sin spam, solo noticias importantes del club.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Noticias;
