import { FaArrowRightLong } from "react-icons/fa6";
import ExperienceContent from "./ExperienceContent";
import ExperienceHeader from "./ExperienceHeader";
import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

const experience = [
  {
    title: "Frontend Web Development",
    subtitle: "Self-Taught & Project-Based",
    date: "2023 - Present",
    text: [
      "Built responsive websites using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Developed interactive interfaces using React and component-based architecture.",
      "Applied version control with Git & GitHub across personal and collaborative projects.",
    ],
  },
  {
    title: "React & Tailwind CSS Projects",
    subtitle: "Personal Projects & Practice Work",
    date: "2024 - Present",
    text: [
      "Built interactive user interfaces using React with reusable components.",
      "Applied clean and efficient JavaScript code structures to handle logic and UI states.",
      "Styled and customized responsive designs with Tailwind CSS and utility-first principles.",
    ],
  },
  {
    title: "Continuous Learning & Practice",
    subtitle: "Building Real-World Skills Daily",
    date: "Ongoing",
    text: [
      "Exploring advanced JavaScript, state management, and UI optimization techniques.",
      "Following UI/UX design patterns to improve user experience and accessibility.",
      "Participating in developer communities, tutorials, and GitHub collaboration.",
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
