import { useEffect, useState, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

import img1 from "../img/3image/th-1.png";
import img2 from "../img/cafe/ca-2.jpeg";
import img3 from "../img/facade/fa-2.jpeg";
import img4 from "../img/hotel/ha-6.jpeg";
import img5 from "../img/kitchen/ka-7.jpeg";
import img6 from "../img/residential/ra-1.png";
import img7 from "../img/residential/ra-2.png";
import img8 from "../img/salon/sa-11.jpeg";
import img9 from "../img/za-4.jpeg";
import img10 from "../img/za-12.jpeg";
import img11 from "../img/3image/th-2.png";
import img12 from "../img/cafe/ca-1.webp";
import img13 from "../img/facade/fa-3.jpeg";
import img14 from "../img/hotel/ha-5.jpeg";
import img15 from "../img/kitchen/ka-5.jpeg";
import img16 from "../img/residential/ra-5.png";
import img17 from "../img/residential/ra-8.png";
import img18 from "../img/salon/sa-1.jpeg";
import img19 from "../img/za-5.jpeg";
import img20 from "../img/za-13.jpeg";
import img21 from "../img/3image/th-4.png";
import img22 from "../img/cafe/ca-3.jpeg";
import img23 from "../img/facade/fa-6.jpeg";
import img24 from "../img/hotel/ha-2.jpeg";
import img25 from "../img/kitchen/ka-1.jpeg";
import img26 from "../img/residential/ra-3.png";
import img27 from "../img/residential/ra-4.png";
import img28 from "../img/salon/sa-4.jpeg";
import img29 from "../img/za-6.jpeg";
import img30 from "../img/bo-5.png";

export default function MainHero() {
  const allImages = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,
];

  // Distribute images across 3 rows, each row uses ALL images but in different order
  const row1Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const row2Images = [img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];
  const row3Images = [img21, img22, img23, img24, img25, img26, img27, img28, img29, img30];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff0f7] via-[#f9d4e7] to-[#ffeaf5] py-12 md:py-20">
      
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[#db3884]/40 to-[#ef91bc]/30 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[#d6559d]/40 to-[#e99fc5]/30 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Overlay sheen */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.45),transparent_60%)]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 mx-auto mb-10 max-w-5xl px-6 text-center md:mb-14"
      >
        <span className="mb-4 inline-block  border border-[#db3884]/30 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#db3884] backdrop-blur-sm shadow-md">
          Crafted Interiors
        </span>

        <h1 className="bg-gradient-to-r from-[#2a0d1d] via-[#db3884] to-[#2a0d1d] bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent md:text-6xl lg:text-7xl">
          Designing Spaces <br className="hidden md:block" />
          That Tell Your Story
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-[#4b2a3a]/80 md:text-lg">
          From cozy cafés to elegant homes — explore a curated gallery of our latest interior creations.
        </p>
      </motion.div>

      {/* Marquee rows */}
      <div className="relative z-20 flex flex-col gap-3 md:gap-4">
        <MarqueeRow images={row1Images} speed={55} direction="left" height="h-[180px] md:h-[280px]" />
        <MarqueeRow images={row2Images} speed={55} direction="right" height="h-[150px] md:h-[220px]" />
        <MarqueeRow images={row3Images} speed={45} direction="left" height="h-[180px] md:h-[280px]" />
      </div>
    </section>
  );
}

function MarqueeRow({ images, speed, direction, height }) {
  const containerRef = useRef(null);
  const xRef = useRef(0);
  const [paused, setPaused] = useState(false);

  // Duplicate images for seamless loop
  const loopImages = [...images, ...images];

  useAnimationFrame((_, delta) => {
    if (paused || !containerRef.current) return;

    const move = (speed * delta) / 1000;

    xRef.current += direction === "left" ? -move : move;

    const trackWidth = containerRef.current.scrollWidth / 2;

    if (direction === "left" && xRef.current <= -trackWidth)
      xRef.current += trackWidth;

    if (direction === "right" && xRef.current >= 0)
      xRef.current -= trackWidth;

    containerRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={containerRef} className="flex gap-3 md:gap-4 will-change-transform">
        {loopImages.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className={`group relative w-[260px] flex-shrink-0 overflow-hidden  shadow-2xl shadow-[#db3884]/15 ring-1 ring-white/40 md:w-[380px] ${height}`}
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#db3884]/60 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Shine sweep */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}