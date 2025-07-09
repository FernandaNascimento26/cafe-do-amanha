import { useState,} from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import menuData from '../../data/menuItems';
import './Menu.css';

function Menu() {
  const [categoriaAtual, setCategoriaAtual] = useState('cafes');

  const dadosCategoria = menuData[categoriaAtual];
  const imagem = dadosCategoria.imagem;
  const itens = dadosCategoria.itens;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Café do Amanhã</h1>
      </div>

      <div className="menu-content">
        <div className="menu-image">
          <img src={imagem} alt={categoriaAtual} />
        </div>

        <div className="menu-tabs">
          <Tabs
            defaultActiveKey="cafes"
            id="styled-menu-tabs"
            className="mb-3"
            onSelect={(key) => setCategoriaAtual(key)}
          >
            {Object.entries(menuData).map(([chave, dados]) => (
              <Tab key={chave} eventKey={chave} title={formatarTitulo(chave)}>
                <ul className="menu-list">
                  {dados.itens.map((item) => (
                    <li key={item.nome}>
                      {item.nome} <span>R$ {item.preco.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// Função utilitária para capitalizar e adicionar emoji
function formatarTitulo(chave) {
  const titulos = {
    cafes: 'Cafés ☕',
    sobremesas: 'Sobremesas 🍰',
    especiais: 'Especiais 🎵',
    'bebidas-geladas': 'Bebidas Geladas 🥤',
    chas: 'Chás 🍵',
  };
  return titulos[chave] || chave;
}

export default Menu;
