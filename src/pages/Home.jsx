import React from 'react'
import Hero from '../home/Hero'
import Marquee from '../home/Marquee'

import Services from '../home/Services'
import Projects from '../home/Projects'
import CTA from '../home/CTA'
import AboutHome from '../home/AboutHome'
import Testimonials from '../home/Testimonials'
import MainHero from '../home/MainHero'
import View360 from '../home/View360'
import VideoGallerySection from '../home/VideoGallerySection'
import Hero1 from '../home/Hero1'


function Home() {
  return (
   <>
   <Hero1/>
   <MainHero/>
   <Hero/>
   
   <Marquee/>
   <AboutHome/>
   <Services/>
   <Projects/>
   <VideoGallerySection/>
   <Testimonials/>
   <View360/>
   <CTA/>
   
   </>
  )
}

export default Home