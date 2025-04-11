import { useState } from "react";
import MenuNav from "./MenuNav";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu((show) => !show);
  }

  return (
    // <div className="flex items-center justify-between w-full h-16 sticky top-0 z-50">
    <header className="relative flex items-center justify-between w-full px-8 py-4">
      {/* <div > */}
      <a
        href="#"
        className={`text-xl ${showMenu === true ? `` : `cursor-pointer`}`}
      >
        Logo
      </a>

      <div className="relative">
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
      </div>

      {showMenu && <MenuNav />}
      {/* </div> */}
    </header>
    // </div>
  );
}

export default Header;
