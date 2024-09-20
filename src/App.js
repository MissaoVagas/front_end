// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categorias from './components/Categorias';
import EmpresasDestaque from './components/EmpresasDestaque';
import ImpulsioneCarreira from './components/ImpulsioneCarreira';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Categorias />
        <EmpresasDestaque />
        <ImpulsioneCarreira />
      </main>
      <Footer />
    </div>
  );
}

export default App;
