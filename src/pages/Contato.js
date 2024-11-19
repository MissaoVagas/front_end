import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContatoComponents from '../components/ContatoComponents/ContatoComponents';

const menuItems = [
  { label: 'Home', link: '#' },
  { label: 'Explorar', link: '#' },
  { label: 'Contatos', link: '#' },
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