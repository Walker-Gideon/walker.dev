import { motion } from "motion/react";
import ButtonNav from "./ButtonNav";
import Links from "./Links";

function MenuNav({ showMenu, setShowMenu }) {
  const boxVariants = {
    initial: {
      width: 52,
      height: 52,
      x: "1",
    },
    expanded: {
      width: "62vw",
      height: "80vh",
      x: "0",
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
      className="bg-blue/30 backdrop-blur-md rounded-4xl overflow-hidden"
    >
      <div className="relative w-full h-full flex flex-col justify-between gap-6 px-4 md:px-6 py-6 rounded-2xl overflow-hidden">
        <p className="pt-8 text-sm font-bold text-gray-300">Menu</p>
        <Links setShowMenu={setShowMenu} />
        <ButtonNav setShowMenu={setShowMenu} />
      </div>
    </motion.aside>
  );
}

export default MenuNav;
