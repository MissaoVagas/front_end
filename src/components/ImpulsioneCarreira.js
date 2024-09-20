// components/ImpulsioneCarreira.js
import React from 'react';
import './ImpulsioneCarreira.css';

function ImpulsioneCarreira() {
  const recursos = [
    { titulo: 'Indústrias mais quentes para trabalhar', leitura: '5 min de leitura' },
    { titulo: 'Maximizando a eficiência da equipe', leitura: '8 min de leitura' },
    { titulo: 'Conquistando um emprego em tecnologia', leitura: '3 min de leitura' },
  ];

  return (
    <section className="impulsione-carreira">
      <h2>Impulsione sua carreira</h2>
      <div className="recursos-grid">
        {recursos.map((recurso, index) => (
          <div className="recurso-card" key={index}>
            <h3>{recurso.titulo}</h3>
            <p>{recurso.leitura}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImpulsioneCarreira;