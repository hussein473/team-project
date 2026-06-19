// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-image-placeholder">
            <span>🍣</span>
          </div>
        </div>
        <div className="about-content">
          <h2>About Sushi Master</h2>
          <p>
            Founded in 2010, Sushi Master has been serving authentic Japanese cuisine
            with a modern twist. Our commitment to quality and freshness has made us
            a favorite among sushi lovers.
          </p>
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🍱</span>
              <div>
                <h4>Fresh Ingredients</h4>
                <p>Daily sourced from local markets</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">👨‍🍳</span>
              <div>
                <h4>Master Chefs</h4>
                <p>Expert chefs with years of experience</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🌿</span>
              <div>
                <h4>Authentic Recipes</h4>
                <p>Traditional Japanese techniques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;