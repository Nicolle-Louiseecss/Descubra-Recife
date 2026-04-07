import React from 'react';
import './Pages.css';
import frevo from '../assets/frevo.jpg';
import maracatu from '../assets/maracatu.jpg';
import cavaloMarinho from '../assets/cavalo_marinho.jpg';
import ciranda from '../assets/ciranda.jpg';

const culturas = [
  {
    id: 1,
    titulo: 'Frevo',
    descricao: 'Dança e música que animam o carnaval pernambucano com sua energia contagiante.',
    imagem: frevo,
    curiosidade: 'Patrimônio Imaterial da Humanidade pela UNESCO'
  },
  {
    id: 2,
    titulo: 'Maracatu',
    descricao: 'Ritmo afro-brasileiro com cortejo de rei e rainha, baque virado e baque solto.',
    imagem: maracatu,
    curiosidade: 'Existem mais de 50 nações de maracatu ativas em Recife'
  },
  {
    id: 3,
    titulo: 'Cavalo Marinho',
    descricao: 'Folguedo popular que combina teatro, dança e música.',
    imagem: cavaloMarinho,
    curiosidade: 'Originário da Zona da Mata Norte de Pernambuco'
  },
  {
    id: 4,
    titulo: 'Ciranda',
    descricao: 'Dança de roda com origem na zona rural, marcada por passos simples e alegres.',
    imagem: ciranda,
    curiosidade: 'A ciranda foi imortalizada pela música "Ciranda da Bailarina"'
  }
];

const Cultura = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Cultura Pernambucana</h1>
        <p>Uma riqueza que pulsa nas veias do nosso povo</p>
      </div>

      <div className="culturas-grid">
        {culturas.map(cultura => (
          <div key={cultura.id} className="cultura-card">
            <div className="cultura-imagem">
              <img src={cultura.imagem} alt={cultura.titulo} />
            </div>
            <div className="cultura-info">
              <h3>{cultura.titulo}</h3>
              <p>{cultura.descricao}</p>
              <div className="cultura-curiosidade">
                💡 {cultura.curiosidade}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="eventos-section">
        <h2>Próximos Eventos Culturais</h2>
        <div className="eventos-lista">
          <div className="evento-item">
            <div className="evento-data">MARÇO</div>
            <div className="evento-info">
              <h4>Carnaval Recife e Olinda</h4>
              <p>O maior carnaval de rua do mundo</p>
            </div>
          </div>
          <div className="evento-item">
            <div className="evento-data">ABRIL</div>
            <div className="evento-info">
              <h4>Festival de Frevo</h4>
              <p>Homenagem ao ritmo que é patrimônio da humanidade</p>
            </div>
          </div>
          <div className="evento-item">
            <div className="evento-data">JUNHO</div>
            <div className="evento-info">
              <h4>São João no Sítio Trindade</h4>
              <p>O maior São João da cidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultura;