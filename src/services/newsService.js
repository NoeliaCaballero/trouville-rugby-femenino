// Servicio de datos para noticias - Principio DIP (Dependency Inversion)
// Separación de datos de la lógica de presentación

export const newsData = [
  {
    id: 1,
    title: "Trouville vence a Old Christians en emocionante partido",
    excerpt: "Nuestro equipo femenino logró una victoria épica contra Old Christians con un marcador de 24-18.",
    content: "En un partido lleno de emociones, Trouville Rugby Femenino demostró su fortaleza y determinación...",
    date: "2024-01-15",
    category: "Resultados",
    image: "/WhatsApp Image 2025-10-20 at 10.43.12 PM.jpeg",
    featured: true
  },
  {
    id: 2,
    title: "Nueva temporada 2024: Inscripciones abiertas",
    excerpt: "Las inscripciones para la temporada 2024 están oficialmente abiertas. ¡No te pierdas la oportunidad!",
    content: "Estamos emocionadas de anunciar que las inscripciones para la nueva temporada...",
    date: "2024-01-10",
    category: "Noticias",
    image: "/WhatsApp Image 2025-10-20 at 10.44.47 PM.jpeg",
    featured: false
  },
  {
    id: 3,
    title: "Entrenamiento especial con ex-seleccionada nacional",
    excerpt: "María González, ex-seleccionada uruguaya, compartió su experiencia con nuestras jugadoras.",
    content: "Fue un honor tener a María González en nuestros entrenamientos...",
    date: "2024-01-08",
    category: "Entrenamientos",
    image: "/WhatsApp Image 2025-10-20 at 10.44.47 PM (1).jpeg",
    featured: false
  },
  {
    id: 4,
    title: "Trouville participa en torneo internacional",
    excerpt: "Nuestro equipo representará a Uruguay en el torneo sudamericano de rugby femenino.",
    content: "Es un orgullo anunciar que Trouville Rugby Femenino ha sido seleccionado...",
    date: "2024-01-05",
    category: "Competiciones",
    image: "/WhatsApp Image 2025-10-20 at 10.44.47 PM (2).jpeg",
    featured: true
  }
];

export const playerSpotlight = {
  name: "Ana Rodríguez",
  position: "Apertura",
  age: 24,
  yearsInClub: 3,
  bio: "Ana se unió al club hace tres años y rápidamente se convirtió en una pieza clave del equipo. Su precisión en el pateo y su liderazgo en el campo la han convertido en una referente para las jugadoras más jóvenes.",
  achievements: [
    "Mejor pateadora del torneo 2023",
    "Capitana del equipo juvenil",
    "Seleccionada para el equipo nacional sub-23"
  ],
  image: "/WhatsApp Image 2025-10-20 at 10.44.47 PM (3).jpeg"
};

// Función para obtener noticias destacadas
export const getFeaturedNews = () => {
  return newsData.filter(news => news.featured);
};

// Función para obtener noticias por categoría
export const getNewsByCategory = (category) => {
  return newsData.filter(news => news.category === category);
};

// Función para obtener noticia por ID
export const getNewsById = (id) => {
  return newsData.find(news => news.id === id);
};
