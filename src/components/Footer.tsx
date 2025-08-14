import React from "react";
import { Link } from "react-scroll";
import FacebookIcon from "../assets/facebook.png";
import GitHubIcon from "../assets/github.png";
import EmailIcon from "../assets/gmail.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedin.png";

const Footer = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/talha.nadeem25",
    },
    {
      platform: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/talhanadeem.25/",
    },
    {
      platform: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/talha-nadeem-4021b8259/",
    },
    {
      platform: "GitHub",
      icon: GitHubIcon,
      url: "https://github.com/TalhaNadeem25/",
    },
    {
      platform: "Email",
      icon: EmailIcon,
      url: "https://mail.google.com/mail/u/0/#inbox",
    },
  ];

  const quickLinks = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Projects", to: "Projects" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <footer className="relative bg-[#030712] pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute inset-0 cyber-grid opacity-[0.15]"></div>
      
      {/* Glow elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Talha Nadeem
            </h3>
            <p className="text-gray-400">
              A passionate front-end developer focused on creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-cyan-500/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={link.icon} 
                    alt={link.platform} 
                    className="w-5 h-5 object-contain transition-transform duration-300 hover:scale-110"
                    style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-cyan-300">Email:</span> nadeemtalha24@gmail.com
              </li>
              <li className="text-gray-400">
                <span className="text-cyan-300">Location:</span> Hurst, Texas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Talha Nadeem. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
