import React, { useState } from "react";
import { motion, MotionConfig } from "motion/react";

function Experienc() {
  const [checkClick, setCheckClick] = useState(false);

  const boxVariants = {
    initial: {
      height: "15vh",
    },
    expanded: {
      height: "30vh",
    },
  };

  return (
    <div className="pt-20 px-8 h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-400">Experience</h1>
        <h1 className="text-4xl font-bold text-black">History</h1>
      </div>

      <motion.div
        variants={boxVariants}
        initial="initial"
        animate={checkClick ? "expanded" : "initial"}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          height: { duration: 0.4, ease: "easeOut", delay: 0.2 },
        }}
        className="border-1 border-black rounded-2xl mx-80 my-20 p-8 overflow-hidden"
      >
        <div className="flex items-center justify-between px-8">
          <h1 className="text-2xl">Motion Design</h1>
          <button
            className="border-1 border-black rounded-2xl px-6 py-2 cursor-pointer"
            onClick={() => setCheckClick(!checkClick)}
          >
            Open
          </button>
        </div>

        <div
          className={`mt-8 px-13 text-black text-lg  transition-all duration-500 overflow-hidden ${
            checkClick ? `` : ``
          }`}
        >
          <p
            className={`py-4 transform transition-all duration-500 ${
              checkClick ? `` : ``
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            deleniti dolor non nisi, quas id incidunt eligendi pariatur quos
            unde sapiente temporibus, consequatur in blanditiis. Aperiam
            dignissimos magni id tenetur.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Experienc;

/*
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Experience() {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <motion.div
              className="relative inline-block px-4 py-2 text-base font-medium text-black bg-white rounded-full border border-black overflow-hidden"
              initial={{}}
              whileHover={{}}
            >
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ y: "-100%" }}
                whileHover={{
                  y: 0,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              />
              <motion.span
                className="relative z-10"
                initial={{ color: "#000000" }}
                whileHover={{
                  color: "#FFFFFF",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                {item.name}
              </motion.span>
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
*/
