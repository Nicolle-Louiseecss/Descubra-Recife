import React from 'react';
import './Pages.css';

const Arte = () => {
  const artes = [
    {
      titulo: 'Instituto Ricardo Brennand',
      descricao: 'Castelo medieval com acervo de armas, arte européia e exposições temporárias.',
      local: 'Várzea',
      imagem: '/images/brennand.jpg'
    },
    {
      titulo: 'Oficina Cerâmica Francisco Brennand',
      descricao: 'Parque de esculturas e cerâmicas em meio à natureza exuberante.',
      local: 'Várzea',
      imagem: '/images/brennand-ceramica.jpg'
    },
    {
      titulo: 'Museu Cais do Sertão',
      descricao: 'Museu interativo sobre a cultura sertaneja e Luiz Gonzaga.',
      local: 'Recife Antigo',
      imagem: '/images/cais-do-sertao.jpg'
    },
    {
      titulo: 'Paço do Frevo',
      descricao: 'Museu dedicado à preservação e difusão do frevo.',
      local: 'Recife Antigo',
      imagem: '/images/paco-frevo.jpg'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Arte e Cultura</h1>
        <p>Descubra os tesouros artísticos de Pernambuco</p>
      </div>

      <div className="arte-grid">
        {artes.map((arte, index) => (
          <div key={index} className="arte-card">
            <div className="arte-info">
              <h3>{arte.titulo}</h3>
              <p>{arte.descricao}</p>
              <span className="arte-local">📍 {arte.local}</span>
              <button className="btn-saiba-mais">Saiba mais →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arte;