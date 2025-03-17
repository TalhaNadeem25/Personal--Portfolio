
import React from "react";
import { ArrowDown } from "lucide-react";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";
import FacebookIcon from "../assets/facebook.png";
import GitHubIcon from "../assets/github.png";
import EmailIcon from "../assets/gmail.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedin.png";
import Talha from "../assets/Talha.jpg";

const Hero = () => {
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

  return (
    <section 
      id="Home" 
      className="relative min-h-screen w-full flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 z-10">
          <IntersectionObserverComponent>
            <div className="inline-block mb-4 py-1 px-3 bg-black/5 rounded-full backdrop-blur-sm">
              <p className="text-sm font-medium text-black/80">Front-End Developer</p>
            </div>
          </IntersectionObserverComponent>
          
          <IntersectionObserverComponent>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Talha Nadeem</span>
            </h1>
          </IntersectionObserverComponent>
          
          <IntersectionObserverComponent>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              An undergrad software engineering student and intermediate front-end developer passionate about creating beautiful, functional interfaces.
            </p>
          </IntersectionObserverComponent>
          
          <IntersectionObserverComponent>
            <div className="flex flex-wrap gap-4">
              <a 
                href="../Resume.pdf"
                download="Talha Nadeem Resume.pdf"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-gray-800 to-gray-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-700 origin-bottom-left transform rotate-45 translate-x-24 bg-black rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative flex items-center gap-2">
                  Download Resume
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </span>
              </a>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img 
                      src={link.icon} 
                      alt={link.platform} 
                      className="w-5 h-5 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </IntersectionObserverComponent>
        </div>
        
        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 z-10">
          <IntersectionObserverComponent className="relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* Image Frame */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 to-white rounded-3xl transform rotate-3 scale-105"></div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-200 to-gray-100 rounded-3xl transform -rotate-3 scale-105"></div>
              
              {/* Image Container */}
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
                <img
                  src={Talha}
                  alt="Talha Nadeem"
                  className="w-full h-auto rounded-xl object-cover transform transition-transform duration-700 hover:scale-105"
                  style={{ aspectRatio: "3/4" }}
                />
                
                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <p className="text-sm font-medium">Full Stack Developer</p>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-100 to-blue-100 opacity-50 blur-2xl rounded-3xl"></div>
            </div>
          </IntersectionObserverComponent>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest mb-2 opacity-60">Scroll</span>
        <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-black/40 rounded-full mt-2 animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
