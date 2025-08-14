import React from "react";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";
import Talha from "../assets/Talha.jpg";

const About = () => {
  return (
    <section id="About" className="relative py-20 bg-[#030712] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute inset-0 cyber-grid opacity-[0.15]"></div>
      
      {/* Glow elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <IntersectionObserverComponent>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </IntersectionObserverComponent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <IntersectionObserverComponent>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative overflow-hidden rounded-2xl bg-black/30 p-2 shadow-xl border border-white/5 backdrop-blur-sm">
                <img
                  src={Talha}
                  alt="Talha Nadeem"
                  className="w-full h-auto rounded-xl object-cover transform transition-transform duration-700 hover:scale-105"
                />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/5">
                  <p className="text-sm font-medium text-cyan-300">Software Engineer</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/5">
                  <p className="text-sm font-medium text-cyan-300">Front-End Developer</p>
                </div>
              </div>
              
              {/* Cyber dots pattern */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10">
                <div className="absolute inset-0 cyber-dots"></div>
              </div>
            </div>
          </IntersectionObserverComponent>

          {/* Right Column - Content */}
          <IntersectionObserverComponent>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-300">
                A passionate developer focused on creating interactive applications
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                I am an undergraduate software engineering student with a strong passion for web development. 
                My journey in programming began with a curiosity about how websites work, which led me to 
                explore HTML, CSS, and JavaScript. As I delved deeper, I discovered my love for creating 
                beautiful and functional user interfaces.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Currently, I'm focusing on mastering modern web technologies and frameworks while building 
                projects that challenge my skills and creativity. I believe in writing clean, maintainable 
                code and creating intuitive user experiences that make a difference.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-cyan-300">Education</h4>
                  <p className="text-gray-400">B.S. Software Engineering</p>
                  <p className="text-gray-500 text-sm">University of Texas at Arlington</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-cyan-300">Experience</h4>
                  <p className="text-gray-400">Front-End Developer</p>
                  <p className="text-gray-500 text-sm">Freelance & Personal Projects</p>
                </div>
              </div>
              
              <div className="pt-6">
                <a
                  href="#Contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                >
                  Get in Touch
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </IntersectionObserverComponent>
        </div>
      </div>
    </section>
  );
};

export default About;
