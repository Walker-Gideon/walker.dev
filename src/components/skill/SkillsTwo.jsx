import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";

const skillsTwo = [
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

function SkillsTwo() {
  return (
    <div className="flex w-full h- font-medium whitespace-nowrap ">
      <div className="relative w-full h-40 overflow-hidden skill_main decoration">
        {skillsTwo.map((skills, index) => (
          <div
            key={index}
            className={`absolute w-30 text-primary text-center animate_skill_two skill_delay_two${
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

export default SkillsTwo;
