"use client";

import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "../lib/data";

export default function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="overflow-hidden py-[18px]"
      style={{ background: "var(--forest)" }}
    >
      <motion.div
        className="flex w-max will-change-transform"
        initial="hidden"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-5 px-8 text-[0.7rem] font-bold tracking-[0.2em] uppercase flex-shrink-0"
            style={{ color: "var(--mint)" }}
          >
            {item}
            <span
              className="w-[5px] h-[5px] rounded-full flex-shrink-0"
              style={{ background: "var(--amber-light)" }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}