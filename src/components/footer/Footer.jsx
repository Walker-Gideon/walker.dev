function Footer() {
  const curDate = new Date();
  const curYear = curDate.getFullYear();

  return (
    <footer className="w-full border-t border-gray-400 py-4 mb-2 flex flex-col md:flex-row items-center justify-between">
      <div className="text-gray-400 text-sm font-medium speial-font">
        <p>
          &copy; <span>{curYear}</span>{" "}
          <span className="uppercase">Wɑɭkɜɾ.dev</span> | All rights reserved.
        </p>
      </div>

      <div>
        <a
          href="https://github.com/Walker-Gideon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex itmes-center gap-1 text-sm font-bold text-primary cursor-pointer transition-all duration-300 hover:gap-1.5 hover:text-blueprime"
        >
          Github Repo <span>&rarr;</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
