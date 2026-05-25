import React, { useEffect } from 'react'

import Hero from '../Service/Hero'
import Intro from '../Service/Intro'
import ServicesList from '../Service/ServicesList'
import Packages from '../Service/Packages'
// import ProcessSteps from '../Process/ProcessSteps'

function Services() {

  useEffect(() => {

    // Page Title
    document.title =
      "Interior Design Services | PinkRoof";

    // Meta Description
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Explore PinkRoof luxury interior design services including residential interiors, commercial interiors, architecture planning, turnkey solutions and modern space styling."
      );

    // Meta Keywords
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "interior design services, luxury interiors, residential interior design, commercial interiors, turnkey interior solutions, architecture services, home interior experts"
      );

    // Open Graph Title
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute(
        "content",
        "PinkRoof Interior Design Services"
      );

    // Open Graph Description
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        "Premium residential and commercial interior design solutions crafted with modern aesthetics and functionality."
      );

    // Canonical URL
    const canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (canonicalTag) {
      canonicalTag.setAttribute(
        "href",
        "https://pinkroof.in/services"
      );
    }

  }, []);

  return (
    <>

      {/* SEO Main Heading */}
      <h1 className="hidden">
        Luxury Interior Design Services
      </h1>

      <Hero />

      <Intro />

      <ServicesList />

      {/* <ProcessSteps/> */}

      <Packages />

    </>
  )
}

export default Services