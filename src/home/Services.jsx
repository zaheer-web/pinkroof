import { Link } from "react-router-dom";  
import img1 from "../img/h-11.png"
import img2 from "../img/za-13.jpeg"

import img3 from "../img/za-14.jpeg"
import img4 from "../img/za-3.jpeg"

  
  export default function Services() {
  const services = [
    {
      no: "01",
      title: "Salon Interior Design",
      desc: "We create modern and luxury salon spaces with perfect layout, lighting, and client comfort.",
      img: img1
    },
    {
      no: "02",
      title: "Residential Interiors",
      desc: "Designing beautiful and functional homes tailored to your lifestyle and needs.",
      img: img2
    },
    {
      no: "03",
      title: "Commercial Spaces",
      desc: "Offices, showrooms, and business spaces designed to reflect your brand identity.",
      img: img3
    },
    {
      no: "04",
      title: "Renovation & Makeover",
      desc: "Upgrade your existing space with modern design, smart planning, and premium finishes.",
      img: img4
    },
  ];

  return (
    <section className="px-6 md:px-16 py-24 
    bg-gradient-to-br from-white via-pink-100 to-pink-300">

      {/* HEADER */}
      <div className="flex justify-between items-end mb-14 flex-wrap gap-4">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-black"></div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-black">
              Pink Roof Interiors
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Our <span className="italic">Services</span>
          </h2>
        </div>
       <Link to="/services">
        <button className="cursor-pointer  border border-black px-6 py-3 text-xs tracking-[0.12em] uppercase hover:bg-black hover:text-white transition">
          See All Services
        </button>
        </Link>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-[1px] bg-pink-200">

        {services.map((item, i) => (
          <div
            key={i}
            className="group bg-white/80 backdrop-blur-md cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-black hover:text-white"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* LINE */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-400 group-hover:w-full transition-all duration-500"></div>

              {/* NUMBER */}
              <p className="font-serif text-sm text-black mb-3 group-hover:text-white transition">
                {item.no}
              </p>

              {/* TITLE */}
              <h3 className="font-serif text-lg text-black mb-3 group-hover:text-white transition">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm leading-relaxed text-gray-700 group-hover:text-gray-300 transition">
                {item.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}