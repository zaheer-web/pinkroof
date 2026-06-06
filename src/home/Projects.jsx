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
import ca2 from "../img/cafe/ca-2.jpeg";
import ca3 from "../img/cafe/ca-3.jpeg";
import ca4 from "../img/cafe/ca-4.avif";

import ga1 from "../img/government/ga-1.jpeg";
import ga2 from "../img/government/ga-4.jpeg";
import ga3 from "../img/government/ga-3.jpeg";
import ga4 from "../img/government/ga-5.jpeg";

import ho1 from "../img/hostle/ha-1.jpeg";
import ho2 from "../img/hostle/ha-2.jpeg";
import ho3 from "../img/hostle/ha-3.jpeg";
import ho4 from "../img/hostle/ha-4.jpeg";


import oo1 from "../img/office/gg-1.jpeg";
import oo2 from "../img/office/gg-2.jpeg";
import oo3 from "../img/office/gg-3.jpeg";
import oo4 from "../img/office/gg-4.jpeg";



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
    "OFFICE",
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
    { category: "Restaurant/cafe", img: ca4 },
    { category: "Restaurant/cafe", img: ca1 },
    { category: "Restaurant/cafe", img: ca2 },

    { category: "Government", img: ga1 },
    { category: "Government", img: ga2 },
    { category: "Government", img: ga3 },
    { category: "Government", img: ga4 },

    { category: "Hostel", img: ho3 },
    { category: "Hostel", img: ho1 },
    { category: "Hostel", img: ho2 },
    { category: "Hostel", img: ho4 },

    { category: "OFFICE", img: oo1 },
    { category: "OFFICE", img: oo2 },
    { category: "OFFICE", img: oo3 },
    { category: "OFFICE", img: oo4 },


  ];

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
    setSelectedIndex((prev) => (prev + 1) % filtered.length);
  };

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filtered.length - 1 : prev - 1
    );
  };

  return (
    <section
    id="projects"
      className="
        relative
        overflow-hidden
        px-3
        sm:px-4
        md:px-10
        lg:px-16
        py-14
        md:py-20
        bg-gradient-to-br
        from-[#fffafd]
        via-[#fff1f8]
        to-[#fdebf4]
      "
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),transparent_40%)]"></div>

      <div className="pointer-events-none absolute -top-40 -left-40 h-[350px] w-[350px] bg-[#ef91bc]/20 blur-3xl"></div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] bg-[#d67eb3]/20 blur-3xl"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="relative z-20"
      >
        <h2
          className="
            font-heading
            text-3xl
            md:text-5xl
            text-[#2a0f1f]
            mb-10
            tracking-tight
          "
        >
          Our{" "}
          <span className="italic text-[#db3884]">
            Projects
          </span>
        </h2>
      </motion.div>

      {/* FILTER MENU */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="
          mb-10
          w-full
          overflow-x-auto
          scrollbar-hide
          relative
          z-30
        "
      >
        <div
          className="
            flex
            gap-3
            min-w-max
            pb-2
            md:flex-wrap
            md:min-w-0
          "
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
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
                relative
                z-40
                cursor-pointer
                shrink-0
                px-5
                py-3
                text-[11px]
                uppercase
                tracking-[2px]
                border
                whitespace-nowrap
                transition-all
                duration-500

                ${
                  active === cat
                    ? "bg-[#db3884] text-white border-[#db3884] shadow-[0_10px_25px_rgba(219,56,132,0.25)]"
                    : "border-[#ef91bc] bg-white/80 text-[#db3884] hover:bg-[#db3884] hover:text-white"
                }

                md:px-6
                md:text-xs
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* GRID */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          auto-rows-[140px]
          sm:auto-rows-[180px]
          md:auto-rows-[220px]
          gap-2
          md:gap-4
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
              border
              border-[#ef91bc]/20
              shadow-[0_10px_30px_rgba(219,56,132,0.08)]
              ${getSpan(i)}
            `}
          >
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

            <div
              className="
                absolute
                inset-0
                bg-[#db3884]/5
                group-hover:bg-[#db3884]/25
                transition-all
                duration-500
              "
            ></div>
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
              bg-[#db3884]
              text-white
              text-xs
              uppercase
              tracking-widest
              transition-all
              duration-500
              hover:scale-105
              shadow-xl
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
              border-[#db3884]
              text-[#db3884]
              text-xs
              uppercase
              tracking-widest
              transition-all
              duration-500
              hover:bg-[#db3884]
              hover:text-white
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
              bg-black/95
              flex
              items-center
              justify-center
              z-50
            "
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="
                absolute
                top-6
                right-6
                text-white
                text-3xl
                z-50
              "
            >
              ✕
            </button>

            <button
              onClick={prev}
              className="
                absolute
                left-3
                md:left-10
                text-white
                text-4xl
                z-50
              "
            >
              ‹
            </button>

            <motion.img
              key={filtered[selectedIndex].img}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              src={filtered[selectedIndex].img}
              alt=""
              className="
                max-h-[85vh]
                max-w-[92%]
                object-contain
              "
            />

            <button
              onClick={next}
              className="
                absolute
                right-3
                md:right-10
                text-white
                text-4xl
                z-50
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