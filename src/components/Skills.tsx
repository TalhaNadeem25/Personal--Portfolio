
import React from "react";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";

import reactIcon from "../assets/1174949_js_react js_logo_react_react native_icon.png";
import javaIcon from "../assets/4373217_java_logo_logos_icon.png";
import cssIcon from "../assets/css-3.png";
import database from "../assets/database-storage.png";
import htmlIcon from "../assets/html-5.png";
import androidIcon from "../assets/icons8-android-studio-240.png";
import jsIcon from "../assets/js.png";
import cIcon from "../assets/letter-c.png";
import nodejs from "../assets/nodejs.png";

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
  return (
    <IntersectionObserverComponent 
      className={`group`}
      animationClass="opacity-0"
      rootMargin="0px 0px -50px 0px"
    >
      <div 
        className="relative h-full p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        style={{ 
          transitionDelay: `${index * 50}ms`,
          animationDelay: `${index * 50}ms`
        }}
      >
        <div className="mb-4 relative">
          <div className="w-16 h-16 mx-auto relative flex items-center justify-center">
            <div 
              className="absolute inset-0 rounded-xl opacity-10"
              style={{ backgroundColor: skill.color }}
            ></div>
            <img
              src={skill.image}
              alt={`${skill.name} icon`}
              className="w-10 h-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        
        <h3 className="text-center text-lg font-medium">{skill.name}</h3>
        
        {/* Decorative glow */}
        <div
          className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
          style={{ backgroundColor: skill.color }}
        ></div>
      </div>
    </IntersectionObserverComponent>
  );
};

const Skills = () => {
  const skills = [
    { name: "HTML", image: htmlIcon, color: "#E44D26" },
    { name: "CSS", image: cssIcon, color: "#264DE4" },
    { name: "JavaScript", image: jsIcon, color: "#F7DF1E" },
    { name: "React", image: reactIcon, color: "#61DAFB" },
    { name: "C", image: cIcon, color: "#00599C" },
    { name: "Java", image: javaIcon, color: "#007396" },
    { name: "Android", image: androidIcon, color: "#3DDC84" },
    { name: "Node.js", image: nodejs, color: "#68A063" },
    { name: "MongoDB", image: database, color: "#47A248" },
  ];

  return (
    <section 
      id="Skills" 
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <IntersectionObserverComponent>
          <div className="mb-16 text-center">
            <span className="inline-block mb-2 px-3 py-1 text-sm font-medium text-gray-900 bg-gray-200 rounded-full">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Technical Skills
            </h2>
          </div>
        </IntersectionObserverComponent>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
