'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import dynamic from 'next/dynamic';

// const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
//   ssr: false,
// });

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = `I'm a developer with an eye for design. I focus on delivering an immersive web interactive experience, that's clean and memorable. I am very passionate about building excellent web apps that improve the lives of those around me. When I'm not coding, I love to watch movies and workout.`;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Start typing when the section is in view
          } else {
            setIsVisible(false); // Stop typing when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the about section is in view
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && typedText.length < fullText.length) {
      // Add a 2-second delay before typing starts
      const delay = setTimeout(() => {
        const typingTimeout = setInterval(() => {
          setTypedText((prev) => fullText.slice(0, prev.length + 1)); // Fast typing
        }, 60); // Typing speed

        return () => clearInterval(typingTimeout); // Cleanup typing interval on unmount or stop
      }, 500); // Delay before typing starts (2 seconds)

      return () => clearTimeout(delay); // Cleanup the delay on visibility change or unmount
    }
  }, [isVisible, typedText, fullText]);

  return (
    <div className="danny_tm_about relative overflow-hidden" id="about" style={{backgroundColor: 'transparent', background: 'transparent'}}>
      {/* Three.js Animated Background */}
      {/* <ThreeBackground /> */}
      
      <div className="container relative z-10">
        <div className="danny_tm_title_holder">
          <span 
            className="!text-blue-500 about-blue-line" 
            style={{color: '#3b82f6 !important'}}
          >
            About Me
          </span>
        </div>
        <div className="about_inner">
          <div className="w-full wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay="0.3s">
            {/* Glass Container for Description */}
            <div 
              className="w-full pt-2 mb-8 p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              <p className="text-white relative z-10 text-lg leading-relaxed">{typedText}<span className="animate-blink">|</span></p>
            </div>
            
            {/* Glass Container for Personal Info */}
            <div 
              className="w-full p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                pointerEvents: 'auto'
              }}
            >
              <h3 className="title font-libre text-white mb-6 text-2xl relative z-10" style={{color: 'white !important'}}>Personal Info</h3>
              <div className="list relative z-10">
                <ul>
                  <li>
                    <p className="text-white text-lg" style={{color: 'white !important'}}>
                      <span style={{color: 'white !important'}} className="font-semibold">Name :</span> Danny Nunez
                    </p>
                  </li>
                  <li>
                    <p className="text-white text-lg" style={{color: 'white !important'}}>
                      <span style={{color: 'white !important'}} className="font-semibold">Email :</span> Dnunez22@gmail.com
                    </p>
                  </li>
                  <li>
                    <p className="text-white text-lg" style={{color: 'white !important'}}>
                      <span style={{color: 'white !important'}} className="font-semibold">Languages :</span> English, Spanish
                    </p>
                  </li>
                </ul>
              </div>
              <div className="list2 relative z-50 mt-6" style={{pointerEvents: 'auto'}}>
                <ul style={{pointerEvents: 'auto'}}>
                  <li style={{pointerEvents: 'auto'}}>
                    <p className="text-white text-lg relative z-50" style={{color: 'white !important', pointerEvents: 'auto'}}>
                      <span style={{color: 'white !important'}} className="font-semibold">Certifications :</span>{' '}
                      <a href="https://certificates.emeritus.org/3779189a-452b-4050-8c31-059ac6437d8e#gs.4d7xg9" target="_blank" rel="noopener noreferrer" className="!text-blue-500 hover:!text-blue-400 font-semibold cursor-pointer relative z-50" style={{pointerEvents: 'auto', color: '#3b82f6', textDecoration: 'none'}}>
                        MITXPRO
                      </a>{' '}
                      <span style={{color: 'white !important'}}>-</span>{' '}
                      <a href="https://certificates.cs50.io/9d6b2668-29cb-450b-8890-eab8050930c3.pdf?size=letter" target="_blank" rel="noopener noreferrer" className="!text-blue-500 hover:!text-blue-400 font-semibold cursor-pointer relative z-50" style={{pointerEvents: 'auto', color: '#3b82f6', textDecoration: 'none'}}>
                        HARVARD CS50
                      </a>{' '}
                      <span style={{color: 'white !important'}}>-</span>{' '}
                      <a href="https://www.coursera.org/account/accomplishments/certificate/3E3MHWM2PHU6" target="_blank" rel="noopener noreferrer" className="!text-blue-500 hover:!text-blue-400 font-semibold cursor-pointer relative z-50" style={{pointerEvents: 'auto', color: '#3b82f6', textDecoration: 'none'}}>
                        GOOGLE UX/UI
                      </a>{' '}
                      <span style={{color: 'white !important'}}>-</span>{' '}
                      <a href="https://www.coursera.org/account/accomplishments/certificate/2NAKJRD9XRSC" target="_blank" rel="noopener noreferrer" className="!text-blue-500 hover:!text-blue-400 font-semibold cursor-pointer relative z-50" style={{pointerEvents: 'auto', color: '#3b82f6', textDecoration: 'none'}}>
                        META FRONTEND DEV
                      </a>{' '}
                      <span style={{color: 'white !important'}}>-</span>{' '}
                      <a href="https://www.coursera.org/account/accomplishments/certificate/6MSHPGVCLR9Y" target="_blank" rel="noopener noreferrer" className="!text-blue-500 hover:!text-blue-400 font-semibold cursor-pointer relative z-50" style={{pointerEvents: 'auto', color: '#3b82f6', textDecoration: 'none'}}>
                        META PROGRAMMING WITH JAVASCRIPT
                      </a>{' '}
                      <span style={{color: 'white !important'}}>-</span>{' '}
                      <a href="https://www.coursera.org/account/accomplishments/certificate/W4XY953Z39WK" target="_blank" rel="noopener noreferrer" className="!text-blue-500 hover:!text-blue-400 font-semibold cursor-pointer relative z-50" style={{pointerEvents: 'auto', color: '#3b82f6', textDecoration: 'none'}}>
                        GOOGLE SEO FUNDAMENTALS
                      </a>
                    </p>
                  </li>
                  <li className="smallDetails">
                    <span className="text-gray-300">click on the certification name to view it</span>
                  </li>
                </ul>
              </div>
              <div className="pb-4 mt-8 relative z-10">
                <Link href="https://dannyfullstack.dev/DannyNunezResumev2.pdf" target="_blank">
                  <button className="px-6 py-3 text-white rounded-lg font-semibold font-libre bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-105">
                    View Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
