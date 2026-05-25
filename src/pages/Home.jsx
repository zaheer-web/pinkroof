import React, { useEffect } from 'react'

import Hero from '../home/Hero'
import Marquee from '../home/Marquee'
import Services from '../home/Services'
import Projects from '../home/Projects'
import CTA from '../home/CTA'
import AboutHome from '../home/AboutHome'
import Testimonials from '../home/Testimonials'
import MainHero from '../home/MainHero'
import VideoGallerySection from '../home/VideoGallerySection'
import Hero1 from '../home/Hero1'
import AboutStory from '../About/AboutStory'

function Home() {

  useEffect(() => {

    // Title
    document.title =
      "PinkRoof | Luxury Interior Design & Architecture Studio";

    // Description
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "PinkRoof is a premium interior design and architecture studio creating luxurious residential and commercial spaces with modern aesthetics and timeless elegance."
      );

    // Keywords
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "PinkRoof interiors, luxury interior design, architecture studio, residential interiors, commercial interiors, modern interiors, home interior design"
      );

  }, []);

  return (
    <>

      {/* SEO H1 */}
      <h1 className="hidden">
        Luxury Interior Design & Architecture Studio
      </h1>

      <Hero1 />

      <MainHero />

      <AboutStory />

      <Hero />

      <Marquee />

      <AboutHome />

      <Services />

      <Projects />

      <VideoGallerySection />

      <Testimonials />

      {/* <View360/> */}

      <CTA />

    </>
  )
}

export default Home