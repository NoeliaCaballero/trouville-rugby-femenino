# 🎯 UBICACIONES EXACTAS PARA PERSONALIZAR

## 📁 **ARCHIVOS PRINCIPALES A MODIFICAR**

### 1. **Logo y Colores**
```
📂 src/components/ui/Logo.jsx
   └── Cambiar el SVG del logo por el oficial

📂 tailwind.config.js
   └── Líneas 8-15: Cambiar colores primary y secondary
   └── Líneas 16-20: Cambiar fuentes si es necesario

📂 public/favicon.ico
   └── Reemplazar con el favicon del club
```

### 2. **Imágenes del Club**
```
📂 public/
   ├── backgroundImage.jpeg (✅ HERO PRINCIPAL - IMAGEN DE FONDO)
   ├── trouville.png (✅ LOGO OFICIAL DEL CLUB)
   ├── WhatsApp Image 2025-10-20 at 10.44.47 PM.jpeg (Noticias)
   ├── WhatsApp Image 2025-10-20 at 10.44.47 PM (1).jpeg (Noticias)
   ├── WhatsApp Image 2025-10-20 at 10.44.47 PM (2).jpeg (Noticias)
   ├── WhatsApp Image 2025-10-20 at 10.44.47 PM (3).jpeg (Noticias)
   ├── WhatsApp Image 2025-10-20 at 10.44.48 PM.jpeg (Galería)
   ├── WhatsApp Image 2025-10-20 at 10.44.48 PM (1).jpeg (Galería)
   └── WhatsApp Image 2025-10-20 at 10.44.48 PM (2).jpeg (Galería)
```

### 3. **Información del Club**
```
📂 src/services/clubService.js
   ├── Líneas 3-15: Información básica del club
   ├── Líneas 16-25: Historia del club
   ├── Líneas 26-35: Misión y valores
   ├── Líneas 36-50: Estadísticas del club
   ├── Líneas 51-70: Información de contacto
   ├── Líneas 71-90: Ubicación y horarios
   └── Líneas 91-125: Información de entrenadores
```

### 4. **Noticias y Contenido**
```
📂 src/services/newsService.js
   ├── Líneas 5-45: Noticias del club
   ├── Líneas 46-60: Jugadora destacada
   └── Líneas 61-70: Funciones auxiliares

📂 src/services/communityService.js
   ├── Líneas 5-25: Información de sponsors
   ├── Líneas 26-45: Cómo apoyar al club
   └── Líneas 46-65: Testimonios
```

### 5. **Páginas Específicas**
```
📂 src/pages/Home.jsx
   ├── Línea 26: Título principal
   ├── Línea 29: Tagline del club
   └── Líneas 50-85: Valores del club

📂 src/pages/Nosotras.jsx
   ├── Líneas 10-30: Historia del club
   ├── Líneas 31-50: Misión y valores
   └── Líneas 51-80: Testimonios

📂 src/pages/Entrenamientos.jsx
   ├── Líneas 10-30: Horarios de entrenamiento
   ├── Líneas 31-50: Ubicación de la cancha
   └── Líneas 51-80: Información de entrenadores

📂 src/pages/Inscripciones.jsx
   ├── Líneas 10-30: Información de categorías
   ├── Líneas 31-50: Requisitos de inscripción
   └── Líneas 51-100: Formulario de inscripción

📂 src/pages/Contacto.jsx
   ├── Líneas 10-30: Información de contacto
   ├── Líneas 31-50: Ubicación del club
   └── Líneas 51-80: Formulario de contacto
```

## 🔧 **CAMBIOS RÁPIDOS**

### Cambiar el Título del Sitio
```javascript
// En src/pages/Home.jsx línea 26
<h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6">
  [TU TÍTULO AQUÍ]
</h1>
```

### Cambiar el Tagline
```javascript
// En src/pages/Home.jsx línea 29
<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
  "[TU TAGLINE AQUÍ]"
</p>
```

### Cambiar Colores del Club
```javascript
// En tailwind.config.js líneas 8-15
colors: {
  primary: {
    50: '#ffebee',
    100: '#ffcdd2',
    500: '#[TU_COLOR_PRINCIPAL]', // Ej: #D32F2F
    600: '#[TU_COLOR_PRINCIPAL_OSCURO]',
  },
  secondary: {
    50: '#e8eaf6',
    100: '#c5cae9',
    500: '#[TU_COLOR_SECUNDARIO]', // Ej: #1A237E
    600: '#[TU_COLOR_SECUNDARIO_OSCURO]',
  }
}
```

### Cambiar Información de Contacto
```javascript
// En src/services/clubService.js líneas 51-70
export const clubInfo = {
  name: "[NOMBRE_DEL_CLUB]",
  founded: "[AÑO_DE_FUNDACION]",
  location: "[UBICACION]",
  phone: "[TELEFONO]",
  email: "[EMAIL]",
  address: "[DIRECCION_COMPLETA]",
  // ... más información
};
```

## 📱 **REDES SOCIALES**

### Agregar Enlaces de Redes Sociales
```javascript
// En src/services/clubService.js
socialMedia: {
  instagram: "https://instagram.com/[tu_instagram]",
  facebook: "https://facebook.com/[tu_facebook]",
  tiktok: "https://tiktok.com/@[tu_tiktok]",
  whatsapp: "https://wa.me/[tu_whatsapp]"
}
```

## 🗺️ **UBICACIÓN Y MAPAS**

### Cambiar Ubicación de la Cancha
```javascript
// En src/pages/Entrenamientos.jsx
const fieldLocation = {
  name: "[NOMBRE_DE_LA_CANCHA]",
  address: "[DIRECCION_EXACTA]",
  coordinates: {
    lat: [LATITUD],
    lng: [LONGITUD]
  }
};
```

## 📧 **FORMULARIOS**

### Personalizar Formulario de Inscripción
```javascript
// En src/pages/Inscripciones.jsx líneas 80-120
const formFields = [
  { name: 'nombre', label: 'Nombre completo', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'telefono', label: 'Teléfono', type: 'tel', required: true },
  { name: 'edad', label: 'Edad', type: 'number', required: true },
  { name: 'categoria', label: 'Categoría', type: 'select', required: true },
  { name: 'experiencia', label: 'Experiencia previa', type: 'textarea' },
  // Agregar más campos según necesites
];
```

## 🎨 **PERSONALIZACIÓN AVANZADA**

### Cambiar Fuentes
```javascript
// En tailwind.config.js líneas 16-20
fontFamily: {
  'display': ['[TU_FUENTE_TITULOS]', 'sans-serif'],
  'body': ['[TU_FUENTE_TEXTO]', 'sans-serif'],
}
```

### Agregar Nuevas Secciones
```javascript
// Crear nuevo archivo: src/pages/[NuevaSeccion].jsx
// Agregar ruta en: src/App.jsx
// Agregar enlace en: src/components/layout/Header.jsx
```

---

**💡 CONSEJO:** Comienza cambiando los elementos más visibles (título, colores, logo) y luego ve personalizando el contenido específico del club.
