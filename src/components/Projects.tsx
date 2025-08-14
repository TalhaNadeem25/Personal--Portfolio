import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MavPads — Student Housing Web App",
      description: "Built a full-stack web app to help UTA students explore and review off-campus housing options around campus. Integrated MongoDB for scalable data storage and efficient querying of apartment listings and user reviews. Designed a clean, responsive UI with Tailwind CSS, focusing on ease of navigation and mobile compatibility.",
      technologies: ["Node.js", "Tailwind CSS", "MongoDB", "Clerk", "Vercel", "Framer-Motion"],
      githubLink: "https://github.com/TalhaNadeem25/mavpads",
      liveLink: "https://mavpads.vercel.app",
      category: "Full Stack Development",
      date: "April 2025"
    },
    {
      title: "HealthIntelligences — AI-Powered Health Data Analysis",
      description: "Engineered a comprehensive web platform to analyze and visualize personal and community health data, using AI-powered risk assessments and geospatial dashboards. Integrated Google Gemini API for personalized health insights and predictive risk forecasting. Implemented secure user authentication with Clerk for privacy-conscious dashboard management.",
      technologies: ["Node.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk", "Vercel", "Gemini API"],
      githubLink: "https://github.com/TalhaNadeem25/health-intelligences",
      liveLink: "https://health-intelligences.vercel.app",
      category: "AI & Healthcare",
      date: "April 2025",
      achievement: "UTA DATATHON Challenge WINNER"
    },
    {
      title: "MoodSong — AI-Powered Wellness Web App",
      description: "Developed a full-stack wellness web app that uses facial expression recognition to recommend mood-based songs using Gemini AI. Integrated a real-time community forum feature, enabling users to share feelings, support others, and build emotional connections. Utilized Node.js for backend logic, MongoDB for data storage, and Tailwind CSS for responsive and modern UI design.",
      technologies: ["Node.js", "MongoDB", "Tailwind CSS", "Gemini AI", "Real-time Forum"],
      githubLink: "https://github.com/TalhaNadeem25/moodsong",
      liveLink: "https://moodsong.vercel.app",
      category: "AI & Wellness",
      date: "March 2025",
      achievement: "2nd Place - HackDAY UTA 2025"
    },
    {
      title: "Pakistan Student Association Website",
      description: "Developed and deployed a responsive web application to centralize information about PSA events, membership, and organizational updates. Integrated features such as event listings with RSVP links with Stripe Payment API, and a contact form to streamline communication. Hosted the application on Vercel, enabling continuous deployment and efficient performance optimization.",
      technologies: ["Node.js", "Tailwind CSS", "Vercel", "Framer-motion"],
      githubLink: "https://github.com/TalhaNadeem25/psa-website",
      liveLink: "https://psa-uta.vercel.app",
      category: "Web Development",
      date: "January 2025"
    },
    {
      title: "Shell Development Project",
      description: "Developed a custom command-line shell in C. Implemented built-in commands (cd, exit, quit) with error handling for robust execution. Integrated process control and redirection using fork() and execvp() for efficient command parsing.",
      technologies: ["C", "Unix", "Shell Programming"],
      githubLink: "https://github.com/TalhaNadeem25/shell-development",
      liveLink: "https://github.com/TalhaNadeem25/shell-development",
      category: "Systems Programming",
      date: "September 2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        mass: 0.5
      }
    }
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="Projects" className="relative py-0 bg-[#030712] overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-noise"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 cyber-grid"
      />
      
      {/* Glow elements */}
      <motion.div
        animate={{
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px]"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"
      />
      
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Projects & Achievements
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-[600px] p-8 rounded-2xl overflow-hidden"
            >
              {/* Card Background with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-[#0f1729]/80 via-[#0f1729]/90 to-[#0f1729]/80 backdrop-blur-xl border border-white/5"
              />
              
              {/* Animated Border Gradient */}
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"
              />
              
              {/* Content Container */}
              <motion.div
                variants={contentVariants}
                className="relative z-10 h-full flex flex-col"
              >
                {/* Top Section */}
                <div>
                  {/* Category and Date */}
                  <motion.div
                    variants={contentVariants}
                    className="flex flex-wrap gap-3 mb-6"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-1.5 text-sm bg-cyan-950/50 text-cyan-300 rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-500/5"
                    >
                      {project.category}
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-1.5 text-sm bg-blue-950/50 text-blue-300 rounded-full border border-blue-500/20 shadow-lg shadow-blue-500/5"
                    >
                      {project.date}
                    </motion.span>
                  </motion.div>

                  {/* Achievement Badge */}
                  {project.achievement && (
                    <motion.div
                      variants={contentVariants}
                      className="mb-6"
                    >
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center px-4 py-1.5 text-sm bg-purple-950/50 text-purple-300 rounded-full border border-purple-500/20 shadow-lg shadow-purple-500/5 font-medium"
                      >
                        <span className="mr-2">🏆</span>
                        {project.achievement}
                      </motion.span>
                    </motion.div>
                  )}

                  {/* Project Title */}
                  <motion.h3
                    variants={contentVariants}
                    className="text-xl font-semibold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-500"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    variants={contentVariants}
                    className="text-gray-400 mb-6 leading-relaxed line-clamp-4"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Bottom Section */}
                <motion.div
                  variants={contentVariants}
                  className="mt-auto"
                >
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05, color: "#67e8f9" }}
                        className="px-3 py-1 text-sm bg-[#1a1f2e]/50 text-gray-300 rounded-full border border-gray-700/50 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Lines */}
              <motion.div
                variants={contentVariants}
                className="absolute top-0 right-0 w-32 h-32"
              >
                <div className="absolute top-8 right-8 w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute top-8 right-8 w-[1px] h-16 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
              </motion.div>
              <motion.div
                variants={contentVariants}
                className="absolute bottom-0 left-0 w-32 h-32"
              >
                <div className="absolute bottom-8 left-8 w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="absolute bottom-8 left-8 w-[1px] h-16 bg-gradient-to-t from-transparent via-blue-500/20 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
