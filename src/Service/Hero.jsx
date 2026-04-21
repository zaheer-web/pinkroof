// components/services/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-[#1C1C1A] px-6 md:px-16 pt-40 pb-20 overflow-hidden">
      <div className="max-w-2xl">
        <p className="text-[#C8A96E] tracking-[0.25em] uppercase text-xs flex items-center gap-3 before:w-8 before:h-[1px] before:bg-[#C8A96E] before:content-['']">
          What We Offer
        </p>

        <h1 className="text-4xl md:text-6xl font-light text-[#F7F4EE] mt-4 leading-tight font-serif">
          Design{" "}
          <em className="text-[#C8A96E] italic font-light">Services</em>
        </h1>

        <p className="text-[#9B8F82] mt-6 leading-relaxed max-w-md">
          From a single room to entire buildings — we bring expertise,
          elegance, and precision to every scale of project.
        </p>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[120px] text-[#C8A96E]/10 font-serif hidden md:block">
        S
      </div>
    </section>
  );
}