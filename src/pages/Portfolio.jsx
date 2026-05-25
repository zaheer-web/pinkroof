import React, { useEffect } from 'react'

import PageHero from '../portfolio/PageHero'
import Projects from '../home/Projects'
import FeaturedProject from '../portfolio/FeaturedProject'

function Portfolio() {

  useEffect(() => {

    // Page Title
    document.title =
      "Portfolio | PinkRoof Interior Design Projects";

    // Meta Description
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Explore PinkRoof portfolio featuring luxury residential interiors, commercial spaces, modern architecture and premium interior design projects crafted with timeless aesthetics."
      );

    // Meta Keywords
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "interior design portfolio, luxury interiors, residential projects, commercial interior projects, modern architecture, interior case studies, PinkRoof projects"
      );

    // Open Graph Title
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute(
        "content",
        "PinkRoof Portfolio | Luxury Interior Projects"
      );

    // Open Graph Description
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        "Discover beautifully crafted interior and architecture projects by PinkRoof."
      );

    // Canonical URL
    const canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (canonicalTag) {
      canonicalTag.setAttribute(
        "href",
        "https://pinkroof.in/portfolio"
      );
    }

  }, []);

  return (
    <>

      {/* SEO Main Heading */}
      <h1 className="hidden">
        Luxury Interior Design Portfolio
      </h1>

      <PageHero />

      <Projects />

      <FeaturedProject />

    </>
  )
}

export default Portfolio