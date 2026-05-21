export default function Marquee() {
  const items = [
    "Space Planning",
    "Custom Furniture",
    "Lighting Design",
    "3D Visualization",
    "Project Management",
    "Residential Design",
    "Commercial Spaces",
  ];

  return (
    <div
      className="
        relative
        overflow-hidden
        py-4
        border-y
        border-[#ef91bc]/20
        bg-gradient-to-r
        from-[#fffafd]
        via-[#fff1f8]
        to-[#fdebf4]
      "
    >
      {/* GLOW EFFECT */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          w-[250px]
          h-[250px]
          bg-[#ef91bc]/15
          blur-[100px]
        "
      ></div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          w-[250px]
          h-[250px]
          bg-[#d67eb3]/15
          blur-[100px]
        "
      ></div>

      {/* MARQUEE */}

      <div className="marquee flex whitespace-nowrap relative z-10">

        {/* TRACK */}

        <div className="marquee-track flex gap-10 md:gap-14">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="
                text-[11px]
                md:text-[12px]
                tracking-[0.28em]
                uppercase
                text-[#db3884]
                flex
                items-center
                gap-4
                font-medium
              "
            >
              {item}

              {/* STAR */}

              <span
                className="
                  text-[#d67eb3]
                  text-[8px]
                "
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* CSS */}

      <style>
        {`
          .marquee {
            overflow: hidden;
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          /* Hover Pause */

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}