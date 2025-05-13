import { motion } from "motion/react";

export default function ButtonNav() {
  return (
    <motion.button className="relative w-full small:w-full sm:w-full md:w-60 flex flex-col items-center justify-center px-8 py-4 text-lg font-medium rounded-full border-2 border-primary transition-colors duration-300 hover:bg-primary overflow-hidden cursor-pointer  text-white whitespace-nowrap">
      <motion.span>Get in touch</motion.span>
    </motion.button>
  );
}
