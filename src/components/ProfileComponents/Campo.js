import React from 'react';

function Campo({ nomeCampo, valorCampo }) {
  return (
    <div className="flex justify-between items-center w-full">
      {/* Nome do campo alinhado à esquerda */}
      <p className="text-white font-semibold w-1/3 text-left">{nomeCampo}</p>
      
      {/* Valor do campo centralizado */}
      <p className="text-gray-300 w-1/3 text-center">{valorCampo}</p>
      
      {/* Botão Editar alinhado à direita */}
      <a className="text-gray-400 no-underline hover:text-gray-500 cursor-pointer w-1/3 text-right">Editar</a>
    </div>
  );
}

export default Campo;
