import AboutPara from "./AboutPara";
import HobbiesContent from "./hobbies/HobbiesContent";
import SubHobbies from "./hobbies/SubHobbies";

function About() {
  return (
    <div
      id="about"
      className="w-full h-full pb-10 pt-30 small:pt-25 medium:pt-30 px-20 small:px-4 sm:px-8 lg:px-20"
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
