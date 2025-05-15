import SocialLink from "../ui/SocialLink";
import Info from "./Info";

function ContactInfo() {
  return (
    <div className="w-full md:w-100 lg:w-200 mt-2 small:mt-16 md:mt-4">
      <h1 className="pb-2 text-2xl text-primary font-bold">Connect with me:</h1>

      <Info />
      <SocialLink />
    </div>
  );
}

export default ContactInfo;
