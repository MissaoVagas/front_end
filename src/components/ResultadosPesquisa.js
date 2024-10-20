// src/components/ResultadosPesquisa.js
import React from 'react';
import './ResultadosPesquisa.css';

const ResultadosPesquisa = ({ resultados }) => {
  return (
    <section className="resultados-pesquisa">
      <h2 className="text-4xl font-bold text-center mb-8">Resultados da Pesquisa</h2>
      {resultados.length === 0 ? (
        <p className="text-center text-gray-500">Nenhuma vaga encontrada.</p>
      ) : (
        <div className="resultados-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {resultados.map((vaga, index) => (
            <div className="vaga-card p-6 bg-gray-800 rounded-lg shadow-lg" key={index}>
              <h3 className="text-lg font-semibold text-white">{vaga.titulo}</h3>
              <p className="text-gray-400">{vaga.empresa}</p>
              <p className="text-gray-400">{vaga.localizacao}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
                Candidatar-se
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResultadosPesquisa;