import { motion } from "motion/react";
import Image from "./Image";
import HeroText from "./HeroText";
import Button from "../Button";

function Hero() {
  return (
    <div
      id="/"
      className="pt-30 small:pt-10 sm:pt-25 md:pt-20 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 xl:px-16 w-full h-full flex justify-between"
    >
      <div className="w-full small:text-center sm:text-center md:text-left md:mt-10">
        <HeroText />

        <Button borderCol="border-primary" textCol="text-white">
          Download CV
        </Button>
      </div>

      <Image />
    </div>
  );
}

export default Hero;
