// components/EmpresasDestaque.js
import React from 'react';
import './EmpresasDestaque.css';
import foguete_destaque from '../assets/icons/foguete_destaque.png';

function EmpresasDestaque() {
  const empresas = [
    { nome: 'Unicorn Enterprises', vagas: '30+ vagas disponíveis', icone: foguete_destaque },
    { nome: 'Tech Foals Inc.', vagas: '28+ vagas disponíveis', icone: foguete_destaque },
    { nome: 'B Bank Corp.', vagas: '12+ vagas disponíveis', icone: foguete_destaque },
    { nome: 'McBurger Inc.', vagas: '45+ vagas disponíveis', icone: foguete_destaque },
  ];

  return (
    <section className="empresas-destaque">
      <h2 className="text-4xl font-bold text-center mb-8">Empresas em destaque</h2>
      <div className="empresas-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {empresas.map((empresa, index) => (
          <div className="empresa-card p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl" key={index}>
            <img src={empresa.icone} alt={empresa.nome} className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{empresa.nome}</h3>
            <p className="text-gray-400 mb-4">{empresa.vagas}</p>
            <button className="bg-white text-gray-800 py-2 px-4 rounded-full transition duration-300">Explorar</button>
          </div>
        ))}
      </div>
      <hr className="w-1/2 mx-auto border-gray-800 mt-8" />
    </section>
  );
}

export default EmpresasDestaque;