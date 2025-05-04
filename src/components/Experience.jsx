import React, { useState } from "react";
import ExperienceContent from "./ExperienceContent";

function Experienc() {
  const [checkClick, setCheckClick] = useState(false);
  const [checkFrameWork, setCheckFrameWork] = useState(false);
  const [checkCss, setCheckCss] = useState(false);
  const [checkGit, setCheckGit] = useState(false);

  return (
    <div className="mt-20 mb-10 px-8 h-screen">
      <div className="pb-10">
        <h1 className="text-4xl font-bold text-gray-400">Experience</h1>
        <h1 className="text-4xl font-bold text-black">History</h1>
      </div>

      <div className="">
        <ExperienceContent
          check={checkClick}
          onCheck={() => setCheckClick(!checkClick)}
          title="HTML, CSS & Javascript"
        />
        <ExperienceContent
          check={checkFrameWork}
          onCheck={() => setCheckFrameWork(!checkFrameWork)}
          title="React.js as Javascript framework"
        />
        <ExperienceContent
          check={checkCss}
          onCheck={() => setCheckCss(!checkCss)}
          title="Tailwind Css"
        />
        <ExperienceContent
          check={checkGit}
          onCheck={() => setCheckGit(!checkGit)}
          title="Git & GitHub"
        />
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
