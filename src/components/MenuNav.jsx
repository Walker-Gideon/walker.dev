import { AnimatePresence, motion } from "motion/react";
import SocialLink from "./SocialLink";

function MenuNav({ showMenu }) {
  const boxVariants = {
    initial: {
      width: 0,
      height: 0,
      backgroundColor: "#4f46e5",
    },
    expanded: {
      width: "80vw",
      height: "95vh",
      backgroundColor: "#10b981",
    },
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
    <motion.aside
      variants={boxVariants}
      initial="initial"
      animate={showMenu ? "expanded" : "initial"}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        width: { duration: 0.4, ease: "easeOut", delay: 0.2 },
        height: { duration: 0.4, ease: "easeOut", delay: 0.2 },
      }}
      className="absolute top-3 right-1 mx-4 bg-white text-black rounded-2xl z-0"
    >
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative flex flex-col px-6 pt-4"
          >
            <p className="mt-2 pl-10 text-sm font-bold text-gray-300">Menu</p>

            <div className="flex flex-col justify-between">
              <div className="w-0 mt-6 mb-50 pl-8 flex flex-col gap-6 text-3xl font-medium text-[#333] whitespace-nowrap">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Skill set</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>

              <SocialLink type={"primary"} flextype={"primflex"} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}

export default MenuNav;
