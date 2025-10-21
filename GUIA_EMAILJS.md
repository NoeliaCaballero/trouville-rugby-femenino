# 📧 CONFIGURACIÓN EMAILJS - Envío Automático

## 🚀 **Paso a Paso para Configurar EmailJS**

### **✅ Paso 1: Crear cuenta en EmailJS**
1. **Ir a**: [https://www.emailjs.com](https://www.emailjs.com)
2. **Registrarse** con tu email: `noelia.caballero212@gmail.com`
3. **Confirmar** tu cuenta por email

### **✅ Paso 2: Configurar Email Service**
1. **En el dashboard**, ir a "Email Services"
2. **Hacer clic** en "Add New Service"
3. **Seleccionar** "Gmail" (ya que usas Gmail)
4. **Conectar** tu cuenta de Gmail
5. **Copiar el Service ID** (ejemplo: `service_abc123`)

### **✅ Paso 3: Crear Email Template**
1. **Ir a** "Email Templates"
2. **Hacer clic** en "Create New Template"
3. **Usar este template**:

```
Asunto: Nueva Inscripción - Trouville Rugby Femenino

Hola Noelia,

Has recibido una nueva inscripción para Trouville Rugby Femenino:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{telefono}}
Fecha de nacimiento: {{fecha_nacimiento}}
Categoría: {{categoria}}
Experiencia: {{experiencia}}
Mensaje: {{mensaje}}

Fecha de inscripción: {{fecha_inscripcion}}

Saludos,
Sistema de Inscripciones Trouville
```

4. **Guardar** el template
5. **Copiar el Template ID** (ejemplo: `template_xyz789`)

### **✅ Paso 4: Obtener Public Key**
1. **Ir a** "Account" → "General"
2. **Copiar** tu Public Key (ejemplo: `user_abc123def456`)

### **✅ Paso 5: Actualizar el código**
En `src/pages/Inscripciones.jsx`, líneas 81-83:

```javascript
// Reemplazar estos valores:
const serviceID = 'service_abc123'; // Tu Service ID
const templateID = 'template_xyz789'; // Tu Template ID  
const publicKey = 'user_abc123def456'; // Tu Public Key
```

## 📧 **Ejemplo de Email que Recibirás:**

```
Asunto: Nueva Inscripción - Trouville Rugby Femenino

Hola Noelia,

Has recibido una nueva inscripción para Trouville Rugby Femenino:

Nombre: María González Pérez
Email: maria@email.com
Teléfono: 099123456
Fecha de nacimiento: 1995-05-15
Categoría: Mayores (18 años en adelante) - Martes y Jueves 21:00 a 22:30 horas
Experiencia: Sin experiencia
Mensaje: Quiero empezar a jugar rugby

Fecha de inscripción: 20/10/2025 22:30:15

Saludos,
Sistema de Inscripciones Trouville
```

## 🎯 **Ventajas de EmailJS:**

- ✅ **Gratis**: 200 emails por mes gratis
- ✅ **Fácil**: Solo necesitas 3 IDs
- ✅ **Directo**: Envía desde tu Gmail
- ✅ **Confiable**: Servicio establecido
- ✅ **Sin servidor**: No necesitas backend

## 🔧 **Configuración Actual:**

### **Archivos Modificados:**
- ✅ **EmailJS instalado**: `npm install @emailjs/browser`
- ✅ **Import agregado**: `import emailjs from '@emailjs/browser'`
- ✅ **Función actualizada**: Envío automático configurado

### **Para Activar:**
1. **Crear cuenta** en EmailJS
2. **Configurar Gmail** como servicio
3. **Crear template** con el texto proporcionado
4. **Copiar los 3 IDs** al código
5. **¡Listo!** - Envío automático funcionando

## 📱 **Cómo Funciona:**

1. **Usuario completa** el formulario
2. **Hace clic** en "Enviar"
3. **EmailJS envía** automáticamente desde tu Gmail
4. **Email llega** a `noelia.caballero212@gmail.com`
5. **Usuario recibe** confirmación de éxito

## 🆘 **Si Tienes Problemas:**

### **Error común**: "Invalid template"
- **Solución**: Verificar que el Template ID sea correcto

### **Error común**: "Service not found"
- **Solución**: Verificar que el Service ID sea correcto

### **Error común**: "Invalid public key"
- **Solución**: Verificar que el Public Key sea correcto

---

**⚠️ IMPORTANTE: Una vez que tengas los 3 IDs de EmailJS, reemplázalos en las líneas 81-83 del archivo Inscripciones.jsx**

**✅ Después de la configuración, todas las inscripciones llegarán automáticamente a tu Gmail**
