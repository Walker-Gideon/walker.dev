import { useState } from "react";
import MenuNav from "./MenuNav";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu((show) => !show);
  }

  return (
    <div className="relative">
      <header className="flex items-center justify-between py-4 px-8">
        <a href="#" className="text-xl cursor-pointer">
          Logo
        </a>

        <button
          className="border-1 border-white rounded-4xl px-5 py-1.5 text-lg text-center cursor-pointer z-50"
          onClick={handleMenu}
        >
          menu
        </button>
      </header>

      {showMenu && <MenuNav />}
    </div>
  );
}

export default Header;
