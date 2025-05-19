import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

export default function SkillsHeader() {
  return (
    <div className="pb-8">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl font-bold text-primary"
      >
        Skill
      </motion.h1>
      <motion.h1
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl font-bold text-blueprime"
      >
        Sets
      </motion.h1>
    </div>
  );
}
