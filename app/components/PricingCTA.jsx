"use client";

import { motion } from "framer-motion";
import { COMPANY } from "../lib/data";

// 🔥 Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.15,
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
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function PricingCTA() {
  return (
    <section
      className="relative overflow-hidden text-center px-[60px] py-[100px]"
      style={{
        background: "linear-gradient(135deg, var(--dark), var(--forest))",
      }}
    >
      {/* Glow */}
      <motion.div
        initial="hidden"
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute pointer-events-none"
        style={{
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(64,145,108,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-[800px] mx-auto"
      >
        {/* Label */}
        <motion.div
          variants={fadeUp}
          className="section-label justify-center before:hidden mb-3.5"
          style={{ color: "var(--mint)" }}
        >
          Limited Plots Available
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-bold leading-[1.12] text-white mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
          }}
        >
          Don&apos;t Miss Your Chance
          <br />
          to Own a Plot{" "}
          <em style={{ fontStyle: "italic", color: "var(--mint)" }}>
            @ Medchal
          </em>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-[0.95rem] leading-[1.8] mb-5"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Prices are increasing rapidly with the Medchal corridor&apos;s booming
          development. Speak with our team today to lock in the best available
          price.
        </motion.p>

        {/* Trust Badge */}
        <motion.div
          variants={scaleIn}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[0.7rem] font-bold tracking-[0.12em] uppercase mb-11"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          🛡️ TG RERA Registered • HMDA Approved • Bank Loan Available
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-4 flex-wrap"
        >
          <motion.a
            href={`tel:${COMPANY.phone}`}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="btn-saffron"
          >
            📞 Call for Best Price
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-forest-outline"
          >
            📋 Enquire Now
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}