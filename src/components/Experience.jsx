import React from "react";
import { motion } from "motion/react";

function Experienc() {
  return (
    <div className="mt-40 mb-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-400">Experience</h1>
        <h1 className="text-4xl font-bold text-black">History</h1>
      </div>
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
