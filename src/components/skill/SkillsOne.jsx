const skillsOne = ["HTML", "CSS", "JS", "React.js"];

function SkillsOne() {
  return (
    <div
      id="skills"
      className="my-10 flex w-full h-16 small:h-10 sm:h-12 medium:-h-14 md:h-10 text-5xl small:text-2xl sm:text-3xl medium:text-4xl md:text-5xl text-white font-medium whitespace-nowrap "
    >
      {/* First row container */}
      <div className="relative w-full overflow-hidden skill_main decoration">
        {skillsOne.map((skills, index) => (
          <div
            key={index}
            className={`absolute w-20 animate_skill_one skill_delay${
              index + 1
            }`}
          >
            <ul>
              <li className="list-disc">{skills}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsOne;
