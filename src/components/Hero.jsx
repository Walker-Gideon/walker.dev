import { motion } from "motion/react";
import Button from "./Button";
import myimage from "../assets/me.jpg";

function Hero() {
  return (
    <div className="mt-25 w-full h-full flex flex-col items-center justify-center gap-12 px-8">
      <div className="">
        <img
          src={myimage}
          alt=""
          class="object-cover rounded-[50%] w-40 h-40"
        />
      </div>

      <div className="text-center justify-self-start whitespace-nowrap">
        <h1 className="text-5xl mb-3">
          Hello 👋!, I'm <span className="font-bold">X</span>
        </h1>
        <p className="text-6xl mb-3">Fronted-end Developer</p>
        <p className="text-xl text-[#cbc9c9] mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        </p>

        <Button>
          let's talk <span>&rarr;</span>
        </Button>

        <GetInTouchButton />
      </div>
    </div>
  );
}

export default Hero;

export function GetInTouchButton() {
  return (
    <motion.div
      className="relative inline-block px-8 py-3 text-lg font-medium text-black bg-white rounded-full border border-black overflow-hidden"
      initial={{}}
      whileHover={{}}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ y: "-100%" }}
        whileHover={{
          y: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      />
      <motion.span
        className="relative z-10"
        initial={{ color: "#000000" }}
        whileHover={{
          color: "#FFFFFF",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        Get in touch
      </motion.span>
    </motion.div>
  );
}
