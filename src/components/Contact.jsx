import ContactForm from "./ContactForm";
import Gradients from "./Gradients";
import SocialLink from "./SocialLink";

function Contact() {
  return (
    <div className="relative">
      <div className="pt-12 pb-15 w-full h-full px-20 small:mt-10 small:px-4 sm:px-6 md:px-10 lg:px-20 z-10 bg-black">
        <div className="mb-10 small:pb-2 sm:mb-8 medium:mb-10">
          <h1 className="text-4xl font-bold small:text-2xl sm:text-3xl medium:text-4xl text-primary">
            Contact me,
          </h1>
          <h1 className="text-4xl font-bold small:text-2xl sm:text-3xl medium:text-4xl text-blueprime">
            let's make magic together.
          </h1>
        </div>

        <div>
          <div className="md:mt-14 md:flex md:justify-between md:gap-16 large:gap-20 xl:gap-30">
            <ContactForm />

            <div className="w-full md:w-100 lg:w-200 mt-2 small:mt-16 md:mt-4">
              <h1 className="pb-2 text-2xl text-primary font-bold">
                Connect with me:
              </h1>

              <div className="small:mt-1 ">
                <a
                  href="mailto:gideonawortwe3@gmail.com"
                  className="text-3xl small:text-[1.8rem] sm:text-3xl medium:text-4xl md:text-3xl text-white font-medium"
                >
                  gideonawortwe3@gmail.com
                </a>
                <p className="py-3 small:py-4 text-xl text-gray-400 font-medium">
                  +233 248 232 548
                </p>
                <p className="mb-27 small:mb-15 md:mb-53 midmedium:mb-24 text-xl text-gray-400 font-medium">
                  Accra, Ghana
                </p>
              </div>

              <SocialLink />
            </div>
          </div>
        </div>
      </div>

      <Gradients />
    </div>
  );
}

export default Contact;
