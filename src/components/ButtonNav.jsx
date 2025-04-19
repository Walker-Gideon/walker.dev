import { motion } from "motion/react";

export default function ButtonNav() {
  return (
    <motion.div
      className="relative inline-block px-8 py-3 text-lg font-medium text-black bg-white rounded-full border border-black overflow-hidden"
      initial={{}}
      whileHover={{}}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ y: "-100%" }}
        whileHover={{
          y: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      />
      <motion.span
        className="relative z-10"
        initial={{ color: "#000000" }}
        whileHover={{
          color: "#FFFFFF",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        Get in touch
      </motion.span>
    </motion.div>
  );
}
