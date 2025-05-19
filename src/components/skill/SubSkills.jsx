import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { fadeIn } from "../motion/variants";
import { motion } from "motion/react";

const skills = [
  {
    icon: <FaHtml5 />,
    text: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    text: "CSS",
  },
  {
    icon: <RiJavascriptFill />,
    text: "JS",
  },
  {
    icon: <FaGitAlt />,
    text: "Git",
  },
  {
    icon: <FaReact />,
    text: "React.js",
  },
  {
    icon: <RiTailwindCssFill />,
    text: "Tailwind",
  },
  {
    icon: <FaGithub />,
    text: "GitHub",
  },
  {
    icon: <TbBrandFramerMotion />,
    text: "Framer Motion",
  },
];

export default function SubSkills() {
  return (
    <div className=" ">
      <div className="grid grid-cols-3 gap-6 px-2">
        {skills.map((skills, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="text-primary text-center"
          >
            <div className="flex flex-col items-center">
              <p className="text-6xl">{skills.icon}</p>
              <ul>
                <li className="text-xl">{skills.text}</li>
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
