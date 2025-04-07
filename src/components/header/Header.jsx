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
        <a
          href="#"
          className={`text-xl ${showMenu === true ? `` : `cursor-pointer`}`}
        >
          Logo
        </a>

        <button
          className={`border-1 rounded-4xl px-5 py-1.5 text-lg text-center cursor-pointer ${
            showMenu === true
              ? `border-black text-black`
              : `border-white text-white`
          } z-50`}
          onClick={handleMenu}
        >
          {showMenu === true ? "close" : "menu"}
        </button>
      </header>

      {showMenu && <MenuNav />}
    </div>
  );
}

export default Header;
