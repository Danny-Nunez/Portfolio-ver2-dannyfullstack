'use client'

import React, { useEffect } from 'react'
import Navbar from './components/Navbar' 
import HeroSection from './components/HeroSection' 
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export const dynamic = 'force-dynamic'
export const revalidate = false

export default function HomePage() {
  

  return (
    <>
      <div className=" flex flex-col bg-gradient-to-b from-black via-gray-900 to-blue-900"> {/* Gradient background */}
        <Navbar />

        <HeroSection />
        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}
