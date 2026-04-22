import { motion } from "framer-motion";

export default function View360() {
  const views = [
    {
      title: "Office 360 View",
      link: "https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3GY4DJN3P&locale=en_US&utm_source=light720_share&utm_medium=linkcopy&utm_content=3FO3GY4DJN3P",
    },
    {
      title: "Interior 360 View",
      link: "https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3MHOP9AW4&locale=en_US&utm_source=light720_share&utm_medium=linkcopy&utm_content=3FO3MHOP9AW4",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-16 overflow-hidden
    bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede]">

      {/* 🔥 SOFT GLOW EFFECT */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-200/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-300/30 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="relative text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-heading text-black mb-4">
          Explore Our <span className="text-[#b88b8b]">360° Designs</span>
        </h2>

        <p className="text-gray-700 text-sm md:text-base font-body">
          Walk through our interiors and experience every corner in immersive 360°.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">

        {views.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl border 
            bg-white/70 backdrop-blur-md hover:shadow-2xl transition duration-300"
          >

            {/* TITLE */}
            <div className="px-5 py-3 border-b bg-white/60 backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-heading text-black">
                {item.title}
              </h3>
            </div>

            {/* IFRAME */}
            <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px]">
              <iframe
                src={item.link}
                title={item.title}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}