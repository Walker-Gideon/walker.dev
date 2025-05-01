import Button from "./Button";

function ProjectCard({ projectNum, source }) {
  // { imgURL, title, text, onClickView, onClickGithub }
  return (
    <div className="mb-10">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-90 px-4 bg-blue-300 rounded-t-3xl">
          <img src={source} alt="Project image" />
        </div>

        <div className="flex items-center justify-between p-4 bg-[#242424]">
          <p className="text-gray-300">{projectNum}</p>

          <Button type={"secondary"}>
            Visit <span className="">&darr;</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
