import React from 'react';
import Navbar from '../components/Navbar';
import Destaque from '../components/Destaque';
import Categorias from '../components/Categorias';
import EmpresasDestaque from '../components/EmpresasDestaque';
import ImpulsioneCarreira from '../components/ImpulsioneCarreira';
import Footer from '../components/Footer';
import './Home.css'

const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Explorar', link: '#' },
    { label: 'Poste um trabalho', link: '/cadastrar-vaga' },
    { label: 'Sobre nós', link: '#' },
  ];

function Home() {
    return (
        <div className="Home">
            <Navbar isLoginVisible={true} menuItems={menuItems}/>
            <main className="main-content">
                <Destaque />
                <Categorias />
                <EmpresasDestaque />
                <ImpulsioneCarreira />
            </main>
            <Footer />
        </div>
    )
}

export default Home