import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, ExternalLink } from "lucide-react";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  companyUrl?: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Design / Print Associate",
      company: "The American Domino Company",
      location: "Arlington, Texas",
      duration: "June 2025 - Present",
      description: "Specialized in designing and printing custom artwork on domino tiles using advanced digital printing technology. Collaborated with production teams to ensure high-quality output and maintained printing equipment for optimal performance.",
      technologies: ["Digital Printing Hardware", "Design Software", "Quality Control", "Production Management", "Color Management"],
      achievements: [
        "Designed and printed custom artwork on domino tiles using digital printing hardware and software tools",
        "Collaborated with production team to ensure accurate design placement and consistent color quality",
        "Operated and maintained digital printing machines, optimizing print output and reducing material waste",
        "Performed quality control checks to verify artwork alignment, color accuracy, and compliance with client specifications"
      ]
    }
  ];

  return (
    <section 
      id="Experience"
      className="relative min-h-screen bg-[#030712] py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute inset-0 cyber-grid opacity-[0.15]"></div>
      
      {/* Glow elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <IntersectionObserverComponent
          className="text-center mb-16 fade-in"
          rootMargin="0px 0px -100px 0px"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"
          />
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My professional experience in design and digital printing, showcasing the skills, 
            technologies, and achievements that demonstrate my attention to detail and quality.
          </motion.p>
        </IntersectionObserverComponent>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <IntersectionObserverComponent
                key={index}
                className="fade-in"
                rootMargin="0px 0px -100px 0px"
              >
                <motion.div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-[#030712] transform -translate-x-1/2 top-6 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="relative p-8 rounded-3xl bg-[#0f1117] border border-cyan-500/20 shadow-lg hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-500 group">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-cyan-300 transition-colors">
                              {experience.title}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-400">
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                <span className="font-medium">{experience.company}</span>
                                {experience.companyUrl && (
                                  <a 
                                    href={experience.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-300 transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Location and Duration */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </IntersectionObserverComponent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 