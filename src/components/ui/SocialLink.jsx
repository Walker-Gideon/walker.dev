import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

const socials = [
  {
    text: "LinkedIn",
    width: `after:w-20`,
    link: "https://www.linkedin.com/in/gideon-awortwe-walker/",
  },
  {
    text: "Instagram",
    width: `after:w-24`,
    link: "https://www.instagram.com/walkerhimself/?hl=en",
  },
  {
    text: "Facebook",
    width: `after:w-22`,
    link: "https://web.facebook.com/profile.php?id=100016754147621",
  },
  {
    text: "X (Twitter)",
    width: `after:w-24`,
    link: "https://x.com/awortwe_gideon",
  },
];

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
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkStyling} ${social.width}`}
        >
          {social.text}
        </a>
      ))}
    </motion.div>
  );
}

export default SocialLink;
