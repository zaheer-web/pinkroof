import { useState, useEffect } from "react";

import img1 from "../img/za-22.jpeg";
import img2 from "../img/za-23.jpeg";
import img3 from "../img/za-24.jpeg";
import img4 from "../img/za-17.jpeg";
import img5 from "../img/za-19.jpeg";
import img6 from "../img/za-20.jpeg";
import img7 from "../img/za-26.jpeg";
import img8 from "../img/za-29.jpeg";

import img13 from "../img/za-12.jpeg";
import img14 from "../img/za-6.jpeg";
import img15 from "../img/za-7.jpeg";
import img16 from "../img/za-8.jpeg";
import img17 from "../img/za-30.jpg";
import img18 from "../img/za-31.jpg";
import img19 from "../img/za-32.jpg";
import img20 from "../img/za-33.jpg";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [initialCount, setInitialCount] = useState(8);

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "2D Design",
    "3D View",
    // "360 View",
    
  ];

  const projects = [
    { category: "Residential", img: img1 },
    { category: "Residential", img: img2 },
    { category: "Residential", img: img3 },
    { category: "Residential", img: img4 },

    { category: "Commercial", img: img7 },
    { category: "Commercial", img: img6 },
    { category: "Commercial", img: img5 },
    { category: "Commercial", img: img8 },

    

    { category: "2D Design", img: img13 },
    { category: "2D Design", img: img14 },
    { category: "2D Design", img: img15 },
    { category: "2D Design", img: img16 },

    { category: "3D View", img: img19 },
    { category: "3D View", img: img20 },
    { category: "3D View", img: img17 },
    { category: "3D View", img: img18 },

    // 🔥 360 VIEW (IFRAME)
    // {
    //   category: "360 View",
    //   type: "iframe",
    //   src: "https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3GY4DJN3P&locale=en_US&utm_source=light720_share&utm_medium=linkcopy&utm_content=3FO3GY4DJN3P",
    // },
    // {
    //   category: "360 View",
    //   type: "iframe",
    //   src: "https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3MHOP9AW4&locale=en_US&utm_source=light720_share&utm_medium=linkcopy&utm_content=3FO3MHOP9AW4",
    // },
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

  // LIGHTBOX
  const next = () => {
    setSelectedIndex((prev) => (prev + 1) % filtered.length);
  };

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filtered.length - 1 : prev - 1
    );
  };

  return (
    <section className="px-4 md:px-16 py-20 bg-gradient-to-br from-white via-pink-100 to-pink-300">

      {/* HEADER */}
      <h2 className="font-serif text-3xl md:text-5xl text-black mb-10">
        Our Projects
      </h2>

      {/* FILTER */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(cat);
              setSelectedIndex(null);
            }}
            className={`px-4 py-2 text-xs border rounded-full ${
              active === cat
                ? "bg-black text-white"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-2">

        {filtered.slice(0, visibleCount).map((item, i) => (
          <div
            key={i}
            onClick={() => item.type !== "iframe" && setSelectedIndex(i)}
            className={`relative group overflow-hidden cursor-pointer ${getSpan(i)}`}
          >

            {/* 🔥 IFRAME */}
            {item.type === "iframe" ? (
              <iframe
                src={item.src}
                className="w-full h-full border-0 scale-[1.3]"
                loading="lazy"
              ></iframe>
            ) : (
              <>
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition"></div>
              </>
            )}

            {/* LABEL */}
            <p className="absolute bottom-3 left-3 text-white text-[10px] md:text-xs uppercase tracking-widest">
              {item.category}
            </p>

          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center mt-10 gap-4">

        {visibleCount < filtered.length && (
          <button
            onClick={() => setVisibleCount(filtered.length)}
            className="px-6 py-3 bg-black text-white text-xs uppercase tracking-widest hover:opacity-80 transition"
          >
            View More
          </button>
        )}

        {visibleCount > initialCount && (
          <button
            onClick={() => setVisibleCount(initialCount)}
            className="px-6 py-3 border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
          >
            Show Less
          </button>
        )}

      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && filtered[selectedIndex].type !== "iframe" && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-4 md:left-10 text-white text-3xl"
          >
            ‹
          </button>

          <img
            src={filtered[selectedIndex].img}
            alt=""
            className="max-h-[80vh] max-w-[90%] rounded-lg"
          />

          <button
            onClick={next}
            className="absolute right-4 md:right-10 text-white text-3xl"
          >
            ›
          </button>
        </div>
      )}

    </section>
  );
}