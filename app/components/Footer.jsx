import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "../lib/data";
import logo from '../assets/logo.png'
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Highlights", href: "/#highlights" },
  { label: "Features", href: "/#features" },
  { label: "Location", href: "/#location" },
  { label: "Completed Projects", href: "/#completed-projects" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B15] text-white px-6 sm:px-12 lg:px-[60px] py-14">
      <div className="max-w-[1200px] mx-auto">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={logo}
                  alt="Mokshaa Avenues"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="font-serif text-lg font-bold">
                {COMPANY.name}
              </h3>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-[280px]">
              HMDA approved villa plots in Medchal, Hyderabad — planned for
              long-term value and future growth.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 text-[#95D5B2]">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 text-[#95D5B2]">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-white/60">
              <p>SR Nagar, Hyderabad</p>

              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={14} />
                +91 90001 06220
              </a>

              <a
                href={`https://wa.me/${COMPANY.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-6 text-xs text-white/35 flex flex-col md:flex-row justify-between gap-2">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}
          </p>

          <p>
            HMDA Approved • TG RERA Registered
          </p>
        </div>
      </div>
    </footer>
  );
}