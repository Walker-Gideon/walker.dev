import { motion } from "motion/react";

export default function ButtonNav() {
  return (
    <motion.button className="relative flex flex-col items-center justify-center px-8 py-3 text-lg font-medium rounded-full border-2 border-black overflow-hidden cursor-pointer bg-black text-white">
      <motion.span>Get in touch</motion.span>
    </motion.button>
  );
}
