import { COMPANY } from "../lib/data";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatBar() {
  const message = `Hello ${COMPANY.name}, I am interested in your projects. Please provide more information.`;

  const whatsappUrl = `https://wa.me/${COMPANY.phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="text-[#25D366] text-5xl hover:scale-110 transition-transform"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}