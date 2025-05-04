import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="pt-50 px-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-400">Selected</h1>
        <h1 className="text-4xl font-bold text-black">works</h1>
      </div>

      <div className="relative grid grid-cols-2 gap-30">
        <div className="h-222">
          <ProjectCard />
        </div>
        <div className="pt-75 h-296">
          <ProjectCard />
        </div>
        <div className="relative -top-71 h-222">
          <ProjectCard />
        </div>
        <div className="h-221">
          <ProjectCard />
        </div>
        <div className="relative -top-71 h-222">
          <ProjectCard />
        </div>
        <div className="h-221">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
