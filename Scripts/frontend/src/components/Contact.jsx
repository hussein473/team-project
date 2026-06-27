function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <div className="contact-form">
        <input type="text"  placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea rows="5"  placeholder="Your Message"></textarea>
        <button type="button">Send Message</button>
      </div>
    </section>
  );
}

export default Contact;
