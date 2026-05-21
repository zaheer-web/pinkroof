import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ================= VIDEOS =================

import video1 from "../img/video/va-1.mp4";
import video2 from "../img/video/va-2.mp4";
import video3 from "../img/video/va-3.mp4";
import video4 from "../img/video/va-4.mp4";
import video5 from "../img/video/va-5.mp4";
import video6 from "../img/video/va-6.mp4";
import video7 from "../img/video/va-7.mp4";

// ================= VIDEO DATA =================

const videos = [
  {
    id: 1,
    title: "Luxury Exterior",
    category: "Architecture",
    video: video1,
  },

  {
    id: 2,
    title: "Modern Interior",
    category: "Interior Design",
    video: video2,
  },

  {
    id: 3,
    title: "Premium Residence",
    category: "Luxury Living",
    video: video3,
  },

  {
    id: 4,
    title: "Elegant Elevation",
    category: "Modern Design",
    video: video4,
  },

  {
    id: 5,
    title: "Minimal Workspace",
    category: "Commercial",
    video: video5,
  },

  {
    id: 6,
    title: "Luxury Villa",
    category: "Residential",
    video: video6,
  },

  {
    id: 7,
    title: "Creative Space",
    category: "Architecture",
    video: video7,
  },
];

// ================= LIGHTBOX =================

function Lightbox({ video, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/95
        backdrop-blur-xl
        p-3
      "
    >
      {/* CLOSE BUTTON */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="
          absolute
          right-4
          top-4
          z-50
          flex
          h-11
          w-11
          items-center
          justify-center
          border
          border-white/20
          bg-white/10
          text-white
          transition
          duration-300
          hover:bg-[#d89a9a]
        "
      >
        ✕
      </motion.button>

      {/* VIDEO */}

      <motion.video
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        src={video.video}
        autoPlay
        controls
        playsInline
        className="
          max-h-[90vh]
          w-full
          max-w-6xl
          object-cover
        "
      />
    </motion.div>
  );
}

// ================= VIDEO CARD =================

function VideoCard({ item, onClick, index }) {
  const videoRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (hovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group
        relative
        h-[180px]
        cursor-pointer
        overflow-hidden

        sm:h-[220px]
        md:h-[260px]
        lg:h-[320px]
      "
    >
      {/* VIDEO */}

      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        playsInline
        preload="none"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-transparent
          group-hover:from-black/95
          transition-all
          duration-500
        "
      />

      {/* CATEGORY */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
        }}
        className="
          absolute
          left-3
          top-3
          border
          border-white/20
          bg-black/20
          px-3
          py-1.5
          backdrop-blur-xl

          md:left-5
          md:top-5
        "
      >
        <p
          className="
            text-[9px]
            uppercase
            tracking-[2px]
            text-white/80

            md:text-[10px]
            md:tracking-[3px]
          "
        >
          {item.category}
        </p>
      </motion.div>

      {/* PLAY BUTTON */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            border
            border-white/20
            bg-white/10
            text-sm
            text-white
            backdrop-blur-xl
            transition-all
            duration-300

            group-hover:scale-110
            group-hover:bg-[#d89a9a]/40

            md:h-16
            md:w-16
            md:text-xl
          "
        >
          ▶
        </motion.div>
      </div>

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.7,
          delay: index * 0.06,
        }}
        className="
          absolute
          bottom-0
          left-0
          w-full
          p-4

          md:p-6
        "
      >
        <h3
          className="
            text-[18px]
            font-light
            text-white

            md:text-2xl
          "
        >
          {item.title}
        </h3>

        <div
          className="
            mt-3
            h-[1px]
            w-10
            bg-white
            transition-all
            duration-500
            group-hover:w-24
          "
        ></div>
      </motion.div>
    </motion.div>
  );
}

// ================= MAIN COMPONENT =================

export default function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#FEFEFD]
          via-[#FBE6E5]
          to-[#f8dede]
          px-3
          py-16

          md:px-8
          md:py-24

          lg:px-14
        "
      >
        {/* BLUR EFFECTS */}

        <div
          className="
            absolute
            -left-24
            top-0
            h-[260px]
            w-[260px]
            rounded-full
            bg-pink-300/20
            blur-[100px]

            md:h-[320px]
            md:w-[320px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[240px]
            w-[240px]
            rounded-full
            bg-pink-200/30
            blur-[100px]

            md:h-[300px]
            md:w-[300px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="
              mb-12
              flex
              flex-col
              gap-6

              lg:mb-16
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-black md:w-10" />

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[4px]
                    text-[#d89a9a]
                  "
                >
                  Video Showcase
                </p>
              </div>

              <h2
                className="
                  text-4xl
                  font-light
                  leading-none
                  text-black

                  sm:text-5xl
                  md:text-7xl
                "
              >
                Luxury
                <span className="italic text-[#d89a9a]">
                  {" "}Projects
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="
                max-w-2xl
                text-sm
                leading-relaxed
                text-black/60

                md:text-lg
              "
            >
              Explore our cinematic collection of modern architecture,
              luxury interiors, premium residences, and elegant
              commercial design concepts.
            </motion.p>
          </motion.div>

          {/* VIDEO GRID */}

          <div
            className="
              grid
              grid-cols-2
              gap-3

              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4

              md:gap-5
            "
          >
            {videos.map((item, index) => (
              <VideoCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedVideo(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {selectedVideo && (
          <Lightbox
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}