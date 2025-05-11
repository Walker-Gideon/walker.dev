import { motion } from "motion/react";
import Button from "./Button";

function Hero() {
  return (
    <div className="pt-30 small:pt-10 sm:pt-25 md:pt-30 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 xl:px-16 w-full h-full flex flex-col justify-center gap-12">
      <div className="w-full small:text-center sm:text-center md:text-left">
        <p className="text-4xl small:text-2xl sm:text-3xl md:text-4xl text-blueprime font-medium uppercase">
          Fronted-end Web Developer
        </p>
        <p className="font-bold small:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans py-4 md:py-6 text-primary">
          Gideon Awortwe
        </p>
        <p className="text-4xl small:text-3xl md:text-4xl text-white small:w-full md:w-[80%] lg:w-[70%] 2xl:w-[60%] mb-10">
          I build responsive, user-friendly websites with React, Tailwind CSS,
          and JavaScript — turning ideas into clean, functional code.
        </p>

        <Button borderCol="border-primary" textCol="text-white">
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default Hero;
