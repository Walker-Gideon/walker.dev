import ContactForm from "./ContactForm";
import Gradients from "../ui/Gradients";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import Footer from "../footer/Footer";

function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full h-full pt-18 pb- px-4 md:px-20 overflow-hidden"
    >
      <ContactHeader />

      <div className="flex flex-col md:flex-row justify-between gap-10 px-2 mb-15">
        <ContactForm />
        <ContactInfo />
      </div>

      {/* <Gradients /> */}
      <Footer />
    </div>
  );
}

export default Contact;
