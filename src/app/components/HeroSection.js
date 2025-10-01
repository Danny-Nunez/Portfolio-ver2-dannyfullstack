'use client'

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="danny_tm_hero min-h-screen relative overflow-hidden" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 max-h-[600px] mt-24">
        <Image
          src="/images/Frame1.jpg"
          alt="Hero Background"
          fill
          className="object-cover max-h-screen"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Black gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Centered Content */}
          <div className="flex flex-col items-center text-center">
            {/* Person Image with Shadow */}
            <div className="relative mb-8">
              {/* Person Image */}
              <div className="relative z-10 pt-40">
                <Image
                  src="/images/mev3blue.png"
                  alt="Danny Nunez"
                  width={438}
                  height={480}
                  className="w-auto h-[480px] object-contain"
                  priority
                />
              </div>
              
              {/* Shadow SVG - At bottom of person image */}
              <div className="absolute -bottom-[460px] left-1/2 transform -translate-x-1/2 w-[2000px] h-[720px] z-20">
                <Image
                  src="https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/663cf1968bbba037737a43a3_shadow.svg"
                  alt="Shadow"
                  width={800}
                  height={228}
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
            </div>

            {/* Content Above Shadow */}
            <div className="relative z-20 top-[-100px]">
              {/* Main Title */}
              <h1 className="text-4xl md:text-7xl font-extrabold mb-2 font-libre text-white">
                Full Stack Developer
              </h1>
              <h2 className="text-2xl md:text-2xl text-blue-400 mb-6 font-libre font-semibold">
                Based In Maryland
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl font-libre">
                Skilled in building reliable and scalable web applications with expertise across front-end and back-end technologies.
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-8">
                <Link href="https://twitter.com/DannyFullstack" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <svg className="p-[3px] hover:p-[1px] transition-all duration-300 ease-in-out mr-[-4px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.52373 6.77569L15.4811 0H14.0699L8.89493 5.88203L4.7648 0H0L6.24693 8.89552L0 16H1.4112L6.87253 9.78704L11.2352 16H16M1.92053 1.04127H4.08853L14.0688 15.0099H11.9003" />
                  </svg>
                </Link>
                <Link href="https://github.com/Danny-Nunez" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="p-[1px] hover:p-[0px] transition-all duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                </Link>
                <Link href="https://www.linkedin.com/in/danny-nunez-a7886b209" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  <svg className="p-[1px] hover:p-[0px] transition-all duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                </Link>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
