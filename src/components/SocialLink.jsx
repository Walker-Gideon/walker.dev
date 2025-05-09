function SocialLink() {
  return (
    <div className="w-full font-medium text-lg small:text-xl whitespace-nowrap">
      <div className="flex items-center justify-between medium:justify-around md:justify-between text-gray-300 transition-colors duration-300">
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
