import React from 'react'
import AboutHero from '../About/AboutHero'
import AboutStory from '../About/AboutStory'
import StatsBar from '../About/StatsBar'
import ValuesSection from '../About/ValuesSection'
import TeamSection from '../About/TeamSection'
import AwardsSection from '../About/AwardsSection'

function About() {
  return (
    <>
    <AboutStory/>

    <AboutHero/>
    <TeamSection/>

    <StatsBar/>
    <ValuesSection/>
    
    
    </>
  )
}

export default About