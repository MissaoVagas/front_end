import React from 'react';
import Navbar from '../components/Navbar';
import Destaque from '../components/Destaque';
import Categorias from '../components/Categorias';
import EmpresasDestaque from '../components/EmpresasDestaque';
import ImpulsioneCarreira from '../components/ImpulsioneCarreira';
import Footer from '../components/Footer';
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <Navbar />
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