import { FaArrowRightLong } from "react-icons/fa6";
import ExperienceContent from "./ExperienceContent";
import ExperienceHeader from "./ExperienceHeader";

const experience = [
  {
    title: "HTML, CSS & Javascript",
    subtitle: "Lorem ipsum dolor",
    date: "20XX - Present",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    ],
  },
  {
    title: "HTML, CSS & Javascript",
    subtitle: "Lorem ipsum dolor",
    date: "20XX - Present",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    ],
  },
  {
    title: "HTML, CSS & Javascript",
    subtitle: "Lorem ipsum dolor",
    date: "20XX - Present",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    ],
  },
];

function Experience() {
  return (
    <div className="pt-20 pb-15 small:pt-0 md:pt-10 midmedium:pt-15 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 h-full">
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
              <FaArrowRightLong className="text-6xl text-primary small:hidden midmedium:block" />
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
