import React from 'react';
import icon1 from '../assets/icons/hourglass.png';
import icon2 from '../assets/icons/star.png';
import icon3 from '../assets/icons/building.png';
import icon4 from '../assets/icons/money.png';
import icon5 from '../assets/icons/smile.png';

const Hero = () => {
  return (
    <div className="hero text-white py-16 flex flex-col items-center space-y-8">
      <div className="hero-icons flex justify-center items-center space-x-8 md:space-x-16">
        <div className="hero-icon icon bg-red-500 rounded-full">
          <img src={icon1} alt="Hourglass Icon" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        <div className="hero-icon icon bg-custom-purple rounded-full">
          <img src={icon2} alt="Star Icon" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        <div className="hero-icon icon bg-red-500 rounded-full">
          <img src={icon3} alt="Building Icon" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        <div className="hero-icon icon bg-red-500 rounded-full">
          <img src={icon4} alt="Money Icon" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        <div className="hero-icon icon bg-red-500 rounded-full">
          <img src={icon5} alt="Smile Icon" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">
      Mais de 5.000 empregos estão esperando por você
      </h1>
      <p className="text-lg md:text-xl text-center">
        Encontre o emprego dos seus sonhos e lance sua carreira
      </p>
      <div className="search-bar flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
        <input 
          type="text" 
          placeholder="Qual é a sua profissão?" 
          className="p-3 w-full md:w-80 rounded-md text-black input-field"
        />
        <input 
          type="text" 
          placeholder="Insira o local" 
          className="p-3 w-full md:w-80 rounded-md text-black input-field"
        />
        <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-md w-full md:w-auto">
        Procurar
        </button>
      </div>
      <a href="#" className="advanced-search text-sm text-gray-400 hover:text-gray-200">
      Pesquisa avançada
      </a>
      <hr className="w-1/2 mx-auto border-gray-800" />
    </div>
  );
};

export default Hero;