import Button from "./Button";
import myimage from "../assets/me.jpg";

function Hero() {
  return (
    <div className="mt-40 w-full h-full flex flex-col items-center justify-center gap-12 px-8">
      <div className="">
        <img
          src={myimage}
          alt=""
          class="object-cover rounded-[50%] w-40 h-40"
        />
      </div>

      <div className="text-center justify-self-start whitespace-nowrap">
        <p className="text-5xl mb-3">
          Hello 👋, I'm <span className="font-bold">Gideon Awortwe</span>
        </p>
        <p className="text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        </p>

        <Button>CTA</Button>
      </div>
    </div>
  );
}

export default Hero;
