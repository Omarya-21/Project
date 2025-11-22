import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">PC Parts Shop</Link>
        </div>
        <button 
          className={`menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/cpus" onClick={() => setMenuOpen(false)}>CPUs</Link></li>
          <li><Link to="/gpus" onClick={() => setMenuOpen(false)}>GPUs</Link></li>
          <li><Link to="/ram" onClick={() => setMenuOpen(false)}>RAM</Link></li>
          <li><Link to="/storage" onClick={() => setMenuOpen(false)}>Storage</Link></li>
          <li><Link to="/powersupplies" onClick={() => setMenuOpen(false)}>Power Supplies</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="cart-link">
              Cart
              {getCartItemsCount() > 0 && (
                <span className="cart-count">{getCartItemsCount()}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;