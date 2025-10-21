// Componente Footer - Principio SRP (Single Responsibility)
// Responsabilidad única: mostrar información del pie de página

import React from 'react';
import { Link } from 'react-router-dom';
import { socialMedia, contactInfo } from '../../services/communityService';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/inscripciones', label: 'Inscripciones' },
    { path: '/entrenamientos', label: 'Entrenamientos' },
    { path: '/galeria', label: 'Galería' }
  ];

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información del Club */}
          <div className="space-y-4">
            <Logo className="w-12 h-12" showText={true} textSize="text-lg" />
            <p className="text-primary-200 text-sm">
              Club de rugby femenino en Montevideo, Uruguay.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-2 text-sm text-primary-200">
              <p>
                <span className="font-medium">Teléfono:</span><br />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-secondary-400 hover:text-secondary-300 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <span className="font-medium">Dirección:</span><br />
                Rambla Gandhi y Solano García, Montevideo
              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/trouvillerugbyfem/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-primary-200 text-sm">
              Mantente al día con nuestras últimas noticias y eventos
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-200 text-sm">
            © {currentYear} Trouville Rugby Femenino. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
