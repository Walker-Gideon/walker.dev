import Gradients from "../ui/Gradients";
import ProjectCard from "./ProjectCard";
import ProjectText from "./ProjectText";

const projects = [
  {
    title: "Projet1",
    date: "Month20XX",
    imageUrl: "#",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    padding: "mb-14",
  },
  {
    title: "Projet2",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    padding: "md:pt-40 mb-14",
  },
  {
    title: "Projet3",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    top: "md:relative md:-top-56 mb-14",
  },
  {
    title: "Projet4",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    top: "md:relative md:-top-14 mb-14",
  },
  {
    title: "Projet5",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    top: "md:relative md:-top-70 mb-14",
  },
  {
    title: "Projet6",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    top: "md:relative md:-top-26",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="relative w-full h-full pt-18 px-4 md:px-20 overflow-hidden"
    >
      <ProjectText />

      <div className="relative md:grid md:grid-cols-2 md:gap-10 lg:gap-25 px-2 md:px-0 lg:px-20">
        {projects.map((project, index) => (
          <div key={index} className={`${project.padding} ${project.top}`}>
            <ProjectCard
              title={project.title}
              date={project.date}
              imageUrl={project.imageUrl}
              link={project.link}
              summaryOne={project.summaryOne}
              summaryTwo={project.summaryTwo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
