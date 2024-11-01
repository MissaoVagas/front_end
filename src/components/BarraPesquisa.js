import React from 'react';

function BarraPesquisa({ profissao, setProfissao, localizacao, setLocalizacao, onSearch }) {
    return (
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
            <button onClick={onSearch} className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-md">
                Procurar
            </button>
        </div>
    );
}

export default BarraPesquisa;