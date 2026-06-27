import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) return <Auth onBack={() => setShowAuth(false)} />;

  return (
    <div className="App">
      <Header onAuthClick={() => setShowAuth(true)} />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
