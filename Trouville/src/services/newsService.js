// Servicio de datos de noticias - Principio DIP (Dependency Inversion)

export const newsData = [
  {
    id: 1,
    title: "Nueva temporada 2024",
    excerpt: "Comienza una nueva temporada llena de desafíos y oportunidades para nuestro equipo.",
    date: "2024-01-15",
    image: "/images/news/temporada-2024.jpg",
    category: "General"
  },
  {
    id: 2,
    title: "Entrenamiento especializado",
    excerpt: "Implementamos nuevas técnicas de entrenamiento para mejorar el rendimiento del equipo.",
    date: "2024-01-10",
    image: "/images/news/entrenamiento-especializado.jpg",
    category: "Entrenamiento"
  }
];

export const playerSpotlight = {
  name: "María González",
  position: "Apertura",
  age: 24,
  experience: "3 años",
  image: "/images/players/maria-gonzalez.jpg",
  quote: "El rugby me enseñó que la fuerza viene del trabajo en equipo y la determinación.",
  achievements: [
    "Capitana del equipo",
    "Mejor jugadora 2023",
    "Líder en tries"
  ]
};
