"use client";

import { motion } from "framer-motion";

// 🔥 Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// 🔥 DATA
const PROJECTS = [
  {
    name: "Highway Pride",
    location: "Nandikandi, Mumbai Highway",
    highlights: ["DTCP Approved", "Near RRR", "Near Highway"],
  },
  {
    name: "Brindavan’s Parkway Avenue",
    location: "Near ORR Corridor",
    highlights: ["HMDA Approved", "30 Ft Roads", "Immediate Registration"],
  },
  {
    name: "Brindavan’s Celebrity Enclave",
    location: "Shamirpet",
    highlights: ["HMDA Approved", "Near Genome Valley", "Gated Layout"],
  },
  {
    name: "Aamuktha’s Pride",
    location: "Isnapur",
    highlights: ["HMDA Approved", "Near ORR", "Ready for Construction"],
  },
];

export default function CompletedProjects() {
  return (
    <section
      id="completed-projects"
      className="bg-gradient-to-b from-[#0D2618] to-[#102f20] px-6 sm:px-12 lg:px-[60px] py-20 lg:py-[110px]"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.65rem] tracking-[0.25em] uppercase text-[#74C69D] font-bold mb-3"
          >
            ✦ Delivered With Trust
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-white font-bold text-[clamp(1.9rem,3vw,2.6rem)] mb-4"
          >
            Completed Projects
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-sm text-[#B7E4C7]/80 max-w-[600px] mx-auto leading-relaxed"
          >
            A track record of successfully delivered plotted developments across
            Hyderabad’s emerging growth corridors.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#132f22] p-6 shadow-sm hover:shadow-xl hover:border-[#74C69D]/30 transition duration-300"
            >
              {/* Subtle Glow Accent */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(116,198,157,0.08),transparent_35%)] opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#74C69D]/10 border border-[#74C69D]/20 flex items-center justify-center text-[#74C69D] font-serif text-lg font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#74C69D] text-[#0D2618] px-3 py-1 rounded-full">
                  Completed
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white font-semibold text-lg leading-snug mb-2">
                  {project.name}
                </h3>

                <p className="text-[#B7E4C7]/70 text-sm mb-5">
                  📍 {project.location}
                </p>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] px-3 py-1 rounded-full border border-[#74C69D]/20 bg-[#74C69D]/10 text-[#B7E4C7]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}