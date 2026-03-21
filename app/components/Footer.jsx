"use client";

import { motion } from "framer-motion";
import { COMPANY } from "../lib/data";

const APPROVALS_TAGS = ["HMDA Approved", "TG RERA", "Bank Loan", "Vastu"];

// 🔥 Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#0D1B15] px-6 md:px-[60px] pt-20 pb-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto mb-12"
      >
        {/* Brand Column */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-3 mb-5">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-11 h-11 rounded-lg flex items-center justify-center text-xl bg-[#2D6A4F]"
            >
              🏡
            </motion.div>

            <div>
              <div className="font-bold text-lg text-white font-serif leading-tight">
                {COMPANY.name}
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#B7E4C7]">
                MND Avenue, Medchal
              </div>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-6 max-w-[300px] text-white/40">
            Premium HMDA-approved villa plots at Medchal, Hyderabad. Building
            dreams, one plot at a time. Trusted by hundreds of families.
          </p>

          {/* Tags */}
          <motion.div
            variants={container}
            className="flex gap-2 flex-wrap"
          >
            {APPROVALS_TAGS.map((tag) => (
              <motion.span
                key={tag}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded bg-[#40916C]/10 border border-[#40916C]/30 text-[#B7E4C7]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Column */}
        <motion.div variants={fadeUp}>
          <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-6 text-[#95D5B2]">
            Contact
          </h4>

          <div className="text-sm text-white/40 space-y-4">
            <address className="not-italic leading-relaxed">
              12/A MIGH, 1st Floor<br />
              SR Nagar, Hyderabad<br />
              Telangana, India
            </address>

            <div className="flex flex-col gap-2 pt-2">
              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+91XXXXX"
                className="text-white hover:text-[#B7E4C7] font-semibold"
              >
                📞 Call: +91 XXXXX XXXXX
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href="https://wa.me/917780579811"
                className="text-white hover:text-[#B7E4C7] font-semibold"
              >
                💬 WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4"
      >
        <div className="text-xs text-white/30">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>

        <div className="text-xs text-white/30 italic">
          HMDA L.P: {COMPANY.hmda} | TG RERA Registered
        </div>
      </motion.div>
    </footer>
  );
}