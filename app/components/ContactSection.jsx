"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY } from "../lib/data";

const INFO_CARDS = [
  { icon: "📍", label: "Office Address", value: COMPANY.address },
  { icon: "📞", label: "Call / WhatsApp", value: COMPANY.phone },
  { icon: "📍", label: "Site Location", value: COMPANY.siteAddress },
  { icon: "🕘", label: "Visit Hours", value: COMPANY.visitHours },
];

const inputClasses =
  "w-full px-4 py-3 bg-[var(--warm,#FAF9F6)] border border-[var(--border,#e5e7eb)] rounded-xl text-[0.92rem] outline-none transition-all focus:border-[var(--leaf,#2D6A4F)] focus:ring-2 focus:ring-[var(--leaf,#2D6A4F)]/10 placeholder:text-[#aab8af]";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill all required fields");
      return;
    }

    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      alert("Enter valid 10-digit mobile number");
      return;
    }


    const enquiryMessage = `
New Enquiry

Name: ${form.name}
Mobile: ${form.phone}
Message: ${form.message || "No additional message"}
`;

    const waUrl = `https://wa.me/${COMPANY.phone}?text=${encodeURIComponent(
      enquiryMessage
    )}`;

    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-[60px] py-[20px] md:py-[40px] "
      style={{ background: "var(--warm, #FAF9F6)" }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-[70px] items-start">
        
        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="order-2 lg:order-1"
        >
          <motion.div variants={fadeUp}>
            <div className="section-label mb-4">Send an Enquiry</div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-bold leading-[1.2] mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.1rem, 3.5vw, 3rem)",
              color: "var(--forest, #1B4332)",
            }}
          >
            Let’s Help You Find the{" "}
            <em style={{ fontStyle: "italic", color: "var(--leaf, #2D6A4F)" }}>
              Right Plot
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[1rem] leading-[1.8] max-w-[520px] mb-10 text-[var(--text-muted,#666)]"
          >
            Speak with our team to know pricing, plot availability, approvals,
            and site visit details.
          </motion.p>

          {/* INFO CARDS */}
          <motion.div variants={container} className="flex flex-col gap-4">
            {INFO_CARDS.map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[var(--border,#e5e7eb)] shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0 bg-[var(--forest,#1B4332)] text-white">
                  {card.icon}
                </div>
                <div>
                  <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase mb-1 text-[var(--leaf,#2D6A4F)]">
                    {card.label}
                  </div>
                  <div className="text-[0.95rem] font-semibold leading-relaxed text-[var(--text,#333)]">
                    {card.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white rounded-2xl border border-[var(--border,#e5e7eb)] p-5 md:p-7 shadow-xl shadow-[#1b43320f] order-1 lg:order-2"
        >
          <h3 className="font-bold text-3xl mb-2 font-serif text-[var(--forest,#1B4332)]">
            Send an Enquiry
          </h3>

          <p className="text-sm leading-relaxed mb-8 text-[var(--text-muted,#666)]">
            Fill in your details and our team will get in touch shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Your Name">
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className={inputClasses}
              />
            </Field>

            <Field label="Phone Number">
              <input
                type="tel"
                placeholder="9876543210"
                required
                pattern="^[6-9][0-9]{9}$"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className={inputClasses}
              />
            </Field>

            <Field label="Message (Optional)">
              <textarea
                placeholder="Any specific requirement..."
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
              />
            </Field>

            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              type="submit"
              className="w-full bg-[var(--forest,#1B4332)] hover:bg-[#2D6A4F] text-white py-4 text-[0.82rem] font-bold tracking-[0.18em] uppercase rounded-xl transition-all"
            >
              Submit Enquiry
            </motion.button>
          </form>

          <p className="text-center text-xs mt-6 text-gray-400">
            No spam. We will contact you shortly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-2 text-[var(--forest,#1B4332)]">
        {label}
      </label>
      {children}
    </div>
  );
}