function Footer() {
  const curDate = new Date();
  const curYear = curDate.getFullYear();

  return (
    <div className="w-full h-15 small:h-25 medium:h-15 px-8 py-6 sticky bottom-0 z-40 bg-white">
      <footer className="mb-5 flex small:flex-col medium:flex-row items-center justify-between small:gap-1.5">
        <div className="text-black text-[1rem] medium:text-[1rem] small:text-lg medium:text-xl font-medium speial-font">
          <p>
            &copy; <span>{curYear}</span>{" "}
            <span className="uppercase">Wɑɭkɜɾ.dev</span>. All rights reserved.
          </p>
        </div>

        <div>
          <button className="flex itmes-center gap-1 text-[1rem] medium:text-[1rem] small:text-xl font-bold text-black cursor-pointer transition-all duration-300 hover:gap-1.5">
            Github Repo <span>&rarr;</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
