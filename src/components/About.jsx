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
    <div className="pt-40 px-20 h-[90vh] grid grid-cols-3 gap-20">
      <div className="col-span-2 pr-8 h-auto overflow-auto scroll-container">
        <h1 className="text-5xl font-medium uppercase mb-10">
          Behind the Code
        </h1>

        <div className="text-2xl text-gray-500 mb-14">
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

        <div className="">
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
      </div>

      <div className="w-full h-full p-0.5 bg-black justify-self-end rounded-xl rotate-1">
        <div className="relative w-full h-140 p-1.5 bg-white rounded-xl rotate-2 overflow-hidden">
          <img
            src={creatorImage}
            alt="Image of the creator of this portfiolo"
            class="object-cover rounded-xl w-full h-full rotate-2"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
