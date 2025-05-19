import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

function AboutPara() {
  return (
    <div>
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-4xl text-left md:text-center font-medium uppercase md:mb-10 mb-6 text-blueprime"
      >
        Behind the Code
      </motion.h1>

      <div className="text-xl text-white mb-14">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          My journey into front-end development started with a simple curiosity
          for how websites worked — and quickly turned into a passion for
          building clean, functional, and engaging user experiences. I love
          turning ideas into interactive designs using tools like React,
          Tailwind CSS, and JavaScript.
        </motion.p>
        <br />
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          What drives me is the constant learning and problem-solving that comes
          with being a developer. I'm committed to improving my skills daily,
          writing code that’s both efficient and readable, and creating
          interfaces that feel just right for users.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutPara;
