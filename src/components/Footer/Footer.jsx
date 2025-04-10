import React from 'react';
import './Footer.css';
import logo from '../header/logo.png'; // Assuming you have a logo in this path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <p>Gadgets</p>
        </div>
        <div className="footer-text">
          <p>Made by: Emirchik, Robiya, Akbii, Alimana</p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} History Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
