import Gradients from "./Gradients";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="relative">
      <div className="pt-50 small:pt-30 sm:pt-35 medium:pt-45 md:pt-50 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="mb-10 small:mb-6 sm:mb-8 medium:mb-10">
          <h1 className="text-4xl small:text-2xl sm:text-3xl medium:text-4xl font-bold text-primary">
            Selected
          </h1>
          <h1 className="text-4xl small:text-2xl sm:text-3xl medium:text-4xl font-bold text-blueprime">
            works
          </h1>
        </div>

        <div className="relative md:grid md:grid-cols-2 md:gap-30">
          <div>
            <ProjectCard />
          </div>

          <div className="md:pt-75">
            <ProjectCard />
          </div>

          <div className="md:relative md:-top-71">
            <ProjectCard />
          </div>

          <div>
            <ProjectCard />
          </div>

          <div className="md:relative md:-top-71">
            <ProjectCard />
          </div>

          <div>
            <ProjectCard />
          </div>
        </div>
      </div>

      <Gradients />
    </div>
  );
}

export default Projects;
