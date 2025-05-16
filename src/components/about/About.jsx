import AboutPara from "./AboutPara";
import HobbiesContent from "./hobbies/HobbiesContent";
import SubHobbies from "./hobbies/SubHobbies";

function About() {
  return (
    <div
      id="about"
      className="w-full h-full medium:my-20 pb-10 pt-30 small:pt-25 medium:pt-5 px-20 small:px-4 sm:px-8 lg:px-20"
    >
      <div>
        <AboutPara />
        <HobbiesContent />
        <SubHobbies />
      </div>
    </div>
  );
}

export default About;
