
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Proposal from './components/Proposal';
import Rules from './components/Rules';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';


function MainPage() {
  return (
    <>
      <Hero />
      <Proposal />
      <Rules />
      <Register />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-graphite text-soft-white">
      <Header />
      <div> {/* Removed padding completely */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
