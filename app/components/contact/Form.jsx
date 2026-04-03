"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";


export default function ContactForm() {
    const inputClasses =
        "w-full px-3 py-2.5 bg-[var(--warm,#FAF9F6)] border border-[var(--border,#e5e7eb)] rounded-xl text-[0.92rem] outline-none transition-all focus:border-[var(--leaf,#2D6A4F)] focus:ring-2 focus:ring-[var(--leaf,#2D6A4F)]/10 placeholder:text-[#aab8af]";


    const fadeUp = {
        hidden: { opacity: 0, y: 28 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" },
        },
    };

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await res.json();
console.log(result);
            if (res.ok && result.success) {
                toast.success(result.message || "Form submitted successfully");
                setForm({ name: "", phone: "", email: "", message: "" });
            } else {
                toast.error(result.message || "Submission failed");
            }
        } catch (error) {
            toast.error("Network error. Please try again.");
        }
    };

    return (
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

                <Field label="Email (Optional)">
                    <input
                        type="email"
                        placeholder="you@example.com"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className={inputClasses}
                    />
                </Field>

                <Field label="Message (Optional)">
                    <textarea
                        placeholder="Any specific requirement..."
                        rows={2}
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
                    className="w-full bg-[var(--forest,#1B4332)] hover:bg-[#2D6A4F] text-white py-3 text-[0.82rem] font-bold tracking-[0.18em] uppercase rounded-xl transition-all"
                >
                    Submit Enquiry
                </motion.button>
            </form>

            <p className="text-center text-xs mt-3 text-gray-400">
                No spam. We will contact you shortly.
            </p>
        </motion.div>
    )
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