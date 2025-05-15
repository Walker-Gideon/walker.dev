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

      <div className="flex small:flex-col midmedium:flex-row items-center justify-between small:gap-20 md:gap-30 small:px-4 midmedium:px-20 lg:px-0">
        {experience.map((exp, index) => (
          <div key={index} className="">
            <ExperienceContent
              title={exp.title}
              subtitle={exp.subtitle}
              date={exp.date}
              text={exp.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
