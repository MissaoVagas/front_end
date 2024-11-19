import React from 'react'
import CurriculoForm from '../components/CurriculoComponents/CurriculoForm';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Curriculo.css'

const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Perfil', link: '/profile' },
    { label: 'Contatos', link: '/contato' },
    { label: 'Sobre nós', link: '#' },
];

function Curriculo(){
    return(
        <>
            <Navbar isLoginVisible={false} menuItems={menuItems} />
            <main className="main-content">
                <CurriculoForm/>
            </main>
            <Footer/>
            
        </>
    )
}

export default Curriculo