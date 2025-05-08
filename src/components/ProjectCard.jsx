function ProjectCard({ onClick }) {
  // { imgURL, title, text, onClickView, onClickGithub }
  return (
    <button
      className="mb-10 small:mb-25 sm:mb-30 medium:mb-40 md:mb-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-160 small:h-100 sm:h-130 medium:h-160 flex items-center justify-center px-4 bg-black text-white rounded-3xl">
          {/* <img src={source} alt="Project image" /> */}
          <p>Projet</p>
        </div>

        <div className="text-left pt-4 small:pt-1 text-3xl small:text-3xl medium:pt-3 md:pt-4">
          <p className="text-lg small:text-xl sm:text-2xl md:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="py-5 small:py-3 medium:py-4 md:py-5">
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
