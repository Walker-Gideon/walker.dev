import { FaArrowRightLong } from "react-icons/fa6";
import ExperienceContent from "./ExperienceContent";
import ExperienceHeader from "./ExperienceHeader";
import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

/*
const experience = [
  {
    title: "Web Development",
    subtitle: "Independent Projects",
    date: "2023 - Present",
    text: [
      "Built responsive websites using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Developed interactive interfaces using React and component-based architecture.",
      "Applied version control with Git & GitHub across personal and collaborative projects.",
    ],
  },
  {
    title: "React UI Development",
    subtitle: "Hands-On Practice",
    date: "2024 - Present",
    text: [
      "Built interactive user interfaces using React with reusable components.",
      "Styled and customized responsive designs with Tailwind CSS and utility-first principles.",
      "Applied clean and efficient JavaScript code structures to handle logic and UI states.",
    ],
  },
  {
    title: "Daily Skill Growth",
    subtitle: "Learning by Doing",
    date: "Ongoing",
    text: [
      "Participating in developer communities, tutorials, and GitHub collaboration.",
      "Exploring advanced JavaScript, state management, and UI optimization techniques.",
      "Following UI/UX design patterns to improve user experience and accessibility.",
    ],
  },
];
*/

const experience = [
  {
    title: "Frontend Web Development",
    subtitle: "Independent Projects",
    date: "2023 - Present",
    text: [
      "Built responsive websites using HTML, CSS, JavaScript, and Tailwind.",
      "Created interactive UIs with React and reusable components.",
      "Used Git & GitHub to manage and track project changes.",
    ],
  },
  {
    title: "React & Tailwind Projects",
    subtitle: "Hands-On Practice",
    date: "2024 - Present",
    text: [
      "Built dynamic UIs with React and clean component logic.",
      "Used Tailwind CSS to design modern, responsive layouts.",
      "Wrote scalable code with reusable structure and patterns.",
    ],
  },
  {
    title: "Continuous Growth",
    subtitle: "Learning Daily",
    date: "Ongoing",
    text: [
      "Studying advanced JavaScript and UI performance tips.",
      "Following design principles to improve user experience.",
      "Engaging in tutorials, dev groups, and open learning.",
    ],
  },
];

function Experience() {
  return (
    <div id="experience" className="w-full h-full pt-18 px-4 md:px-20">
      <ExperienceHeader />

      <div className="w-full h-full flex flex-col midmedium:flex-row items-center justify-between gap-10 midmedium:gap-8 px-10 midmedium:px-0">
        {experience.map((exp, index) => (
          <>
            <ExperienceContent
              key={index}
              title={exp.title}
              subtitle={exp.subtitle}
              date={exp.date}
              text={exp.text}
              index={index}
            />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRightLong className="text-3xl text-primary hidden midmedium:block" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Experience;
