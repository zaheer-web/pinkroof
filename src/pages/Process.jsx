import React from 'react'
import DesignHero from '../Process/DesignHero'
import Intro from '../Process/Intro'
import ProcessSteps from '../Process/ProcessSteps'
import TimelineBar from '../Process/TimelineBar'
import FAQSection from '../Process/FAQSection'

function Process() {
  return (
    <>
    <Intro/>

    <DesignHero/>
    <ProcessSteps/>
    <TimelineBar/>
    <FAQSection/>
    </>
  )
}

export default Process