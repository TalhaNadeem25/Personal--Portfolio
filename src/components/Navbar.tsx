import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import TitleImg from "/Logo.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", offset: 0, duration: 700 },
    { name: "About", offset: -100, duration: 700 },
    { name: "Skills", offset: -80, duration: 700 },
    { name: "Experience", offset: -100, duration: 700 },
    { name: "Projects", offset: -100, duration: 800 },
    { name: "Contact", offset: 0, duration: 1000 },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-black/30 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
            <img src={TitleImg} alt="Logo" className="h-10 w-auto relative z-10" />
          </div>
          <span className={`font-semibold text-lg bg-gradient-to-r from-gray-100 to-cyan-200 bg-clip-text text-transparent transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-80"}`}>
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block cursor-pointer">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.name}
                  smooth={true}
                  duration={item.duration}
                  offset={item.offset}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-300 relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group" 
          onClick={handleClick} 
          aria-label="Toggle menu"
        >
          <div className="relative">
            <Menu className={`h-6 w-6 text-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
            <X className={`absolute inset-0 h-6 w-6 text-cyan-300 transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Futuristic Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ease-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#0f0f23]"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group z-50" 
          onClick={handleClick} 
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Menu Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
          {/* Menu Header */}
          <div className="text-center mb-16 transform transition-all duration-700 delay-300"
               style={{ transform: menuOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)' }}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              Navigation
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Navigation Items */}
          <ul className="space-y-8 text-center">
            {navItems.map((item, index) => (
              <li key={item.name} className="transform transition-all duration-700"
                  style={{ 
                    transform: menuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
                    transitionDelay: `${400 + index * 100}ms`
                  }}>
                <Link
                  to={item.name}
                  smooth={true}
                  duration={item.duration}
                  offset={item.offset}
                  onClick={handleClick}
                  className="group relative inline-block px-8 py-4 text-xl font-medium text-gray-300 hover:text-cyan-300 transition-all duration-500 hover:scale-110"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-transparent to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer Info */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transform transition-all duration-700 delay-700"
               style={{ transform: menuOpen ? 'translateY(0) opacity-100' : 'translateY(20px) opacity-0' }}>
            <p className="text-sm text-gray-500 font-mono">
              <span className="text-cyan-400">//</span> Ready to explore
            </p>
          </div> */}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
