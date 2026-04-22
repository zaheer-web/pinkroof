import { useState, useEffect } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Bhupendra Sahi",
      tag: "GM, Hotel Ranbirs",
      text: `Rukhsar delivered an exceptional transformation for our hotel. 
Her creativity, attention to detail, and professionalism made the process smooth. 
The space now feels luxurious, functional, and perfectly aligned with our brand.`,
    },
    {
      name: "Er. Swapnil",
      tag: "Café Owner",
      text: `She perfectly captured our café vibe — cozy, fresh, and vibrant. 
The design exceeded expectations and customers love the greenery and lighting.`,
    },
    {
      name: "Alka Singh",
      tag: "Healthcare Project",
      text: `कम समय में शानदार काम — साफ, सुंदर और पूरी तरह उपयोगी डिजाइन। 
हर कोना काम का है और मरीजों के लिए सुविधाजनक है।`,
    },
    {
      name: "Shambhavi Agarwal",
      tag: "Residential Client",
      text: `My living room transformation was beyond expectations. 
Elegant, warm, and beautifully balanced — a space I truly love.`,
    },
    {
      name: "Abu Lais",
      tag: "Salon Owner, Toni & Guy",
      text: `From an old structure to Asia’s biggest Toni & Guy salon — Rukhsar created a calm, soulful space.

Her Wabi-Sabi design turned flaws into beauty. A vibe clients truly love.`,
    },
  ];

  // 📱 Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 md:px-16 py-24 
    bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede]">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl text-black">
          Client <span className="italic text-[#b88b8b]">Testimonials</span>
        </h2>
      </div>

      {/* SLIDER */}
      <div className="overflow-hidden max-w-7xl mx-auto pb-3">

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (isMobile ? 100 : 33.33)}%)`,
          }}
        >

          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 flex-shrink-0 px-4"
            >

              <div className="bg-[#FEFEFD]/90 backdrop-blur-md rounded-2xl shadow-md p-6 h-full flex flex-col justify-between hover:shadow-xl transition">

                {/* TOP */}
                <div>

                  {/* AVATAR */}
                  <div className="w-10 h-10 rounded-full bg-black text-[#FEFEFD] flex items-center justify-center mb-3 text-sm">
                    {item.name.slice(0, 2)}
                  </div>

                  {/* STARS */}
                  <div className="text-[#C8A96E] mb-3 text-sm">★★★★★</div>

                  {/* TEXT */}
                  <p className="text-sm text-black/80 leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                </div>

                {/* USER */}
                <div className="border-t border-black/10 pt-3">
                  <h4 className="text-sm font-semibold text-black">
                    {item.name}
                  </h4>
                  <p className="text-xs text-black/50">{item.tag}</p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-black scale-125" : "bg-black/30"
            }`}
          />
        ))}
      </div>

    </section>
  );
}