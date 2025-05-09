function SocialLink() {
  // const flexs = "flex justify-between";
  // gap-10 small:gap-4 sm:gap-7
  // const styling = {
  //   primary: base + " absolute bottom-10 right-25 pl-4",
  //   secondary: base + flexs,
  //   primflex: flexs + " flex-col",
  //   secflex: flexs + " flex-row text-white small:justify-between",
  // };

  return (
    <div className="w-full font-medium text-lg small:text-xl whitespace-nowrap">
      <div className="flex items-center justify-between medium:justify-around text-gray-300 transition-colors duration-300">
        <a href="#" className="hover:text-gray-200">
          LinkedIn
        </a>
        <a href="#" className="hover:text-gray-200">
          Instagram
        </a>
        <a href="#" className="hover:text-gray-200">
          Facebook
        </a>
        <a href="#" className="hover:text-gray-200">
          X (Twitter)
        </a>
      </div>
    </div>
  );
}

export default SocialLink;
