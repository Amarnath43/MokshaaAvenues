"use client";

import { motion } from "framer-motion";
import { HIGHLIGHTS } from "../lib/data";

// 🔥 Animation Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HighlightsSection() {
  return (
    <section
      id="highlights"
      className="px-[60px] py-[100px]"
      style={{ background: "white" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-[70px]"
        >
          <motion.div
            variants={fadeUp}
            className="section-label justify-center before:hidden"
          >
            Project Highlights
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-bold leading-[1.2] mb-3.5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--forest)",
            }}
          >
            Everything You Need{" "}
            <em style={{ fontStyle: "italic", color: "var(--leaf)" }}>
              Already Taken Care Of
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[0.9rem] leading-[1.8] max-w-[560px] mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            MND Avenue is built to the highest standards so you can focus on
            building your dream home — not worrying about approvals and
            infrastructure.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 rounded-[14px] overflow-hidden"
          style={{
            gap: "2px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {HIGHLIGHTS.map((h) => (
            <HighlightCard key={h.title} {...h} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HighlightCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        backgroundColor: "var(--warm)",
        y: -4,
      }}
      transition={{ duration: 0.25 }}
      className="p-10 text-center cursor-default"
      style={{ background: "white" }}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }}
        className="w-14 h-14 rounded-[14px] flex items-center justify-center text-[1.6rem] mx-auto mb-[18px]"
        style={{ background: "var(--warm)" }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <div
        className="font-bold text-[0.9rem] mb-2"
        style={{ color: "var(--forest)" }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        className="text-[0.78rem] leading-[1.6]"
        style={{ color: "var(--text-muted)" }}
      >
        {desc}
      </div>
    </motion.div>
  );
}