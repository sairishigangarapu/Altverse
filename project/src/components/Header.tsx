import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Mock hooks for a standalone environment. In a real app, you'd use react-router-dom.
const useNavigate = () => (path: string | URL | null | undefined) => {
  // Remove console.log for production
  // console.log(`Navigating to: ${path}`);
  // In a real app, this would change the URL.
  // For this example, we'll just log it.
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate')); // Manually trigger a re-render
};

const useLocation = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { pathname };
};


const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State to manage which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hideTimeout = useRef<number | null>(null);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navItems structure to match the project components
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rules', path: '/rules' },
    { name: 'Register', path: '/register' },
    { name: 'Proposal', path: '/proposal' },
    { 
      name: 'Events', 
      path: '/events', 
      subItems: [
        { name: 'Countdown', path: '/countdown', hoverBg: 'hover:bg-purple-50' },
        { name: 'Schedule', path: '/schedule', hoverBg: 'hover:bg-blue-50' },
      ] 
    },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentPage = (path: string | undefined) => {
    if (!path) return false;
    // Check if the current page is the main path or one of its sub-items
    const mainItem = navItems.find(item => item.path === location.pathname || item.subItems?.some(sub => sub.path === location.pathname));
    if (mainItem?.subItems) {
        return mainItem.path === path || mainItem.subItems.some(sub => sub.path === path);
    }
    return location.pathname === path;
  };
  

  // Generic handlers for dropdowns
  const handleMouseEnter = (dropdownName: string) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <motion.header
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur.get()}px)`,
      }}
      className={`fixed top-0 left-0 right-0 md:left-1/2 md:transform md:-translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'w-full md:w-[90%]' : 'w-full md:w-[95%]'
      }`}
    >
      <div 
        className="glass neon-border tri-cut px-4 py-3 shadow-lg relative z-50 bg-gradient-to-r from-gunmetal/95 to-onyx/95"
      >
        
        <div className="flex items-center justify-between">
          {/* Altverse logo and text */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neon-mint/20 rounded-full tri-cut flex items-center justify-center border border-neon-mint/30 group-hover:bg-neon-mint/30 transition-all duration-300">
              <span className="text-neon-mint text-lg font-bold font-orbitron neon-glow">A</span>
            </div>
            <div className="text-neon-mint font-orbitron font-bold text-lg tracking-wider">
              ALTVERSE
              <div className="h-0.5 w-1/2 bg-gradient-to-r from-neon-mint to-teal-glow/50"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.subItems ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.button
                    onClick={() => item.path && handleNavClick(item.path)}
                    className={`transition-colors relative px-4 py-2 font-medium font-inter ${
                        isCurrentPage(item.path) 
                          ? 'text-neon-mint font-bold'
                          : 'text-soft-white/80 hover:text-neon-mint'
                      }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                    {isCurrentPage(item.path) && !openDropdown && (
                       <motion.div
                         className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-mint to-teal-glow"
                         layoutId="activeTab"
                       />
                    )}
                  </motion.button>
                  <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-gunmetal z-50 py-4 overflow-hidden tri-cut neon-border"
                      style={{ 
                        boxShadow: '0 0 20px rgba(0, 230, 195, 0.1)'
                      }}
                    >
                      <ul className="space-y-2">
                        {item.subItems.map(subItem => (
                           <li key={subItem.name}>
                             <motion.button
                               className={`w-full text-left px-6 py-2 transition-all duration-300 ${!subItem.path ? 'text-teal-glow/40 cursor-not-allowed' : 'text-soft-white/80 font-medium hover:text-neon-mint'}`}
                               onClick={() => subItem.path && handleNavClick(subItem.path)}
                               disabled={!subItem.path}
                               whileHover={subItem.path ? { x: 3 } : {}}
                             >
                               {subItem.name}
                             </motion.button>
                           </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  key={item.path}
                  onClick={() => handleNavClick(item.path!)}
                  className={`transition-colors relative px-4 py-2 font-medium font-inter ${
                    isCurrentPage(item.path) 
                      ? 'text-neon-mint font-bold'
                      : 'text-soft-white/80 hover:text-neon-mint'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0px 0px 8px rgb(51, 255, 180)",
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {isCurrentPage(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-mint to-teal-glow"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              )
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isMenuOpen 
                ? 'text-neon-mint bg-gunmetal border border-neon-mint/50' 
                : 'text-soft-white/90 hover:text-neon-mint'
            } tri-cut-sm absolute right-4 top-2`}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} className="neon-glow" /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <nav className="pt-4 pb-2 border-t border-neon-mint/30 mt-4">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <motion.button
                    onClick={() => item.path && handleNavClick(item.path)}
                    className={`block w-full text-left py-3 px-4 transition-colors text-lg font-inter ${
                      isCurrentPage(item.path) 
                        ? 'text-neon-mint font-semibold'
                        : 'text-soft-white/80 hover:text-neon-mint'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                  {item.subItems && (
                     <div className="pl-8 pb-2">
                       {item.subItems.map(subItem => (
                         <motion.button
                           key={subItem.name}
                           onClick={() => subItem.path && handleNavClick(subItem.path)}
                           disabled={!subItem.path}
                           className={`block w-full text-left py-2 transition-colors ${
                            isCurrentPage(subItem.path) ? 'text-teal-glow font-medium' : 'text-soft-white/70 hover:text-neon-mint'
                           } ${!subItem.path ? 'text-teal-glow/40 cursor-not-allowed' : ''}`}
                           whileHover={subItem.path ? { x: 5 } : {}}
                         >
                           {subItem.name}
                         </motion.button>
                       ))}
                     </div>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

