import SocialLink from "./SocialLink";

function MenuNav() {
  return (
    <aside className="absolute top-1 right-0 w-[35%] h-[90vh] mx-4 bg-white text-black rounded-2xl z-0">
      <div className="flex flex-col px-6 pt-4 w-[100%]">
        <h1 className="mt-2 text-4xl font-bold text-gray-300">Menu</h1>

        <div className="flex flex-col justify-between">
          <div className="w-0 mt-6 mb-50 pl-8 flex flex-col gap-6 text-3xl font-medium text-[#333] whitespace-nowrap">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Skill set</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <SocialLink type={"primary"} flextype={"primflex"} />
        </div>
      </div>
    </aside>
  );
}

export default MenuNav;
