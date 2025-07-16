import React, { useState } from 'react';
import '../styles/components/Header.css'
import LoginModal from './LoginModal.jsx';
import logo_estlc from '../assets/estlc.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img
          src={logo_estlc}
          alt="Temenos"
          className="logo-image"
        />
        <span className="logo-text">Ecole D'été ESTLC D'Abam</span>
      </div>

      {/* Bouton Toggle pour le menu mobile */}
      <div className="nav-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation */}
      <nav className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
      <Link to="/home" > Home </Link>
      <Link to="/speakers" > Speakers </Link>
      <Link to="/agenda" > Agenda </Link>
      <Link to="/hackathon" > Hackathon </Link>
      <Link to="/gallery" > Gallery </Link>
      
      </nav>

      {/* Desktop Navigation */}
      <nav className="nav-links">
      <Link to="/home" > Home </Link>
      <Link to="/speakers" > Speakers </Link>
      <Link to="/agenda" > Agenda </Link>
      <Link to="/hackathon" > Hackathon </Link>
      <Link to="/gallery" > Gallery </Link>
      

      </nav>

    
    </header>
  );
};

export default Header;