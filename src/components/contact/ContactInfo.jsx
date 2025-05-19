import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";
import SocialLink from "../ui/SocialLink";
import Info from "./Info";

function ContactInfo() {
  return (
    //md:w-100 lg:w-200
    <div className="w-full md:w-100 mt-2">
      <motion.h1
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="pb-2 text-2xl text-primary font-bold"
      >
        Connect with me:
      </motion.h1>

      <div className="flex flex-col justify-between h-45 md:h-68 lg:h-60">
        <Info />
        <SocialLink />
      </div>
    </div>
  );
}

export default ContactInfo;
