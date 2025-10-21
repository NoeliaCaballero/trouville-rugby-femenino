# 📧 FORMULARIO DE INSCRIPCIÓN - Trouville Rugby Femenino

## ✅ **Cambios Realizados:**

### **🚗 Información de Acceso Eliminada:**
- **Estacionamiento**: Información removida
- **Transporte público**: Información removida
- **Solo dirección**: Mantiene únicamente la ubicación exacta

### **📧 Formulario de Inscripción Actualizado:**
- **Sistema mailto**: Abre el cliente de email del usuario
- **Email configurado**: `info@trouvillerugby.com` (CAMBIAR POR EL EMAIL REAL)
- **Contenido estructurado**: Información organizada del formulario
- **Validación completa**: Todos los campos requeridos

## 📋 **Información que Envía el Formulario:**

### **Datos del Formulario:**
- **Nombre completo**: Nombre y apellido
- **Email**: Dirección de contacto
- **Teléfono**: Número de contacto
- **Fecha de nacimiento**: Para determinar categoría
- **Categoría**: Juveniles o Mayores con horarios
- **Experiencia**: Nivel de experiencia en rugby
- **Mensaje adicional**: Comentarios opcionales
- **Fecha de inscripción**: Timestamp automático

### **Ejemplo de Email Generado:**
```
Asunto: Nueva Inscripción - Trouville Rugby Femenino

Nueva inscripción recibida:

Nombre: María González
Email: maria@email.com
Teléfono: 099123456
Fecha de nacimiento: 1995-05-15
Categoría: Mayores (18 años en adelante) - Martes y Jueves 21:00 a 22:30 horas
Experiencia: Sin experiencia
Mensaje adicional: Quiero empezar a jugar rugby

Fecha de inscripción: 20/10/2025 22:30:15
```

## 🔧 **Configuración del Email:**

### **Email Actual:**
```javascript
const emailTo = 'info@trouvillerugby.com'; // CAMBIAR POR EL EMAIL REAL
```

### **Para Cambiar el Email:**
1. **Editar línea 97** en `src/pages/Inscripciones.jsx`
2. **Cambiar** `info@trouvillerugby.com` por el email real
3. **Actualizar** también en el mensaje de error (línea 120)

### **Ejemplo:**
```javascript
const emailTo = 'inscripciones@trouvillerugby.com'; // Email real del club
```

## 📱 **Funcionamiento del Formulario:**

### **Proceso:**
1. **Usuario completa** el formulario
2. **Validación** de campos requeridos
3. **Generación** del contenido del email
4. **Apertura** del cliente de email del usuario
5. **Envío** manual por parte del usuario

### **Ventajas:**
- **No requiere servidor**: Funciona sin backend
- **Privacidad**: El usuario controla su email
- **Compatibilidad**: Funciona en todos los dispositivos
- **Simplicidad**: No necesita configuración compleja

### **Limitaciones:**
- **Requiere cliente de email**: El usuario debe tener configurado un cliente
- **Envío manual**: El usuario debe enviar el email
- **No automático**: No se envía automáticamente al servidor

## 🎯 **Alternativas Avanzadas:**

### **Si Quieres Envío Automático:**
1. **Servicio de email**: Mailgun, SendGrid, etc.
2. **Formulario con backend**: Node.js, PHP, etc.
3. **Servicios de formularios**: Formspree, Netlify Forms, etc.

### **Ejemplo con Formspree:**
```javascript
// Cambiar el handleSubmit por:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

## 📞 **Información de Contacto Actualizada:**

### **Página de Entrenamientos:**
- **Solo dirección**: Rambla Gandhi y Solano García, Montevideo
- **Botón Google Maps**: Enlace oficial del club
- **Sin información de acceso**: Removida como solicitado

### **Formulario de Inscripción:**
- **Email de destino**: Configurable
- **Contenido completo**: Todos los datos del formulario
- **Formato profesional**: Fácil de leer

---

**⚠️ IMPORTANTE: Cambiar el email en la línea 97 del archivo Inscripciones.jsx por el email real del club.**

**✅ La información de acceso ha sido eliminada y el formulario está configurado para enviar emails reales.**
