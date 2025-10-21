# 🏉 LOGO OFICIAL INTEGRADO

## ✅ **Logo Oficial de Trouville Rugby Femenino**

El logo oficial `trouville.png` ha sido integrado exitosamente en el sitio web:

### 📍 **Ubicaciones del Logo:**

1. **Header/Navbar** - `src/components/layout/Header.jsx`
   - Aparece en todas las páginas
   - Tamaño: 48x48px (w-12 h-12)
   - Con texto "Trouville Rugby Femenino"

2. **Footer** - `src/components/layout/Footer.jsx`
   - Aparece en el pie de página
   - Tamaño: 48x48px (w-12 h-12)
   - Con texto "Trouville Rugby Femenino"

3. **Favicon** - `index.html`
   - Aparece en la pestaña del navegador
   - Archivo: `/trouville.png`

### 🎨 **Componente Logo Reutilizable:**

El logo está implementado como un componente reutilizable en `src/components/ui/Logo.jsx`:

```jsx
<Logo 
  className="w-12 h-12"        // Tamaño personalizable
  showText={true}              // Mostrar texto del club
  textSize="text-xl"           // Tamaño del texto
  variant="default"            // Estilo del logo
/>
```

### 🔧 **Opciones del Componente:**

- **className**: Tamaño del logo (ej: "w-10 h-10", "w-16 h-16")
- **showText**: Mostrar/ocultar texto "Trouville Rugby Femenino"
- **textSize**: Tamaño del texto (ej: "text-lg", "text-xl", "text-2xl")
- **variant**: Estilo del logo ("default", "rounded", "circle")

### 📱 **Responsive:**

El logo se adapta automáticamente a diferentes tamaños de pantalla:
- **Desktop**: Logo completo con texto
- **Mobile**: Logo optimizado para pantallas pequeñas

### 🎯 **Uso en Otras Páginas:**

Para usar el logo en otras páginas o componentes:

```jsx
import Logo from '../components/ui/Logo';

// Logo simple
<Logo className="w-8 h-8" />

// Logo con texto
<Logo className="w-16 h-16" showText={true} textSize="text-2xl" />

// Logo redondeado
<Logo className="w-12 h-12" variant="rounded" />
```

---

**✅ El logo oficial está completamente integrado y funcionando en todo el sitio web.**
