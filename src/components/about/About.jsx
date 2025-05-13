import AboutPara from "./AboutPara";
import HobbiesContent from "./hobbies/HobbiesContent";
import SubHobbies from "./hobbies/SubHobbies";

function About() {
  return (
    <div
      id="about"
      className="small:h-full md:h-190 pt-40 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 h-[90vh]"
    >
      {/* small:row-span-1 col-span-2 pr-8 h-auto small:h-full medium:h-145 md:h-145 overflow-auto scroll-container */}
      <div className="">
        <AboutPara />
        <HobbiesContent />
        <div className="small:block medium:hidden">
          <SubHobbies />
        </div>
      </div>
    </div>
  );
}

export default About;
