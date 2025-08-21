import React from 'react';
import { Users, Clock, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-onyx to-gunmetal relative">
      {/* Triangulated divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-neon-mint/10 to-teal-glow/10" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-orbitron">
            What is Altverse?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-soft-white/80 leading-relaxed font-inter">
              Altverse 2025 is a 24-hour on-campus state-level game jam hosted by PES University. 
              Students from across Karnataka will collaborate to design and build games from scratch. 
              The jam pushes creativity, teamwork, and innovation under time-bound conditions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gunmetal/50 tri-cut neon-border hover:bg-gunmetal/70 transition-all duration-300 group">
                <Clock className="w-8 h-8 mx-auto mb-3 text-neon-mint group-hover:text-teal-glow transition-colors duration-300" />
                <h3 className="font-bold text-soft-white mb-2 font-orbitron">24 Hours</h3>
                <p className="text-sm text-soft-white/60 font-inter">Non-stop coding</p>
              </div>
              
              <div className="text-center p-6 bg-gunmetal/50 tri-cut neon-border hover:bg-gunmetal/70 transition-all duration-300 group">
                <Users className="w-8 h-8 mx-auto mb-3 text-teal-glow group-hover:text-neon-mint transition-colors duration-300" />
                <h3 className="font-bold text-soft-white mb-2 font-orbitron">40-45 Teams</h3>
                <p className="text-sm text-soft-white/60 font-inter">3-5 members each</p>
              </div>
              
              <div className="text-center p-6 bg-gunmetal/50 tri-cut neon-border hover:bg-gunmetal/70 transition-all duration-300 group">
                <Trophy className="w-8 h-8 mx-auto mb-3 text-neon-mint group-hover:text-teal-glow transition-colors duration-300" />
                <h3 className="font-bold text-soft-white mb-2 font-orbitron">State Level</h3>
                <p className="text-sm text-soft-white/60 font-inter">Karnataka-wide</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-neon-mint/10 to-teal-glow/10 tri-cut p-8 neon-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/5 to-teal-glow/5 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-soft-white mb-4 font-orbitron">
                  Experience the Future
                </h3>
                <p className="text-soft-white/80 mb-6 font-inter">
                  Join the ultimate gaming experience where creativity meets technology. 
                  Build the next generation of games with fellow developers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Unity', 'Unreal', 'Godot', 'JavaScript', 'C#', 'Python'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gunmetal/50 text-neon-mint tri-cut-sm text-sm border border-neon-mint/30 font-inter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;