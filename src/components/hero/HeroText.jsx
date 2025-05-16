import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function HeroText() {
  return (
    <div className="md:mb-15">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl small:text-2xl medium:text-3xl text-blueprime font-medium uppercase"
      >
        Fronted-end Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="font-bold text-8xl small:text-5xl medium:text-8xl font-sans py-4 small:py-2 md:py-6 text-primary"
      >
        Gideon Awortwe
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-2xl text-white mb-10"
      >
        I build responsive, user-friendly websites with React, Tailwind CSS, and
        JavaScript — turning ideas into clean, functional code.
      </motion.p>
    </div>
  );
}

export default HeroText;
