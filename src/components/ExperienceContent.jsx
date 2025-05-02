import { motion } from "motion/react";

function ExperienceContent({ check, onCheck, title }) {
  const boxVariants = {
    initial: {
      height: "15vh",
    },
    expanded: {
      height: "30vh",
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
      className="border-b border-black py-8 overflow-hidden"
      onMouseEnter={onCheck}
      onMouseLeave={onCheck}
    >
      <div className="flex items-center justify-between px-4">
        <h1 className="text-2xl">{title}</h1>
      </div>

      <div className="mt-8 px-13 text-black text-lg  transition-all duration-500 overflow-hidden">
        <p className="py-4 transform transition-all duration-500">
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
