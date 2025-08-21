import React from 'react';
import { Gamepad2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-gunmetal/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-8 h-8 text-neon-mint mr-3" />
            <h3 className="text-2xl font-bold text-soft-white font-orbitron">
              ALTVERSE 2025
            </h3>
          </div>
          
          <p className="text-soft-white/60 mb-6 max-w-2xl mx-auto font-inter">
            Karnataka's premier 24-hour game development jam. Where creativity meets code, 
            and dreams become playable reality.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="text-sm text-soft-white/50 font-inter">
              <span className="text-neon-mint font-semibold">Organized by:</span> G Cube - Game Development Club
            </div>
            <div className="text-sm text-soft-white/50 font-inter">
              <span className="text-teal-glow font-semibold">Hosted at:</span> PES University, RR Campus
            </div>
          </div>

          <div className="border-t border-gunmetal/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-soft-white/40 text-sm mb-4 md:mb-0 font-inter">
                © 2025 Altverse. All rights reserved.
              </p>
              <div className="flex items-center text-soft-white/40 text-sm font-inter">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-neon-mint mx-2 animate-pulse" />
                <span>by G Cube Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;