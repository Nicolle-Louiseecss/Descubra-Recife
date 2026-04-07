import React, { useState } from 'react';
import './Pages.css';
import marcoZero from '../assets/marco_zero.jpg';
import brennand from '../assets/brennand.jpg';
import orlaBv from '../assets/orla_bv.jpg';
import ofCeramica from '../assets/of_ceramica.jpg';
import recifeAntigo from '../assets/recife_antigo.jpg';
import pqEsculturas from '../assets/pq_esculturas.jpg'


const destinos = [
  {
    id: 1,
    nome: 'Marco Zero',
    local: 'Recife Antigo',
    descricao: 'O coração histórico de Recife, com a famosa rosa dos ventos e vista para o Rio Capibaribe.',
    imagem: marcoZero,
    categoria: 'Histórico'
  },
  {
    id: 2,
    nome: 'Instituto Ricardo Brennand',
    local: 'Várzea',
    descricao: 'Castelo medieval com acervo de armas e arte européia.',
    imagem: brennand,
    categoria: 'Cultural'
  },
  {
    id: 3,
    nome: 'Praia de Boa Viagem',
    local: 'Boa Viagem',
    descricao: 'A praia mais famosa de Recife, com piscinas naturais e proteção de arrecifes.',
    imagem: orlaBv,
    categoria: 'Praia'
  },
  {
    id: 4,
    nome: 'Oficina Cerâmica Francisco Brennand',
    local: 'Várzea',
    descricao: 'Parque de esculturas e cerâmicas em meio à natureza.',
    imagem: ofCeramica,
    categoria: 'Arte'
  },
  {
    id: 5,
    nome: 'Recife Antigo',
    local: 'Centro',
    descricao: 'Bairro histórico com casarões coloridos, museus e vida noturna.',
    imagem: recifeAntigo,
    categoria: 'Histórico'
  },
  {
    id: 6,
    nome: 'Parque das Esculturas',
    local: 'Recife Antigo',
    descricao: 'Conjunto de esculturas de Francisco Brennand à beira mar.',
    imagem: pqEsculturas,
    categoria: 'Arte'
  }
];

const Destinos = () => {
  const [filtro, setFiltro] = useState('Todos');
  const categorias = ['Todos', 'Histórico', 'Cultural', 'Praia', 'Arte'];

  const destinosFiltrados = filtro === 'Todos' 
    ? destinos 
    : destinos.filter(d => d.categoria === filtro);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Destinos Imperdíveis</h1>
        <p>Conheça os lugares mais incríveis de Recife e região</p>
      </div>

      <div className="filtros-container">
        {categorias.map(cat => (
          <button
            key={cat}
            className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="destinos-grid">
        {destinosFiltrados.map(destino => (
          <div key={destino.id} className="destino-card">
            <div className="destino-imagem">
              <img src={destino.imagem} alt={destino.nome} />
              <span className="destino-categoria">{destino.categoria}</span>
            </div>
            <div className="destino-info">
              <h3>{destino.nome}</h3>
              <p className="destino-local">{destino.local}</p>
              <p className="destino-descricao">{destino.descricao}</p>
              <button className="btn-saiba-mais">Saiba mais →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinos;