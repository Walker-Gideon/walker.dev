import { AnimatePresence, motion } from "motion/react";
import SocialLink from "./SocialLink";
import ButtonNav from "./ButtonNav";

function MenuNav({ showMenu }) {
  const boxVariants = {
    initial: {
      width: 42,
      height: 42,
      x: "1",
    },
    expanded: {
      width: "80vw",
      height: "85vh",
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

  const linkStyling = `relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] 
    after:bg-[#0c2622] after:scale-x-0 after:transition-transform after:duration-300 
    hover:after:scale-x-100`;

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
      className="bg-blue-300 text-black rounded-4xl overflow-hidden"
    >
      <AnimatePresence>
        <motion.div
          variants={perspective}
          initial="initial"
          animate="enter"
          exit="exit"
          className="relative w-[80vw] h-[85vh] flex flex-col justify-between px-8 py-6 rounded-2xl"
        >
          <p className="mt-14 text-lg font-bold text-gray-400">Menu</p>

          <div className="h-98 flex flex-col justify-between gap-6 text-4xl font-medium text-black">
            <a href="#" className={`${linkStyling} after:w-25`}>
              Home
            </a>
            <a href="#" className={`${linkStyling} after:w-34`}>
              Projects
            </a>
            <a href="#" className={`${linkStyling} after:w-33`}>
              Skill set
            </a>
            <a href="#" className={`${linkStyling} after:w-26`}>
              About
            </a>
            <a href="#" className={`${linkStyling} after:w-33`}>
              Contact
            </a>
          </div>

          <div className="w-50">
            <ButtonNav />
          </div>

          <SocialLink
            type={"primary"}
            flextype={"primflex"}
            facebookColor={` text-white`}
          />
        </motion.div>
      </AnimatePresence>
    </motion.aside>
  );
}

export default MenuNav;
