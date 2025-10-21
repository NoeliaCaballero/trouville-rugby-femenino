// Servicio de datos del club - Principio DIP (Dependency Inversion)
// Separación de datos de la lógica de presentación

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
    { year: 2020, description: "Campeonas Torneo Apertura URU" },
    { year: 2022, description: "Ascenso a Primera División" },
    { year: 2023, description: "Subcampeonas Nacionales" }
  ]
};

export const categories = [
  {
    id: 1,
    name: "Juveniles",
    ageRange: "10-17 años",
    description: "Categoría juvenil para jugadoras de 10 a 17 años",
    schedule: "Martes y Jueves",
    time: "19:30 - 21:00",
    price: "Gratis primer mes"
  },
  {
    id: 2,
    name: "Mayores",
    ageRange: "18+ años",
    description: "Categoría adulta para jugadoras de 18 años en adelante",
    schedule: "Martes y Jueves",
    time: "21:00 - 22:30",
    price: "Gratis primer mes"
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
  sessions: [
    {
      day: "Martes",
      time: "19:30 - 21:00",
      category: "Juveniles"
    },
    {
      day: "Martes",
      time: "21:00 - 22:30",
      category: "Mayores"
    },
    {
      day: "Jueves",
      time: "19:30 - 21:00",
      category: "Juveniles"
    },
    {
      day: "Jueves",
      time: "21:00 - 22:30",
      category: "Mayores"
    }
  ]
};
