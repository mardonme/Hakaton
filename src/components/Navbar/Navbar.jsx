import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Kubosoft</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/hr">HR Panel</a></li>
        <li><a href="/chatbot">Chatbot</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;