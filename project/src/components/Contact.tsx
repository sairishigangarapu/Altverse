import React from 'react';
import { Mail, MessageCircle, Instagram, Twitter, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "gcube@pes.edu",
      link: "mailto:gcube@pes.edu"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discord",
      description: "Join our server",
      link: "#"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "@gcube_pesu",
      link: "#"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: "Twitter",
      description: "@gcube_pesu",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-onyx to-graphite relative">
      {/* Triangulated divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-neon-mint/10 to-teal-glow/10" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-orbitron">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border">
              <h3 className="text-2xl font-bold text-soft-white mb-6 font-orbitron">
                Contact Information
              </h3>
              <p className="text-soft-white/80 mb-6 leading-relaxed font-inter">
                For queries, contact G Cube – The Game Development Club, PES University. 
                We're here to help with any questions about Altverse 2025.
              </p>
              
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-neon-mint mt-1" />
                <div>
                  <h4 className="font-bold text-soft-white mb-1 font-inter">Location</h4>
                  <p className="text-soft-white/60 font-inter">PESU52, RR Campus<br />PES University, Bangalore</p>
                </div>
              </div>

              <div className="bg-gunmetal/50 tri-cut p-6 neon-border">
                <h4 className="text-lg font-bold text-teal-glow mb-3 font-orbitron">
                  Quick Response
                </h4>
                <p className="text-soft-white/80 text-sm font-inter">
                  We typically respond to queries within 24 hours. For urgent matters, 
                  reach out through multiple channels for faster assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-soft-white mb-6 font-orbitron">
              Connect With Us
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="group block bg-gunmetal/50 tri-cut p-6 neon-border hover:bg-gunmetal/70 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/10 to-teal-glow/10 tri-cut opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-neon-mint mb-3 group-hover:text-teal-glow transition-colors duration-300">
                      {method.icon}
                    </div>
                    <h4 className="font-bold text-soft-white mb-2 font-orbitron">
                      {method.title}
                    </h4>
                    <p className="text-soft-white/60 text-sm font-inter">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border mt-8">
              <h4 className="text-xl font-bold text-neon-mint mb-4 font-orbitron">
                Stay Updated
              </h4>
              <p className="text-soft-white/80 mb-6 font-inter">
                Follow us on social media and join our Discord community for the latest updates, 
                announcements, and behind-the-scenes content about Altverse 2025.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neon-mint/20 tri-cut-sm flex items-center justify-center neon-border hover:bg-neon-mint/30 transition-colors duration-300">
                  <Github className="w-5 h-5 text-neon-mint" />
                </a>
                <a href="#" className="w-10 h-10 bg-teal-glow/20 tri-cut-sm flex items-center justify-center neon-border hover:bg-teal-glow/30 transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-teal-glow" />
                </a>
                <a href="#" className="w-10 h-10 bg-neon-mint/20 tri-cut-sm flex items-center justify-center neon-border hover:bg-neon-mint/30 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-neon-mint" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;