import { useState } from "react";
import Hobbies from "./Hobbies";

function HobbiesContent() {
  const [chechOne, setChechOne] = useState(true);
  const [chechTwo, setChechTwo] = useState(false);
  const [chechThree, setChechThree] = useState(false);

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
        <Hobbies
          num="1"
          title="Title amet consectetur adipisicing elit"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            voluptatibus aliquid"
          firstText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          secText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          thirdText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          check={chechOne}
          onClick={handelShowContent}
        />
      </div>

      <div>
        <Hobbies
          num="2"
          title="Title amet consectetur adipisicing elit"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            voluptatibus aliquid"
          firstText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          secText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          thirdText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          check={chechTwo}
          onClick={handelShowContentTwo}
        />
      </div>

      <div>
        <Hobbies
          num="3"
          title="Title amet consectetur adipisicing elit"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            voluptatibus aliquid"
          firstText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          secText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          thirdText="totam delectus minima, explicabo ad recusandae odit? Voluptatum
                veniam"
          check={chechThree}
          onClick={handelShowContentThree}
        />
      </div>
    </div>
  );
}

export default HobbiesContent;
