// Página Galería - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar galería de fotos y videos del club

import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Galeria = () => {
  const [selectedAlbum, setSelectedAlbum] = useState('Todos');
  
  // Álbumes disponibles
  const albums = [
    { id: 'todos', name: 'Todos' },
    { id: 'team', name: 'Equipo' },
    { id: 'entrenamientos', name: 'Entrenamientos' },
    { id: 'partidos', name: 'Partidos' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'comunidad', name: 'Comunidad' }
  ];

  // Todas las imágenes disponibles
  const galleryItems = [
    // Imágenes del equipo (carpeta team)
    {
      id: 1,
      title: 'Imagen del equipo',
      album: 'team',
      image: '/images/team/WhatsApp Image 2025-10-20 at 11.43.28 PM.jpeg',
      date: '2024-01-15',
      description: 'Foto del equipo'
    },
    {
      id: 2,
      title: 'Imagen del equipo 2',
      album: 'team',
      image: '/images/team/WhatsApp Image 2025-10-20 at 11.43.29 PM.jpeg',
      date: '2024-01-10',
      description: 'Otra foto del equipo'
    },
    // Imágenes principales (carpeta public)
    {
      id: 3,
      title: 'Entrenamiento',
      album: 'entrenamientos',
      image: '/WhatsApp Image 2025-10-20 at 10.43.12 PM.jpeg',
      date: '2024-01-05',
      description: 'Sesión de entrenamiento'
    },
    {
      id: 4,
      title: 'Partido',
      album: 'partidos',
      image: '/WhatsApp Image 2025-10-20 at 10.44.47 PM.jpeg',
      date: '2024-01-12',
      description: 'Momento del partido'
    },
    {
      id: 5,
      title: 'Celebración',
      album: 'eventos',
      image: '/WhatsApp Image 2025-10-20 at 10.44.47 PM (1).jpeg',
      date: '2024-01-08',
      description: 'Celebración del equipo'
    },
    {
      id: 6,
      title: 'Entrenamiento juvenil',
      album: 'entrenamientos',
      image: '/WhatsApp Image 2025-10-20 at 10.44.47 PM (2).jpeg',
      date: '2024-01-03',
      description: 'Entrenamiento de juveniles'
    },
    {
      id: 7,
      title: 'Torneo',
      album: 'partidos',
      image: '/WhatsApp Image 2025-10-20 at 10.44.47 PM (3).jpeg',
      date: '2024-01-18',
      description: 'Participación en torneo'
    },
    {
      id: 8,
      title: 'Actividad comunitaria',
      album: 'comunidad',
      image: '/WhatsApp Image 2025-10-20 at 10.44.48 PM.jpeg',
      date: '2023-12-20',
      description: 'Actividad del club'
    },
    {
      id: 9,
      title: 'Preparación física',
      album: 'entrenamientos',
      image: '/WhatsApp Image 2025-10-20 at 10.44.48 PM (2).jpeg',
      date: '2024-01-20',
      description: 'Sesión de preparación física'
    },
    {
      id: 10,
      title: 'Momento especial',
      album: 'eventos',
      image: '/WhatsApp Image 2025-10-20 at 11.43.27 PM.jpeg',
      date: '2024-01-22',
      description: 'Momento especial del equipo'
    },
    {
      id: 11,
      title: 'Celebración de victoria',
      album: 'eventos',
      image: '/WhatsApp Image 2025-10-20 at 11.43.27 PM (1).jpeg',
      date: '2024-01-25',
      description: 'Celebración después de la victoria'
    }
  ];

  const filteredItems = selectedAlbum === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.album === selectedAlbum.toLowerCase());

  return (
    <div>
      {/* Hero Section */}
      <Section
        title="Galería"
        subtitle="Momentos especiales de Trouville Rugby Femenino"
        variant="primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            Revive los mejores momentos del club a través de nuestras fotos y videos.
          </p>
        </div>
      </Section>

      {/* Filtros de Álbum */}
      <Section variant="gray">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {albums.map((album) => (
              <Button
                key={album.id}
                variant={selectedAlbum === album.name ? 'primary' : 'outline'}
                size="small"
                onClick={() => setSelectedAlbum(album.name)}
              >
                {album.name}
              </Button>
            ))}
          </div>
        </div>
      </Section>

      {/* Galería de Fotos */}
      <Section
        title={`Galería - ${selectedAlbum}`}
        subtitle={`${filteredItems.length} foto${filteredItems.length !== 1 ? 's' : ''} encontrada${filteredItems.length !== 1 ? 's' : ''}`}
      >
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="break-inside-avoid mb-6 group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {item.album}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay fotos en este álbum.</p>
          </div>
        )}
      </Section>

      {/* Videos Destacados */}
      <Section
        title="Videos Destacados"
        subtitle="Los mejores momentos en video"
        variant="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <Card.Body>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/WhatsApp Video 2025-10-20 at 11.43.28 PM.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/team/WhatsApp Video 2025-10-20 at 11.43.28 PM.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Galeria;