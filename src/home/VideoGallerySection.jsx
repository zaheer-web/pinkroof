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

// ================= THUMBNAILS =================

import thumb1 from "../img/3image/th-1.png";
import thumb2 from "../img/3image/th-2.png";
import thumb3 from "../img/3image/th-3.png";
import thumb4 from "../img/3image/th-4.png";
import thumb5 from "../img/3image/th-5.png";
import thumb6 from "../img/3image/th-6.png";
import thumb7 from "../img/3image/th-7.png";

// ================= VIDEO DATA =================

const videos = [
  {
    id: 1,
    video: video1,
    thumbnail: thumb1,
  },

  {
    id: 2,
    video: video2,
    thumbnail: thumb2,
  },

  {
    id: 3,
    video: video3,
    thumbnail: thumb3,
  },

  {
    id: 4,
    video: video4,
    thumbnail: thumb4,
  },

  {
    id: 5,
    video: video5,
    thumbnail: thumb5,
  },

  {
    id: 6,
    video: video6,
    thumbnail: thumb6,
  },

  {
    id: 7,
    video: video7,
    thumbnail: thumb7,
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
        rounded-none
        border-[2px]
        border-white/10
        bg-black

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

      {/* THUMBNAIL */}

      <motion.img
        src={item.thumbnail}
        alt=""
        initial={{ opacity: 1 }}
        animate={{
          opacity: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
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
          bg-black/20
          transition-all
          duration-500
          group-hover:bg-black/10
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
          whileHover={{ scale: 1.15 }}
          className="
            flex
            h-14
            w-14
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
            bg-pink-200/30
            blur-[100px]

            md:h-[300px]
            md:w-[300px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">
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