"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import logo from '../assets/logo.png'
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const PROJECTS = [
  {
    name: "Highway Pride",
    location: "Nandikandi, Mumbai Highway",
    highlights: ["DTCP Approved", "Near RRR", "Near Highway"],
  },
  {
    name: "Brindavan's Parkway Avenue",
    location: "Near ORR Corridor",
    highlights: ["HMDA Approved", "30 Ft Roads", "Immediate Registration"],
  },
  {
    name: "Brindavan's Celebrity Enclave",
    location: "Shamirpet",
    highlights: ["HMDA Approved", "Near Genome Valley", "Gated Layout"],
  },
  {
    name: "Aamuktha's Pride",
    location: "Isnapur",
    highlights: ["HMDA Approved", "Near ORR", "Ready for Construction"],
  },
];

const PRINCIPLES = [
  { label: "Approved Layouts", desc: "Every plot backed by full government sanction." },
  { label: "Strategic Locations", desc: "Positioned at growth corridors before the surge." },
  { label: "Future-Ready Planning", desc: "Infrastructure designed for tomorrow's living." },
  { label: "Trusted Delivery", desc: "Transparency, documentation, and on-time handover." },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden" style={{ backgroundColor: "#FBF7EF", color: "#1c1a17" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative px-6 sm:px-12 lg:px-16 pt-36 pb-28"
        style={{ borderBottom: "1px solid rgba(74,103,65,0.15)" }}
      >
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.18) 0%, transparent 70%)" }} />

        {/* Only the hero gets staggered entrance — it's the first thing users see */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div
              className="w-24 h-24 rounded-2xl overflow-hidden p-1 shadow-lg"
              style={{ background: "#fff", border: "1px solid rgba(74,103,65,0.18)", boxShadow: "0 8px 32px rgba(74,103,65,0.1)" }}
            >
              <Image src={logo} alt="Mokshaa Avenues Logo" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[10px] font-semibold tracking-[0.24em] uppercase mb-5" style={{ color: "#4a6741" }}>
            About Mokshaa Avenues
          </motion.p>

          <motion.div variants={fadeUp} className="w-10 h-px mx-auto mb-10" style={{ background: "linear-gradient(90deg, #4a6741, transparent)" }} />

          <motion.h1 variants={fadeUp} className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.1] tracking-tight mb-7" style={{ color: "#1c1a17" }}>
            Building Thoughtfully Planned{" "}
            <span className="italic" style={{ color: "#c9a96e" }}>Developments with Trust</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-sm leading-[1.95] font-light max-w-xl mx-auto" style={{ color: "#6b6459" }}>
            Mokshaa Avenues Pvt. Ltd. focuses on creating strategically located
            plotted developments around Hyderabad — designed with planning,
            approvals, and long-term value at the forefront.
          </motion.p>
        </motion.div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          {/* Section heading fades in — cards are plain divs with CSS hover */}
          <div
            className="rounded-2xl p-10 hover:-translate-y-1 transition-all duration-500"
            style={{ background: "#fff", border: "1px solid rgba(74,103,65,0.14)", boxShadow: "0 2px 16px rgba(74,103,65,0.06)" }}
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#4a6741" }}>Who We Are</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light leading-snug mb-6" style={{ color: "#1c1a17" }}>
              A Developer Focused on Value, Planning &amp; Trust
            </h2>
            <p className="text-sm leading-[1.95] font-light" style={{ color: "#6b6459" }}>
              Mokshaa Avenues Pvt. Ltd. is committed to developing well-planned
              plotted layouts in strategically growing locations. Our focus lies
              in creating projects that offer strong location advantage, clear
              value, and future-ready potential for both homebuyers and investors.
            </p>
          </div>

          <div
            className="rounded-2xl p-10 hover:-translate-y-1 transition-all duration-500"
            style={{ background: "#fff", border: "1px solid rgba(74,103,65,0.14)", boxShadow: "0 2px 16px rgba(74,103,65,0.06)" }}
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#4a6741" }}>Our Approach</p>
            <div className="flex flex-col gap-6">
              {[
                "Strategic project locations with strong future growth potential.",
                "Well-planned plotted layouts designed for clarity and livability.",
                "A trust-first approach focused on approvals and buyer confidence.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-[6px] flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(74,103,65,0.35)" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4a6741" }} />
                  </div>
                  <p className="text-sm leading-[1.85] font-light" style={{ color: "#6b6459" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE PRINCIPLES ──────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto">

          {/* Just the heading animates on scroll */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#4a6741" }}>What We Focus On</p>
            <h2 className="font-serif text-2xl md:text-[2rem] font-light" style={{ color: "#1c1a17" }}>Our Core Principles</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRINCIPLES.map((item, i) => (
              <div
                key={item.label}
                className="rounded-2xl p-7 text-center hover:-translate-y-1 transition-all duration-500"
                style={{ background: "#fff", border: "1px solid rgba(74,103,65,0.14)", boxShadow: "0 2px 16px rgba(74,103,65,0.05)" }}
              >
                <p className="font-serif text-3xl font-light mb-4 leading-none" style={{ color: "rgba(201,169,110,0.5)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[13px] font-semibold tracking-wide mb-2" style={{ color: "#1c1a17" }}>{item.label}</p>
                <p className="text-xs leading-[1.75] font-light" style={{ color: "#6b6459" }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── COMPLETED PROJECTS ───────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-16 py-24"
        style={{ borderTop: "1px solid rgba(74,103,65,0.12)", borderBottom: "1px solid rgba(74,103,65,0.12)", background: "rgba(74,103,65,0.025)" }}
      >
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#4a6741" }}>Our Track Record</p>
            <h2 className="font-serif text-2xl md:text-[2rem] font-light" style={{ color: "#1c1a17" }}>Completed Projects</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((project, index) => (
              <div
                key={project.name}
                className="group relative overflow-hidden rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-500"
                style={{ background: "#fff", border: "1px solid rgba(74,103,65,0.14)", boxShadow: "0 2px 12px rgba(74,103,65,0.06)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(74,103,65,0.04), transparent)" }} />

                <div className="relative flex items-start justify-between mb-7">
                  <span className="font-serif text-3xl font-light leading-none" style={{ color: "rgba(201,169,110,0.45)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] font-semibold tracking-[0.14em] uppercase px-3 py-1 rounded-full" style={{ color: "#4a6741", border: "1px solid rgba(74,103,65,0.3)", background: "rgba(74,103,65,0.07)" }}>
                    Completed
                  </span>
                </div>

                <div className="relative">
                  <h3 className="font-serif text-lg font-light leading-snug mb-2" style={{ color: "#1c1a17" }}>{project.name}</h3>
                  <p className="text-xs mb-5 font-light" style={{ color: "#6b6459" }}>📍 {project.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span key={item} className="text-[10px] font-medium px-3 py-1 rounded-full" style={{ border: "1px solid rgba(74,103,65,0.2)", background: "rgba(74,103,65,0.06)", color: "#4a6741" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-16 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto rounded-3xl p-14 md:p-20 text-center overflow-hidden"
          style={{ background: "#fff", border: "1px solid rgba(74,103,65,0.18)", boxShadow: "0 8px 48px rgba(74,103,65,0.08)" }}
        >
          <div className="pointer-events-none absolute top-7 right-8 w-24 h-24 rounded-tr-2xl" style={{ borderTop: "1px solid rgba(74,103,65,0.2)", borderRight: "1px solid rgba(74,103,65,0.2)" }} />
          <div className="pointer-events-none absolute bottom-7 left-8 w-24 h-24 rounded-bl-2xl" style={{ borderBottom: "1px solid rgba(74,103,65,0.2)", borderLeft: "1px solid rgba(74,103,65,0.2)" }} />

          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#4a6741" }}>Explore Our Current Project</p>

          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.2] mb-5" style={{ color: "#1c1a17" }}>
            Discover Premium Villa Plots{" "}
            <span className="italic" style={{ color: "#c9a96e" }}>in Medchal</span>
          </h2>

          <p className="text-sm leading-[1.9] font-light max-w-md mx-auto mb-10" style={{ color: "#6b6459" }}>
            Explore our current HMDA approved plotted development designed for
            future living, location advantage, and long-term value.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-block text-[13px] font-semibold tracking-wide px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all duration-300" style={{ background: "#4a6741", color: "#fff", boxShadow: "0 4px 20px rgba(74,103,65,0.25)" }}>
              View Project
            </Link>
            <a href="tel:+919000106220" className="inline-block text-[13px] font-medium tracking-wide px-7 py-3.5 rounded-full transition-all duration-300" style={{ border: "1px solid rgba(74,103,65,0.25)", color: "#4a6741" }}>
              Call Now
            </a>
          </div>
        </motion.div>
      </section>

    </main>
  );
}