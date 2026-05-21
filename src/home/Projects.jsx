import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import fa1 from "../img/facade/fa-2.jpeg";
import fa2 from "../img/facade/fa-1.jpeg";
import fa3 from "../img/facade/fa-4.jpeg";
import fa4 from "../img/facade/fa-6.jpeg";

import ha1 from "../img/hotel/ha-2.jpeg";
import ha2 from "../img/hotel/ha-6.jpeg";
import ha3 from "../img/hotel/ha-1.jpeg";
import ha4 from "../img/hotel/ha-4.jpeg";

import ka1 from "../img/kitchen/ka-5.jpeg";
import ka2 from "../img/kitchen/ka-6.jpeg";
import ka3 from "../img/kitchen/ka-1.jpeg";
import ka4 from "../img/kitchen/ka-3.jpeg";

import sa1 from "../img/salon/sa-10.jpeg";
import sa2 from "../img/salon/sa-17.jpeg";
import sa3 from "../img/salon/sa-15.jpeg";
import sa4 from "../img/salon/sa-4.jpeg";

import ra1 from "../img/residential/ra-1.png";
import ra2 from "../img/residential/ra-2.png";
import ra3 from "../img/residential/ra-3.png";
import ra4 from "../img/residential/ra-4.png";

import th1 from "../img/3image/th-5.png";
import th2 from "../img/3image/th-7.png";
import th3 from "../img/3image/th-8.png";
import th4 from "../img/3image/th-9.png";

import ca1 from "../img/cafe/ca-1.webp";
import ca2 from "../img/cafe/ca-2.avif";
import ca3 from "../img/cafe/ca-3.jpg";
import ca4 from "../img/cafe/ca-4.avif";

import ga1 from "../img/government/ga-1.jpeg";
import ga2 from "../img/government/ga-4.jpeg";
import ga3 from "../img/government/ga-3.jpeg";
import ga4 from "../img/government/ga-5.jpeg";

import ho1 from "../img/hostle/ha-1.jpeg";
import ho2 from "../img/hostle/ha-2.jpeg";
import ho3 from "../img/hostle/ha-3.jpeg";
import ho4 from "../img/hostle/ha-4.jpeg";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [initialCount, setInitialCount] = useState(8);

  const categories = [
    "All",
    "Facade",
    "Residential",
    "Commercial/Hotel",
    "2D &3D View",
    "Kitchen",
    "Hostel",
    "Government",
    "Salon",
    "Restaurant/cafe",
  ];

  const projects = [
    { category: "2D &3D View", img: th1 },
    { category: "2D &3D View", img: th2 },
    { category: "2D &3D View", img: th3 },
    { category: "2D &3D View", img: th4 },

    { category: "Facade", img: fa1 },
    { category: "Facade", img: fa2 },
    { category: "Facade", img: fa3 },
    { category: "Facade", img: fa4 },

    { category: "Kitchen", img: ka1 },
    { category: "Kitchen", img: ka2 },
    { category: "Kitchen", img: ka3 },
    { category: "Kitchen", img: ka4 },

    { category: "Commercial/Hotel", img: ha4 },
    { category: "Commercial/Hotel", img: ha2 },
    { category: "Commercial/Hotel", img: ha1 },
    { category: "Commercial/Hotel", img: ha3 },

    { category: "Salon", img: sa1 },
    { category: "Salon", img: sa2 },
    { category: "Salon", img: sa3 },
    { category: "Salon", img: sa4 },

    { category: "Residential", img: ra1 },
    { category: "Residential", img: ra2 },
    { category: "Residential", img: ra3 },
    { category: "Residential", img: ra4 },

    { category: "Restaurant/cafe", img: ca3 },
    { category: "Restaurant/cafe", img: ca2 },
    { category: "Restaurant/cafe", img: ca1 },
    { category: "Restaurant/cafe", img: ca4 },

    { category: "Government", img: ga1 },
    { category: "Government", img: ga2 },
    { category: "Government", img: ga3 },
    { category: "Government", img: ga4 },

    { category: "Hostel", img: ho3 },
    { category: "Hostel", img: ho1 },
    { category: "Hostel", img: ho2 },
    { category: "Hostel", img: ho4 },
  ];

  // RESPONSIVE COUNT
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) {
        setInitialCount(4);
        setVisibleCount(4);
      } else {
        setInitialCount(8);
        setVisibleCount(8);
      }
    };

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const getSpan = (index) => {
    const pattern = [
      "md:col-span-2",
      "md:col-span-2 md:row-span-2",
      "",
      "",
    ];

    return pattern[index % 4];
  };

  const next = () => {
    setSelectedIndex((prev) =>
      (prev + 1) % filtered.length
    );
  };

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filtered.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        md:px-16
        py-20
        bg-gradient-to-br
        from-[#FEFEFD]
        via-[#FBE6E5]
        to-[#f8dede]
      "
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <h2
          className="
            font-heading
            text-3xl
            md:text-5xl
            text-black
            mb-10
            tracking-tight
          "
        >
          Our{" "}

          <span className="italic text-[#b88b8b]">
            Projects
          </span>
        </h2>
      </motion.div>

      {/* FILTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="flex gap-3 mb-10 flex-wrap"
      >
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(cat);
              setSelectedIndex(null);

              if (window.innerWidth < 768) {
                setVisibleCount(4);
              } else {
                setVisibleCount(8);
              }
            }}
            className={`
              px-4
              py-2
              text-xs
              border
              transition-all
              duration-500

              ${
                active === cat
                  ? "bg-black text-[#FEFEFD]"
                  : "border-black/40 text-black hover:bg-black hover:text-[#FEFEFD]"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          auto-rows-[180px]
          md:auto-rows-[220px]
          gap-2
        "
      >
        {filtered.slice(0, visibleCount).map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
            }}
            onClick={() => setSelectedIndex(i)}
            className={`
              relative
              group
              overflow-hidden
              cursor-pointer
              ${getSpan(i)}
            `}
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt=""
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-105
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-black/30
                group-hover:bg-black/60
                transition-all
                duration-500
              "
            ></div>

            {/* CATEGORY */}
            <div className="absolute bottom-4 left-4 z-10">
              <p
                className="
                  text-[#FEFEFD]
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-widest
                  mb-2
                "
              >
                {item.category}
              </p>

              <div
                className="
                  w-8
                  h-[1px]
                  bg-white
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center mt-10 gap-4">
        {visibleCount < filtered.length && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            onClick={() =>
              setVisibleCount((prev) => prev + initialCount)
            }
            className="
              px-6
              py-3
              bg-black
              text-[#FEFEFD]
              text-xs
              uppercase
              tracking-widest
              transition-all
              duration-500
              hover:opacity-80
              hover:scale-105
            "
          >
            View More
          </motion.button>
        )}

        {visibleCount > initialCount && (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            onClick={() => setVisibleCount(initialCount)}
            className="
              px-6
              py-3
              border
              border-black
              text-black
              text-xs
              uppercase
              tracking-widest
              transition-all
              duration-500
              hover:bg-black
              hover:text-[#FEFEFD]
            "
          >
            Show Less
          </motion.button>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/90
              flex
              items-center
              justify-center
              z-50
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="
                absolute
                top-6
                right-6
                text-white
                text-3xl
              "
            >
              ✕
            </button>

            {/* PREV */}
            <button
              onClick={prev}
              className="
                absolute
                left-4
                md:left-10
                text-white
                text-4xl
              "
            >
              ‹
            </button>

            {/* IMAGE */}
            <motion.img
              key={filtered[selectedIndex].img}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              src={filtered[selectedIndex].img}
              alt=""
              className="
                max-h-[80vh]
                max-w-[90%]
                object-contain
              "
            />

            {/* NEXT */}
            <button
              onClick={next}
              className="
                absolute
                right-4
                md:right-10
                text-white
                text-4xl
              "
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}