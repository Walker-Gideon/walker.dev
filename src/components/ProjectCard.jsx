import Button from "./Button";

function ProjectCard() {
  // { imgURL, title, text, onClickView, onClickGithub }
  return (
    <div className="w-full h-full p-4 bg-[#333] rounded-2xl">
      <div className="w-full h-70 p-4 bg-blue-300 rounded-2xl">
        <img src="" alt="" />
      </div>

      <div className="my-6">
        <h1 className="text-3xl font-medium text-blue-400">Title</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          voluptatibus aliquid totam delectus minima, explicabo ad recusandae.
        </p>
      </div>

      <div className="flex gap-4">
        <Button type={"primary"}>View Live</Button>
        <Button type={"secondary"}>Github Repo</Button>
      </div>
    </div>
  );
}

export default ProjectCard;
