function ProjectCard({ title, date, imageUrl, link, summaryOne, summaryTwo }) {
  return (
    <div className="mb-10 small:mb-25 medium:mb-30 md:mb-10">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full h-90 small:h-70 medium:h-90 flex items-center justify-center rounded-3xl overflow-hidden transform transition-transform duration-500 hover:scale-105 border border-white">
          <div className="w-full h-full bg-blue opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block small:hidden"></div>
          <img src={imageUrl} alt="Project image" className="w-full h-full" />
        </div>

        <div className="text-left pt-4 px-4 small:pt-4 text-xl medium:pt-3 md:pt-4">
          <div className="flex items-center justify-between">
            <p className="text-blueprime font-bold text-xl">{title}</p>

            <a
              href={link}
              className="text-primary text-xl cursor-pointer transition-colors duration-300 hover:text-blue"
            >
              View <i class="bi bi-arrow-up-right-circle-fill"></i>
            </a>
          </div>
          <p className="text-primary text-lg">{date}</p>

          <p className="py-3 small:py-2 md:py-3">{summaryOne}</p>
          <p>{summaryTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
