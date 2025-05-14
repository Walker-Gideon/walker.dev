function ProjectCard({ title, date, imageUrl, summaryOne, summaryTwo }) {
  return (
    <div className="mb-10 small:mb-25 sm:mb-30 medium:mb-40 md:mb-10 cursor-pointer">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-90 flex items-center justify-center bg-black text-white rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="w-full h-full bg-blue/30 backdrop-blur-md">
            <img src={imageUrl} alt="Project image" />
          </div>
        </div>

        <div className="text-left pt-4 px-4 small:pt-1 text-xl medium:pt-3 md:pt-4">
          <div className="flex items-center justify-between">
            <p className="text-blueprime text-lg small:text-xl sm:text-2xl md:text-xl">
              {title}
            </p>

            <button className="text-primary text-lg small:text-xl sm:text-2xl md:text-xl cursor-pointer transition-colors duration-300  group-hover:text-blue">
              View{" "}
              <span>
                <i class="bi bi-arrow-up-right-circle-fill text-primary transition-colors duration-300 hover:text-blue"></i>
              </span>
            </button>
          </div>
          <p className="text-primary text-lg small:text-xl sm:text-2xl md:text-lg">
            {date}
          </p>

          <p className="py-3 small:py-2 md:py-3">{summaryOne}</p>
          <p>{summaryTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
