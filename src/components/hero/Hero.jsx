import Image from "./Image";
import HeroText from "./HeroText";
import Button from "../ui/Button";

function Hero() {
  return (
    <div
      id="/"
      className="w-full h-full pt-30 pb-8 small:pt-25 sm:pt-25 medium:pt-35 md:pt-30 lg:pt-20 px-20 small:px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-between small:flex-col md:flex-row small:gap-20 medium:gap-40 md:gap-0 overflow-hidden"
    >
      <div className="w-200 small:w-auto md:w-200 small:text-center sm:text-center md:text-left">
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
