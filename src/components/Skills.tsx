import reactIcon from "../assets/1174949_js_react js_logo_react_react native_icon.png";
import javaIcon from "../assets/4373217_java_logo_logos_icon.png";
import cssIcon from "../assets/css-3.png";
import mongodbIcon from "../assets/database-storage.png";
import htmlIcon from "../assets/html-5.png";
import androidIcon from "../assets/icons8-android-studio-240.png";
import jsIcon from "../assets/js.png";
import cIcon from "../assets/letter-c.png";
import nodejsIcon from "../assets/nodejs.png";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <IntersectionObserverComponent
      className="group fade-in"
      rootMargin="0px 0px -100px 0px"
    >
      <div
        className="relative p-6 rounded-3xl bg-[#0f1117] border border-cyan-500/20 shadow-lg transition-all duration-500 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
        style={{
          transitionDelay: `${index * 100}ms`,
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Icon Container with light background for contrast */}
        <div className="relative w-full aspect-square mb-4 rounded-2xl bg-[#1a1f2e] p-4 flex items-center justify-center group-hover:bg-[#1e2438] transition-colors">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl"></div>
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain relative z-10 drop-shadow-lg"
              style={{ 
                filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))'
              }}
            />
          </div>
        </div>

        {/* Skill Name */}
        <h3 className="text-lg font-medium text-center text-gray-200 group-hover:text-cyan-300 transition-colors">
          {skill.name}
        </h3>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </IntersectionObserverComponent>
  );
};

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      icon: cssIcon,
    },
    {
      name: "JavaScript",
      icon: jsIcon,
    },
    {
      name: "React",
      icon: reactIcon,
    },
    {
      name: "C",
      icon: cIcon,
    },
    {
      name: "Java",
      icon: javaIcon,
    },
    {
      name: "Android",
      icon: androidIcon,
    },
    {
      name: "Node.js",
      icon: nodejsIcon,
    },
    {
      name: "MongoDB",
      icon: mongodbIcon,
    }
  ];

  return (
    <section id="Skills" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute inset-0 cyber-grid opacity-[0.15]"></div>

      {/* Glow elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>

      <div className="container mx-auto px-6 lg:px-8">
        <IntersectionObserverComponent>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#4DA8DA] mb-4">
              Skills
            </h2>
            <div className="mx-auto w-16 h-[2px] bg-[#4DA8DA]"></div>
          </div>
        </IntersectionObserverComponent>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
