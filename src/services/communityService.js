// Servicio de datos para sponsors y comunidad - Principio DIP (Dependency Inversion)

export const sponsors = [
  {
    id: 1,
    name: "Deportes Montevideo",
    logo: "/images/sponsors/deportes-montevideo.png",
    category: "Equipamiento",
    website: "https://deportesmontevideo.com",
    description: "Proveedor oficial de equipamiento deportivo"
  },
  {
    id: 2,
    name: "Banco República",
    logo: "/images/sponsors/bancorepublica.png", 
    category: "Patrocinador Principal",
    website: "https://bancorepublica.com",
    description: "Apoyo financiero para el desarrollo del club"
  },
  {
    id: 3,
    name: "Clínica Deportiva",
    logo: "/images/sponsors/clinica-deportiva.png",
    category: "Salud",
    website: "https://clinicadeportiva.com",
    description: "Atención médica especializada para nuestras jugadoras"
  },
  {
    id: 4,
    name: "Restaurant El Fogón",
    logo: "/images/sponsors/el-fogon.png",
    category: "Alimentación", 
    website: "https://elfogon.com",
    description: "Catering para eventos y celebraciones del club"
  }
];

export const supportOptions = [
  {
    type: "Patrocinio",
    description: "Apoya económicamente al club y obtén visibilidad en nuestros eventos",
    benefits: [
      "Logo en camisetas oficiales",
      "Menciones en redes sociales",
      "Stand en eventos del club",
      "Entrada gratuita a partidos"
    ],
    contact: "sponsors@trouville-rugby.com"
  },
  {
    type: "Voluntariado",
    description: "Colabora con el club de manera voluntaria en diferentes áreas",
    benefits: [
      "Experiencia en gestión deportiva",
      "Red de contactos deportivos",
      "Entrada gratuita a eventos",
      "Merchandising del club"
    ],
    contact: "voluntarios@trouville-rugby.com"
  },
  {
    type: "Donación",
    description: "Contribuye con equipamiento, materiales o recursos para el club",
    benefits: [
      "Reconocimiento público",
      "Recibo de donación",
      "Informes de uso de fondos",
      "Invitación a eventos especiales"
    ],
    contact: "donaciones@trouville-rugby.com"
  }
];

export const socialMedia = {
  instagram: "https://instagram.com/trouville_rugby_femenino",
  facebook: "https://facebook.com/trouville.rugby.femenino",
  tiktok: "https://tiktok.com/@trouville_rugby",
  youtube: "https://youtube.com/@trouville_rugby_femenino",
  whatsapp: "+598 99 123 456"
};

export const contactInfo = {
  email: "info@trouville-rugby.com",
  phone: "+598 2 123 4567",
  address: "Av. Rivera 3245, Montevideo, Uruguay",
  schedule: "Lunes a Viernes 9:00-18:00",
  emergency: "+598 99 123 456"
};
