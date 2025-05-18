import { useState } from "react";
import MenuNav from "./MenuNav";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-0 sm:px-6 md:px-6 lg:px-8 xl:px-10 py-4 sticky top-0 z-30">
      <header className="flex items-center justify-between">
        <Logo />
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </header>

      <div className="absolute top-4 right-0 xl:right-8 lg:right-8 sm:right-6 md:right-6 overflow-hidden">
        {/* <MenuNav showMenu={showMenu} /> */}
      </div>
    </div>
  );
}
