import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function HeroText() {
  return (
    <div>
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-2xl text-blueprime font-medium uppercase"
      >
        Fronted-end Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="font-bold text-5xl md:text-6xl whitespace-nowrap font-sans py-2 text-primary"
      >
        Gideon Awortwe
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl text-white mb-10"
      >
        I build responsive, user-friendly websites with React, Tailwind CSS, and
        JavaScript — turning ideas into clean, functional code.
      </motion.p>
    </div>
  );
}

export default HeroText;
