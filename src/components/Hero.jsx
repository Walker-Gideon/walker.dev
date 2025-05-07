import { motion } from "motion/react";
import Button from "./Button";

function Hero() {
  return (
    <div className="pt-25 px-20 w-full h-full flex flex-col items-center justify-center gap-12">
      <div className="w-full text-left">
        <p className="text-4xl text-[#555] font-medium uppercase">
          Fronted-end Web Developer
        </p>
        <p className="font-bold text-8xl speial-font py-4">Gideon Awortwe</p>
        <p className="text-4xl text-gray-500 mb-10">
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
