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
      className="relative mt-[100px] small:mt-30 medium:mt-40 md:mt-[200px]"
    >
      <div className="px-20 small:px-4 sm:px-6 md:px-10 lg:px-20">
        <ProjectText />

        <div className="relative md:grid md:grid-cols-2 md:gap-30 small:px-4 lg:px-0">
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

      <Gradients />
      <div
        className={`bg-blue/30 backdrop-blur-md absolute top-0 left-0`}
      ></div>
    </div>
  );
}

export default Projects;
