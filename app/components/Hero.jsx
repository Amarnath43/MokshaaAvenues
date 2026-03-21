"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// 🔥 Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  const heroInputClasses = `
    w-full px-4 py-[10px] 
    bg-[#F8F1E4] border border-[#1B4332]/10 rounded-lg 
    text-[0.85rem] text-[#1B4332] 
    outline-none transition-all duration-200 
    focus:border-[#40916C] focus:bg-white 
    focus:ring-[3px] focus:ring-[#40916C]/10
  `;

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    plotSize: "Not Specified",
    budget: "Not Specified",
  });

  const handleCallbackSubmit = (e) => {
    e.preventDefault();

    const companyPhone = "917780579811";

    const message =
      `*Hero Form Callback Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Plot Size:* ${formData.plotSize}%0A` +
      `*Budget:* ${formData.budget}`;

    window.open(`https://wa.me/${companyPhone}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0D2618] via-[#1B4332] to-[#1a5c3a]">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(116,198,157,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(116,198,157,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeLeft} className="inline-flex items-center gap-2 bg-[#F4A820]/20 border border-[#F4A820]/40 text-[#F4A820] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            ✦ Ready for Construction Open Plots
          </motion.div>

          <motion.h1
            variants={fadeLeft}
            className="text-white text-4xl md:text-7xl font-serif font-bold leading-[1.1] mb-6"
          >
            Villa Plots <br />
            <span className="text-[#74C69D] italic font-normal">
              @ Medchal
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-lg md:text-xl text-[#B7E4C7]">
              By{" "}
              <span className="text-[#F4A820] font-bold underline underline-offset-4">
                Mokshaa Avenues Pvt. Ltd.
              </span>
            </p>

            <p className="text-gray-300 max-w-lg leading-relaxed text-sm md:text-base">
              Secure your dream plot in Hyderabad's fastest-growing corridor.
              <span className="text-white font-medium">
                {" "}
                HMDA Approved & RERA Registered
              </span>{" "}
              — designed for the forever home you've imagined.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="bg-[#F4A820] text-[#1B4332] px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#F4A820]/20"
            >
              🏠 Book Site Visit
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href="#highlights"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#1B4332]"
            >
              View Highlights
            </motion.a>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 md:flex md:flex-wrap gap-x-6 gap-y-3 mt-12 text-[11px] font-bold tracking-wider uppercase text-white/60"
          >
            {["HMDA Approved", "TG RERA Registered", "Bank Loan Available", "Spot Registration", "Vastu Compliant"].map((point) => (
              <motion.span
                key={point}
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-[#74C69D] rounded-full shadow-[0_0_8px_#74C69D]" />
                {point}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/10"
        >
          <h3 className="text-2xl font-bold text-[#1B4332] font-serif mb-1">
            Get Free Callback
          </h3>

          <p className="text-xs text-gray-500 mb-8">
            Our experts will call you within 30 minutes
          </p>

          <form onSubmit={handleCallbackSubmit} className="space-y-4">
            <Field label="Your Name">
              <input
                required
                className={heroInputClasses}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Field>

            <Field label="Mobile Number">
              <input
                required
                className={heroInputClasses}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Plot Size">
                <select
                  className={heroInputClasses}
                  onChange={(e) =>
                    setFormData({ ...formData, plotSize: e.target.value })
                  }
                >
                  <option>Select size</option>
                  <option>150 sq.yd</option>
                  <option>200 sq.yd</option>
                  <option>250 sq.yd +</option>
                </select>
              </Field>

              <Field label="Budget">
                <select
                  className={heroInputClasses}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                >
                  <option>Select budget</option>
                  <option>₹30L – ₹50L</option>
                  <option>₹50L – ₹80L</option>
                  <option>₹80L+</option>
                </select>
              </Field>
            </div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="w-full bg-[#1B4332] text-white py-4 text-[11px] font-black tracking-[0.2em] uppercase rounded-lg shadow-lg"
            >
              📞 Request Free Callback
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] font-black tracking-widest uppercase text-[#1B4332] mb-1.5 opacity-80">
        {label}
      </label>
      {children}
    </div>
  );
}