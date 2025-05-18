import { FaArrowRightLong } from "react-icons/fa6";
import ExperienceContent from "./ExperienceContent";
import ExperienceHeader from "./ExperienceHeader";
import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";

const experience = [
  {
    title: "Frontend Web Development",
    subtitle: "Self-Taught & Project-Based Learning",
    date: "2023 - Present",
    text: [
      "Built responsive websites using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Developed interactive interfaces using React and component-based architecture.",
      "Applied version control with Git & GitHub across personal and collaborative projects."
    ],
  },
  {
  title: "React & Tailwind CSS Projects",
  subtitle: "Personal Projects & Practice Work",
  date: "2024 - Present",
  text: [
    "Built interactive user interfaces using React with reusable components.",
    "Applied clean and efficient JavaScript code structures to handle logic and UI states.",
    "Styled and customized responsive designs with Tailwind CSS and utility-first principles."
  ],
},
  {
    title: "Continuous Learning & Practice",
    subtitle: "Building Real-World Skills Daily",
    date: "Ongoing",
    text: [
      "Exploring advanced JavaScript, state management, and UI optimization techniques.",
      "Following UI/UX design patterns to improve user experience and accessibility.",
      "Participating in developer communities, tutorials, and GitHub collaboration."
    ],
  },
];

function Experience() {
  return (
    <div
      id="experience"
      className="w-full h-full pb-10 pt-30 small:pt-25 medium:pt-30 px-20 small:px-4 sm:px-8 lg:px-20"
    >
      <ExperienceHeader />

      <div className="flex small:flex-col midmedium:flex-row items-center justify-between small:gap-20 midmedium:gap-10 small:px-4 md:px-20 midmedium:px-6 lg:px-0">
        {experience.map((exp, index) => (
          <>
            <ExperienceContent
              key={index}
              title={exp.title}
              subtitle={exp.subtitle}
              date={exp.date}
              text={exp.text}
            />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRightLong className="text-6xl text-primary small:hidden midmedium:block" />
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
