import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ================= VIDEOS =================

import video1 from "../img/video/va-8.mp4";
import video2 from "../img/video/va-9.mp4";
import video3 from "../img/video/va-10.mp4";
import video4 from "../img/video/va-11.mp4";
import video5 from "../img/video/va-12.mp4";
import video6 from "../img/video/va-14.mp4";
import video7 from "../img/video/va-7.mp4";
import video8 from "../img/video/va-15.mp4";
import video9 from "../img/video/va-16.mp4";
import video10 from "../img/video/va-17.mp4";
import video11 from "../img/video/va-18.mp4";
import video12 from "../img/video/va-19.mp4";
import video13 from "../img/video/va-20.mp4";

// ================= THUMBNAILS =================

import thumb1 from "../img/zo-5.png";
import thumb2 from "../img/zo-6.png";
import thumb3 from "../img/zo-1.png";
import thumb4 from "../img/zo-3.png";
import thumb5 from "../img/za-4.jpeg";
import thumb6 from "../img/za-5.jpeg";
import thumb7 from "../img/zo-7.png";
import thumb8 from "../img/zo-11.jpg";
import thumb9 from "../img/zo-8.jpg";
import thumb10 from "../img/za-14.jpeg";
import thumb11 from "../img/zo-9.jpg";
import thumb12 from "../img/zo-10.webp";
import thumb13 from "../img/zo-11.png";

// ================= VIDEO DATA =================

const videos = [
  { id: 1, video: video1, thumbnail: thumb1 },
  { id: 2, video: video2, thumbnail: thumb2 },
  { id: 3, video: video3, thumbnail: thumb3 },
  { id: 4, video: video4, thumbnail: thumb4 },
  { id: 5, video: video5, thumbnail: thumb5 },
  { id: 7, video: video7, thumbnail: thumb7 },
  { id: 8, video: video8, thumbnail: thumb8 },
  { id: 9, video: video9, thumbnail: thumb9 },
  { id: 10, video: video10, thumbnail: thumb10 },
  { id: 11, video: video11, thumbnail: thumb11 },
  { id: 12, video: video12, thumbnail: thumb12 },
  { id: 13, video: video13, thumbnail: thumb13 },
  { id: 6, video: video6, thumbnail: thumb6 },

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
        bg-black/90
        backdrop-blur-xl
        p-3
      "
    >
      {/* CLOSE BUTTON */}

      <motion.button
        whileHover={{ scale: 1.05 }}
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
          rounded-full
          border
          border-white/20
          bg-white/10
          text-white
          backdrop-blur-xl
          transition
          duration-300
          hover:bg-[#db3884]
        "
      >
        ✕
      </motion.button>

      {/* VIDEO */}

      <motion.video
        initial={{
          scale: 0.92,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.92,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        src={video.video}
        autoPlay
        controls
        playsInline
        className="
          max-h-[90vh]
          w-full
          max-w-6xl
          rounded-[20px]
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
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 30,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        h-[180px]
        cursor-pointer
        overflow-hidden
        
        border
        border-[#ef91bc]/30
        bg-white/60
        shadow-lg

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
          group-hover:scale-105
        "
      />

      {/* THUMBNAIL */}

      <motion.img
        src={item.thumbnail}
        alt=""
        loading="lazy"
        animate={{
          opacity: hovered ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          absolute
          inset-0
          z-[2]
          h-full
          w-full
          object-cover
        "
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          z-[3]
          bg-black/10
          transition-all
          duration-300
          group-hover:bg-black/20
        "
      />

      {/* PLAY BUTTON */}

      <div
        className="
          absolute
          inset-0
          z-[4]
          flex
          items-center
          justify-center
        "
      >
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/20
            text-sm
            text-white
            backdrop-blur-xl

            md:h-16
            md:w-16
            md:text-xl
          "
        >
          ▶
        </motion.div>
      </div>
    </motion.div>
  );
}

// ================= MAIN COMPONENT =================

export default function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // VIEW ALL STATE
  const [showAll, setShowAll] = useState(false);

  // SMOOTH OPEN/CLOSE
  const visibleVideos = showAll
    ? videos
    : videos.slice(0, 8);

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#fffafd]
          via-[#fff1f8]
          to-[#fdebf4]
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
            pointer-events-none
            absolute
            -left-24
            top-0
            h-[260px]
            w-[260px]
            bg-[#ef91bc]/25
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-[240px]
            w-[240px]
            bg-[#d67eb3]/25
            blur-[100px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">

          {/* HEADING */}

          <div className="mb-10 md:mb-14">
            <p
              className="
                mb-3
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#db3884]
              "
            >
              Pink Roof Interiors
            </p>

            <h2
              className="
                text-3xl
                font-semibold
                leading-tight
                text-[#2a0f1f]

                md:text-5xl
              "
            >
              Our Video{" "}

              <span className="italic text-[#db3884]">
                Gallery
              </span>
            </h2>
          </div>

          {/* VIDEO GRID */}

          <motion.div
            layout
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
            <AnimatePresence mode="popLayout">

              {visibleVideos.map((item, index) => (
                <VideoCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={() => setSelectedVideo(item)}
                />
              ))}

            </AnimatePresence>
          </motion.div>

          {/* VIEW ALL BUTTON */}

          {videos.length > 8 && (
            <div className="mt-12 flex justify-center">

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setShowAll(!showAll)}
                className="
                  rounded-full
                  bg-[#db3884]
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#c72f75]
                "
              >
                {showAll ? "View Less" : "View All"}
              </motion.button>

            </div>
          )}

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