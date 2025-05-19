import Gradients from "../ui/Gradients";
import SkillsHeader from "./SkillsHeader";
import SkillsOne from "./SkillsOne";
import SkillsTwo from "./SkillsTwo";
import SubSkills from "./SubSkills";

function Skills() {
  return (
    <div id="skills" className="relative w-full h-full">
      <div className="pt-18 px-4 block md:hidden">
        <SkillsHeader />
        <SubSkills />
      </div>

      <div className="bg-blue/30 my-10 pt-10 hidden md:block">
        <SkillsOne />
        <SkillsTwo />
      </div>
      <Gradients />
    </div>
  );
}

export default Skills;
