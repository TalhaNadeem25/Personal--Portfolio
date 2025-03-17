
import React, { useState } from "react";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <IntersectionObserverComponent 
      className="h-full" 
      rootMargin="0px 0px -100px 0px"
      threshold={0.1}
    >
      <div 
        className="h-full rounded-2xl overflow-hidden bg-white p-1 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transitionDelay: `${index * 50}ms`,
        }}
      >
        <div className="h-full p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Project Type Badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            {project.type}
          </span>
          
          <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
          
          <p className="text-gray-600 mb-6 text-base">{project.description}</p>
          
          <div className="flex items-center mt-auto">
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            
            <span className="ml-auto transform transition-transform duration-300 ease-out" style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
            }}>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </span>
          </div>
          
          {/* Animated Border */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 0.2 : 0,
              background: `
                linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent) 0 0 / 200% 100%, 
                linear-gradient(transparent, rgba(0, 0, 0, 0.05), transparent) 100% 0 / 100% 200%
              `,
              backgroundRepeat: 'no-repeat',
              animation: isHovered ? 'shimmer 2s infinite' : 'none'
            }}
          ></div>
        </div>
      </div>
    </IntersectionObserverComponent>
  );
};

const Projects = () => {
  const projects = [
    { 
      title: "Stock Recording System Application",
      description: "Developed a Stock Recording System (SRS), an Android app using Kotlin that allows users to add stocks to their watchlist",
      type: "Android Mobile Application",
      codeLink: "https://github.com/TalhaNadeem25/My_Application"
    },
    {
      title: "Pakistan Student Association Website",
      description: "Designed and developed a website for the Pakistan Student Association (PSA) at UTA using Node.js with TypeScript, MongoDB for database management, and deployed via Vercel for seamless hosting and performance.",
      type: "Full Stack Development",
    },
    { 
      title: "Shell Development Project",
      description: "Built a custom Unix shell in C with interactive/batch modes, supporting built-in commands (cd, exit, quit), error handling, and process control with fork() and execvp() for I/O redirection.",
      type: "C Programming"
    },
    { 
      title: "Amazon Clone",
      description: "Created Amazon main page using HTML and CSS with responsive design principles and pixel-perfect attention to detail.",
      type: "Frontend Development"
    },
    { 
      title: "Multiplayer Battleship Game",
      description: "Developed a multiplayer Battleship game in Java for 2-4 players with ship placement, firing, real-time updates, turn management, error handling, and visual feedback.",
      type: "Java Programming",
    }
  ];

  return (
    <section 
      id="Projects" 
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-50 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <IntersectionObserverComponent>
          <div className="mb-16 text-center">
            <span className="inline-block mb-2 px-3 py-1 text-sm font-medium text-gray-900 bg-gray-100 rounded-full">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Recent Projects
            </h2>
          </div>
        </IntersectionObserverComponent>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
