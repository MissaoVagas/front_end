import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PesquisaVagas.css'; // Estilos personalizados para a página
import ResultadosPesquisa from '../components/ResultadosPesquisa';
import BarraPesquisa from '../components/BarraPesquisa';

const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Explorar', link: '#' },
    { label: 'Contatos', link: '#' },
    { label: 'Sobre nós', link: '#' },
];

function PesquisaVagas() {
    const [profissao, setProfissao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [resultados, setResultados] = useState([]); // Resultados da pesquisa

    const handleSearch = () => { //Substituir por chamada à API
        
        const Results = [
            
        ];
        setResultados();
    };

    return (
        <div>
            <Navbar isLoginVisible={true} menuItems={menuItems} />
            <main className="main-content">
                <div className="search-bar flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
                    <input
                        type="text"
                        placeholder="Qual é a sua profissão?"
                        value={profissao}
                        onChange={(e) => setProfissao(e.target.value)}
                        className="p-3 w-full md:w-80 rounded-md text-black"
                    />
                    <input
                        type="text"
                        placeholder="Insira o local"
                        value={localizacao}
                        onChange={(e) => setLocalizacao(e.target.value)}
                        className="p-3 w-full md:w-80 rounded-md text-black"
                    />
                    <button onClick={handleSearch} className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-md">
                        Pesquisar
                    </button>
                </div>

                {/* Exibição dos resultados */}
                <section className="resultados mt-8">
                    <h2 className="text-2xl font-bold mb-4">Resultados da Pesquisa:</h2>
                    <div className="resultados-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resultados.length > 0 ? (
                            resultados.map((vaga) => (
                                <div key={vaga.id} className="vaga-card p-4 border rounded shadow">
                                    <h3 className="text-lg font-semibold">{vaga.titulo}</h3>
                                    <p>{vaga.empresa}</p>
                                    <p>{vaga.localizacao}</p>
                                </div>
                            ))
                        ) : (
                            <p>Nenhuma vaga encontrada.</p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default PesquisaVagas;