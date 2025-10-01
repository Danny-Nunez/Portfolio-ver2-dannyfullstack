'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Default to 'home'

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.1; // 10% of the page height
      setHasShadow(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Only target sections that need to be observed
    const sections = document.querySelectorAll('div[id]:not(#preloader)'); // Exclude preloader

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section in view: ${entry.target.id}`); // Debugging
            setActiveSection(entry.target.id); // Update activeSection when the section is in view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
    if (typeof window === 'undefined') return;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`danny_tm_topbar z-30 bg-transparent transition-all duration-300 ${hasShadow ? 'bg-black/20 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-6">
          {/* Menu */}
          <div className="menu">
            <ul className="flex space-x-12">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className={`mr-[-20px] font-libre font-medium text-white hover:text-blue-600 transition-all duration-300 text-lg tracking-wide hover:scale-105 ${
                    activeSection === 'home' ? 'text-blue-600' : ''
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`font-libre font-medium text-white hover:text-blue-600 transition-all duration-300 text-lg tracking-wide hover:scale-105 ${
                    activeSection === 'about' ? 'text-blue-600' : ''
                  }`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className={`font-libre font-medium text-white hover:text-blue-600 transition-all duration-300 text-lg tracking-wide hover:scale-105 ${
                    activeSection === 'services' ? 'text-blue-600' : ''
                  }`}
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className={`font-libre font-medium text-white hover:text-blue-600 transition-all duration-300 text-lg tracking-wide hover:scale-105 ${
                    activeSection === 'portfolio' ? 'text-blue-600' : ''
                  }`}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`font-libre font-medium text-white hover:text-blue-600 transition-all duration-300 text-lg tracking-wide hover:scale-105 ${
                    activeSection === 'contact' ? 'text-blue-600' : ''
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
