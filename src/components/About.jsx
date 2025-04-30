import { useState } from "react";
import Button from "./Button";

function About() {
  const [checkClick, setCheckClick] = useState(false);

  function handelShowContent() {
    setCheckClick((show) => !show);
  }

  return (
    <div className="mt-40 mb-6 h-[86vh] grid grid-cols-3 gap-20">
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
            ipsum dolor sit amet consectetur adipisicing elit. Commodi mollitia
            ratione architecto beatae, accusantium dignissimos. Accusamus eaque
            deserunt nostrum nesciunt est sapiente, quia dolores, inventore nam
            nisi repellat sequi itaque!
          </p>
        </div>

        {/* Hobbies about my career */}
        <div className="mb-5">
          <div className="border-t-1 border-b-1 border-black">
            <div className="px-2 pt-4 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="text-lg font-bold text-gray-400">01</p>
                <h1 className="text-2xl font-bold text-black">
                  Title amet consectetur adipisicing elit
                </h1>
              </div>
              <Button type={"transparent"} onClick={handelShowContent}>
                {checkClick ? "-" : "+"}
              </Button>
            </div>

            {checkClick && (
              <div className="px-2">
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi voluptatibus aliquid
                </p>

                <div className="pt-2">
                  <ul>
                    <li className="flex items-center">
                      <span className="">.</span>
                      totam delectus minima, explicabo ad recusandae odit?
                      Voluptatum veniam
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-amber-200 justify-self-end rounded-2xl"></div>
    </div>
  );
}

export default About;
