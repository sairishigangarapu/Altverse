import React from 'react';
import { Calendar, MapPin, Gamepad2 } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gunmetal via-onyx to-graphite">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-onyx/50 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-mint/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-glow/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-neon-mint/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-neon-mint animate-bounce neon-glow" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-mint via-teal-glow to-neon-mint bg-clip-text text-transparent animate-pulse font-orbitron neon-glow">
          ALTVERSE 2025
        </h1>
        
        <div className="text-xl md:text-2xl text-soft-white/90 mb-8 space-y-2 font-orbitron">
          <p className="text-neon-mint font-semibold">24-Hour State-Level Game Jam</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-glow" />
              <span>13–14 Sept 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-neon-mint" />
              <span>PESU52, RR Campus, PES University</span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 max-w-md mx-auto">
          <CountdownTimer />
        </div>

        <div className="mt-12">
          <button 
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-4 text-lg font-bold text-soft-white bg-gradient-to-r from-neon-mint/20 to-teal-glow/20 tri-cut overflow-hidden transition-all duration-300 hover:scale-105 neon-border font-orbitron"
          >
            <span className="relative z-10">REGISTER NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-mint/30 to-teal-glow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 tri-cut border-2 border-neon-mint/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-neon-mint tri-cut-sm animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-teal-glow tri-cut-sm animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-neon-mint tri-cut-sm animate-ping delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;