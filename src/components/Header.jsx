import React from 'react';
import '../styles/components/Header.css';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo_estlc from '../assets/estlc.png';

function Header() {
  return (
    <header className="Header">
      
      <img
                src={logo_estlc}
                alt="logo_estlc"
                className="logo-image"        />
      <h1 id = "Htitle">Ecole d'été sur la santé numérique et l'IOT </h1>

            
            <p>{<FaCalendarAlt/>} 28-08-2025</p>
            <p>{<FaLocationDot/>} Ambam, Cameroun</p>
            
    </header>
  );
}

export default Header;
