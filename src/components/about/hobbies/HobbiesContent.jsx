import { useState } from "react";
import Hobbies from "./Hobbies";
import data from "./data.json";

function HobbiesContent() {
  const [chechOne, setChechOne] = useState(true);
  const [chechTwo, setChechTwo] = useState(false);
  const [chechThree, setChechThree] = useState(false);

  const hobby1_array = [data.at(0)];
  const hobby2_array = [data.at(1)];
  const hobby3_array = [data.at(2)];

  function handelShowContent() {
    if (chechTwo === true) setChechTwo(false);
    if (chechThree === true) setChechThree(false);
    setChechOne((show) => !show);
  }

  function handelShowContentTwo() {
    if (chechOne === true) setChechOne(false);
    if (chechThree === true) setChechThree(false);
    setChechTwo((show) => !show);
  }

  function handelShowContentThree() {
    if (chechOne === true) setChechOne(false);
    if (chechTwo === true) setChechTwo(false);
    setChechThree((show) => !show);
  }

  return (
    <div className="small:hidden medium:block">
      <div>
        {hobby1_array.map((hobby, index) => (
          <Hobbies
            key={index}
            num={hobby.num}
            title={hobby.title}
            subTitle={hobby.subTitle}
            firstText={hobby.firstText}
            secText={hobby.secText}
            thirdText={hobby.thirdText}
            check={chechOne}
            onClick={handelShowContent}
          />
        ))}
      </div>

      <div>
        {hobby2_array.map((hobby, index) => (
          <Hobbies
            key={index}
            num={hobby.num}
            title={hobby.title}
            subTitle={hobby.subTitle}
            firstText={hobby.firstText}
            secText={hobby.secText}
            thirdText={hobby.thirdText}
            check={chechTwo}
            onClick={handelShowContentTwo}
          />
        ))}
      </div>

      <div>
        {hobby3_array.map((hobby, index) => (
          <Hobbies
            key={index}
            num={hobby.num}
            title={hobby.title}
            subTitle={hobby.subTitle}
            firstText={hobby.firstText}
            secText={hobby.secText}
            thirdText={hobby.thirdText}
            check={chechThree}
            onClick={handelShowContentThree}
          />
        ))}
      </div>
    </div>
  );
}

export default HobbiesContent;
