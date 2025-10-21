// Servicio de datos para información del club - Principio DIP (Dependency Inversion)

export const clubInfo = {
  name: "Trouville Rugby Femenino",
  founded: "2018",
  location: "Montevideo, Uruguay",
  phone: "+598 92 903 869",
  email: "noelia.caballero212@gmail.com",
  address: "Rambla Gandhi y Solano García, Montevideo",
  mission: "Promover el rugby femenino en Uruguay, fomentando valores como el trabajo en equipo, la disciplina y la superación personal.",
  vision: "Ser el referente del rugby femenino amateur en Uruguay, desarrollando jugadoras completas tanto en el deporte como en la vida.",
  values: [
    "Respeto",
    "Trabajo en equipo", 
    "Disciplina",
    "Superación personal",
    "Compañerismo"
  ],
  history: "Trouville Rugby Femenino nació en 2018 con el sueño de crear un espacio donde las mujeres pudieran practicar rugby de manera amateur pero con profesionalismo. Desde entonces, hemos crecido hasta convertirnos en uno de los clubes femeninos más reconocidos de Montevideo.",
  achievements: [
    "Campeonas del Torneo Metropolitano 2022",
    "Subcampeonas del Torneo Nacional 2023", 
    "Mejor equipo en fair play 2021-2023",
    "Más de 50 jugadoras activas"
  ]
};

export const categories = [
  {
    id: 1,
    name: "Juveniles",
    description: "Categoría para jugadoras jóvenes que quieren aprender rugby",
    ageRange: "10 a 17 años",
    schedule: "Martes y Jueves",
    time: "19:30 a 21:00 horas",
    requirements: "Edad entre 10 y 17 años",
    price: "Gratis el primer mes"
  },
  {
    id: 2,
    name: "Mayores",
    description: "Categoría adulta para jugadoras con o sin experiencia",
    ageRange: "18 años en adelante",
    schedule: "Martes y Jueves", 
    time: "21:00 a 22:30 horas",
    requirements: "Mayor de 18 años",
    price: "Gratis el primer mes"
  }
];

export const trainingSchedule = {
  location: "Cancha Trouville",
  address: "Rambla Gandhi y Solano García, Montevideo",
  coordinates: {
    lat: -34.9011,
    lng: -56.1645
  },
  googleMapsLink: "https://maps.app.goo.gl/egzcBLNDHhnx2wfK6",
  image: "/direccion.png",
  sessions: [
    {
      day: "Martes",
      time: "19:30-21:00",
      category: "Juveniles"
    },
    {
      day: "Jueves", 
      time: "19:30-21:00",
      category: "Juveniles"
    },
    {
      day: "Martes",
      time: "21:00-22:30", 
      category: "Mayores"
    },
    {
      day: "Jueves",
      time: "21:00-22:30",
      category: "Mayores"
    }
  ]
};

export const coaches = [
  {
    name: "María González",
    position: "Entrenadora Principal",
    experience: "8 años",
    bio: "Ex-seleccionada nacional, María lidera el equipo adulto con pasión y experiencia.",
    image: "/WhatsApp Image 2025-10-20 at 10.44.48 PM.jpeg",
    specialties: ["Técnica individual", "Estrategia de juego", "Preparación física"]
  },
  {
    name: "Laura Martínez", 
    position: "Entrenadora Juveniles",
    experience: "5 años",
    bio: "Especializada en desarrollo de jugadoras jóvenes, Laura forma las futuras estrellas del rugby uruguayo.",
    image: "/WhatsApp Image 2025-10-20 at 10.44.48 PM (1).jpeg",
    specialties: ["Desarrollo técnico", "Motivación juvenil", "Trabajo en equipo"]
  },
  {
    name: "Ana Rodríguez",
    position: "Entrenadora Principiantes", 
    experience: "3 años",
    bio: "Ana se encarga de introducir a nuevas jugadoras al mundo del rugby con paciencia y dedicación.",
    image: "/WhatsApp Image 2025-10-20 at 10.44.48 PM (2).jpeg",
    specialties: ["Introducción al rugby", "Técnicas básicas", "Confianza"]
  }
];
