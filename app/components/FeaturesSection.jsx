"use client";

import { motion } from "framer-motion";
import { FEATURES } from "../lib/data";

// 🔥 Animation Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="px-[60px] py-[100px]"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-[70px]"
        >
          <motion.div
            variants={fadeUp}
            className="section-label justify-center before:hidden"
          >
            Why MND Avenue
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
            A Smart Investment{" "}
            <em style={{ fontStyle: "italic", color: "var(--leaf)" }}>
              A Beautiful Life
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[0.9rem] leading-[1.8] max-w-[560px] mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Every square yard of MND Avenue is engineered for your peace of
            mind, lifestyle, and long-term value.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]"
        >
          {FEATURES.map((f) => (
            <FeatureTile key={f.title} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureTile({ icon, number, title, desc, wide }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 40px rgba(27,67,50,0.1)",
        borderColor: "var(--leaf)",
      }}
      transition={{ duration: 0.3 }}
      className={`rounded-[14px] p-9 relative overflow-hidden border group ${wide ? "lg:col-span-2" : ""}`}
      style={{
        background: "white",
        borderColor: "var(--border)",
      }}
    >
      {/* Top gradient bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(to right, var(--leaf), var(--mint))",
        }}
      />

      {number && (
        <div
          className="font-bold leading-none mb-1.5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            color: "var(--forest)",
          }}
        >
          {number}
        </div>
      )}

      {icon && <div className="text-[2rem] mb-4">{icon}</div>}

      <div
        className="font-bold text-base mb-2"
        style={{ color: "var(--forest)" }}
      >
        {title}
      </div>

      <div
        className="text-[0.82rem] leading-[1.65]"
        style={{ color: "var(--text-muted)" }}
      >
        {desc}
      </div>
    </motion.div>
  );
}