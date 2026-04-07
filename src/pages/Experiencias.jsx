import React from 'react';
import './Pages.css';

const Experiencias = () => {
  const experiencias = [
    {
      id: 1,
      titulo: 'Aula de Frevo no Passo',
      descricao: 'Aprenda os passos dessa dança contagiante com mestres do Galo da Madrugada.',
      duracao: '2h',
      local: 'Recife Antigo',
      icone: '💃',
      preco: 'R$ 89',
      destaque: true
    },
    {
      id: 2,
      titulo: 'Tour Gastronômico',
      descricao: 'Explore o Mercado de São José com um chef local, prove tapiocas e caldeirada.',
      duracao: '3h',
      local: 'Mercado de São José',
      icone: '🍽️',
      preco: 'R$ 149',
      destaque: false
    },
    {
      id: 3,
      titulo: 'Catamarã Pôr do Sol',
      descricao: 'Navegue pelo Rio Capibaribe e curta um pôr do sol inesquecível com música.',
      duracao: '2h',
      local: 'Marco Zero',
      icone: '⛵',
      preco: 'R$ 120',
      destaque: true
    },
    {
      id: 4,
      titulo: 'Oficina de Maracatu',
      descricao: 'Aprenda a tocar alfaia e conheça os segredos das nações de maracatu.',
      duracao: '3h',
      local: 'Bairro do Recife',
      icone: '🥁',
      preco: 'R$ 79',
      destaque: false
    },
    {
      id: 5,
      titulo: 'Trilha Ecológica',
      descricao: 'Explore a Mata Atlântica com guias especialistas em ecoturismo.',
      duracao: '3h',
      local: 'Parque Dois Irmãos',
      icone: '🌿',
      preco: 'R$ 95',
      destaque: false
    },
    {
      id: 6,
      titulo: 'Degustação de Cachaças',
      descricao: 'Conheça os melhores alambiques e aprenda sobre a produção da cachaça.',
      duracao: '2h',
      local: 'Recife Antigo',
      icone: '🥃',
      preco: 'R$ 110',
      destaque: false
    },
    {
      id: 7,
      titulo: 'Stand Up Paddle',
      descricao: 'Aventure-se pelas piscinas naturais de Boa Viagem com instrutores.',
      duracao: '2h',
      local: 'Boa Viagem',
      icone: '🏄',
      preco: 'R$ 85',
      destaque: false
    },
    {
      id: 8,
      titulo: 'Workshop de Cerâmica',
      descricao: 'Crie sua própria peça inspirada na arte de Francisco Brennand.',
      duracao: '2h30',
      local: 'Várzea',
      icone: '🏺',
      preco: 'R$ 130',
      destaque: false
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Experiências Únicas</h1>
        <p>Vivências que vão transformar sua viagem em memórias inesquecíveis</p>
      </div>

      <div className="experiencias-grid">
        {experiencias.map(exp => (
          <div key={exp.id} className={`experiencia-card ${exp.destaque ? 'destaque' : ''}`}>
            <div className="experiencia-icon">{exp.icone}</div>
            <h3>{exp.titulo}</h3>
            <p className="experiencia-descricao">{exp.descricao}</p>
            <div className="experiencia-detalhes">
              <span className="detalhe">
                <strong>⏱️</strong> {exp.duracao}
              </span>
              <span className="detalhe">
                <strong>📍</strong> {exp.local}
              </span>
              <span className="detalhe preco">
                {exp.preco}
              </span>
            </div>
            <button className="btn-reservar">Reservar Experiência →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencias;