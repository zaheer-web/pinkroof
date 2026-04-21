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
  ];

  // ✅ Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 md:px-16 py-24 
    bg-gradient-to-br from-white via-pink-100 to-pink-300">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-black">
          Client <span className="italic">Testimonials</span>
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

              <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-between hover:shadow-xl transition">

                {/* TOP */}
                <div>

                  {/* AVATAR */}
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-3 text-sm">
                    {item.name.slice(0, 2)}
                  </div>

                  {/* STARS */}
                  <div className="text-yellow-500 mb-3 text-sm">★★★★★</div>

                  {/* TEXT */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                </div>

                {/* USER */}
                <div className="border-t pt-3">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.tag}</p>
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
              index === i ? "bg-black scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}