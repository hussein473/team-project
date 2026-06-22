function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;