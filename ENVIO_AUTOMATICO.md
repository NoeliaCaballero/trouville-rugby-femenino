# 📧 ENVÍO AUTOMÁTICO DE FORMULARIOS - Trouville Rugby Femenino

## 🚀 **Sistema de Envío Automático Configurado**

### **✅ Cambio Realizado:**
- **Formulario actualizado** para envío automático
- **Servicio Formspree** integrado
- **Envío directo** a `noelia.caballero212@gmail.com`

## 🔧 **Configuración Requerida:**

### **Paso 1: Crear cuenta en Formspree**
1. **Ir a**: [https://formspree.io](https://formspree.io)
2. **Registrarse** con tu email: `noelia.caballero212@gmail.com`
3. **Crear nuevo formulario**
4. **Copiar el Form ID** (ejemplo: `xrgkqyvw`)

### **Paso 2: Actualizar el código**
```javascript
// En src/pages/Inscripciones.jsx línea 80
const response = await fetch('https://formspree.io/f/TU_FORM_ID_AQUI', {
```

**Reemplazar `TU_FORM_ID_AQUI`** con tu Form ID real de Formspree.

## 📋 **Cómo Funciona Ahora:**

### **Proceso Automático:**
1. **Usuario completa** el formulario
2. **Sistema valida** los campos
3. **Envío automático** a Formspree
4. **Formspree envía** email a `noelia.caballero212@gmail.com`
5. **Usuario recibe** confirmación de envío exitoso

### **Ventajas:**
- ✅ **Envío automático** - No requiere intervención del usuario
- ✅ **Email directo** - Llega inmediatamente a tu inbox
- ✅ **Formato estructurado** - Información organizada
- ✅ **Confirmación** - Usuario sabe que se envió correctamente
- ✅ **Sin servidor** - No necesitas backend propio

## 📧 **Formato del Email Recibido:**

### **Asunto:**
```
Nueva inscripción desde Trouville Rugby Femenino
```

### **Contenido:**
```
Nombre: María González
Apellido: Pérez
Email: maria@email.com
Teléfono: 099123456
Fecha de nacimiento: 1995-05-15
Categoría: Mayores (18 años en adelante) - Martes y Jueves 21:00 a 22:30 horas
Experiencia: Sin experiencia
Mensaje: Quiero empezar a jugar rugby
Fecha inscripción: 20/10/2025 22:30:15
```

## 🎯 **Alternativas si no quieres usar Formspree:**

### **Opción 2: Netlify Forms (Gratis)**
```javascript
// Cambiar el formulario para usar Netlify Forms
<form name="inscripcion" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="inscripcion" />
  // ... resto de campos
</form>
```

### **Opción 3: EmailJS (Gratis)**
```javascript
// Usar EmailJS para envío directo
import emailjs from '@emailjs/browser';

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
```

### **Opción 4: Backend propio**
```javascript
// Crear endpoint en Node.js/PHP/Python
const response = await fetch('/api/inscripcion', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

## 🔧 **Configuración Actual:**

### **Archivo Actualizado:**
- **`src/pages/Inscripciones.jsx`** - Sistema Formspree integrado
- **Línea 80**: URL de Formspree (necesita tu Form ID)
- **Línea 85-95**: Datos que se envían automáticamente

### **Para Activar:**
1. **Crear cuenta** en Formspree
2. **Obtener Form ID**
3. **Reemplazar** `YOUR_FORM_ID` en el código
4. **¡Listo!** - Envío automático funcionando

## 📱 **Experiencia del Usuario:**

### **Antes (Manual):**
1. Completa formulario
2. Se abre cliente de email
3. Usuario debe enviar manualmente
4. Puede fallar si no tiene email configurado

### **Ahora (Automático):**
1. Completa formulario
2. Hace clic en "Enviar"
3. **Envío automático** ✅
4. Recibe confirmación inmediata
5. Email llega a tu inbox

## 🎯 **Beneficios del Sistema Automático:**

- **Mejor experiencia**: Usuario no necesita configurar email
- **Más confiable**: No depende del cliente de email del usuario
- **Inmediato**: Email llega instantáneamente
- **Profesional**: Proceso más pulido y confiable
- **Móvil-friendly**: Funciona perfectamente en móviles

---

**⚠️ IMPORTANTE: Para activar el envío automático, necesitas:**
1. **Crear cuenta** en Formspree
2. **Obtener tu Form ID**
3. **Reemplazar** `YOUR_FORM_ID` en el código

**✅ Una vez configurado, todas las inscripciones llegarán automáticamente a `noelia.caballero212@gmail.com`**
