import React from 'react';
import { Lightbulb, Target, Award, Zap } from 'lucide-react';

const Proposal = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Innovation",
      description: "Design and develop original games based on surprise themes that challenge your creativity."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Work under guidance from industry professionals and faculty experts throughout the jam."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Evaluation",
      description: "Games evaluated by expert panels providing valuable academic and practical feedback."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reputation Building",
      description: "Strengthen PES University's position as a hub for game development and interactive media."
    }
  ];

  return (
    <section id="proposal" className="py-20 px-4 bg-gradient-to-b from-gunmetal to-onyx relative">
      {/* Triangulated divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-teal-glow/10 to-neon-mint/10" 
           style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-glow to-neon-mint bg-clip-text text-transparent font-orbitron">
            Why Altverse?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-glow to-neon-mint mx-auto tri-cut-sm"></div>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-r from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border glass">
            <p className="text-lg text-soft-white/80 leading-relaxed text-center font-inter">
              Altverse is a dynamic and creative competition where participants will design and develop original games 
              based on a surprise theme. Teams (40–45 shortlisted, with 3–5 members each) will work intensively under 
              mentorship from industry professionals and faculty experts. Games will be evaluated by a panel of experts, 
              providing participants with academic and practical feedback. The event strengthens PES University's 
              reputation as a hub for game development and interactive media.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-gunmetal/50 tri-cut p-6 neon-border hover:bg-gunmetal/70 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/10 to-teal-glow/10 tri-cut opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-neon-mint mb-4 group-hover:text-teal-glow transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-soft-white mb-3 font-orbitron">
                    {feature.title}
                  </h3>
                  <p className="text-soft-white/60 text-sm leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-neon-mint/10 to-teal-glow/10 tri-cut p-8 neon-border">
            <h3 className="text-2xl font-bold text-soft-white mb-4 font-orbitron">
              Join the Revolution
            </h3>
            <p className="text-soft-white/80 max-w-2xl font-inter">
              Be part of Karnataka's premier game development event and showcase your skills 
              on a state-wide platform while building the future of interactive entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;