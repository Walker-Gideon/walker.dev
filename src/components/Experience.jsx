import React, { useState } from "react";
import ExperienceContent from "./ExperienceContent";

function Experienc() {
  const [checkClick, setCheckClick] = useState(false);
  const [checkFrameWork, setCheckFrameWork] = useState(false);
  const [checkCss, setCheckCss] = useState(false);
  const [checkGit, setCheckGit] = useState(false);

  return (
    <div className="pt-20 mb-5 px-20 h-screen z-20">
      <div className="pb-10">
        <h1 className="text-4xl font-bold text-gray-400">Experience</h1>
        <h1 className="text-4xl font-bold text-black">History</h1>
      </div>

      <div className="">
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
    </div>
  );
}

export default Experienc;
