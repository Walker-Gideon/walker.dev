import ContactForm from "./ContactForm";
import Gradients from "../ui/Gradients";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div
      id="contact"
      className="relative w-full h-full pb-10 pt-30 small:pt-25 medium:pt-[100px] px-20 small:px-4 sm:px-8 lg:px-20"
    >
      <ContactHeader />

      <div className="md:mt-14 md:flex md:justify-between md:gap-16 large:gap-20 xl:gap-30">
        <ContactForm />
        <ContactInfo />
      </div>

      <Gradients />
    </div>
  );
}

export default Contact;
