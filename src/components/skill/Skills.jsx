import SkillsOne from "./SkillsOne";
import SkillsTwo from "./SkillsTwo";

function Skills() {
  return (
    <div className="pt-30 pb-10">
      <div className="bg-blue/30 h-100 flex flex-col gap-0">
        <SkillsOne />
        <SkillsTwo />
      </div>
    </div>
  );
}

export default Skills;
