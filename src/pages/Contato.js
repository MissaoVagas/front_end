import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contato from '../components/ContatoComponents'

const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Explorar', link: '#' },
    { label: 'Contatos', link: '#' },
    { label: 'Sobre nós', link: '#' },
];

function Contato(){
    return(
        <>
            <Navbar isLoginVisible={false} menuItems={menuItems} />
            <div className="main-content">

            
           
<div className="flex-grow flex items-center justify-center mt-4">
<div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">

<div className="bg-gray-800 p-7 rounded-lg shadow-lg w-full max-w-md">

<h2 className="text-3xl font-semibold mt-4 mb-2 text-left">
Contate-nos
</h2>


<h4>WhatsApp: 00 99999-9999 </h4>
<h4>Instagram: @sem-insta </h4>
<h4>E-mail: sem-email@sememail.com </h4>
</div>

<div className="bg-gray-800 p-3 mb-3 rounded-lg shadow-lg w-full max-w-md">
<h2 className="text-3xl font-semibold mt-4 mb-2 text-left">
Enviar uma mensagem
</h2>

<form>

<div className="mb-4">
  <label
    htmlFor="nome"
    className="block text-sm font-medium text-gray-300"
  >
    Nome
    <input
      type="nome"
      id="nome"
      className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Digite seu nome "
      required
    />
  </label>
</div>

<div className="mb-4">
  <label
    htmlFor="sobrenome"
    className="block text-sm font-medium text-gray-300"
  >
    Sobrenome
    <input
      type="sobrenome"
      id="sobrenome"
      className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Digite seu sobrenome "
      required
    />
  </label>
</div>

<div className="mb-4">
  <label
    htmlFor="email"
    className="block text-sm font-medium text-gray-300"
  >
    E-mail
    <input
      type="email"
      id="email"
      className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Digite seu e-mail "
      required
    />
  </label>
</div>

<div className="mb-4">
  <label
    htmlFor="mensagem"
    className="block text-sm font-medium text-gray-300"
  >
    Sua mensagem
    <input
      type="mensagem"
      id="mensagem"
      className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Digite sua mensagem aqui... "
      required
    />
  </label>
</div>


<button
  type="submit"
  className="w-full mt-7 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded"
>
<label htmlFor="texto">Enviar </label>
</button>

</form>
</div>
</div>
</div>
</div>
<Footer/>
</>
)
}

export default Contato