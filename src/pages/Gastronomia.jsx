import React from 'react';
import './Pages.css';
import boloRolo from '../assets/bolo_rolo.jpg';
import caldeirada from '../assets/caldeirada.jpg';
import cartola from '../assets/cartola.jpg';
import tapioca from '../assets/tapioca.jpg'

const pratos = [
  {
    id: 1,
    nome: 'Bolo de Rolo',
    descricao: 'O doce mais famoso de Pernambuco, massa fina enrolada com goiabada.',
    imagem: boloRolo,
    ondeComer: 'Casa dos Frios, Paço Alfândega'
  },
  {
    id: 2,
    nome: 'Caldeirada',
    descricao: 'Peixe e frutos do mar cozidos em molho de tomate e leite de coco.',
    imagem: caldeirada,
    ondeComer: 'Restaurante Parraxaxá'
  },
  {
    id: 3,
    nome: 'Cartola',
    descricao: 'Banana frita com queijo coalho e canela.',
    imagem: cartola,
    ondeComer: 'Bode do Veio'
  },
  {
    id: 4,
    nome: 'Tapioca',
    descricao: 'Goma de mandioca recheada com diversos ingredientes.',
    imagem: tapioca,
    ondeComer: 'Mercado de São José'
  }
];

const Gastronomia = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gastronomia Pernambucana</h1>
        <p>Uma explosão de sabores que conta a história do nosso povo</p>
      </div>

      <div className="pratos-grid">
        {pratos.map(prato => (
          <div key={prato.id} className="prato-card">
            <div className="prato-imagem">
              <img src={prato.imagem} alt={prato.nome} />
            </div>
            <div className="prato-info">
              <h3>{prato.nome}</h3>
              <p className="prato-descricao">{prato.descricao}</p>
              <div className="prato-onde">
                <strong>Onde comer:</strong> {prato.ondeComer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="restaurantes-destaque">
        <h2>Restaurantes em Destaque</h2>
        <div className="restaurantes-grid">
          <div className="restaurante-card">
            <h3>Parraxaxá</h3>
            <p>Comida regional em buffet com mais de 80 opções.</p>
          </div>
          <div className="restaurante-card">
            <h3>Bode do Veio</h3>
            <p>Especializado em carne de bode e pratos típicos.</p>
          </div>
          <div className="restaurante-card">
            <h3>Leite</h3>
            <p>Culinária contemporânea em um casarão histórico.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastronomia;