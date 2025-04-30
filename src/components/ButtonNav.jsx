import { motion } from "motion/react";
import { useState } from "react";

export default function ButtonNav({ showMenu }) {
  const [mouseBehaviour, setMouseBehaviour] = useState(false);

  const btnVariants = {
    initial: {
      y: "20",
    },
    display: {
      y: "0",
    },
  };

  return (
    <motion.button
      className="relative w-full h-full rounded-full border-2 overflow-hidden"
      animate={{ y: showMenu ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-full h-full bg-blue-400 text-white px-5 py-1.5 text-xl text-center">
        <div className="flex item-center justify-center">
          <p className="text-center">menu</p>
        </div>
      </div>

      <div className="absolute top-[100%] w-full h-full bg-white  text-black px-5 py-1.5 text-xl text-center">
        <div className="flex item-center justify-center">
          <p className="text-center">close</p>
        </div>
      </div>
    </motion.button>
  );
}

/*
<motion.button
      className={`relative flex flex-col items-center justify-center px-8 py-3 text-lg font-medium rounded-full border-2 border-black overflow-hidden cursor-pointer ${
        mouseBehaviour === true ? ` bg-black text-white` : `bg-white text-black`
      }`}
      // initial={{}}
      // whileHover={{ y: "20" }}

      onMouseEnter={() => setMouseBehaviour(true)}
      onMouseLeave={() => setMouseBehaviour(false)}
      animate={mouseBehaviour ? "initial" : "display"}
    >
      {/* <motion.div
        className="absolute inset-0 bg-black"
        initial={{ y: "-100%" }}
        whileHover={{
          y: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      /> 

      <motion.span>Get in touch</motion.span>

      <motion.span>Get in touch</motion.span>
    </motion.button>
    */
