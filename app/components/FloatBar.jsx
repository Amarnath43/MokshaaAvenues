import { COMPANY } from "../lib/data";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function FloatBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#123524]/95 backdrop-blur-md shadow-[0_-6px_24px_rgba(0,0,0,0.22)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        
        {/* TEXT - desktop only */}
        <div className="hidden md:block">
          <p className="text-sm text-white/75 leading-none">
            <span className="text-white font-semibold">MND Avenue @ Medchal</span>{" "}
            • HMDA Approved Villa Plots
          </p>
        </div>

        {/* CALL BUTTON */}
        <div className="flex w-full md:w-auto">
          <Link
            href={`tel:${COMPANY.phone}`}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/15"
          >
            <Phone size={15} strokeWidth={2.4} />
            Call Now
          </Link>
        </div>
      </div>
    </div>
  );
}