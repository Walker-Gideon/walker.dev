import ExperienceContent from "./ExperienceContent";
import ExperienceHeader from "./ExperienceHeader";

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

function Experience() {
  return (
    <div id="experience" className="w-full h-full pt-18 px-4 md:px-20">
      <ExperienceHeader />

      <div className="w-full h-full flex flex-col midmedium:grid midmedium:grid-cols-3 items-center justify-between gap-10 midmedium:gap-20 px-10 md:px-0 midmedium:px-8">
        {experience.map((exp, index) => (
          <ExperienceContent
            key={index}
            title={exp.title}
            subtitle={exp.subtitle}
            date={exp.date}
            text={exp.text}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
