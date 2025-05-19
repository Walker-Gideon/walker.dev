import Gradients from "../ui/Gradients";
import AboutPara from "./AboutPara";
import HobbiesContent from "./hobbies/HobbiesContent";

function About() {
  return (
    <div
      id="about"
      className="relative w-full h-full pt-18 pb-10 px-4 md:px-20"
    >
      <AboutPara />
      <HobbiesContent />
      <Gradients />
    </div>
  );
}

export default About;
