import { AnimatePresence, motion } from "motion/react";
import ButtonNav from "./ButtonNav";

function MenuNav({ showMenu }) {
  const boxVariants = {
    initial: {
      width: 42,
      height: 42,
      x: "1",
    },
    expanded: {
      width: "62vw",
      height: "80vh",
      x: "0",
    },
  };

  // const perspective = {
  //   initial: {
  //     opacity: 0,
  //   },
  //   enter: {
  //     opacity: 1,
  //     transition: { delay: 0.5 },
  //   },
  //   exit: {
  //     opacity: 0,
  //   },
  // };

  const linkStyling = `relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] 
    after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 
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
      className="bg-blue/30 backdrop-blur-md rounded-4xl overflow-hidden"
    >
      <div className="relative w-full h-full flex flex-col justify-between gap-6 px-8 py-6 rounded-2xl">
        <p className="mt-14 text-lg font-bold text-gray-300">Menu</p>

        <div className="w-50 h-85 small:h-60 sm:h-85 flex flex-col justify-between text-4xl small:text-2xl sm:text-4xl font-medium text-white">
          <a href="#/" className={`${linkStyling} after:w-25`}>
            Home
          </a>
          <a href="#projects" className={`${linkStyling} after:w-34`}>
            Projects
          </a>
          <a href="#skills" className={`${linkStyling} after:w-33`}>
            Skill set
          </a>
          <a href="#about" className={`${linkStyling} after:w-26`}>
            About
          </a>
          <a href="#contact" className={`${linkStyling} after:w-33`}>
            Contact
          </a>
        </div>

        <div>
          <ButtonNav />
        </div>
      </div>
    </motion.aside>
  );
}

export default MenuNav;
