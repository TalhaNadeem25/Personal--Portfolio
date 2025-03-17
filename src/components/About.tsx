
import React from "react";
import { IntersectionObserverComponent } from "../utils/IntersectionObserver";

const About = () => {
  return (
    <section 
      name="About" 
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gray-100 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-gray-100 to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <IntersectionObserverComponent>
          <div className="mb-12 text-center">
            <span className="inline-block mb-2 px-3 py-1 text-sm font-medium text-gray-900 bg-gray-100 rounded-full">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              My Background
            </h2>
          </div>
        </IntersectionObserverComponent>
        
        <div className="max-w-3xl mx-auto">
          <IntersectionObserverComponent>
            <div className="relative">
              {/* Decorative Lines */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              
              <div className="pl-8 relative">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gray-100 border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  My name is <span className="font-semibold">Talha Nadeem</span>, and I am 
                  currently pursuing a bachelor's degree in Software Engineering at the <span className="font-semibold">University of Texas at Arlington</span>. 
                  Concurrently, I am proactively enhancing my skills in front-end 
                  development.
                </p>
                
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-gray-100 border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I have a deep passion for coding and problem-solving. Front-end 
                  development captivates me because it allows me to blend creativity 
                  with technical proficiency, translating design concepts into 
                  interactive and visually appealing web applications.
                </p>
                
                <div className="absolute left-0 bottom-0 w-4 h-4 bg-gray-100 border-2 border-gray-400 rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>
          </IntersectionObserverComponent>
          
          <IntersectionObserverComponent className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">University of Texas at Arlington, Software Engineering</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Focus Area</h3>
                <p className="text-gray-600">Frontend Development, UI/UX Design</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Goal</h3>
                <p className="text-gray-600">Creating elegant, user-friendly web experiences</p>
              </div>
            </div>
          </IntersectionObserverComponent>
        </div>
      </div>
    </section>
  );
};

export default About;
