import AboutPara from "./AboutPara";
import HobbiesContent from "./hobbies/HobbiesContent";
import SubHobbies from "./hobbies/SubHobbies";

function About() {
  return (
    <div
      id="about"
      className="small:h-full md:h-190 pt-40 small:pt-18 sm:pt-25 medium:pt-40 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 h-[90vh]"
    >
      <div>
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
