import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function SocialLink() {
  const linkStyling = `relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] 
    after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 
    hover:after:scale-x-100`;

  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full font-medium text-lg small:text-xl whitespace-nowrap flex items-center justify-between medium:justify-around md:justify-between text-primary transition-colors duration-300"
    >
      <a
        href="https://www.linkedin.com/in/gideon-awortwe-walker/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkStyling} after:w-20`}
      >
        LinkedIn
      </a>
      <a
        href="https://www.instagram.com/walkerhimself/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkStyling} after:w-24`}
      >
        Instagram
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=100016754147621"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkStyling} after:w-22`}
      >
        Facebook
      </a>
      <a
        href="https://x.com/awortwe_gideon"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkStyling} after:w-24`}
      >
        X (Twitter)
      </a>
    </motion.div>
  );
}

export default SocialLink;
