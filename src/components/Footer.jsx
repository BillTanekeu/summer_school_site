import React from "react";
import "../styles/components/Footer.css";
import { X } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section Informations */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are committed to providing exceptional services and building a community that inspires innovation.
          </p>
        </div>

        {/* Section Liens utiles */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="speakers">Speakers</a></li>
            <li><a href="agenda">Agenda</a></li>
            <li><a href="hackathon">Hackathon</a></li>
            <li><a href="gallery">Gallery</a></li>
          </ul>
        </div>

        {/* Section Contacts */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: caterbilljordan@gamil.com</p>
          <p>Phone: +237 671982021 / 695659451 </p>
          <p>Location:  Yaounde, Cameroon</p>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <X />

             </a>
            <a href="https://www.linkedin.com/in/jordan-tanekeu-000a4517b/" target="_blank" rel="noopener noreferrer">
            <Linkedin />

            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BantArtificial Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
