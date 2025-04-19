import { AnimatePresence, motion } from "motion/react";
import SocialLink from "./SocialLink";
import ButtonNav from "./ButtonNav";

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
      className="absolute top-3 right-1 mx-4 bg-white text-black rounded-2xl  z-0"
    >
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative h-[95vh] flex flex-col justify-between px-6 py-6 rounded-2xl"
          >
            <p className="mt-2 pl-10 text-sm font-bold text-gray-300">Menu</p>

            <div className="h-100 pl-8 flex flex-col justify-between gap-6 text-3xl font-medium text-[#333]">
              <a href="#">Home</a>
              <a href="#">Projects</a>
              <a href="#">Skill set</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>

            <ButtonNav />
            <SocialLink type={"primary"} flextype={"primflex"} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}

export default MenuNav;
