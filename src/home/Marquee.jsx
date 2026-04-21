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
    <div className="bg-[#1c1c1a] overflow-hidden py-3">
      
      <div className="marquee flex whitespace-nowrap">

        {/* Track */}
        <div className="marquee-track flex gap-12">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-[11px] tracking-[0.2em] uppercase text-[#c8a96e] flex items-center gap-4"
            >
              {item}
              <span className="text-gray-500 text-[8px]">✦</span>
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
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Smoothness fix */
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

    </div>
  );
}