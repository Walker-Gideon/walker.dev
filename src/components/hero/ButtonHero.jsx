import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";
import { Link } from "react-scroll";

function ButtonHero() {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=""
    >
      <Link
        to="contact"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="border-2 rounded-full border-primary px-14 py-4 text-sm text-center text-white transition-all duration-300 hover:bg-primary hover:scale-105 font-medium cursor-pointer"
      >
        Get in touch
      </Link>
    </motion.div>
  );
}

export default ButtonHero;
