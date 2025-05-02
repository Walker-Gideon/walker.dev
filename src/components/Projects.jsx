import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="pt-15 mb-6 px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-400">Selected</h1>
        <h1 className="text-4xl font-bold text-black">works</h1>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <ProjectCard projectNum={"Project 1"} />
        <ProjectCard projectNum={"Project 2"} />
        <ProjectCard projectNum={"Project 3"} />
        <ProjectCard projectNum={"Project 4"} />
        <ProjectCard projectNum={"Project 5"} />
        <ProjectCard projectNum={"Project 6"} />
      </div>
    </div>
  );
}

export default Projects;
