import React, { useState } from 'react';
import FiltroPesquisa from '../components/FiltroPesquisa';
import ResultadosPesquisa from '../components/ResultadosPesquisa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PesquisaVagas.css';

const categorias = [
    { nome: 'Desenvolvimento' },
    { nome: 'Design' },
    { nome: 'Marketing' },
    { nome: 'Vendas' },
];

const PesquisaVagas = () => {
    const [resultados, setResultados] = useState([]);

    const handleFilterChange = (filtros) => {
        // Aqui você pode implementar a lógica para buscar as vagas com base nos filtros
        console.log('Filtros aplicados:', filtros);
        
        // Exemplo de resultados fictícios
        const vagasFicticias = [
            { titulo: 'Desenvolvedor Frontend', empresa: 'Empresa A', localizacao: 'São Paulo' },
            { titulo: 'Designer Gráfico', empresa: 'Empresa B', localizacao: 'Rio de Janeiro' },
            // Adicione mais vagas conforme necessário
        ];

        // Filtrar as vagas com base nos filtros selecionados
        const resultadosFiltrados = vagasFicticias.filter(vaga => {
            const correspondeCategoria = filtros.categoria ? vaga.titulo.includes(filtros.categoria) : true;
            const correspondeLocalizacao = filtros.localizacao ? vaga.localizacao.includes(filtros.localizacao) : true;
            return correspondeCategoria && correspondeLocalizacao;
        });

        setResultados(resultadosFiltrados);
    };

    return (
        <div>
            <Navbar isLoginVisible={true} menuItems={menuItems} />
            <main className="main-content">
                <FiltroPesquisa categorias={categorias} onFilterChange={handleFilterChange} />
                <ResultadosPesquisa resultados={resultados} />
            </main>
            <Footer />
        </div>
    );
};

export default PesquisaVagas;
