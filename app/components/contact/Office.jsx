import { COMPANY } from "@/app/lib/data";

const INFO_CARDS = [
  { icon: "📍", label: "Office Address", value: COMPANY.address },
  { icon: "📞", label: "Call / WhatsApp", value: COMPANY.phone },
  { icon: "📍", label: "Site Location", value: COMPANY.siteAddress },
  { icon: "🕘", label: "Visit Hours", value: COMPANY.visitHours },
];



export default function Office() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };
  return (
    <div className="order-2 lg:order-1"
    >
      <p
        variants={fadeUp}
        className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-green-700 mb-3"
      >
        Get in Touch
      </p>

      {/* INFO CARDS */}
      <div variants={container} className="flex flex-col gap-4">
        {INFO_CARDS.map((card) => (
          <div
            key={card.label}
            variants={fadeUp}
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
          </div>
        ))}
      </div>
    </div>
  );
}



