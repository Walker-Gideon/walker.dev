function MenuNav() {
  return (
    <aside className="absolute top-3 right-0 w-[35%] h-[90vh] mx-4 bg-white text-black rounded-2xl z-10">
      <div className="flex flex-col px-6 pt-4 w-[100%]">
        <h1 className="mt-2 text-4xl font-bold text-gray-300">Menu</h1>

        <div className="flex flex-col justify-between">
          <div className="w-0 mt-6 mb-58 pl-4 flex flex-col gap-6 text-xl font-medium text-[#333] whitespace-nowrap">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Skill set</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="w-0 pl-4 grid grid-cols-2 gap-x-50 gap-y-8 font-medium text-[#333] whitespace-nowrap">
            <a href="#" className="transition-colors hover:text-[#555]">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-[#555]">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-[#555]">
              Facebook
            </a>
            <a href="#" className="transition-colors hover:text-[#555]">
              Twiter
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MenuNav;
