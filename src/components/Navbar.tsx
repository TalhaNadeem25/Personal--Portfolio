
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import TitleImg from "../assets/Logo.webp";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={TitleImg} alt="Logo" className="h-10 w-auto" />
          <span className={`font-semibold text-lg transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-80"}`}>
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.name === "Contact" ? "Contacts" : item.name}
                  smooth={true}
                  duration={item.duration}
                  offset={item.offset}
                  className="text-sm font-medium hover:text-black relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={handleClick} aria-label="Toggle menu">
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
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
                  className="text-xl font-medium inline-block w-full transition-transform duration-300 hover:scale-105"
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
