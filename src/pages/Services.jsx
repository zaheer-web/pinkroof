import React from 'react'
import Hero from '../Service/Hero'
import Intro from '../Service/Intro'

import ServicesList from '../Service/ServicesList'
import Packages from '../Service/Packages'

function Services() {
  return (
   <>
   <Hero/>
   <Intro/>
   
   <ServicesList/>
   <Packages/>

   
   </>
  )
}

export default Services