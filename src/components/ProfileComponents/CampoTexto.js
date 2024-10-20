import React from 'react';

function CampoTexto({ nomeCampo, valorCampo }) {
  return (
    <div className="flex flex-col space-y-2">
      {/* Linha com nomeCampo e botão Editar */}
      <div className="flex justify-between items-center w-full">
        <p className="text-white font-semibold">{nomeCampo}</p>
        <a className="text-gray-400 no-underline hover:text-gray-500 cursor-pointer">Editar</a>
      </div>
      {/* Valor do campo abaixo */}
      <p className="text-gray-300">{valorCampo}</p>
    </div>
  );
}

export default CampoTexto;
