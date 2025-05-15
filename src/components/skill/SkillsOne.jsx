import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

import { FaGitAlt } from "react-icons/fa";

const skillsOne = [
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
];

function SkillsOne() {
  return (
    <div className="flex w-full h- font-medium whitespace-nowrap ">
      <div className="relative w-full h-40 overflow-hidden skill_main decoration">
        {skillsOne.map((skills, index) => (
          <div
            key={index}
            className={`absolute w-30 text-primary text-center animate_skill_one skill_delay${
              index + 1
            }`}
          >
            <div className="flex flex-col items-center">
              <p className="text-8xl">{skills.icon}</p>
              <ul>
                <li className="text-3xl">{skills.text}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsOne;
