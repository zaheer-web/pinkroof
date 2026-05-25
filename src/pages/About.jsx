import React, { useEffect } from 'react'

import AboutHero from '../About/AboutHero'
import AboutStory from '../About/AboutStory'
import StatsBar from '../About/StatsBar'
import ValuesSection from '../About/ValuesSection'
import TeamSection from '../About/TeamSection'
import AwardsSection from '../About/AwardsSection'

function About() {

  useEffect(() => {

    // Page Title
    document.title =
      "About PinkRoof | Interior Design & Architecture Studio";

    // Meta Description
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Learn about PinkRoof, a luxury interior design and architecture studio dedicated to creating timeless residential and commercial spaces with modern aesthetics and functional elegance."
      );

    // Meta Keywords
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "About PinkRoof, interior design company, luxury interior studio, architecture firm, residential interiors, commercial interior designers, modern interior experts"
      );

    // Open Graph Title
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute(
        "content",
        "About PinkRoof | Luxury Interior Studio"
      );

    // Open Graph Description
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        "Discover PinkRoof story, vision and passion for crafting luxurious and functional interior spaces."
      );

    // Canonical URL
    const canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (canonicalTag) {
      canonicalTag.setAttribute(
        "href",
        "https://pinkroof.in/about"
      );
    }

  }, []);

  return (
    <>

      {/* SEO Main Heading */}
      <h1 className="hidden">
        About PinkRoof Interior Design Studio
      </h1>

      <AboutStory />

      <AboutHero />

      <TeamSection />

      <StatsBar />

      <ValuesSection />

      {/* <AwardsSection /> */}

    </>
  )
}

export default About