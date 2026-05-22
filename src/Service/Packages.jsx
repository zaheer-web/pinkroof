// components/services/Packages.jsx

import { motion } from "framer-motion";

const packages = [
  {
    name: "Essentials",
    price: "₹75K",
    note: "Starting from · Per room",
    features: [
      "Initial consultation (2 hrs)",
      "Concept mood board",
      "Space planning",
      "Material & colour palette",
      "Furniture recommendations",
      { text: "3D visualisation", disabled: true },
      { text: "Project management", disabled: true },
    ],
  },
  {
    name: "Signature",
    price: "₹2.5L",
    note: "Starting from · Full room",
    featured: true,
    features: [
      "Deep discovery session",
      "Full concept development",
      "Detailed space planning",
      "3D visualisation",
      "Material & finish sourcing",
      "Custom furniture design",
      { text: "Full project management", disabled: true },
    ],
  },
  {
    name: "Prestige",
    price: "₹8L",
    note: "Starting from · Full home",
    features: [
      "Everything in Signature",
      "Full project management",
      "Contractor coordination",
      "Procurement & logistics",
      "Styling & installation",
      "Post-project support",
      "Dedicated project manager",
    ],
  },
];

export default function Packages() {
  return (
    <section className="relative overflow-hidden bg-[#fff7fb] px-6 md:px-16 py-24">

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#db3884]/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#ef91bc]/10 blur-3xl"></div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#db3884_1px,transparent_1px),linear-gradient(to_bottom,#db3884_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-[#db3884] uppercase text-xs tracking-[0.35em] mb-5">
            Investment Plans
          </p>

          <h2 className="text-4xl md:text-6xl font-light font-serif text-[#2b1120] leading-tight">
            Design{" "}
            <span className="italic text-[#db3884]">
              Packages
            </span>
          </h2>

          <p className="text-[#6d4d5d] mt-6 text-base md:text-lg leading-relaxed">
            Flexible luxury interior packages crafted for every lifestyle,
            space, and design vision.
          </p>
        </div>

        {/* PACKAGES */}
        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden border transition-all duration-500 hover:-translate-y-3 ${
                pkg.featured
                  ? "bg-[#1d0a15] border-[#db3884]/40 shadow-2xl shadow-[#db3884]/20"
                  : "bg-white/70 backdrop-blur-xl border-[#db3884]/10 hover:border-[#db3884]/30"
              }`}
            >

              {/* HOVER GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#db3884] via-[#d6559d] to-[#ef91bc] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* MOST POPULAR */}
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-[#db3884] text-white text-[10px] tracking-[0.25em] uppercase px-5 py-3 z-20">
                  Most Popular
                </div>
              )}

              {/* CONTENT */}
              <div className="relative z-10 p-10">

                {/* PACKAGE NAME */}
                <h3
                  className={`text-3xl font-serif mb-3 transition duration-500 ${
                    pkg.featured
                      ? "text-white"
                      : "text-[#2b1120] group-hover:text-white"
                  }`}
                >
                  {pkg.name}
                </h3>

                {/* PRICE */}
                <div className="flex items-end gap-2 mb-3">
                  <h4 className="text-5xl md:text-6xl font-light text-[#db3884] group-hover:text-white transition duration-500">
                    {pkg.price}
                  </h4>
                </div>

                {/* NOTE */}
                <p
                  className={`text-sm mb-10 transition duration-500 ${
                    pkg.featured
                      ? "text-[#f5d8e7]"
                      : "text-[#8b6f7d] group-hover:text-white/80"
                  }`}
                >
                  {pkg.note}
                </p>

                {/* FEATURES */}
                <ul className="space-y-5 mb-10">

                  {pkg.features.map((item, idx) => {
                    const isObj = typeof item === "object";
                    const text = isObj ? item.text : item;
                    const disabled = isObj && item.disabled;

                    return (
                      <li
                        key={idx}
                        className={`flex items-start gap-4 text-sm md:text-base transition duration-500 ${
                          disabled
                            ? "opacity-40"
                            : pkg.featured
                            ? "text-[#f5d8e7]"
                            : "text-[#5d4b55] group-hover:text-white"
                        }`}
                      >
                        <div
                          className={`min-w-[10px] min-h-[10px] mt-2 border transition duration-500 ${
                            disabled
                              ? "border-[#999]"
                              : "border-[#db3884] bg-[#db3884] group-hover:border-white group-hover:bg-white"
                          }`}
                        ></div>

                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* BUTTON */}
               {/* BUTTON */}
<a
  href="https://wa.me/918563980030?text=Hello%20Pinkroof%20Interior%2C%20I%20want%20to%20get%20started%20with%20a%20design%20package."
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className={`w-full py-4 uppercase tracking-[0.25em] text-xs border transition-all duration-500 ${
      pkg.featured
        ? "bg-[#db3884] border-[#db3884] text-white hover:bg-white hover:text-[#db3884]"
        : "border-[#db3884]/20 text-[#2b1120] hover:bg-white hover:text-[#db3884] group-hover:bg-white group-hover:text-[#db3884]"
    }`}
  >
    Get Started
  </button>
</a>
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-white transition-all duration-700 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}