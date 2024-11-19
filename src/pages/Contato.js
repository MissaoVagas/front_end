import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContatoComponents from '../components/ContatoComponents/ContatoComponents';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Perfil', link: '/profile' },
  { label: 'Contatos', link: '/contato' },
  { label: 'Sobre nós', link: '#' },
];

function Contato() {
  return (
    <>
      <Navbar isLoginVisible={false} menuItems={menuItems} />
      <ContatoComponents/>
      <Footer />
    </>
  )
}

export default Contato