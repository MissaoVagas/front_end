import React from 'react'
import Navbar from '../components/Navbar';
import MainProfile from '../components/ProfileComponents/MainProfile'
import Footer from '../components/Footer'
import './Profile.css'


const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Cadastrar Curriculo', link: '/curriculo' },
    { label: 'Contatos', link: '/contato' },
    { label: 'Sobre nós', link: '#' },
];

function Profile(){
    return(
        <div className="profile-background">
            <Navbar isLoginVisible={false} menuItems={menuItems} />
            <MainProfile/>
            <Footer/>
        </div>
    )
}

export default Profile