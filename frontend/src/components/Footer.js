// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🍣 Sushi Master</h3>
          <p>Authentic Japanese cuisine made with love and passion.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">📱</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📸</a>
            <a href="#" className="social-link">▶️</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sushi Master. All rights reserved. Made with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;