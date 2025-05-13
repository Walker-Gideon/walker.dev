import creatorImage from "../../assets/my-prof.jpeg";

function Image() {
  return (
    <div className="small:p-4 sm:px-6 sm:p-0">
      <div className="w-full h-full small:w-[280px] md:w-[300px] small:h-120 sm:w-full sm:h-150 medium:h-160 md:h-125 p-0.5 small:p-1 bg-primary/30 backdrop-blur-md justify-self-end rounded-xl rotate-10 small:rotate-2 sm:rotate-6 medium:rotate-8">
        <div className="relative w-full h-140 small:h-full sm:h-full medium:h-160 md:h-full p-2 small:p-1 bg-blue/30 backdrop-blur-md rounded-xl -rotate-5">
          <img
            src={creatorImage}
            alt="Image of the creator of this portfiolo"
            class="object-cover rounded-xl w-full h-full medium:object-top rotate-5 small:rotate-8 sm:rotate-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
