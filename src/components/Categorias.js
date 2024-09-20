//components/Categorias.js
import React from 'react';
import './Categorias.css';
import financas from '../assets/icons/chartpie.png';
import marketing from '../assets/icons/bullhorn.png';
import ti from '../assets/icons/laptop.png';
import ciencia from '../assets/icons/microscope.png';
import tecnologia from '../assets/icons/gears.png';
import gastronomia from '../assets/icons/utensils.png';
import vendas from '../assets/icons/chartline.png';
import foguete from '../assets/icons/logo.png';

function Categorias() {
  const categorias = [
    { nome: 'Finanças', vagas: '1.720 vagas disponíveis', icone: financas },
    { nome: 'Marketing', vagas: '1.720 vagas disponíveis', icone: marketing },
    { nome: 'TI', vagas: '1.720 vagas disponíveis', icone: ti },
    { nome: 'Ciência', vagas: '1.720 vagas disponíveis', icone: ciencia },
    { nome: 'Tecnologia', vagas: '1.720 vagas disponíveis', icone: tecnologia },
    { nome: 'Gastronomia', vagas: '1.720 vagas disponíveis', icone: gastronomia },
    { nome: 'Vendas', vagas: '1.720 vagas disponíveis', icone: vendas },
    { nome: '+10K vagas', vagas: 'Disponíveis agora!' },
  ];

  return (
    <section className="categorias">
      <h2 className="text-4xl font-bold text-center mb-8">Categorias mais populares</h2>
      <div className="categorias-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {categorias.map((categoria, index) => (
          <div className="categoria-card p-6 bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl" key={index}>
            {categoria.icone && <img src={categoria.icone} alt={categoria.nome} className="w-12 h-12 mx-auto mb-4" />}
            <h3 className="text-lg font-semibold text-white-500 mb-2">{categoria.nome}</h3>
            <p className="text-gray-400 mb-4">{categoria.vagas}</p>
            {categoria.nome === '+10K vagas' && (
              <div className="flex items-center justify-center">
                <button className="bg-white text-gray-800 py-2 px-4 rounded-full transition duration-300" style={{ width: '132px', height: '42px' }}>
                  Explorar Tudo
                </button>
                <img src={foguete} alt="Foguete" className="w-6 h-6 ml-2" />
              </div>
            )}
          </div>
        ))}
      </div>
      <hr className="w-1/2 mx-auto border-gray-800 mt-8" />
    </section>
  );
}

export default Categorias;