import ContactForm from "./ContactForm";
import Footer from "./Footer";
import SocialLink from "./SocialLink";

function Contact() {
  return (
    <div className="pt-20 h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#868484]">Contact me,</h1>
        <h1 className="text-4xl font-medium text-white">
          let's make magic together.
        </h1>
      </div>

      <div className="mt-20 flex justify-between gap-40">
        <ContactForm />

        <div className="w-full mt-2">
          <h1 className="text-xl text-[#555] font-medium">Get in touch</h1>
          <h1 className="my-3 text-3xl text-White font-medium">
            gideonawortwe3@gmail.com
          </h1>
          <p className="mb-1 text-xl text-[#555] font-medium">
            +233 248 232 548
          </p>
          <p className="mb-20 text-xl text-[#555] font-medium">Accra, Ghana</p>

          <SocialLink type={"secondary"} flextype={"secflex"} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
