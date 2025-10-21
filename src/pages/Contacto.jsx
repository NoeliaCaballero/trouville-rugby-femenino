// Página Contacto - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar formulario de contacto e información del club

import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Input, Textarea } from '../components/ui/Input';
import Button from '../components/ui/Button';
import { contactInfo, socialMedia } from '../services/communityService';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido';
    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es requerido';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('¡Mensaje enviado exitosamente! Te responderemos pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Section
        title="Contacto"
        subtitle="Estamos aquí para ayudarte"
        variant="primary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            ¿Tienes preguntas sobre el club? ¿Quieres unirte al equipo? 
            ¿Necesitas información sobre sponsors? Contáctanos.
          </p>
        </div>
      </Section>

      {/* Información de Contacto */}
      <Section
        title="Información de Contacto"
        subtitle="Múltiples formas de comunicarte con nosotros"
        variant="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-500 text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">{contactInfo.email}</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                Enviar email
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-500 text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-600 mb-4">{contactInfo.phone}</p>
              <p className="text-sm text-gray-500 mb-4">{contactInfo.schedule}</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(`tel:${contactInfo.phone}`, '_blank')}
              >
                Llamar
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-500 text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dirección</h3>
              <p className="text-gray-600 mb-4">{contactInfo.address}</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open('https://maps.google.com/?q=Av+Rivera+3245+Montevideo+Uruguay', '_blank')}
              >
                Ver en mapa
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-500 text-2xl">🚨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Emergencias</h3>
              <p className="text-gray-600 mb-4">{contactInfo.emergency}</p>
              <Button
                variant="outline"
                size="small"
                onClick={() => window.open(`tel:${contactInfo.emergency}`, '_blank')}
              >
                Llamar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Formulario de Contacto */}
      <Section
        title="Envíanos un Mensaje"
        subtitle="Completa el formulario y nos pondremos en contacto contigo"
      >
        <div className="max-w-2xl mx-auto">
          <Card>
            <Card.Body>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nombre completo"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    error={errors.nombre}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Teléfono"
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                  <Input
                    label="Asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    error={errors.asunto}
                    required
                  />
                </div>

                <Textarea
                  label="Mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  error={errors.mensaje}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={6}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Redes Sociales */}
      <Section
        title="Síguenos en Redes Sociales"
        subtitle="Mantente conectada con nuestra comunidad"
        variant="secondary"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📷</span>
              </div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-sm text-secondary-200 mb-4">@trouville_rugby_femenino</p>
              <Button
                variant="primary"
                size="small"
                onClick={() => window.open(socialMedia.instagram, '_blank')}
              >
                Seguir
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📘</span>
              </div>
              <h3 className="font-semibold mb-2">Facebook</h3>
              <p className="text-sm text-secondary-200 mb-4">Trouville Rugby Femenino</p>
              <Button
                variant="primary"
                size="small"
                onClick={() => window.open(socialMedia.facebook, '_blank')}
              >
                Seguir
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="font-semibold mb-2">TikTok</h3>
              <p className="text-sm text-secondary-200 mb-4">@trouville_rugby</p>
              <Button
                variant="primary"
                size="small"
                onClick={() => window.open(socialMedia.tiktok, '_blank')}
              >
                Seguir
              </Button>
            </Card.Body>
          </Card>

          <Card hover className="text-center">
            <Card.Body>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-secondary-200 mb-4">+598 99 123 456</p>
              <Button
                variant="primary"
                size="small"
                onClick={() => window.open(`https://wa.me/${socialMedia.whatsapp.replace(/\s/g, '')}`, '_blank')}
              >
                Contactar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Section>

      {/* Ubicación en Mapa */}
      <Section
        title="Nuestra Ubicación"
        subtitle="Visítanos en nuestro complejo deportivo"
      >
        <div className="max-w-4xl mx-auto">
          <Card>
            <Card.Body>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Complejo Deportivo Trouville</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-primary-500 mr-3 mt-1">📍</span>
                      <div>
                        <p className="font-medium">Dirección:</p>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary-500 mr-3 mt-1">🚗</span>
                      <div>
                        <p className="font-medium">Estacionamiento:</p>
                        <p className="text-gray-600">Gratuito disponible</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary-500 mr-3 mt-1">🚌</span>
                      <div>
                        <p className="font-medium">Transporte público:</p>
                        <p className="text-gray-600">Líneas 1, 3, 5 y 8</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1234567890!2d-56.1645!3d-34.9011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU0JzA0LjAiUyA1NsKwMDknNTIuMiJX!5e0!3m2!1ses!2suy!4v1234567890123!5m2!1ses!2suy"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Trouville Rugby"
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Contacto;
