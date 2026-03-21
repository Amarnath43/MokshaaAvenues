"use client";

import { motion } from "framer-motion";
import { Clock, Navigation, ArrowRight } from "lucide-react";
import { LOCATION_ADVANTAGES } from "../lib/data";

// 🔥 Animation Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.08,
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

export default function LocationSection() {
  return (
    <section
      id="location"
      className="bg-stone-50 px-6 sm:px-12 lg:px-[60px] py-20 lg:py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-green-700 mb-3"
          >
            Location Advantages
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <motion.h2
                variants={fadeUp}
                className="font-serif font-bold leading-[1.15] text-[clamp(1.9rem,3.2vw,2.8rem)] text-stone-900 mb-3"
              >
                Minutes from{" "}
                <span className="italic text-green-700">Everything</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-sm leading-[1.85] text-stone-500 max-w-[480px]"
              >
                Medchal strikes the rare balance — serene green surroundings with seamless access to Hyderabad's key corridors.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-green-900 hover:bg-green-700 text-white text-[0.78rem] font-bold tracking-wide px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-900/25"
              >
                <Navigation size={14} strokeWidth={2.5} />
                Open in Google Maps
                <motion.span whileHover={{ x: 4 }} className="flex">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {LOCATION_ADVANTAGES.map(({ name, time, icon: Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              className="group relative bg-white rounded-2xl border border-stone-200 p-5 flex flex-col gap-3 overflow-hidden cursor-default"
            >
              {/* Corner accent */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute top-0 right-0 w-14 h-14 bg-green-900/[0.03] rounded-bl-[3rem]"
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-green-900 group-hover:bg-green-700 transition-colors duration-300 flex items-center justify-center z-10"
              >
                <Icon size={18} color="white" strokeWidth={1.7} />
              </motion.div>

              {/* Text */}
              <div className="z-10">
                <p className="text-[0.8rem] font-semibold leading-snug text-stone-800 mb-1.5">
                  {name}
                </p>

                <span className="inline-flex items-center gap-1 bg-green-50 text-green-800 text-[0.67rem] font-bold tracking-wide px-2 py-0.5 rounded-full border border-green-200/60">
                  <Clock size={9} strokeWidth={2.5} />
                  {time}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}