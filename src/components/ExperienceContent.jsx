import { motion } from "motion/react";

function ExperienceContent({ check, onCheck, title }) {
  const boxVariants = {
    initial: {
      height: "12vh",
    },
    expanded: {
      height: "20vh",
    },
  };

  return (
    <motion.div
      variants={boxVariants}
      initial="initial"
      animate={check ? "expanded" : "initial"}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        height: { duration: 0.4, ease: "easeOut", delay: 0.2 },
      }}
      className="border-b border-black py-8 small:py-2 small:mb-5 medium:mb-8 md:mb-0 md:py-8 overflow-hidden"
      onMouseEnter={onCheck}
      onMouseLeave={onCheck}
    >
      <div className="flex items-center small:text-center small:justify-center md:justify-between px-4">
        <h1 className="text-2xl small:text-2xl medium:text-3xl">{title}</h1>
      </div>

      <div className="mt-8 small:mt-1 medium:mt-2 md:mt-4 px-13 small:px-0.5 medium:px-4 md:px-10 text-black text-lg medium:text-xl md:text-lg transition-all duration-500 overflow-hidden">
        <p className="py-4 small:py-1 medium:py-2 md:py-1 transform transition-all duration-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti
          dolor non nisi, quas id incidunt eligendi pariatur quos unde sapiente
          temporibus, consequatur in blanditiis. Aperiam dignissimos magni id
          tenetur.
        </p>
      </div>
    </motion.div>
  );
}

export default ExperienceContent;
