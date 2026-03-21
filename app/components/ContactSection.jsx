"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY } from "../lib/data";

const INFO_CARDS = [
  { icon: "📍", label: "Office Address", value: COMPANY.address },
  { icon: "📞", label: "Call / WhatsApp", value: COMPANY.phone },
  { icon: "📍", label: "Site Location", value: COMPANY.siteAddress },
  { icon: "🕘", label: "Site Visit Hours", value: COMPANY.visitHours },
];

const inputClasses =
  "w-full px-4 py-3 bg-[var(--warm,#FAF9F6)] border-[1.5px] border-[var(--border,#e5e7eb)] rounded-lg text-[0.88rem] outline-none transition-all focus:border-[var(--leaf,#2D6A4F)] focus:ring-1 focus:ring-[var(--leaf,#2D6A4F)] placeholder:text-[#aab8af]";

// 🔥 Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    plotSize: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.phone || !form.date) {
      alert("Please fill all required fields");
      return;
    }

    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    const phoneNumber = "917780579811";

    const message = `
New Site Visit Booking

Name: ${form.fullName}
Mobile: ${form.phone}
Plot: ${form.plotSize || "Not selected"}
Date: ${form.date}
Note: ${form.message || "No additional notes"}
`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-[60px] py-[80px] md:py-[100px]"
      style={{ background: "var(--warm, #FAF9F6)" }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-[70px] items-start">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <div className="section-label mb-4">Get in Touch</div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-bold leading-[1.2] mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
              color: "var(--forest, #1B4332)",
            }}
          >
            Ready to Visit{" "}
            <em style={{ fontStyle: "italic", color: "var(--leaf, #2D6A4F)" }}>
              the Site?
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[1rem] leading-[1.8] max-w-[520px] mb-10 text-[var(--text-muted,#666)]"
          >
            Talk to our experts and schedule a free site visit today. Limited
            plots available — act now.
          </motion.p>

          {/* INFO CARDS */}
          <motion.div variants={container} className="flex flex-col gap-4">
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                custom={i * 0.1}
                whileHover={{ scale: 1.03 }}
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
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-[var(--border,#e5e7eb)] p-8 md:p-12 shadow-2xl shadow-[#1b43320f]"
        >
          <h3 className="font-bold text-3xl mb-2 font-serif text-[var(--forest,#1B4332)]">
            Book a Free Site Visit
          </h3>

          <p className="text-sm leading-relaxed mb-8 text-[var(--text-muted,#666)]">
            Fill in your details and our team will confirm your visit slot
            within 30 minutes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full Name">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className={inputClasses}
                />
              </Field>

              <Field label="Mobile Number">
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

              <Field label="Plot Size">
                <select
                  value={form.plotSize}
                  onChange={(e) =>
                    setForm({ ...form, plotSize: e.target.value })
                  }
                  className={inputClasses}
                >
                  <option value="">Select size</option>
                  <option>100 sq.yd</option>
                  <option>150 sq.yd</option>
                  <option>200 sq.yd</option>
                  <option>250 sq.yd+</option>
                </select>
              </Field>

              <Field label="Preferred Date">
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) =>
                    setForm({ ...form, date: e.target.value })
                  }
                  className={inputClasses}
                />
              </Field>

              <Field label="Message (Optional)" gridClass="md:col-span-2">
                <textarea
                  placeholder="Any specific requirements…"
                  rows={1}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClasses} resize-none`}
                />
              </Field>
            </div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full bg-[var(--forest,#1B4332)] hover:bg-[#2D6A4F] text-white py-4 text-[0.85rem] font-bold tracking-[0.2em] uppercase rounded-lg transition-all mt-4"
            >
              🏡 Confirm Site Visit
            </motion.button>
          </form>

          <p className="text-center text-xs mt-6 text-gray-400">
            📞 Or call us:{" "}
            <strong className="text-gray-700">{COMPANY.phone}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children, gridClass = "" }) {
  return (
    <div className={gridClass}>
      <label className="block text-[0.72rem] font-bold tracking-[0.15em] uppercase mb-2 text-[var(--forest,#1B4332)]">
        {label}
      </label>
      {children}
    </div>
  );
}