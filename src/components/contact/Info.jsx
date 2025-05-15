import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

function Info() {
  return (
    <div className="small:mt-1 ">
      <div className="flex items-center gap-2 text-gray-400">
        <MdOutlineMailOutline className="font-bold" />
        <a
          href="mailto:gideonawortwe3@gmail.com"
          className="text-3xl text-white font-medium"
        >
          gideonawortwe3@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-2 text-gray-400">
        <MdOutlineLocalPhone className="font-bold" />
        <p className="py-3 small:py-4 text-xl font-medium">+233 248 232 548</p>
      </div>

      <div className="flex items-center gap-2 mb-27 small:mb-15 md:mb-53 midmedium:mb-24 text-gray-400">
        <MdOutlineLocationOn className="font-bold" />
        <p className="text-xl font-medium">Accra, Ghana</p>
      </div>
    </div>
  );
}

export default Info;
