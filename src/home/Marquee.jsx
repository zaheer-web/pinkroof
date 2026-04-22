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
    <div className="bg-[#111110] overflow-hidden py-3 border-y border-[#FBE6E5]/20">

      <div className="marquee flex whitespace-nowrap">

        {/* TRACK */}
        <div className="marquee-track flex gap-10 md:gap-14">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-[#FBE6E5] flex items-center gap-4 font-body"
            >
              {item}
              <span className="text-[#FEFEFD]/40 text-[8px]">✦</span>
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

          /* Hover pause */
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

    </div>
  );
}