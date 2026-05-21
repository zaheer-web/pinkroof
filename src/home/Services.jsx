import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../img/h-7.png";
import img2 from "../img/za-13.jpeg";
import img3 from "../img/za-14.jpeg";
import img4 from "../img/za-3.jpeg";

export default function Services() {
  const services = [
    {
      no: "01",
      title: "Salon Interior Design",
      desc: "Modern luxury salon spaces with perfect layout, lighting, and comfort.",
      img: img1,
    },
    {
      no: "02",
      title: "Residential Interiors",
      desc: "Beautiful and functional homes tailored to your lifestyle.",
      img: img2,
    },
    {
      no: "03",
      title: "Commercial Spaces",
      desc: "Elegant offices and spaces designed around your brand identity.",
      img: img3,
    },
    {
      no: "04",
      title: "Renovation & Makeover",
      desc: "Transform old interiors with premium finishes and modern styling.",
      img: img4,
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        sm:px-6
        md:px-12
        lg:px-20
        py-16
        md:py-24
        bg-gradient-to-br
        from-[#FEFEFD]
        via-[#FBE6E5]
        to-[#f8dede]
      "
    >
      {/* SOFT BG GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.6),transparent_40%)]"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          flex
          justify-between
          items-end
          mb-12
          md:mb-16
          flex-wrap
          gap-5
        "
      >
        <div>
          {/* LABEL */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-black"></div>

            <span className="text-[10px] tracking-[0.35em] uppercase text-black">
              Pink Roof Interiors
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              font-heading
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-none
              tracking-tight
              text-black
            "
          >
            Our{" "}

            <span className="italic text-[#b88b8b]">
              Services
            </span>
          </h2>
        </div>

        {/* BUTTON */}
        <Link to="/services">
          <button
            className="
              border
              border-black
              px-6
              py-3
              text-[11px]
              tracking-[0.25em]
              uppercase
              transition-all
              duration-500
              hover:bg-black
              hover:text-white
              hover:scale-105
            "
          >
            See All Services
          </button>
        </Link>
      </motion.div>

      {/* SERVICES GRID */}
      <div
        className="
          relative
          z-10
          grid
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
        "
      >
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
            }}
            className="
              group
              relative
              overflow-hidden
              bg-white/70
              backdrop-blur-xl
              border
              border-[#ecd8d8]
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:bg-[#fff7f7]
            "
          >
            {/* TOP LINE */}
            <div
              className="
                absolute
                top-0
                left-0
                h-[3px]
                w-0
                bg-[#d6a5a5]
                transition-all
                duration-500
                group-hover:w-full
              "
            ></div>

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-[240px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  brightness-90
                  group-hover:brightness-100
                "
              />
            </div>

            {/* CONTENT */}
            <div className="relative p-6">
              {/* NUMBER */}
              <p
                className="
                  text-sm
                  tracking-[0.2em]
                  text-[#b88b8b]
                  mb-3
                  font-semibold
                "
              >
                {item.no}
              </p>

              {/* TITLE */}
              <h3
                className="
                  text-[22px]
                  leading-snug
                  font-semibold
                  text-black
                  mb-3
                  transition
                  duration-300
                  group-hover:text-[#b88b8b]
                "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  text-[15px]
                  leading-relaxed
                  text-gray-600
                "
              >
                {item.desc}
              </p>

              {/* BOTTOM LINE */}
              <div
                className="
                  mt-6
                  w-10
                  h-[1px]
                  bg-[#d6a5a5]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}