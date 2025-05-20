import { Link } from "react-scroll";

function Logo() {
  return (
    <div className="border-b-2 border-blueprime pb-0.5">
      <Link
        to="home"
        smooth={true}
        spy={true}
        duration={500}
        offset={-100}
        className="text-primary text-sm uppercase font-bold cursor-pointer"
      >
        Wɑɭkɜɾ.dev
      </Link>
    </div>
  );
}

export default Logo;
