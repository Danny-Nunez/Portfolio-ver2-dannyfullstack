'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaExternalLinkAlt, 
  FaCode, 
  FaChevronLeft, 
  FaChevronRight,
  FaLock,
  FaEnvelope,
  FaTimes
} from 'react-icons/fa';

// Sample project data
const projects = [
    {
      title: 'Beat in Box',
      image: '/img/portfolio/beatinbox.png',
      description: 'Beat in Box is a modern web application for discovering, playing, and managing music. Built with Next.js and featuring a sleek user interface, it provides a seamless music streaming experience with playlist management capabilities.',
      liveLink: 'https://www.beatinbox.com/',
      repoLink: 'https://github.com/Danny-Nunez/Music',
      tech: 'Next.js 13+, PostgreSQL, Prisma ORM, NextAuth.js, React Context, Tailwind CSS, Swagger/OpenAPI',
      year: '2025',
    },
    {
      title: 'Bill of Rights Institute',
      image: '/img/portfolio/project1.webp',
      description: 'The Bill of Rights Institute provides over 5,000 civics resources for educators and students. With more than 75,000 educators using BRI, it serves as a valuable tool in education. The platform features a decoupled build with a Next.js front end and a WordPress back end.',
      liveLink: '#',
      repoLink: '#',
      tech: 'React, Next.js, Tailwind CSS, AWS, Wordpress, Python, PHP and Auth0',
      year: '2024',
      isPrivate: true,
    },
    {
      title: 'Bill of Rights Institute Store',
      image: '/img/portfolio/2.jpg',
      description: 'The Bill of Rights Institute Store is an e-commerce platform designed to provide educators with classroom-ready materials such as books, posters, stickers, and merchandise to show support. Built on Shopify, it features custom API integrations and webhooks for custom functionality.',
      liveLink: '#',
      repoLink: '#',
      tech: 'Shopify, NodeJS, Express, Auth0',
      year: '2024',
      isPrivate: true,
    },
    {
      title: 'Facil Pay',
      image: '/img/portfolio/3.jpg',
      description: 'Failpay.io is a message-centric payment platform leveraging user-intent blockchain technology for secure peer-to-peer messaging and seamless global cryptocurrency transactions. The website is developed using Next.js, featuring custom Python scripts for Twitter scraping and integration with the CoinMarketCap API.',
      liveLink: 'https://facil-murex.vercel.app/',
      repoLink: 'https://github.com/Danny-Nunez/Facil',
      tech: 'NextJS, Python, Git Actions, Supabase, CoinmarketCap API',
      year: '2024',
    },
    {
      title: 'Negozee',
      image: '/img/portfolio/negozee.png',
      description: 'Negozee is Americas largest social business network dedicated to Latino professionals. With a mission to connect, educate, and support Latino entrepreneurs.',
      liveLink: '#',
      repoLink: '#',
      tech: 'Node.js, Express, MySql, Next.js, Tailwind CSS, Auth0, Wordpress, PHP',
      year: '2024',
      isPrivate: true,
    },
    // Add more projects as needed
  ];
  
export default function Portfolio() {
    const parentRef = useRef(null);
    const swiperRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPrivateModalOpen, setIsPrivateModalOpen] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            parentRef.current.classList.add('animate');
          } else {
            parentRef.current.classList.remove('animate');
          }
        },
        { threshold: 0.5 }
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
  
    // Custom navigation handlers
    const handlePrevClick = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
  
    const handleNextClick = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };

    const handleCardClick = (project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
    };

    const handlePrivateCodeClick = () => {
      setIsPrivateModalOpen(true);
    };

    const closePrivateModal = () => {
      setIsPrivateModalOpen(false);
    };
  
    return (
      <div className="portfolio relative pb-20 overflow-hidden" id="portfolio" ref={parentRef}>
        <div className="container pb-20 pt-20 relative z-10">
          <div className="danny_tm_title_holder">
            <span className="!text-blue-500 portfolio-blue-line" style={{color: '#3b82f6 !important'}}>Portfolio</span>
            <h3 className="font-libre !text-white" style={{color: '#ffffff !important'}}>Check out some of my recent work</h3>
          </div>
          <div>
            {/* Custom Navigation Buttons */}
            <div className="flex justify-end space-x-4 mb-4 pt-32">
              <button
                onClick={handlePrevClick}
                className="custom-prev-button px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1.5 text-sm bg-gray-300 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
              >
                <FaChevronLeft className="w-3.5 h-3.5" />
                Prev
              </button>
              <button
                onClick={handleNextClick}
                className="custom-next-button px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-1.5 text-sm bg-gray-300 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
              >
                Next
                <FaChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
  
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              allowTouchMove={true}
              simulateTouch={true}
              touchStartPreventDefault={false}
              navigation={{
                prevEl: '.custom-prev-button',
                nextEl: '.custom-next-button',
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                0: { 
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                640: { 
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                768: { 
                  slidesPerView: 2,
                  centeredSlides: true,
                },
                1024: { 
                  slidesPerView: 3,
                  centeredSlides: true,
                },
              }}
              className="portfolio-swiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="rounded-xl shadow-sm bg-white border-1 border-red-100 boxborder h-[500px] flex flex-col cursor-pointer hover:shadow-lg transition-shadow relative"
                    onClick={() => handleCardClick(project)}
                  >
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                        width={200}
                        height={200}
                      />
                      <div className="absolute top-3 right-3 bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h4 className="font-semibold font-libre text-lg mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{project.description}</p>
                      <h5 className="font-semibold text-md mb-2  font-libre">Tech:</h5>
                      <p className="text-sm text-gray-700 mb-4">{project.tech}</p>
                      <div className="flex space-x-4 mb-4 mt-auto">
                        <Link href={project.liveLink} passHref target="_blank">
                          <button 
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition font-libre text-sm flex items-center gap-2" 
                            style={{backgroundColor: '#1c3360'}}
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Live Demo
                          </button>
                        </Link>
                        {project.isPrivate ? (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrivateCodeClick();
                            }}
                            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-libre text-sm flex items-center gap-2"
                          >
                            <FaCode className="w-4 h-4" />
                            View Code
                          </button>
                        ) : (
                          <Link href={project.repoLink} passHref target="_blank">
                            <button 
                              onClick={(e) => e.stopPropagation()}
                              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-libre text-sm flex items-center gap-2"
                            >
                              <FaCode className="w-4 h-4" />
                              View Code
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Pagination Container */}
            <div className="swiper-pagination mt-8 !flex !justify-center [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet-active]:!bg-blue-500 [&_.swiper-pagination-bullet]:opacity-70 [&_.swiper-pagination-bullet-active]:!opacity-100"></div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
                
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover rounded-t-xl"
                  width={800}
                  height={400}
                />
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold font-libre mb-4">{selectedProject.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold font-libre mb-3">Description</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold font-libre mb-3">Technologies Used</h4>
                    <p className="text-gray-700">{selectedProject.tech}</p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link href={selectedProject.liveLink} passHref target="_blank">
                      <button className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition font-libre text-sm flex items-center gap-2" style={{backgroundColor: '#1c3360'}}>
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </button>
                    </Link>
                    <Link href={selectedProject.repoLink} passHref target="_blank">
                      <button className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-libre text-sm flex items-center gap-2">
                        <FaCode className="w-4 h-4" />
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Private Code Modal */}
        {isPrivateModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-libre">Private Repository</h3>
                <button
                  onClick={closePrivateModal}
                  className="text-gray-500 hover:text-gray-700 transition"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <FaLock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                </div>
                
                <p className="text-gray-600 mb-4">
                  This project&apos;s source code is private and not available for public viewing due to client confidentiality agreements.
                </p>
                
                <p className="text-sm text-gray-500 mb-6">
                  For more information about this project or to discuss collaboration opportunities, please contact me directly.
                </p>
                
                <div className="flex space-x-3">
                  <button
                    onClick={closePrivateModal}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-libre text-sm"
                  >
                    Close
                  </button>
                  <a
                    href="mailto:your-email@example.com"
                    className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition font-libre text-sm flex items-center gap-2"
                    style={{backgroundColor: '#1c3360'}}
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  