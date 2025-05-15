import SocialLink from "../ui/SocialLink";
import Info from "./Info";

function ContactInfo() {
  return (
    <div className="w-full md:w-100 lg:w-200 mt-2 small:mt-16 md:mt-4">
      <h1 className="pb-2 text-2xl text-primary font-bold">Connect with me:</h1>

      <div className="flex flex-col justify-between small:h-50 md:h-100 midmedium:h-70">
        <Info />
        <SocialLink />
      </div>
    </div>
  );
}

export default ContactInfo;
