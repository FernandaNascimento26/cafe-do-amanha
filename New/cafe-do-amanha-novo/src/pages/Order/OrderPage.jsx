import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './OrderPage.css';
import menuData from '../../data/menuItems'; 

function OrderPage() {
  const [order, setOrder] = useState({
    name: '',
    tableNumber: '',
    items: []
  });

  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentItem, setCurrentItem] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      const categoria = menuData[item.category];
      const itemInfo = categoria?.itens.find(i => i.nome === item.name);
      const price = itemInfo?.preco || 0;
      return total + price * item.quantity;
    }, 0);
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCurrentItem('');
    setCurrentQuantity(1);
    setShowModal(true);
  };

  const handleAddItem = () => {
    if (!currentItem || currentQuantity <= 0) {
      alert('Por favor, selecione um item e uma quantidade válida.');
      return;
    }

    const updatedItems = [...order.items];
    const existingItemIndex = updatedItems.findIndex(
      item => item.category === currentCategory && item.name === currentItem
    );

    if (existingItemIndex !== -1) {
      updatedItems[existingItemIndex].quantity += currentQuantity;
    } else {
      updatedItems.push({ category: currentCategory, name: currentItem, quantity: currentQuantity });
    }

    setOrder({ ...order, items: updatedItems });
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pedido enviado com sucesso! Valor total: R$ ${calculateTotal(order.items).toFixed(2)}`);
    setOrder({ name: '', tableNumber: '', items: [] });
  };

  return (
    <div className="order-container">
      <h2>Faça seu pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={order.name}
            onChange={(e) => setOrder({ ...order, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tableNumber">Número da Mesa:</label>
          <input
            type="text"
            id="tableNumber"
            value={order.tableNumber}
            onChange={(e) => setOrder({ ...order, tableNumber: e.target.value })}
            required
          />
        </div>

        <div className="menu-category-list">
          {Object.keys(menuData).map((category) => (
            <Button key={category} onClick={() => handleCategoryClick(category)} className="category-button">
              {formatarTitulo(category)}
            </Button>
          ))}
        </div>

        <h3>Total: R$ {calculateTotal(order.items).toFixed(2)}</h3>
        <button type="submit">Enviar Pedido</button>
      </form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Selecione o item e a quantidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="itemSelect">Item:</label>
            <select
              id="itemSelect"
              value={currentItem}
              onChange={(e) => setCurrentItem(e.target.value)}
              className="form-control"
            >
              <option value="">Selecione um item</option>
              {(menuData[currentCategory]?.itens || []).map((item) => (
                <option key={item.nome} value={item.nome}>
                  {item.nome} - R$ {item.preco.toFixed(2)}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              id="quantity"
              value={currentQuantity}
              onChange={(e) => setCurrentQuantity(parseInt(e.target.value))}
              min="1"
              className="form-control"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleAddItem}>Adicionar ao Pedido</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function formatarTitulo(categoria) {
  const mapa = {
    cafes: 'Cafés ☕',
    sobremesas: 'Sobremesas 🍰',
    especiais: 'Especiais 🎵',
    'bebidas-geladas': 'Bebidas Geladas 🥤',
    chas: 'Chás 🍵',
  };
  return mapa[categoria] || categoria;
}

export default OrderPage;
