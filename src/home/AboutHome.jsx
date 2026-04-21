import img1 from "../img/za-3.jpeg"
import img2 from "../img/za-4.jpeg"

import img3 from "../img/za-5.jpeg"





export default function AboutHome() {
  return (
    <section className="grid md:grid-cols-2 items-stretch min-h-[520px] 
    bg-gradient-to-br from-white via-pink-100 to-pink-300">

      {/* 👈 LEFT IMAGES */}
      <div className="grid grid-cols-2 gap-[4px] h-full relative">

        {/* SOFT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,182,193,0.15),transparent_60%)]"></div>

        <div className="overflow-hidden relative z-10">
          <img
            src={img1}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
            alt=""
          />
        </div>

        <div className="row-span-2 overflow-hidden relative z-10">
          <img
            src={img2}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
            alt=""
          />
        </div>

        <div className="overflow-hidden relative z-10">
          <img
            src={img3}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
            alt=""
          />
        </div>
      </div>

      {/* 👉 RIGHT CONTENT */}
      <div className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16">

        {/* BACKGROUND BLEND */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-100 to-pink-200"></div>

        {/* GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,192,203,0.25),transparent_60%)]"></div>

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
          <h2 className="font-serif text-[2.6rem] md:text-[3rem] leading-tight text-black mb-6">
            Pink Roof Interiors <br />
            Designs Spaces That Last
          </h2>

          {/* DESC */}
          <p className="text-base md:text-lg text-black leading-relaxed max-w-lg mb-10">
            Pink Roof Interiors designs residential and commercial spaces with a focus 
            on functionality, clarity, and modern aesthetics. We bring ideas to life with 
            careful planning and precise execution, creating interiors that are practical, 
            refined, and built to last.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

            <div className="group border border-black p-4 flex gap-3 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white">
              <div className="w-8 h-8 flex items-center justify-center text-black group-hover:text-white">
                ◈
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Custom Interiors
                </h4>
                <p className="text-xs opacity-70">
                  Designed for your needs
                </p>
              </div>
            </div>

            <div className="group border border-black p-4 flex gap-3 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white">
              <div className="w-8 h-8 flex items-center justify-center text-black group-hover:text-white">
                ◇
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Quality Execution
                </h4>
                <p className="text-xs opacity-70">
                  Precision in every detail
                </p>
              </div>
            </div>

            <div className="group border border-black p-4 flex gap-3 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white">
              <div className="w-8 h-8 flex items-center justify-center text-black group-hover:text-white">
                ◉
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  3D Visualization
                </h4>
                <p className="text-xs opacity-70">
                  Plan before execution
                </p>
              </div>
            </div>

            <div className="group border border-black p-4 flex gap-3 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white">
              <div className="w-8 h-8 flex items-center justify-center text-black group-hover:text-white">
                ◐
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Complete Service
                </h4>
                <p className="text-xs opacity-70">
                  From start to finish
                </p>
              </div>
            </div>

          </div>

          

        </div>
      </div>

    </section>
  );
}