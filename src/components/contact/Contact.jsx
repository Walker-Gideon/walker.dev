import ContactForm from "./ContactForm";
import Gradients from "../ui/Gradients";
import SocialLink from "../ui/SocialLink";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    //

    // pt-12 pb-15 w-full h-full px-20 small:mt-10 small:px-4 sm:px-6 md:px-10 lg:px-20 z-10
    <div
      id="contact"
      className="relative w-full h-full pb-10 pt-30 small:pt-25 medium:pt-30 px-20 small:px-4 sm:px-8 lg:px-20"
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
