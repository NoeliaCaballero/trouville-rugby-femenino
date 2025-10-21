// Configuración adicional para desarrollo
// Este archivo contiene configuraciones específicas para el entorno de desarrollo

export const developmentConfig = {
  // URLs de APIs (reemplazar con URLs reales)
  api: {
    baseUrl: 'https://api.trouville-rugby.com',
    endpoints: {
      news: '/news',
      players: '/players',
      sponsors: '/sponsors',
      contact: '/contact'
    }
  },
  
  // Configuración de Google Maps (reemplazar con tu API key)
  maps: {
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    center: {
      lat: -34.9011,
      lng: -56.1645
    },
    zoom: 15
  },
  
  // Configuración de redes sociales (reemplazar con URLs reales)
  socialMedia: {
    instagram: 'https://instagram.com/trouville_rugby_femenino',
    facebook: 'https://facebook.com/trouville.rugby.femenino',
    tiktok: 'https://tiktok.com/@trouville_rugby',
    youtube: 'https://youtube.com/@trouville_rugby_femenino',
    whatsapp: '+598 99 123 456'
  },
  
  // Configuración de formularios
  forms: {
    contact: {
      // Integrar con servicios como EmailJS, Formspree, etc.
      service: 'emailjs', // 'emailjs', 'formspree', 'netlify', etc.
      config: {
        // Configuración específica del servicio
      }
    },
    registration: {
      // Configuración para el formulario de inscripciones
      service: 'emailjs',
      config: {
        // Configuración específica del servicio
      }
    }
  },
  
  // Configuración de imágenes
  images: {
    // Rutas base para imágenes (reemplazar con rutas reales)
    basePath: '/images',
    fallback: '/images/placeholder.jpg',
    // Tamaños optimizados para diferentes dispositivos
    sizes: {
      mobile: '400w',
      tablet: '800w',
      desktop: '1200w'
    }
  },
  
  // Configuración de SEO
  seo: {
    siteName: 'Trouville Rugby Femenino',
    description: 'Club de rugby femenino amateur en Montevideo, Uruguay',
    keywords: ['rugby', 'femenino', 'Montevideo', 'Uruguay', 'deporte', 'club'],
    author: 'Trouville Rugby Femenino',
    ogImage: '/images/og-image.jpg'
  }
};

// Función para obtener configuración según el entorno
export const getConfig = () => {
  const env = import.meta.env.MODE;
  
  if (env === 'development') {
    return {
      ...developmentConfig,
      debug: true,
      api: {
        ...developmentConfig.api,
        baseUrl: 'http://localhost:3000/api'
      }
    };
  }
  
  return {
    ...developmentConfig,
    debug: false
  };
};
