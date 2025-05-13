import { useState } from "react";
import Hobbies from "./Hobbies";
import creatorImage from "../assets/my-prof.jpeg";

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
      className="small:h-full md:h-190 pt-40 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 md:grid md:grid-cols-3 md:gap-15 h-[90vh] grid small:flex small:flex-col-reverse gap-20"
    >
      <div className="small:row-span-1 col-span-2 pr-8 h-auto small:h-full medium:h-145 md:h-145 overflow-auto scroll-container">
        <h1 className="text-5xl small:text-4xl small:font-bold medium:text-5xl sm:font-medium font-medium uppercase mb-10 small:mb-6 text-blueprime">
          Behind the Code
        </h1>

        <div className="text-2xl medium:text-3xl text-white mb-14">
          <p>
            My journey into front-end development started with a simple
            curiosity for how websites worked — and quickly turned into a
            passion for building clean, functional, and engaging user
            experiences. I love turning ideas into interactive designs using
            tools like React, Tailwind CSS, and JavaScript.
            <br />
            <br />
            What drives me is the constant learning and problem-solving that
            comes with being a developer. I'm committed to improving my skills
            daily, writing code that’s both efficient and readable, and creating
            interfaces that feel just right for users.
          </p>
        </div>

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

      <div className="small:p-4 sm:p-0">
        <div className="w-full h-full sm:h-full medium:h-160 md:h-full p-0.5 small:p-1 bg-blue justify-self-end rounded-xl rotate-1">
          <div className="relative w-full h-140 sm:h-full medium:h-160 md:h-full p-1.5 bg-white rounded-xl rotate-2 overflow-hidden">
            <img
              src={creatorImage}
              alt="Image of the creator of this portfiolo"
              class="object-cover rounded-xl w-full h-full medium:object-top rotate-2"
            />
          </div>
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
