import ContactForm from "./ContactForm";
import Footer from "./Footer";
import SocialLink from "./SocialLink";

function Contact() {
  return (
    <div className="pt-12 pb-15 w-full h-full px-20 z-10 bg-black">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-400">Contact me,</h1>
        <h1 className="text-4xl font-bold text-white">
          let's make magic together.
        </h1>
      </div>

      <div className="flex flex-col justify-between gap-20">
        <div className="mt-14 flex justify-between gap-40">
          <ContactForm />

          <div className="w-full mt-2">
            <h1 className="text-2xl text-gray-400 font-bold">
              Connect with me:
            </h1>
            <h1 className="my-3 text-3xl text-white font-medium">
              gideonawortwe3@gmail.com
            </h1>
            <p className="mb-1 text-xl text-gray-400 font-medium">
              +233 248 232 548
            </p>
            <p className="mb-27 text-xl text-gray-400 font-medium">
              Accra, Ghana
            </p>

            <SocialLink
              type={"secondary"}
              flextype={"secflex"}
              facebookColor={` text-blue-500`}
            />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Contact;
