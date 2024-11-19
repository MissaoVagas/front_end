import React from "react";
import CadastrarVagaComponent from "../components/CadastrarVagaComponents/CadastrarVagaComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Explorar', link: '#' },
    { label: 'Contatos', link: '#' },
    { label: 'Sobre nós', link: '#' },
];

function CadastrarVaga(){
    return(
        <>
            <Navbar isLoginVisible={false} menuItems={menuItems}/>
            <CadastrarVagaComponent/>
            <Footer/>
        </>
    )
}

export default CadastrarVaga