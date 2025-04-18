import { motion } from "motion/react";

function SocialLink({ type, flextype }) {
  const base = "w-0 font-medium text-[#555] whitespace-nowrap";
  const flexs = " flex justify-between gap-8";
  const styling = {
    primary: base + " absolute bottom-6 right-13 pl-4",
    secondary: base + flexs,
    primflex: flexs + " flex-col",
    secflex: flexs + " flex-row",
  };

  const perspective = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { delay: 0.5 },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={perspective}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styling[type]}
    >
      <div className={styling[flextype]}>
        <a href="#" className="transition-colors hover:text-[#555]">
          <i class="bi bi-linkedin text-2xl text-blue-500"></i>
        </a>

        <a href="#" className="transition-colors hover:text-[#555]">
          <i class="bi bi-instagram text-2xl text-red-500"></i>
        </a>

        <a href="#" className="transition-colors hover:text-[#555]">
          <i class="bi bi-facebook text-2xl text-white"></i>
        </a>

        <a href="#" className="transition-colors hover:text-[#555]">
          <i class="bi bi-twitter-x text-2xl text-black"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default SocialLink;
