import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Importar solo las páginas necesarias
import Home from './pages/Home';
import Inscripciones from './pages/Inscripciones';
import Entrenamientos from './pages/Entrenamientos';
import Galeria from './pages/Galeria';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
        <Route path="/entrenamientos" element={<Entrenamientos />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </Layout>
  );
};

export default App;
