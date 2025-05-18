import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function ButtonHero() {
  return (
    <motion.button
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="border-2 rounded-full border-primary px-8 py-4 text-sm text-center text-white transition-all duration-300 hover:bg-primary hover:scale-105 font-medium cursor-pointer"
    >
      Download CV
    </motion.button>
  );
}

export default ButtonHero;
