import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function HeroText() {
  return (
    //md:mb-15
    <div className="">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl text-blueprime font-medium uppercase"
      >
        Fronted-end Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }} //small:py-2 md:py-6
        className="font-bold text-xl font-sans py-4 text-primary"
      >
        Gideon Awortwe
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-white mb-10"
      >
        I build responsive, user-friendly websites with React, Tailwind CSS, and
        JavaScript — turning ideas into clean, functional code.
      </motion.p>
    </div>
  );
}

export default HeroText;
