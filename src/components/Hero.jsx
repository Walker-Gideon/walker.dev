import { motion } from "motion/react";
import Button from "./Button";
import creatorImage from "../assets/me.jpg";

function Hero() {
  return (
    <div className="pt-35 px-20 w-full h-full flex flex-col items-center justify-center gap-12">
      {/* <div className="bg-black p-0.5 rounded-xl rotate-1">
        <div className="bg-blue-300 p-1.5 rounded-xl rotate-2">
          <img
            src={creatorImage}
            alt="Image of the creator of this portfiolo"
            class="object-cover rounded-xl w-50 h-60 rotate-2"
          />
        </div>
      </div> */}

      <div className="w-full text-left whitespace-nowrap">
        <h1 className="text-7xl">
          Hello 👋!, I'm{" "}
          <span className="font-bold text-8xl">Gideon Awortwe</span>
        </h1>
        <p className="text-7xl my-4">Fronted-end Developer</p>
        <p className="text-4xl text-[#cbc9c9] mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        </p>

        <Button>
          let's talk <span className="pl-1 font-bold">&darr;</span>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
