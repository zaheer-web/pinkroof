import React from 'react'
import Hero from '../Service/Hero'
import Intro from '../Service/Intro'

import ServicesList from '../Service/ServicesList'
import Packages from '../Service/Packages'
// import ProcessSteps from '../Process/ProcessSteps'

function Services() {
  return (
   <>
   <Hero/>
   <Intro/>
   
   <ServicesList/>
   {/* <ProcessSteps/> */}

   <Packages/>

   
   </>
  )
}

export default Services