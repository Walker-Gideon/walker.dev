import ContactForm from "./ContactForm";
import Gradients from "../ui/Gradients";
import SocialLink from "../ui/SocialLink";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div id="contact" className="relative">
      <div className="pt-12 pb-15 w-full h-full px-20 small:mt-10 small:px-4 sm:px-6 md:px-10 lg:px-20 z-10 bg-black">
        <ContactHeader />

        <div className="md:mt-14 md:flex md:justify-between md:gap-16 large:gap-20 xl:gap-30">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      <Gradients />
    </div>
  );
}

export default Contact;
