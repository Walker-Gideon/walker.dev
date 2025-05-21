import ButtonNav from "./ButtonNav";
import Links from "./Links";

function MenuNav({ showMenu, setShowMenu }) {
  return (
    <aside
      className={`bg-blue/30 backdrop-blur-md rounded-4xl overflow-hidden transition-all duration-500 ease-in-out ${
        showMenu ? `w-70 h-130 md:w-82 lg:w-92` : `w-13 h-13`
      }`}
    >
      <div className="relative w-full h-full flex flex-col justify-between gap-6 px-4 md:px-6 py-6 rounded-2xl overflow-hidden">
        <p className="pt-8 text-sm font-bold text-gray-300">Menu</p>
        <Links setShowMenu={setShowMenu} />
        <ButtonNav setShowMenu={setShowMenu} />
      </div>
    </aside>
  );
}

export default MenuNav;
