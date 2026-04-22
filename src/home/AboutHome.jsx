import img1 from "../img/za-3.jpeg";
import img2 from "../img/za-4.jpeg";
import img3 from "../img/za-5.jpeg";

export default function AboutHome() {
  return (
    <section
      className="grid md:grid-cols-2 items-stretch min-h-[520px] 
    bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede]"
    >
      {/* 👈 LEFT IMAGES */}
      <div className="grid grid-cols-2 gap-[4px] h-full relative">
        {/* SOFT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,230,229,0.25),transparent_60%)]"></div>

        <div className="overflow-hidden relative z-10">
          <img
            src={img1}
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            alt=""
          />
        </div>

        <div className="row-span-2 overflow-hidden relative z-10">
          <img
            src={img2}
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            alt=""
          />
        </div>

        <div className="overflow-hidden relative z-10">
          <img
            src={img3}
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            alt=""
          />
        </div>
      </div>

      {/* 👉 RIGHT CONTENT */}
      <div className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede]"></div>

        {/* SOFT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,230,229,0.35),transparent_60%)]"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          {/* LABEL */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-black"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-black">
              About Pink Roof Interiors
            </span>
          </div>

          {/* TITLE */}
          <h2 className="font-heading text-[2.4rem] md:text-[3rem] leading-tight text-black mb-6 tracking-tight">
            Designing Spaces <br />
            <span className="text-[#b88b8b]">That Truly Last</span>
          </h2>

          {/* DESC */}
          <p className="text-base md:text-lg text-black/90 leading-relaxed max-w-lg mb-8 font-body">
            Pink Roof Interiors creates residential and commercial spaces that
            balance function, clarity, and modern elegance — designed to reflect
            your lifestyle and built to stand the test of time.
          </p>

          {/* 🔥 NEW FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              ["◈", "Custom Interiors", "Tailored to your needs"],
              ["◇", "Quality Execution", "Precision in every detail"],
              ["◉", "3D Visualization", "See before it's built"],
              ["◐", "Complete Service", "From concept to completion"],
            ].map((item, i) => (
              <div
                key={i}
                className="group border border-[#e5cfcf] bg-white/60 backdrop-blur-sm 
                p-5 flex gap-4 rounded-xl cursor-pointer 
                transition-all duration-300 
                hover:bg-[#FBE6E5] hover:border-[#d6a5a5] hover:shadow-md 
                hover:-translate-y-1"
              >
                {/* ICON */}
                <div
                  className="w-10 h-10 flex items-center justify-center 
                  text-lg md:text-xl rounded-full bg-[#FBE6E5] text-[#b88b8b] 
                  group-hover:bg-white transition"
                >
                  {item[0]}
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="text-base md:text-lg font-medium text-black">
                    {item[1]}
                  </h4>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-snug">
                    {item[2]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}