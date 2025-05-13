import { useState } from "react";
import Hobbies from "./hobbies/Hobbies";
import AboutPara from "./AboutPara";

function About() {
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
    <div
      id="about"
      className="small:h-full md:h-190 pt-40 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 h-[90vh]"
    >
      <div className="small:row-span-1 col-span-2 pr-8 h-auto small:h-full medium:h-145 md:h-145 overflow-auto scroll-container">
        <AboutPara />

        <div className="small:hidden medium:block">
          <div className="">
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

          <div className="">
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

          <div className="">
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

        <div className="small:block medium:hidden">
          <SubHobbies />
        </div>
      </div>
    </div>
  );
}

export default About;

export function SubHobbies() {
  const [chechOne, setChechOne] = useState(true);
  const [chechTwo, setChechTwo] = useState(true);
  const [chechThree, setChechThree] = useState(true);

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
    <div>
      <div className="">
        <Hobbies
          num="1"
          title="Title amet consectetur adipisicing elit"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptatibus aliquid"
          firstText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          secText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          thirdText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          check={chechOne}
          onClick={handelShowContent}
        />
      </div>

      <div className="">
        <Hobbies
          num="2"
          title="Title amet consectetur adipisicing elit"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptatibus aliquid"
          firstText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          secText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          thirdText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          check={chechTwo}
          onClick={handelShowContentTwo}
        />
      </div>

      <div className="">
        <Hobbies
          num="3"
          title="Title amet consectetur adipisicing elit"
          subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi voluptatibus aliquid"
          firstText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          secText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          thirdText="totam delectus minima, explicabo ad recusandae odit? Voluptatum veniam"
          check={chechThree}
          onClick={handelShowContentThree}
        />
      </div>
    </div>
  );
}
