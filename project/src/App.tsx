import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Proposal from './components/Proposal';
import Rules from './components/Rules';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-graphite text-soft-white">
      <Header />
      <Hero />
      <About />
      <Proposal />
      <Rules />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
