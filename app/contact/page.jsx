import Office from "../components/contact/Office";
import ContactForm from "../components/contact/Form";



export default function ContactSection() {


  return (
    <section
      id="contact"
      className="px-6 md:px-[60px] py-[20px] md:py-10 scroll-mt-24"
      style={{ background: "var(--warm, #FAF9F6)" }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-[70px] items-start">
        {/* LEFT */}
        <Office />

        {/* RIGHT FORM */}
        <ContactForm
        />
      </div>
    </section>
  );
}
