function ProjectCard({ onClick }) {
  // { imgURL, title, text, onClickView, onClickGithub }
  return (
    <button className="mb-10 cursor-pointer" onClick={onClick}>
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-160 flex items-center justify-center px-4 bg-black text-white rounded-3xl">
          {/* <img src={source} alt="Project image" /> */}
          <p>Projet</p>
        </div>

        <div className="text-left pt-4 text-3xl">
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="py-5">
            Itaque ipsam dolorem mollitia cumque perferendis optio alias
          </p>
          <p>
            modi eos nostrum architecto corporis fugit? Officiis, eum. velit
            iste quod porro inventore
          </p>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
