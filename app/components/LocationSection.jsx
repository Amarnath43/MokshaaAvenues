"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { LOCATION_ADVANTAGES } from "../lib/data";

// 🔥 Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-green-700 mb-3"
          >
            Location Advantages
          </motion.p>

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
            Medchal strikes the rare balance — serene green surroundings with
            seamless access to Hyderabad&apos;s key corridors.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {LOCATION_ADVANTAGES.map(({ name, time, icon: Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="group relative bg-white rounded-2xl border border-stone-200 p-5 flex flex-col gap-3 overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-green-900 group-hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
                <Icon size={18} color="white" strokeWidth={1.7} />
              </div>

              {/* Text */}
              <div>
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

        {/* MAP HEADING */}
        <div className="mt-14 mb-4 text-center">
          <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-green-700 mb-2">
            Site Access
          </p>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Explore the Location
          </h3>
        </div>

        {/* MAP */}
        <div className="py-5 flex justify-center items-center">
          <div className="w-full max-w-[800px] aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:shadow-xl transition duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3802.1871829847873!2d78.50091467275072!3d17.64129142926611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM4JzI4LjciTiA3OMKwMzAnMDMuOCJF!5e1!3m2!1sen!2sin!4v1774548377618!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}