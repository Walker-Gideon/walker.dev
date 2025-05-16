import { motion } from "motion/react";
import ButtonNav from "./ButtonNav";
import Links from "./Links";

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
        <Links />
        <ButtonNav />
      </div>
    </motion.aside>
  );
}

export default MenuNav;
