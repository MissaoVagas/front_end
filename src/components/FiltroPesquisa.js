// src/components/FiltroPesquisa.js
import React, { useState } from 'react';
import './FiltroPesquisa.css';

const FiltroPesquisa = ({ categorias, onFilterChange }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ categoria: categoriaSelecionada, localizacao });
  };

  return (
    <section className="filtro-pesquisa p-6 bg-gray-700 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Filtrar Vagas</h2>
      <form onSubmit={handleFilterSubmit} className="flex flex-col space-y-4">
        <select 
          value={categoriaSelecionada} 
          onChange={(e) => setCategoriaSelecionada(e.target.value)} 
          className="p-3 rounded-md"
        >
          <option value="">Selecione uma Categoria</option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.nome}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input 
          type="text" 
          placeholder="Insira a localização" 
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)} 
          className="p-3 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">
          Aplicar Filtros
        </button>
      </form>
    </section>
  );
};

export default FiltroPesquisa;