"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {name:"Home", href:"/"},
    { name: "Highlights", href: "/#highlights" },
    { name: "Features", href: "/#features" },
    { name: "Location", href: "/#location" },
    {name:'Completed Projects', href:'/#completed-projects'},
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 px-6 md:px-16 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "h-[64px] bg-white/70 backdrop-blur-lg shadow-sm"
            : "h-[80px] bg-white"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <motion.div
            initial="hidden"
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.25 }}
            className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? "bg-white/20 backdrop-blur-md border border-white/20"
                : "bg-[#2D6A4F]/10 border border-[#2D6A4F]/20"
            }`}
          >
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="hidden sm:block">
            <div className="text-[9px] tracking-[0.2em] uppercase text-[#40916C] font-bold">
              MND Avenue by
            </div>
            <div className="font-serif font-bold text-[#1B4332] text-sm md:text-lg">
              Mokshaa Avenues
            </div>
          </div>
        </div>

        {/* LINKS */}
        <ul className="hidden lg:flex gap-8 text-[11px] uppercase tracking-widest text-gray-500 font-bold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-[#1B4332] transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <motion.a
            initial="hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="/contact"
            className="hidden sm:block bg-[#F4A820] text-[#1B4332] px-5 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-md"
          >
            Enquire Now
          </motion.a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1B4332]"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif font-bold text-[#1B4332]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}