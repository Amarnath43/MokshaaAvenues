'use client'

import { COMPANY } from '../lib/data'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export default function FloatBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between gap-3 px-5 md:px-10 py-3 md:py-4 bg-[#1B4332]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_30px_rgba(0,0,0,0.25)]">

      {/* TEXT: Highlights project name and HMDA status */}
      <p className="text-xs md:text-sm text-white/80 text-center md:text-left">
        <span className="text-white font-bold">MND Avenue @ Medchal</span> — 
        Premium HMDA Villa Plots | Limited Units Left
      </p>

      {/* BUTTONS: High-contrast CTA for mobile and desktop */}
      <div className="flex gap-2 md:gap-3 flex-wrap justify-center">
        
        {/* SECONDARY CALL CTA */}
        <Link
          href={`tel:${COMPANY.phone}`}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-5 py-3 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded transition-colors duration-200"
        >
          <Phone size={14} strokeWidth={2.5} />
          Call Now
        </Link>

        {/* PRIMARY ACTION CTA */}
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-[#F4A820] hover:bg-[#e59a1c] text-[#1B4332] px-6 py-3 text-[10px] md:text-xs font-black tracking-widest uppercase rounded shadow-sm transition-transform active:scale-95"
        >
          <MapPin size={14} strokeWidth={3} />
          Book Site Visit
        </Link>
      </div>
    </div>
  )
}