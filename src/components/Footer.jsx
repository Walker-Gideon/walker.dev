function Footer() {
  const curDate = new Date();
  const curYear = curDate.getFullYear();

  return (
    <div className="w-full h-15 px-8 py-6 sticky bottom-0 z-40 bg-white">
      <footer className="mb-5 flex items-center justify-between">
        <div className="text-[1rem] font-medium speial-font">
          <p>
            &copy; <span>{curYear}</span>{" "}
            <span className="uppercase">Wɑɭkɜɾ.dev</span>. All rights reserved.
          </p>
        </div>

        <div>
          <button className="flex itmes-center gap-1 text-[1rem] font-bold cursor-pointer transition-all duration-300 hover:gap-1.5">
            Github Repo <span>&rarr;</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
