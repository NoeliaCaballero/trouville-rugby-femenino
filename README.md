# Trouville Rugby Femenino - Sitio Web

Sitio web moderno y responsive para el club de rugby femenino Trouville de Montevideo, Uruguay. Desarrollado con React + Vite siguiendo los principios SOLID.

## 🏉 Características

- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Colores del Club**: Rojo principal y azul secundario
- **Principios SOLID**: Arquitectura limpia y mantenible
- **Componentes Reutilizables**: UI consistente y escalable
- **Navegación Intuitiva**: Menú claro y fácil de usar
- **Formularios Funcionales**: Inscripciones y contacto con validación

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd trouville-rugby-femenino

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

### Comandos Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build de producción
- `npm run lint` - Ejecutar linter

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   └── ui/              # Componentes reutilizables
├── pages/               # Páginas de la aplicación
├── services/            # Servicios de datos (DIP)
└── main.jsx            # Punto de entrada
```

## 🎨 Personalización

### Colores del Club
Los colores están definidos en `tailwind.config.js`:
- **Primary (Rojo)**: `#ef4444` y variaciones
- **Secondary (Azul)**: `#3b82f6` y variaciones

### Contenido Ficticio
Todo el contenido ficticio está en la carpeta `src/services/`:

#### `newsService.js`
- Noticias del club
- Jugadora destacada del mes
- Funciones para filtrar noticias

#### `clubService.js`
- Información del club (historia, misión, valores)
- Categorías de inscripción
- Horarios de entrenamiento
- Información de entrenadoras

#### `communityService.js`
- Sponsors del club
- Opciones de apoyo
- Redes sociales
- Información de contacto

## 📝 Reemplazar Contenido Ficticio

### 1. Imágenes
Reemplazar todas las rutas de imágenes ficticias:
```javascript
// Ejemplo de rutas a reemplazar:
"/images/news/victoria-old-christians.jpg"
"/images/players/ana-rodriguez.jpg"
"/images/coaches/maria-gonzalez.jpg"
"/images/sponsors/deportes-montevideo.png"
```

### 2. Información del Club
Editar `src/services/clubService.js`:
- Nombre del club
- Año de fundación
- Ubicación
- Misión y visión
- Valores
- Logros
- Horarios de entrenamiento
- Información de entrenadoras

### 3. Noticias
Editar `src/services/newsService.js`:
- Noticias reales del club
- Resultados de partidos
- Jugadora destacada actual
- Fechas y categorías

### 4. Sponsors y Comunidad
Editar `src/services/communityService.js`:
- Sponsors reales con logos
- Información de contacto actualizada
- Redes sociales reales
- Opciones de apoyo específicas

### 5. Google Maps
En `src/pages/Entrenamientos.jsx` y `src/pages/Contacto.jsx`:
- Reemplazar `YOUR_API_KEY` con tu clave de Google Maps API
- Actualizar coordenadas de la ubicación real

### 6. Formularios
Los formularios están configurados para mostrar alertas. Para funcionalidad real:
- Integrar con servicios de email (EmailJS, Formspree, etc.)
- Conectar con base de datos
- Implementar validación del servidor

## 🎯 Principios SOLID Implementados

### 1. Single Responsibility (SRP)
- Cada componente tiene una responsabilidad única
- Servicios separados por dominio (noticias, club, comunidad)

### 2. Open/Closed (OCP)
- Componentes preparados para extensión
- Variantes de botones, cards y secciones
- Fácil agregar nuevas páginas sin modificar existentes

### 3. Liskov Substitution (LSP)
- Componentes hijos pueden reemplazar padres
- Interfaces consistentes entre componentes similares

### 4. Interface Segregation (ISP)
- Props específicas para cada componente
- Componentes Input, Textarea, Select separados
- Card con subcomponentes Header, Body, Footer

### 5. Dependency Inversion (DIP)
- Datos separados de la lógica de presentación
- Servicios independientes para datos
- Componentes dependen de abstracciones, no implementaciones

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Breakpoints de Tailwind
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Tecnologías Utilizadas

- **React 18**: Biblioteca de UI
- **Vite**: Herramienta de build
- **React Router**: Enrutamiento
- **Tailwind CSS**: Framework de estilos
- **PostCSS**: Procesador de CSS

## 📞 Soporte

Para dudas sobre la implementación o personalización:
- Revisar comentarios en el código
- Consultar documentación de React y Tailwind
- Verificar configuración de Vite

## 📄 Licencia

Este proyecto está desarrollado específicamente para Trouville Rugby Femenino.

---

**Nota**: Este es un proyecto base profesional. Reemplaza todo el contenido ficticio con información real del club antes de usar en producción.
