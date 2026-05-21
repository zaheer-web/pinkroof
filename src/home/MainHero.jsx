import { useEffect, useState } from "react";

import img1 from "../img/3image/th-1.png";
import img2 from "../img/cafe/ca-2.avif";
import img3 from "../img/facade/fa-2.jpeg";
import img4 from "../img/hotel/ha-6.jpeg";
import img5 from "../img/kitchen/ka-7.jpeg";
import img6 from "../img/residential/ra-1.png";
import img7 from "../img/residential/ra-2.png";
import img8 from "../img/salon/sa-11.jpeg";
import img9 from "../img/za-4.jpeg";
import img10 from "../img/za-12.jpeg";

export default function MainHero() {

  // 🔥 ORIGINAL ROWS
  const originalRow1 = [img1, img2, img3, img4, img5];
  const originalRow2 = [img6, img7, img8, img9, img10];
  const originalRow3 = [img2, img4, img6, img8, img10];

  // 🔥 REPEAT IMAGES
  const row1 = [...originalRow1, ...originalRow1];
  const row2 = [...originalRow2, ...originalRow2];
  const row3 = [...originalRow3, ...originalRow3];

  // 🔥 STATES
  const [slide1, setSlide1] = useState(0);
  const [slide2, setSlide2] = useState(0);
  const [slide3, setSlide3] = useState(0);

  // 🔥 AUTO SLIDER
  useEffect(() => {

    const interval1 = setInterval(() => {
      setSlide1((prev) =>
        prev >= originalRow1.length ? 0 : prev + 1
      );
    }, 1500);

    const interval2 = setInterval(() => {
      setSlide2((prev) =>
        prev >= originalRow2.length ? 0 : prev + 1
      );
    }, 1000);

    const interval3 = setInterval(() => {
      setSlide3((prev) =>
        prev >= originalRow3.length ? 0 : prev + 1
      );
    }, 1500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };

  }, []);

  // 🔥 SLIDER ROW COMPONENT
  const SliderRow = ({
    images,
    currentSlide,
    height,
  }) => {

    return (
      <div className="overflow-hidden">

        <div
          className="
            flex
            gap-1
            transition-transform
            duration-1000
            ease-in-out
          "
          style={{
            transform: `translateX(-${currentSlide * 33.4}%)`,
          }}
        >

          {images.map((img, index) => (

            <div
              key={index}
              className={`
                min-w-[28.8%]
                flex-shrink-0
                overflow-hidden
                
                ${height}
              `}
            >

              <img
                src={img}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                  brightness-75
                  transition
                  duration-700
                  hover:scale-105
                  w-full
                  hover:brightness-95
                "
              />

            </div>

          ))}

        </div>

      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-black py-2 md:py-2">

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/10 to-black/30" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col gap-1 ">

        {/* ROW 1 */}
        <SliderRow
          images={row1}
          currentSlide={slide1}
          height="h-[220px] md:h-[320px]"
        />

        {/* ROW 2 */}
        <SliderRow
          images={row2}
          currentSlide={slide2}
          height="h-[180px] md:h-[260px]"
        />

        {/* ROW 3 */}
        <SliderRow
          images={row3}
          currentSlide={slide3}
          height="h-[220px] md:h-[320px]"
        />

      </div>

    </section>
  );
}