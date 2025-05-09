import ContactForm from "./ContactForm";
import SocialLink from "./SocialLink";

function Contact() {
  return (
    //small:mt-10 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20
    <div className="pt-12 pb-15 w-full h-full px-20 small:mt-10 small:px-4 sm:px-6 md:px-10 lg:px-20 z-10 bg-black">
      <div className="mb-10 small:pb-2 sm:mb-8 medium:mb-10">
        <h1 className="text-4xl font-bold small:text-2xl sm:text-3xl medium:text-4xl text-gray-400">
          Contact me,
        </h1>
        <h1 className="text-4xl font-bold small:text-2xl sm:text-3xl medium:text-4xl text-white">
          let's make magic together.
        </h1>
      </div>

      {/* flex flex-col justify-between gap-20 */}
      <div className="">
        {/* mt-14 flex justify-between gap-30 */}
        <div className="">
          <ContactForm />

          <div className="w-full mt-2 small:mt-16">
            <h1 className="pb-2 text-2xl text-gray-400 font-bold">
              Connect with me:
            </h1>

            <div className="small:mt-1">
              <a
                href="mailto:gideonawortwe3@gmail.com"
                className="text-3xl small:text-[1.8rem] sm:text-3xl medium:text-4xl text-white font-medium"
              >
                gideonawortwe3@gmail.com
              </a>
              <p className="py-3 small:py-4 text-xl text-gray-400 font-medium">
                +233 248 232 548
              </p>
              <p className="mb-27 small:mb-15 text-xl text-gray-400 font-medium">
                Accra, Ghana
              </p>
            </div>

            <SocialLink type={"secondary"} flextype={"secflex"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
