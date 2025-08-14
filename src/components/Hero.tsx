import { ArrowDown } from "lucide-react";
import FacebookIcon from "../assets/facebook.png";
import GitHubIcon from "../assets/github.png";
import EmailIcon from "../assets/gmail.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedin.png";
import Talha from "../assets/Talha.jpg";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";
import { SparklesCore } from "./ui/sparkles";

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
      className="relative min-h-screen w-full flex items-center bg-[#030712] overflow-hidden pt-20"
    >
      {/* Sparkles Effect */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullscreen"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute inset-0 cyber-grid opacity-[0.15]"></div>
      
      {/* Glow elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#030712] to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030712] to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <IntersectionObserverComponent>
              <div className="inline-block mb-4 py-1 px-3 bg-cyan-950/30 rounded-full backdrop-blur-sm border border-cyan-800/30 shadow-lg shadow-cyan-900/20">
                <p className="text-sm font-medium text-cyan-300">Front-End Developer</p>
              </div>
            </IntersectionObserverComponent>
            
            <IntersectionObserverComponent>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block text-gray-300">Hi, I'm</span>
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift">Talha Nadeem</span>
              </h1>
            </IntersectionObserverComponent>
            
            <IntersectionObserverComponent>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                An undergrad software engineering student and intermediate front-end developer passionate about creating beautiful, functional interfaces.
              </p>
            </IntersectionObserverComponent>
            
            <IntersectionObserverComponent>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/TalhaResume.pdf"
                  download="TalhaResume.pdf"
                  className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-700 origin-bottom-left transform rotate-45 translate-x-24 bg-cyan-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
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
            </IntersectionObserverComponent>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <IntersectionObserverComponent className="relative">
              <div className="relative mx-auto w-full max-w-md">
                {/* Image Frame */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl transform -rotate-3 scale-105"></div>
                
                {/* Image Container */}
                <div className="relative z-10 overflow-hidden rounded-2xl bg-black/30 p-2 shadow-xl border border-white/5 backdrop-blur-sm">
                  <img
                    src={Talha}
                    alt="Talha Nadeem"
                    className="w-full h-auto rounded-xl object-cover transform transition-transform duration-700 hover:scale-105"
                    style={{ aspectRatio: "3/4" }}
                  />
                  
                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/5">
                    <p className="text-sm font-medium text-cyan-300">Full Stack Developer</p>
                  </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-50 blur-2xl rounded-3xl"></div>
                
                {/* Cyber dots pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10">
                  <div className="absolute inset-0 cyber-dots"></div>
                </div>
              </div>
            </IntersectionObserverComponent>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest mb-2 text-cyan-300/60">Scroll</span>
        <div className="w-6 h-10 border-2 border-cyan-500/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
