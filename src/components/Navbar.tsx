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
                  to={item.name === "Contact" ? "Contacts" : item.name}
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
          className="md:hidden relative z-10 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300" 
          onClick={handleClick} 
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-gray-300" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button for mobile menu */}
        <button 
          className="absolute top-5 right-6 p-2 rounded-full bg-cyan-900/30 hover:bg-cyan-800/50 transition-colors duration-300" 
          onClick={handleClick} 
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-cyan-300" />
        </button>

        <div className="h-full flex flex-col pt-20 px-8 pb-8">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <Link
                  to={item.name === "Contact" ? "Contacts" : item.name}
                  smooth={true}
                  duration={item.duration}
                  offset={item.offset}
                  onClick={handleClick}
                  className="text-xl font-medium inline-block w-full text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
