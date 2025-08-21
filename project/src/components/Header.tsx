import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'proposal', label: 'Proposal' },
    { id: 'rules', label: 'Rules' },
    { id: 'register', label: 'Register' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'scale-95' : 'scale-100'
    }`}>
      <nav className="glass neon-border tri-cut px-6 py-3 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-mint/5 to-teal-glow/5"></div>
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm font-medium font-inter transition-all duration-300 tri-cut-sm group overflow-hidden ${
                activeSection === item.id
                  ? 'text-neon-mint bg-gunmetal/40'
                  : 'text-soft-white/80 hover:text-neon-mint'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-mint/10 to-teal-glow/10"></div>
                <div className="absolute inset-0 tri-cut-sm border border-neon-mint/30" 
                     style={{
                       background: `
                         radial-gradient(circle at 30% 30%, #33FFB4 0 12%, transparent 13%) 0 0/16px 16px,
                         radial-gradient(circle at 70% 70%, #00E6C3 0 12%, transparent 13%) 8px 8px/16px 16px
                       `,
                       opacity: 0.14,
                       filter: 'drop-shadow(0 0 12px #00E6C3)'
                     }}>
                </div>
              </div>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;