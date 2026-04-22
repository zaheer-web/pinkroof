import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// Images
import hero1 from "../img/za-13.jpeg";
import hero2 from "../img/za-22.jpeg";
import hero3 from "../img/za-33.jpg";
import hero4 from "../img/za-30.jpg";

const sliderImages = [hero1, hero2, hero3, hero4];

const MainHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black">
      <section className="relative w-full h-screen overflow-hidden">

        {/* 🔥 BACKGROUND CROSSFADE */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={sliderImages[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* 🔥 CONTENT WITH SCROLL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 60, duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 z-20"
        >
          <div className="text-center md:text-left max-w-2xl">

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight"
              style={{ color: "#FEFEFD" }}
            >
              Luxury{" "}
              <span style={{ color: "#FBE6E5" }}>
                <Typewriter
                  words={[
                    "Interior Design",
                    "Architecture",
                    "Space Planning"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
              <br />
              <span style={{ color: "#FBE6E5" }}>Studio</span>
            </motion.h1>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-6 text-lg font-body"
              style={{ color: "#FBE6E5" }}
            >
              Bespoke interiors for government, commercial, and residential realms
              crafted with precision and timeless elegance.
            </motion.p>

          </div>
        </motion.div>

        {/* 🔥 DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

      </section>
    </div>
  );
};

export default MainHero;