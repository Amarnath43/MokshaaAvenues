"use client";

import { motion } from "framer-motion";
import { COMPANY } from "../lib/data";

// 🔥 Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#123524] via-[#1B4332] to-[#1f5a3d]">
      {/* Softer Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(116,198,157,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(116,198,157,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      {/* Softer Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,168,32,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(116,198,157,0.06),transparent_28%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 pt-12 pb-20 text-center ">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[860px] mx-auto"
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#F4A820]/15 border border-[#F4A820]/35 text-[#F4A820] px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-7"
          >
            ✦ Ready for Construction Open Plots
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-white text-[clamp(2.4rem,6vw,5rem)] font-serif font-bold leading-[1.04] mb-6"
          >
            Premium Villa Plots <br />
            <span className="text-[#74C69D] italic font-normal">
              in Medchal
            </span>
          </motion.h1>

          {/* Copy */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-base md:text-xl text-[#B7E4C7]">
              By{" "}
              <span className="text-[#F4A820] font-bold underline underline-offset-4">
                Mokshaa Avenues Pvt. Ltd.
              </span>
            </p>

            <p className="text-gray-300 max-w-2xl mx-auto leading-[1.9] text-sm md:text-base">
              HMDA approved open plots in Athvelly, Medchal with{" "}
              <span className="text-white font-medium">
                30 ft internal roads
              </span>
              , excellent connectivity, and a thoughtfully planned layout ideal
              for your future home or smart investment.
            </p>
          </motion.div>

          {/* STAT PILLS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 mt-6 mb-6"
          >
            {["2 Acres Layout", "30 Premium Plots", "30 Ft Roads"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#DDEBDD] backdrop-blur-sm"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="bg-[#F4A820] text-[#1B4332] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#F4A820]/20"
            >
              Contact Us
            </motion.a>

            <a
              href={`tel:${COMPANY.phone}`}
              className="border border-white/25 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#1B4332] transition"
            >
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}