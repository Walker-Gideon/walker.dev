import { useState } from "react";
import MenuNav from "./MenuNav";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-0 px-4 md:px-8 py-2 sticky top-0 z-30">
      <header className="flex items-center justify-between">
        <Logo />
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </header>

      <div className="absolute top-2.5 right-4.5 md:right-8.5 overflow-hidden">
        <MenuNav showMenu={showMenu} />
      </div>
    </div>
  );
}
