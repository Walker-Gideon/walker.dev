import { useState } from "react";
import Button from "./Button";
import Hobbies from "./Hobbies";

function About() {
  const [chechOne, setChechOne] = useState(true);
  const [chechTwo, setChechTwo] = useState(false);
  const [chechThree, setChechThree] = useState(false);

  function handelShowContent() {
    setChechOne((show) => !show);
  }

  function handelShowContentTwo() {
    setChechTwo((show) => !show);
  }

  function handelShowContentThree() {
    setChechThree((show) => !show);
  }

  return (
    <div className="mt-40 mb-6 h-[86vh] grid grid-cols-3 gap-20 px-8">
      {/* make this div to scroll */}
      <div className="col-span-2 pr-8 h-auto overflow-auto">
        <h1 className="text-3xl font-medium mb-10">About me</h1>

        <div className="text-2xl text-gray-400 mb-14">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            voluptatibus aliquid totam delectus minima, explicabo ad recusandae
            odit? Voluptatum veniam, velit dolores molestias possimus sint
            expedita reprehenderit tenetur libero voluptas! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ipsam, quos? Autem doloribus
            possimus quisquam non, natus nulla quidem unde fugiat alias nisi
            magni qui, laudantium animi nihil, repudiandae illum in. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Maxime rerum id magni
            laboriosam quo distinctio, dolor qui error fugiat, deserunt ex porro
            doloribus tempora libero ratione modi sapiente hic voluptates. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Commodi mollitia
            ratione architecto beatae, accusantium dignissimos. Accusamus eaque
            deserunt nostrum nesciunt est sapiente, quia dolores, inventore nam
            nisi repellat sequi itaque! adipisicing elit. Maxime rerum id magni
            laboriosam quo distinctio, dolor qui error fugiat, deserunt ex porro
            doloribus tempora libero ratione modi sapiente hic voluptates. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Hobbies about my career */}
        <div className="mb-5">
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

      <div className="w-full h-full bg-blue-300 justify-self-end rounded-2xl"></div>
    </div>
  );
}

export default About;
