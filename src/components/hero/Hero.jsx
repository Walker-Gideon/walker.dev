import Image from "./Image";
import HeroText from "./HeroText";
import ButtonHero from "./ButtonHero";

function Hero() {
  return (
    <div
      id="home" //medium:mb-20 pb-10 pt-30 small:pt-25 medium:pt-20 px-20 small:px-4 sm:px-8 lg:px-20 small:flex-col md:flex-row small:gap-20 medium:gap-40 md:gap-0
      className="w-full h-full mx- pt-10 px-4 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* small:w-auto md:w-210 small:text-center sm:text-center md:text-left */}
      <div className="w-200 ">
        <HeroText />
        <ButtonHero />
      </div>

      <Image />
    </div>
  );
}

export default Hero;
