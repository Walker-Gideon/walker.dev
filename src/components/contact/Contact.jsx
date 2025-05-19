import ContactForm from "./ContactForm";
import Gradients from "../ui/Gradients";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full h-full pt-18 pb-10 px-4 md:px-20"
    >
      <ContactHeader />

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <ContactForm />
        <ContactInfo />
      </div>

      <Gradients />
    </div>
  );
}

export default Contact;
