
import React from "react";
import { Link } from "react-scroll";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-center mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Talha Nadeem</h3>
            <p className="text-gray-600 max-w-md">
              Front-end developer focused on creating beautiful, responsive interfaces with smooth animations.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="Home" smooth={true} duration={700} className="text-gray-600 hover:text-black transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="About" smooth={true} duration={700} className="text-gray-600 hover:text-black transition-colors cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="Skills" smooth={true} duration={700} className="text-gray-600 hover:text-black transition-colors cursor-pointer">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="Projects" smooth={true} duration={800} className="text-gray-600 hover:text-black transition-colors cursor-pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="Contacts" smooth={true} duration={1000} className="text-gray-600 hover:text-black transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Arlington, Texas</li>
              <li>
                <a href="mailto:talha.nadeem25@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                  talha.nadeem25@gmail.com
                </a>
              </li>
              <li className="text-gray-600">+1 (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Talha Nadeem. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> 
            in Arlington, Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
