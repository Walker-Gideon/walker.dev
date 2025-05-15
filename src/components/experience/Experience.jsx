import ExperienceContent from "./ExperienceContent";

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
    <div className="pt-20 pb-15 small:pt-0 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 h-full">
      <div className="pb-10">
        <h1 className="text-4xl small:text-2xl sm:text-3xl medium:text-4xl font-bold text-primary">
          Experience
        </h1>
        <h1 className="text-4xl small:text-2xl sm:text-3xl medium:text-4xl font-bold text-blueprime">
          History
        </h1>
      </div>

      <div className="flex small:flex-col midmedium:flex-row items-center justify-between small:gap-20 md:gap-35 small:px-4 midmedium:px-20 lg:px-0">
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
