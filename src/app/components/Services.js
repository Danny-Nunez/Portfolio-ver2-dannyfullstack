'use client'

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import animationData from '../../../public/js/dog.json';
import { 
  FaCode, 
  FaPalette, 
  FaServer, 
  FaMobile, 
  FaRocket,
  FaLightbulb,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaCog
} from 'react-icons/fa';

export default function Services() {
  const [animateLottie, setAnimateLottie] = useState(false);
  const parentRef = useRef(null); // Reference to the parent container

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimateLottie(entry.isIntersecting); // Toggle animation based on visibility
      },
      {
        threshold: 0.9, // Trigger when 50% of the parent container is visible
      }
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { icon: FaCode, title: "Frontend Development", description: "Modern React, Next.js, and responsive design" },
    { icon: FaServer, title: "Backend Development", description: "Node.js, Express, databases, and APIs" },
    { icon: FaPalette, title: "UI/UX Design", description: "User-centered design and prototyping" },
    { icon: FaMobile, title: "Mobile Development", description: "Cross-platform Flutter applications" },
    { icon: FaRocket, title: "Motion Graphics", description: "After Effects, Blender, and 3D animation" },
    { icon: FaLightbulb, title: "Advisory Services", description: "Technical guidance and career mentoring" }
  ];

  const techStack = {
    frontend: [
      "React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Vue.js", "Redux", "Bootstrap"
    ],
    backend: [
      "Node.js", "Express.js", "MongoDB", "GraphQL", "Python", "MySQL", "RESTful APIs", "Solidity"
    ],
    design: [
      "After Effects", "Photoshop", "Blender", "Figma", "Unity", "Illustrator", "InDesign", "Unreal Engine"
    ]
  };

  return (
    <div className="danny_tm_services relative py-20 mt-10" id="services">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="font-libre text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Full-Stack Developer & Digital Creator
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into exceptional digital experiences with 10+ years of expertise
          </p>
        </div>

        {/* Experience Badge */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="font-bold text-lg">10+ Years Experience</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/60 rounded-lg p-6 transition-transform duration-500 ease-out hover:-translate-y-2 group"
              style={{
                boxShadow: '0px 1.6rem 2rem rgba(0,0,0,0.1)'
              }}
            >
              {/* Shine effect on hover */}
              <div 
                className="absolute top-0 -left-[125%] w-[60%] h-full bg-white/40 transition-left duration-500 ease-out group-hover:left-[150%]"
                style={{
                  transform: 'skew(45deg)'
                }}
              ></div>
              
              <div className="flex items-center mb-4 relative z-10">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-libre font-semibold text-lg ml-3 text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-200 text-sm relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div 
          className="bg-white/5 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl mb-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          <h3 className="font-libre text-2xl font-bold text-center mb-12 text-white">
            Technologies & Tools
          </h3>
          {/* Glass reflection overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-libre font-semibold text-lg mb-6 text-white">Frontend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.frontend.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaServer className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-libre font-semibold text-lg mb-6 text-white">Backend</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.backend.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Design */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPalette className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-libre font-semibold text-lg mb-6 text-white">Design</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.design.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
