# Guía para Reemplazar Contenido Ficticio

Esta guía te ayudará a reemplazar todo el contenido ficticio con información real del club Trouville Rugby Femenino.

## 📸 Imágenes a Reemplazar

### 1. Imágenes del Hero/Principal
```
public/images/hero/team-photo.jpg
```
**Reemplazar con**: Foto del equipo completo o grupo de jugadoras

### 2. Imágenes de Noticias
```
public/images/news/
├── victoria-old-christians.jpg
├── inscripciones-2024.jpg
├── entrenamiento-especial.jpg
└── torneo-internacional.jpg
```
**Reemplazar con**: Fotos reales de partidos, eventos y actividades del club

### 3. Imágenes de Jugadoras
```
public/images/players/ana-rodriguez.jpg
```
**Reemplazar con**: Foto de la jugadora destacada actual

### 4. Imágenes de Entrenadoras
```
public/images/coaches/
├── maria-gonzalez.jpg
├── laura-martinez.jpg
└── ana-rodriguez.jpg
```
**Reemplazar con**: Fotos reales de las entrenadoras del club

### 5. Logos de Sponsors
```
public/images/sponsors/
├── deportes-montevideo.png
├── bancorepublica.png
├── clinica-deportiva.png
└── el-fogon.png
```
**Reemplazar con**: Logos reales de los sponsors del club

### 6. Galería de Fotos
```
public/images/gallery/
├── entrenamiento-1.jpg
├── partido-1.jpg
├── evento-1.jpg
├── comunidad-1.jpg
└── ... (más fotos)
```
**Reemplazar con**: Fotos reales de entrenamientos, partidos y eventos

## 📝 Contenido de Texto a Actualizar

### 1. Información del Club (`src/services/clubService.js`)

```javascript
export const clubInfo = {
  name: "Trouville Rugby Femenino", // ✅ Mantener o cambiar
  founded: "2018", // 🔄 Cambiar por año real
  location: "Montevideo, Uruguay", // ✅ Mantener
  mission: "Tu misión real aquí...", // 🔄 Reemplazar
  vision: "Tu visión real aquí...", // 🔄 Reemplazar
  // ... resto del contenido
};
```

### 2. Noticias (`src/services/newsService.js`)

```javascript
export const newsData = [
  {
    id: 1,
    title: "Título de noticia real", // 🔄 Reemplazar
    excerpt: "Resumen de la noticia...", // 🔄 Reemplazar
    content: "Contenido completo...", // 🔄 Reemplazar
    date: "2024-01-15", // 🔄 Fecha real
    category: "Resultados", // 🔄 Categoría apropiada
    image: "/images/news/noticia-real.jpg", // 🔄 Imagen real
    featured: true
  },
  // ... más noticias reales
];
```

### 3. Horarios de Entrenamiento (`src/services/clubService.js`)

```javascript
export const trainingSchedule = {
  location: "Nombre real del complejo", // 🔄 Cambiar
  address: "Dirección real", // 🔄 Cambiar
  coordinates: {
    lat: -34.9011, // 🔄 Coordenadas reales
    lng: -56.1645  // 🔄 Coordenadas reales
  },
  sessions: [
    {
      day: "Lunes",
      time: "19:00-21:00", // 🔄 Horarios reales
      category: "Adultas",
      coach: "Nombre real de entrenadora" // 🔄 Cambiar
    },
    // ... más horarios reales
  ]
};
```

### 4. Información de Contacto (`src/services/communityService.js`)

```javascript
export const contactInfo = {
  email: "email-real@trouville-rugby.com", // 🔄 Cambiar
  phone: "+598 2 123 4567", // 🔄 Cambiar
  address: "Dirección real del club", // 🔄 Cambiar
  schedule: "Horarios de atención reales", // 🔄 Cambiar
  emergency: "+598 99 123 456" // 🔄 Cambiar
};
```

## 🔧 Configuraciones Técnicas

### 1. Google Maps API
En `src/pages/Entrenamientos.jsx` y `src/pages/Contacto.jsx`:
```javascript
// Reemplazar YOUR_API_KEY con tu clave real
src={`https://www.google.com/maps/embed/v1/place?key=TU_API_KEY_REAL&q=${coordinates.lat},${coordinates.lng}`}
```

### 2. Redes Sociales
En `src/services/communityService.js`:
```javascript
export const socialMedia = {
  instagram: "https://instagram.com/tu_usuario_real",
  facebook: "https://facebook.com/tu_pagina_real",
  tiktok: "https://tiktok.com/@tu_usuario_real",
  youtube: "https://youtube.com/@tu_canal_real",
  whatsapp: "+598 99 123 456" // Tu número real
};
```

### 3. Formularios
Los formularios están configurados para mostrar alertas. Para funcionalidad real:

**Opción 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Opción 2: Formspree**
- Registrarse en formspree.io
- Obtener endpoint del formulario
- Actualizar action del form

**Opción 3: Netlify Forms**
- Si usas Netlify, agregar `data-netlify="true"` al form

## 🎨 Personalización Visual

### 1. Colores del Club
En `tailwind.config.js`, puedes ajustar los colores:
```javascript
colors: {
  primary: {
    500: '#ef4444', // Tu rojo principal
    // ... más variaciones
  },
  secondary: {
    500: '#3b82f6', // Tu azul secundario
    // ... más variaciones
  }
}
```

### 2. Logo del Club
En `src/components/layout/Header.jsx`:
```javascript
// Reemplazar el logo de texto con imagen real
<img src="/images/logo-trouville.png" alt="Trouville Rugby" className="h-10" />
```

## 📱 Optimización para Producción

### 1. Imágenes
- Optimizar todas las imágenes (WebP recomendado)
- Usar tamaños apropiados para cada dispositivo
- Implementar lazy loading

### 2. SEO
En `index.html`:
```html
<title>Trouville Rugby Femenino - Montevideo, Uruguay</title>
<meta name="description" content="Descripción real del club" />
<meta name="keywords" content="rugby,femenino,Montevideo,Uruguay" />
```

### 3. Analytics
Agregar Google Analytics o similar:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## ✅ Checklist Final

- [ ] Todas las imágenes reemplazadas
- [ ] Información del club actualizada
- [ ] Noticias reales agregadas
- [ ] Horarios de entrenamiento correctos
- [ ] Información de contacto actualizada
- [ ] Redes sociales configuradas
- [ ] Google Maps API configurada
- [ ] Formularios funcionando
- [ ] SEO optimizado
- [ ] Pruebas en diferentes dispositivos

## 🚀 Despliegue

### Opción 1: Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### Opción 2: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Opción 3: GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

---

**Importante**: Después de reemplazar todo el contenido ficticio, prueba exhaustivamente el sitio en diferentes dispositivos y navegadores antes de ponerlo en producción.
