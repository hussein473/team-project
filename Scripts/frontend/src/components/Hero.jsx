function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <h1>Fresh Sushi Made Daily</h1>
      <p>Authentic Japanese cuisine crafted with passion.</p>
      <button onClick={scrollToMenu}>Explore Menu</button>
    </section>
  );
}

export default Hero;
