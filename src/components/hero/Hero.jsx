import Image from "./Image";
import HeroText from "./HeroText";
import ButtonHero from "./ButtonHero";

function Hero() {
  return (
    <div
      id="home"
      className="w-full h-full medium:mb-20 pb-10 pt-30 small:pt-25 medium:pt-20 px-20 small:px-4 sm:px-8 lg:px-20 flex items-center justify-between small:flex-col md:flex-row small:gap-20 medium:gap-40 md:gap-0 overflow-hidden"
    >
      <div className="w-200 small:w-auto md:w-210 small:text-center sm:text-center md:text-left">
        <HeroText />
        <ButtonHero />
      </div>

      <Image />
    </div>
  );
}

export default Hero;
