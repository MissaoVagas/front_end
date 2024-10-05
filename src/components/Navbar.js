// src/components/Navbar.js
import React, { useState } from 'react';
import logo from '../assets/icons/logo.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
          <span className="text-2xl text-white-500">JobsRocket</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex md:items-center md:space-x-5 ${isOpen ? 'flex' : 'hidden'} absolute md:static navbar md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto`}>
          <li className="text-center py-2"><a className="text-white hover:text-blue-400" href="/home">Home</a></li>
          <li className="text-center py-2"><a href="#" className="text-white hover:text-blue-400">Poste um trabalho</a></li>
          <li className="text-center py-2"><a href="#" className="text-white hover:text-blue-400">Sobre nós</a></li>
          <li className="text-center py-2 md:hidden"><button data-testid="mobile-login-button" className="bg-purple-500 hover:bg-blue-400 text-white py-2 px-4 rounded transition duration-300">Log in</button></li>
        </ul>
        <button data-testid="desktop-login-button" className="hidden md:block bg-white hover:bg-blue-400 text-black py-2 px-4 rounded-full transition duration-300">
          Log in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;