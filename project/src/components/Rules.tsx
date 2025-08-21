import React from 'react';
import { CheckCircle, Clock, Users, Code, Palette, Shield } from 'lucide-react';

const Rules = () => {
  const rules = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Composition",
      description: "Teams must have 3–5 members each"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Development Window",
      description: "Games must be developed during the 24-hour jam period"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Asset Requirements",
      description: "All assets must be original or open-source with proper attribution"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Theme Reveal",
      description: "Theme will be revealed at the start of the event"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Deadline Compliance",
      description: "Respect all deadlines and submission requirements"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Code of Conduct",
      description: "Maintain professional behavior and respect for all participants"
    }
  ];

  return (
    <section id="rules" className="py-20 px-4 bg-gradient-to-b from-onyx to-gunmetal relative">
      {/* Triangulated divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-neon-mint/10 to-teal-glow/10" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-orbitron">
            Rules & Guidelines
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rules.map((rule, index) => (
            <div key={index} className="group relative">
              <div className="bg-gunmetal/50 tri-cut p-6 neon-border hover:bg-gunmetal/70 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/10 to-teal-glow/10 tri-cut opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-neon-mint mr-3 group-hover:text-teal-glow transition-colors duration-300">
                      {rule.icon}
                    </div>
                    <h3 className="text-lg font-bold text-soft-white font-orbitron">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-soft-white/60 text-sm leading-relaxed font-inter">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-soft-white mb-4 font-orbitron">
              Important Notice
            </h3>
            <p className="text-soft-white/80 leading-relaxed font-inter">
              Detailed rules and guidelines will be provided to registered participants closer to the event date. 
              Make sure to join our communication channels for real-time updates and clarifications during the jam.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gunmetal/30 tri-cut p-6 neon-border">
            <h4 className="text-xl font-bold text-neon-mint mb-2 font-orbitron">
              Fair Play
            </h4>
            <p className="text-soft-white/60 text-sm font-inter">
              All submissions will be checked for originality and compliance
            </p>
          </div>
          
          <div className="bg-gunmetal/30 tri-cut p-6 neon-border">
            <h4 className="text-xl font-bold text-teal-glow mb-2 font-orbitron">
              Support
            </h4>
            <p className="text-soft-white/60 text-sm font-inter">
              Mentors and organizers will be available throughout the event
            </p>
          </div>
          
          <div className="bg-gunmetal/30 tri-cut p-6 neon-border">
            <h4 className="text-xl font-bold text-neon-mint mb-2 font-orbitron">
              Recognition
            </h4>
            <p className="text-soft-white/60 text-sm font-inter">
              All participants will receive certificates and winners get prizes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;