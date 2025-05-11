import React, { useState } from "react";
import ExperienceContent from "./ExperienceContent";

function Experience() {
  const [checkClick, setCheckClick] = useState(false);
  const [checkFrameWork, setCheckFrameWork] = useState(false);
  const [checkCss, setCheckCss] = useState(false);
  const [checkGit, setCheckGit] = useState(false);

  return (
    <div className="pt-20 small:mt-10 mb-5 medium:pb-20 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 h-screen small:h-210 sm:h-300 medium:h-auto z-20">
      <div className="pb-10 small:pb-6 sm:mb-8 medium:mb-10">
        <h1 className="text-4xl small:text-2xl sm:text-3xl medium:text-4xl font-bold text-primary">
          Experience
        </h1>
        <h1 className="text-4xl small:text-2xl sm:text-3xl medium:text-4xl font-bold text-blueprime">
          History
        </h1>
      </div>

      <div className="small:hidden md:block">
        <ExperienceContent
          check={checkClick}
          onCheck={() => setCheckClick(!checkClick)}
          title="HTML, CSS & Javascript"
        />
        <ExperienceContent
          check={checkFrameWork}
          onCheck={() => setCheckFrameWork(!checkFrameWork)}
          title="React.js as Javascript framework"
        />
        <ExperienceContent
          check={checkCss}
          onCheck={() => setCheckCss(!checkCss)}
          title="Tailwind Css"
        />
        <ExperienceContent
          check={checkGit}
          onCheck={() => setCheckGit(!checkGit)}
          title="Git & GitHub"
        />
      </div>

      <div className="small:block md:hidden">
        <SubExperience />
      </div>
    </div>
  );
}

export default Experience;

export function SubExperience() {
  const [checkClick, setCheckClick] = useState(true);
  const [checkFrameWork, setCheckFrameWork] = useState(true);
  const [checkCss, setCheckCss] = useState(true);
  const [checkGit, setCheckGit] = useState(true);

  return (
    <div className="">
      <ExperienceContent check={checkClick} title="HTML, CSS & Javascript" />
      <ExperienceContent
        check={checkFrameWork}
        title="React.js as Javascript framework"
      />
      <ExperienceContent check={checkCss} title="Tailwind Css" />
      <ExperienceContent check={checkGit} title="Git & GitHub" />
    </div>
  );
}
