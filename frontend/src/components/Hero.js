// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to Sushi Master</h1>
        <p>Experience the finest Japanese cuisine with our authentic sushi made from the freshest ingredients.</p>
        <div className="hero-buttons">
          <button className="btn-primary">View Menu</button>
          <button className="btn-secondary">Book a Table</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Sushi Varieties</span>
          </div>
          <div className="stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;