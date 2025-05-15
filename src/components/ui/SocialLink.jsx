function SocialLink() {
  const linkStyling = `relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] 
    after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 
    hover:after:scale-x-100`;

  return (
    <div className="w-full font-medium text-lg small:text-xl whitespace-nowrap flex items-center justify-between medium:justify-around md:justify-between text-gray-300 transition-colors duration-300">
      <a href="#" className={`${linkStyling} after:w-20 hover:text-gray-200`}>
        LinkedIn
      </a>
      <a href="#" className={`${linkStyling} after:w-24 hover:text-gray-200`}>
        Instagram
      </a>
      <a href="#" className={`${linkStyling} after:w-22 hover:text-gray-200`}>
        Facebook
      </a>
      <a href="#" className={`${linkStyling} after:w-24 hover:text-gray-200`}>
        X (Twitter)
      </a>
    </div>
  );
}

export default SocialLink;
