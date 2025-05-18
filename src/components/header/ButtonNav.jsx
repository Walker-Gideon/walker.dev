import { Link } from "react-scroll";

export default function ButtonNav() {
  return (
    <Link
      to="contact"
      smooth={true}
      spy={true}
      duration={500}
      offset={-130}
      className="relative w-full md:w-55 flex flex-col items-center justify-center px-8 py-4 text-sm font-medium rounded-full border-2 border-primary transition-all duration-300 hover:bg-primary hover:scale-105 overflow-hidden cursor-pointer text-white whitespace-nowrap"
    >
      Get in touch
    </Link>
  );
}
