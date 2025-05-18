import Gradients from "../ui/Gradients";
import SkillsOne from "./SkillsOne";
import SkillsTwo from "./SkillsTwo";

function Skills() {
  return (
    <div id="skills" className="relative my-10 py-10 bg-blue/30 h-full">
      <SkillsOne />
      <SkillsTwo />
      <Gradients />
    </div>
  );
}

export default Skills;
