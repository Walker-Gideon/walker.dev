import { useState } from "react";
import Hobbies from "./Hobbies";
import data from "./data.json";

function SubHobbies() {
  const [chechOne, setChechOne] = useState(true);
  const [chechTwo, setChechTwo] = useState(true);
  const [chechThree, setChechThree] = useState(true);

  const hobby1_array = [data.at(0)];
  const hobby2_array = [data.at(1)];
  const hobby3_array = [data.at(2)];

  return (
    <div className="small:block medium:hidden">
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
          />
        ))}
      </div>
    </div>
  );
}

export default SubHobbies;
