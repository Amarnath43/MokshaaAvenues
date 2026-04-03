import { 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  MapPin,
  Train,
  Award,
  TrendingUp,
  Home,
  Shield
} from "lucide-react";
import { COMPANY } from "../lib/data";
import styles from "../hero.module.css";
import Link from "next/link";

export default function Hero() {
 

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a1f14] via-[#1B4332] to-[#0f2818]" id="home">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(116,198,157,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(116,198,157,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:50px_50px]" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,168,32,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(116,198,157,0.1),transparent_40%)]" />
      
      {/* Accent Blur */}
      <div className={`absolute top-10 md:top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#F4A820]/8 rounded-full blur-[100px] md:blur-[120px] ${styles["animate-pulse-slow"]}`} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* HMDA Badge */}
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#F4A820]/25 to-[#F4A820]/10 border border-[#F4A820]/50 text-[#F4A820] px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-6 md:mb-8 backdrop-blur-sm ${styles["animate-fade-in-down"]}`}>
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">HMDA Approved • Ready for Construction</span>
            <span className="sm:hidden">HMDA Approved • Ready to Build</span>
            <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#F4A820] ${styles["animate-ping-slow"]} ml-1`} />
          </div>

          {/* Main Heading */}
          <h1 className={`text-white text-[2.2rem] sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-[1.1] mb-4 md:mb-5 tracking-tight px-2 ${styles["animate-fade-in-up"]} ${styles["animation-delay-100"]}`}>
            Premium Villa Plots
            <br />
            <span className="bg-gradient-to-r from-[#74C69D] via-[#95D5B2] to-[#74C69D] bg-clip-text text-transparent inline-block mt-1">
              MND Avenue, Medchal
            </span>
          </h1>

          {/* Subheading */}
          <div className={`space-y-3 md:space-y-4 mb-6 md:mb-8 px-2 ${styles["animate-fade-in-up"]} ${styles["animation-delay-200"]}`}>
            <p className="text-base sm:text-lg md:text-xl text-[#B7E4C7] font-light">
              By{" "}
              <span className="text-[#F4A820] font-semibold">
                Mokshaa Avenues Pvt. Ltd.
              </span>
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              HMDA approved plots at Athvelly with{" "}
              <span className="text-white font-semibold">30 ft wide BT roads</span>
              , complete infrastructure & bank loan availability. Ideal for your dream home or investment.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 max-w-5xl mx-auto mb-6 md:mb-10 px-2 ${styles["animate-fade-in-up"]} ${styles["animation-delay-300"]}`}>
            {[
              { label: "Total Area", value: "2 Acres", icon: Home },
              { label: "Plots", value: "30 Units", icon: TrendingUp },
              { label: "Road Width", value: "30 Ft", icon: MapPin },
              { label: "Price/Sq.Yd", value: "₹35K", icon: Shield },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300 cursor-default hover:scale-105 hover:border-[#74C69D]/30 hover:bg-white/8"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#74C69D] mb-1.5 mx-auto" />
                <div className="text-[#F4A820] text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-2 ${styles["animate-fade-in-up"]} ${styles["animation-delay-500"]}`}>
            <Link
              href="/contact"
              className="group border-2 bg-[#F4A820] text-[#1B4332] px-5 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-md hover:bg-[#F4A820]/90 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
             Enquire Now
            </Link>

            <Link
              href={`tel:${COMPANY.phone}`}
              className="group border-2 border-white/30 text-white px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-xl font-bold uppercase tracking-wide text-xs sm:text-sm hover:bg-white hover:text-[#1B4332] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto active:scale-95"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              Call Now
            </Link>
          </div>

          {/* Trust Badges */}
          <div className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-2 ${styles["animate-fade-in-up"]} ${styles["animation-delay-600"]}`}>
            {[
              { text: "Clear Title", priority: true },
              { text: "Bank Loan", priority: true },
              { text: "Registration", priority: false },
              { text: "Vastu", priority: false },
            ].map((badge) => (
              <span
                key={badge.text}
                className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  badge.priority
                    ? "border-emerald-400/30 bg-emerald-950/40 text-emerald-200 hover:border-emerald-400/50 hover:scale-105"
                    : "border-white/15 bg-white/5 text-gray-300 hover:border-white/25 hover:scale-105"
                }`}
              >
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="hidden sm:inline">{badge.text}</span>
                <span className="sm:hidden">
                  {badge.text === "Registration" ? "Reg" : badge.text}
                </span>
              </span>
            ))}
          </div>

          {/* Location */}
          <div className={`pt-6 md:pt-8 border-t border-white/10 px-2 ${styles["animate-fade-in-up"]} ${styles["animation-delay-700"]}`}>
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <MapPin className="w-4 h-4 text-[#74C69D]" />
              <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium">
                Prime Connectivity
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#74C69D] flex-shrink-0" />
                <span className="whitespace-nowrap">Bus Stand: 5m</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Train className="w-3 h-3 sm:w-4 sm:h-4 text-[#74C69D] flex-shrink-0" />
                <span className="whitespace-nowrap">Railway: 10m</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#74C69D] flex-shrink-0" />
                <span className="whitespace-nowrap">ORR Exit 6: 13m</span>
              </span>
            </div>
          </div>

          {/* Urgency */}
          <div className={`mt-6 md:mt-8 ${styles["animate-fade-in-up"]} ${styles["animation-delay-800"]}`}>
            <p className="text-xs sm:text-sm text-[#F4A820]/80 font-medium flex items-center justify-center gap-2">
              <TrendingUp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${styles["animate-bounce-subtle"]}`} />
              <span>Limited plots available • Contact now for best pricing</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}