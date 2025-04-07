function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-8">
      <a href="#" className="text-xl cursor-pointer">
        Logo
      </a>

      <button className="border-1 border-white rounded-4xl px-5 py-1.5 text-lg text-center cursor-pointer">
        menu
      </button>
    </header>
  );
}

export default Header;
