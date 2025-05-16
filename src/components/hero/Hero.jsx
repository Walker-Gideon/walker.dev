import Image from "./Image";
import HeroText from "./HeroText";
import Button from "../ui/Button";

function Hero() {
  return (
    <div
      id="home"
      className="w-full h-full pb-10 pt-30 small:pt-25 medium:pt-30 px-20 small:px-4 sm:px-8 lg:px-20 flex items-center justify-between small:flex-col md:flex-row small:gap-20 medium:gap-40 md:gap-0 overflow-hidden"
    >
      <div className="w-200 small:w-auto md:w-210 small:text-center sm:text-center md:text-left">
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
