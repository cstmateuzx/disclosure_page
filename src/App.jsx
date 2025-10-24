import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
