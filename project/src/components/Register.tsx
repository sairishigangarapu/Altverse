import React from 'react';
import { ArrowRight, Users, Calendar, Trophy, Star } from 'lucide-react';

const Register = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network with Peers",
      description: "Connect with talented developers from across Karnataka"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Learn from Experts",
      description: "Get mentorship from industry professionals and faculty"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Win Amazing Prizes",
      description: "Compete for exciting prizes and recognition"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "24-Hour Challenge",
      description: "Push your limits in an intensive coding marathon"
    }
  ];

  return (
    <section id="register" className="py-20 px-4 bg-gradient-to-b from-gunmetal to-onyx relative">
      {/* Triangulated divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-teal-glow/10 to-neon-mint/10" 
           style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-glow to-neon-mint bg-clip-text text-transparent font-orbitron">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-glow to-neon-mint mx-auto tri-cut-sm"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border">
              <h3 className="text-2xl font-bold text-soft-white mb-6 font-orbitron">
                Why Join Altverse 2025?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-neon-mint mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-soft-white mb-1 font-inter">{benefit.title}</h4>
                      <p className="text-soft-white/60 text-sm font-inter">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gunmetal/50 tri-cut p-6 neon-border">
              <h4 className="text-xl font-bold text-neon-mint mb-3 font-orbitron">
                Registration Details
              </h4>
              <ul className="space-y-2 text-soft-white/80 font-inter">
                <li>• Early bird registration opens soon</li>
                <li>• Limited spots: 40-45 teams only</li>
                <li>• Team size: 3-5 members</li>
                <li>• Open to all Karnataka students</li>
                <li>• Registration includes meals and swag</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-gunmetal/80 to-onyx/80 tri-cut p-12 neon-border glass">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-neon-mint to-teal-glow tri-cut flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-graphite" />
                </div>
                <h3 className="text-3xl font-bold text-soft-white mb-4 font-orbitron">
                  Secure Your Spot
                </h3>
                <p className="text-soft-white/80 mb-8 font-inter">
                  Registration will open soon. Be the first to know when spots become available!
                </p>
              </div>

              <button className="group relative w-full px-8 py-4 text-lg font-bold text-soft-white bg-gradient-to-r from-neon-mint/20 to-teal-glow/20 tri-cut overflow-hidden transition-all duration-300 hover:scale-105 neon-border mb-6 font-orbitron">
                <span className="relative z-10 flex items-center justify-center">
                  REGISTER NOW
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-mint/30 to-teal-glow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 tri-cut border-2 border-neon-mint/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </button>

              <p className="text-sm text-soft-white/60 font-inter">
                Registration form will be updated soon. Stay tuned for announcements!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border">
            <h3 className="text-2xl font-bold text-neon-mint mb-4 font-orbitron">
              Don't Miss Out!
            </h3>
            <p className="text-soft-white/80 max-w-2xl mx-auto font-inter">
              Spots are limited and will fill up fast. Follow our social media channels and 
              join our Discord server to get notified the moment registration opens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;