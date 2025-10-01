'use client'

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Contact from './components/Contact'

const Portfolio = dynamic(() => import('./components/Portfolio'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

export const dynamic = 'force-dynamic'

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
