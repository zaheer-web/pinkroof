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
        from-[#db3884]
        via-[#d6559d]
        to-[#e99fc5]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_40%)]"></div>

      <div className="absolute -top-32 -left-32 h-[350px] w-[350px] bg-[#ef91bc]/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-[#d67eb3]/30 blur-3xl"></div>

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
            <div className="w-10 h-[1px] bg-white"></div>

            <span className="text-[10px] tracking-[0.35em] uppercase text-white/90">
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
              text-white
            "
          >
            Our{" "}

            <span className="italic text-[#fff0f7]">
              Services
            </span>
          </h2>
        </div>

        {/* BUTTON */}
        <Link to="/services">
          <button
            className="
              border
              border-white/70
              bg-white/10
              backdrop-blur-xl
              px-7
              py-3
              text-[11px]
              tracking-[0.25em]
              uppercase
              text-white
              transition-all
              duration-500
              hover:bg-white
              hover:text-[#db3884]
              hover:scale-105
              shadow-xl
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
              bg-white/12
              backdrop-blur-2xl
              border
              border-white/20
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:bg-white/18
            "
          >
            {/* TOP LINE */}
            <div
              className="
                absolute
                top-0
                left-0
                h-[4px]
                w-0
                bg-white
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
                  brightness-95
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
                  text-[#fff0f7]
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
                  text-white
                  mb-3
                  transition
                  duration-300
                  group-hover:text-[#fff0f7]
                "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  text-[15px]
                  leading-relaxed
                  text-white/75
                "
              >
                {item.desc}
              </p>

              {/* BOTTOM LINE */}
              <div
                className="
                  mt-6
                  w-10
                  h-[2px]
                  bg-white
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