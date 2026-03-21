"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// 🔥 Animation Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function VideoSection({
  videoId = "8s2FuWI5arc",
  title = "Experience MND Avenue",
  subtitle = "Project Walkthrough",
  description = "Take a virtual tour through the lush green landscape and thoughtfully designed spaces that define life at MND Avenue, Medchal.",
}) {
  const playerRef = useRef(null);
  const [active, setActive] = useState(false);

  // Autoplay when visible
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (playerRef.current) io.observe(playerRef.current);
    return () => io.disconnect();
  }, []);

  // 🔥 Pre-calc title (cleaner)
  const words = title.split(" ");
  const lastWord = words.pop();

  return (
    <section
      id="video-tour"
      className="bg-stone-50 px-6 sm:px-12 lg:px-[60px] py-20 lg:py-[100px]"
    >
      <div className="max-w-[900px] mx-auto">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-green-700 mb-3"
          >
            {subtitle}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif font-bold text-[clamp(1.8rem,3vw,2.6rem)] leading-tight text-stone-900 mb-4"
          >
            {words.join(" ")}{" "}
            <span className="italic text-green-700">{lastWord}</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-sm leading-[1.85] text-stone-500 max-w-[500px] mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* PLAYER */}
        <motion.div
          ref={playerRef}
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-stone-300/60"
          style={{ paddingTop: "56.25%" }}
        >
          {active && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}