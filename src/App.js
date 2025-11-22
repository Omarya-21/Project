import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CPUs from './pages/CPUs';
import GPUs from './pages/GPUs';
import RAM from './pages/RAM';
import Storage from './pages/Storage';
import PowerSupplies from './pages/PowerSupplies';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cpus" element={<CPUs />} />
            <Route path="/gpus" element={<GPUs />} />
            <Route path="/ram" element={<RAM />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/powersupplies" element={<PowerSupplies />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;