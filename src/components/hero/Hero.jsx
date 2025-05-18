import Image from "./Image";
import HeroText from "./HeroText";
import ButtonHero from "./ButtonHero";

function Hero() {
  return (
    <div
      id="home"
      className="w-full h-full pt-34 lg:pt-20 pb-10 px-4 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-25 lg:gap-0 overflow-hidden"
    >
      <div className="text-center lg:text-left lg:w-180">
        <HeroText />
        <ButtonHero />
      </div>

      <Image />
    </div>
  );
}

export default Hero;
