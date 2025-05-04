import { motion } from "motion/react";
import Button from "./Button";

function Hero() {
  return (
    <div className="pt-35 px-20 w-full h-full flex flex-col items-center justify-center gap-12">
      <div className="w-full text-left whitespace-nowrap">
        <p className="text-7xl">Hello 👋!, </p>
        <p className="text-7xl">
          I'm <span className="font-bold text-8xl">Gideon Awortwe</span>
        </p>
        <p className="text-7xl my-4">Fronted-end Developer</p>
        <p className="text-4xl text-gray-500 mb-10">
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
