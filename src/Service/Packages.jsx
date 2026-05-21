// components/services/Packages.jsx

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
    <section className="px-6 md:px-16 py-20 bg-[#FDFBF7]">

      {/* HEADING */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="text-[#C8A96E] uppercase text-xs tracking-[0.25em] mb-3">
          Investment
        </p>

        <h2 className="text-3xl md:text-5xl font-light font-serif">
          Design <em className="text-[#C8A96E] italic">Packages</em>
        </h2>

        <p className="text-[#6B6056] mt-4 text-sm">
          Transparent, structured packages designed to suit different project scopes.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-[2px] bg-[#D6C9B8]">

        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`relative p-10 transition duration-300 hover:-translate-y-2 ${
              pkg.featured
                ? "bg-[#1C1C1A] text-white z-10 shadow-xl"
                : "bg-[#FDFBF7]"
            }`}
          >
            {/* BADGE */}
            {pkg.featured && (
              <div className="absolute top-0 right-6 bg-[#C8A96E] text-white text-[10px] tracking-[0.2em] px-3 py-1 uppercase">
                Most Popular
              </div>
            )}

            {/* NAME */}
            <h3 className={`text-2xl font-serif mb-1 ${
              pkg.featured ? "text-[#F7F4EE]" : "text-[#1C1C1A]"
            }`}>
              {pkg.name}
            </h3>

            {/* PRICE */}
            <p className="text-5xl text-[#C8A96E] font-serif mb-1">
              {pkg.price}
            </p>

            {/* NOTE */}
            <p className={`text-xs mb-6 ${
              pkg.featured ? "text-[#9B8F82]" : "text-[#9B8F82]"
            }`}>
              {pkg.note}
            </p>

            {/* FEATURES */}
            <ul className="space-y-3 mb-8">
              {pkg.features.map((item, idx) => {
                const isObj = typeof item === "object";
                const text = isObj ? item.text : item;
                const disabled = isObj && item.disabled;

                return (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 text-sm ${
                      disabled
                        ? "opacity-40 text-[#9B8F82]"
                        : pkg.featured
                        ? "text-[#D6C9B8]"
                        : "text-[#6B6056]"
                    }`}
                  >
                    <span className={`text-[10px] mt-[6px] ${
                      disabled ? "text-[#9B8F82]" : "text-[#C8A96E]"
                    }`}>
                      {disabled ? "◇" : "◆"}
                    </span>
                    {text}
                  </li>
                );
              })}
            </ul>

            {/* BUTTON */}
            <button
              className={`w-full py-3 text-xs uppercase tracking-[0.2em] border transition ${
                pkg.featured
                  ? "bg-[#C8A96E] text-white border-[#C8A96E] hover:bg-transparent hover:text-[#C8A96E]"
                  : "border-[#D6C9B8] text-[#1C1C1A] hover:border-[#1C1C1A]"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}