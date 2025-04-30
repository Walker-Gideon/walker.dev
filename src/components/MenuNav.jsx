import { AnimatePresence, motion } from "motion/react";
import SocialLink from "./SocialLink";
import ButtonNav from "./ButtonNav";

function MenuNav({ showMenu }) {
  const boxVariants = {
    initial: {
      // width: 48,
      // height: 48,
      x: "-100",
    },
    expanded: {
      // width: "80vw",
      // height: "85vh",
      x: "0",
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
      // variants={boxVariants}
      // initial="initial"
      // animate={showMenu ? "expanded" : "initial"}
      // transition={{
      //   duration: 0.8,
      //   ease: "easeOut",
      //   width: { duration: 0.4, ease: "easeOut", delay: 0.2 },
      //   height: { duration: 0.4, ease: "easeOut", delay: 0.2 },
      // }}
      className={`absolute top-26 mx-4 rounded-2xl bg-red-950 text-white z-0 overflow-hidden transition-all duration-500 `}
    >
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
            className="relative w-[80vw] h-[85vh] flex flex-col justify-between px-8 py-6 rounded-2xl"
          >
            {/* mt-2 text-sm font-bold text-gray-300 */}
            <p className="">Menu</p>

            {/* h-105 flex flex-col justify-between gap-6 text-3xl font-medium text-white */}
            <div className="">
              <a href="#">Home</a>
              <a href="#">Projects</a>
              <a href="#">Skill set</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>

            <div className="w-50">
              <ButtonNav />
            </div>
            {/* <SocialLink type={"primary"} flextype={"primflex"} /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}

export default MenuNav;
