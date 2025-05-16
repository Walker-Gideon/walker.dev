import { Link } from "react-scroll";
const links = [
  {
    text: "Home",
    link: "home",
    width: "after:w-24",
  },
  {
    text: "About",
    link: "about",
    width: "after:w-26",
  },
  {
    text: "Projects",
    link: "projects",
    width: "after:w-34",
  },
  {
    text: "Skill set",
    link: "skills",
    width: "after:w-33",
  },
  {
    text: "Experience",
    link: "experience",
    width: "after:w-45",
  },
];

function Links() {
  const linkStyling = `relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] 
  after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 
  hover:after:scale-x-100`;

  return (
    <div className="w-50 h-85 small:h-60 sm:h-100 md:h-85 flex flex-col justify-between text-4xl small:text-2xl sm:text-4xl font-medium text-white">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.link}
          smooth={true}
          spy={true}
          duration={500}
          offset={-100}
          className={`${linkStyling} ${link.width} transition-colors duration-300 hover:text-primary cursor-pointer`}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default Links;
