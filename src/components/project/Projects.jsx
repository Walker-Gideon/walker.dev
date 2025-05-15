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
  },
  {
    title: "Projet2",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    padding: "md:pt-50",
  },
  {
    title: "Projet3",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    top: "md:relative md:-top-60",
  },
  {
    title: "Projet4",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
  },
  {
    title: "Projet5",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
    top: "md:relative md:-top-60",
  },
  {
    title: "Projet6",
    date: "Month20XX",
    imageUrl: "#",
    link: "/",
    summaryOne: "Itaque ipsam dolorem mollitia cumque perferendis optio alias",
    summaryTwo:
      "modi eos nostrum architecto corporis fugit? Officiis, eum. velit iste quod porro inventore",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="relative w-full h-full pb-10 pt-30 small:pt-25 medium:pt-30 px-20 small:px-4 sm:px-8 lg:px-20"
    >
      <ProjectText />

      <div className="relative md:grid md:grid-cols-2 md:gap-30 small:px-4 lg:px-20">
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

      <Gradients />
    </div>
  );
}

export default Projects;
