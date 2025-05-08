import { motion } from "motion/react";
import Button from "./Button";

function Hero() {
  return (
    <div className="pt-30 px-20 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full h-full flex flex-col justify-center gap-12">
      <div className="w-full sm:text-center md:text-left">
        <p className="text-4xl text-[#555] font-medium uppercase">
          Fronted-end Web Developer
        </p>
        <p className="font-bold sm:text-7xl lg:text-8xl md:text-7xl font-sans py-4">
          Gideon Awortwe
        </p>
        <p className="text-4xl text-gray-500 w-[70%] mb-10">
          I build responsive, user-friendly websites with React, Tailwind CSS,
          and JavaScript — turning ideas into clean, functional code.
        </p>

        <Button borderCol="border-black" textCol="text-black">
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default Hero;
