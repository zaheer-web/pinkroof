import React from 'react'
import Hero from '../home/Hero'
import Marquee from '../home/Marquee'

import Services from '../home/Services'
import Projects from '../home/Projects'
import CTA from '../home/CTA'
import AboutHome from '../home/AboutHome'
import Testimonials from '../home/Testimonials'
import MainHero from '../home/MainHero'

function Home() {
  return (
   <>
   <MainHero/>
   <Hero/>
   <Marquee/>
   <AboutHome/>
   <Services/>
   <Projects/>
   <Testimonials/>
   <CTA/>
   
   </>
  )
}

export default Home