import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import OrderPage from './pages/Order/OrderPage';
import Stories from './components/Stories'; 
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pedidos" element={<OrderPage />} />
        <Route path="/historias" element={<Stories />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
