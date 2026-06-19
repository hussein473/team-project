// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Whether you have a question about our menu, want to book a table, or just want to say hello.</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>123 Sushi Street, Tokyo, Japan</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+81 3-1234-5678</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@sushimaster.com</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🕐</span>
              <div>
                <h4>Hours</h4>
                <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          {submitted && (
            <div className="success-message">
              ✅ Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;