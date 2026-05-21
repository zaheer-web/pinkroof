import { motion } from "framer-motion";

import img1 from "../img/za-3.jpeg";
import img2 from "../img/za-4.jpeg";
import img3 from "../img/za-5.jpeg";

export default function AboutHome() {
  const features = [
    ["◈", "Custom Interiors", "Tailored beautifully for your lifestyle"],
    ["◇", "Quality Execution", "Precision-crafted modern interiors"],
    ["◉", "3D Visualization", "Experience your dream space before build"],
    ["◐", "Complete Service", "End-to-end seamless interior solutions"],
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      grid
      lg:grid-cols-2
      items-center
      min-h-screen
      bg-gradient-to-br
      from-[#fffafd]
      via-[#fff2f8]
      to-[#fdebf4]
    "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),transparent_40%)]"></div>

      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#db3884]/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[#d6559d]/10 blur-3xl"></div>

      {/* ================= LEFT IMAGES ================= */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="
          relative
          grid
          grid-cols-2
          gap-3
          p-4
          md:p-
          h-full
        "
      >
        {/* IMAGE 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="
            overflow-hidden
            
            shadow-[0_20px_50px_rgba(219,56,132,0.18)]
            h-[260px]
            md:h-[420px]
            group
          "
        >
          <img
            src={img1}
            alt=""
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        </motion.div>

        {/* IMAGE 2 */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.1 }}
          className="
            overflow-hidden
            
            shadow-[0_20px_50px_rgba(214,85,157,0.18)]
            row-span-2
            h-[530px]
            md:h-[850px]
            group
          "
        >
          <img
            src={img2}
            alt=""
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        </motion.div>

        {/* IMAGE 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="
            overflow-hidden
           
            shadow-[0_20px_50px_rgba(233,159,197,0.18)]
            h-[260px]
            md:h-[420px]
            group
          "
        >
          <img
            src={img3}
            alt=""
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />
        </motion.div>

        {/* FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="
            absolute
            bottom-10
            left-10
            bg-white/70
            backdrop-blur-2xl
            px-6
            py-4
           
            shadow-[0_20px_50px_rgba(219,56,132,0.18)]
            border
            border-white/40
          "
        >
          <h3 className="text-3xl font-semibold text-[#db3884]">
            340+
          </h3>

          <p className="text-sm tracking-widest uppercase text-[#5f4150]">
            Projects Completed
          </p>
        </motion.div>
      </motion.div>

      {/* ================= RIGHT CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="
          relative
          px-6
          md:px-12
          lg:px-20
          py-14
          lg:py-20
        "
      >
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-[1px] bg-[#db3884]"></div>

          <span className="text-[10px] tracking-[0.35em] uppercase text-[#db3884]">
            About Pink Roof Interiors
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
          className="
            font-heading
            text-[2.5rem]
            md:text-[4rem]
            leading-tight
            text-[#2a0f1f]
            mb-6
          "
        >
          Designing Spaces <br />

          <span className="bg-gradient-to-r from-[#db3884] via-[#d6559d] to-[#d67eb3] bg-clip-text text-transparent italic">
            That Truly Last
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="
            text-base
            md:text-lg
            text-[#5b4450]
            leading-relaxed
            max-w-xl
            mb-10
          "
        >
          Pink Roof Interiors creates timeless residential and
          commercial spaces that blend elegance, comfort, and
          functionality — crafted with modern creativity and
          exceptional attention to detail.
        </motion.p>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#ef91bc]/30
                bg-white/65
                backdrop-blur-2xl
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(219,56,132,0.18)]
                hover:border-[#db3884]/30
              "
            >
              {/* HOVER BG */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#fffafd]
                  via-[#fff0f7]
                  to-[#fdebf4]
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              ></div>

              <div className="relative z-10 flex gap-4">
                {/* ICON */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-[#db3884]
                    to-[#d67eb3]
                    text-white
                    text-xl
                    shrink-0
                    transition-all
                    duration-500
                    group-hover:scale-110
                    shadow-lg
                  "
                >
                  {item[0]}
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="text-lg font-semibold text-[#2a0f1f] mb-1">
                    {item[1]}
                  </h4>

                  <p className="text-sm text-[#6f5865] leading-relaxed">
                    {item[2]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}