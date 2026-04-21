import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 360 BACKGROUND */}
       <iframe
        src="https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3MHOP9AW4&locale=en_US&utm_source=light720_share&utm_medium=linkcopy&utm_content=3FO3MHOP9AW4"
        className="absolute inset-0 w-full h-full border-0 scale-[1.4]"
        allowFullScreen
        loading="lazy"
      ></iframe>
      

      {/* DARK + COLOR OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div> */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20">

        <div className="max-w-xl text-white">

          {/* TAG */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-white"></div>
            <span className="text-[13px] tracking-[0.3em] uppercase">
              Pink Roof Interiors
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-serif text-[2.3rem] md:text-[3.5rem] lg:text-[4.2rem] leading-tight mb-5">
            Designing Spaces <br />
            <span className="italic">That Feel Like Home</span>
          </h1>

          {/* SHORT DESCRIPTION */}
          <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed mb-8">
            We craft elegant and functional interiors tailored to your lifestyle — 
            from modern homes to luxury spaces with timeless design.
          </p>

          {/* BUTTON */}
          <Link to="/portfolio">
            <button className="bg-white text-black px-6 py-3 text-xs tracking-widest uppercase hover:bg-gray-200 transition">
              View Portfolio
            </button>
          </Link>

        </div>
      </div>

    
      

    </section>
  );
}