import React, { useEffect } from 'react'

import ContactSection from '../contact/ContactSection'
import ContactMain from '../contact/ContactMain'

function Conatct() {

  useEffect(() => {

    // Page Title
    document.title =
      "Contact PinkRoof | Interior Design Consultation";

    // Meta Description
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Get in touch with PinkRoof for luxury interior design, architecture consultation, residential interiors and commercial space transformation services."
      );

    // Meta Keywords
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute(
        "content",
        "contact PinkRoof, interior design consultation, luxury interiors contact, architecture studio contact, residential interior experts, commercial interiors"
      );

    // Open Graph Title
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute(
        "content",
        "Contact PinkRoof | Interior Design Studio"
      );

    // Open Graph Description
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        "Connect with PinkRoof for premium interior and architecture solutions."
      );

    // Canonical URL
    const canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (canonicalTag) {
      canonicalTag.setAttribute(
        "href",
        "https://pinkroof.in/contact"
      );
    }

  }, []);

  return (
    <>

      {/* SEO Main Heading */}
      <h1 className="hidden">
        Contact PinkRoof Interior Design Studio
      </h1>

      <ContactSection />

      <ContactMain />

    </>
  )
}

export default Conatct