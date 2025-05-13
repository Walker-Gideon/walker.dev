import creatorImage from "../../assets/my-prof.jpeg";

function Image() {
  return (
    <div className="small:p-4 sm:p-0">
      <div className="w-[300px] h-full sm:h-full medium:h-160 md:h-125 p-0.5 small:p-1 bg-primary justify-self-end rounded-xl rotate-10">
        <div className="relative w-full h-140 sm:h-full medium:h-160 md:h-full p-2 bg-blue rounded-xl -rotate-5">
          <img
            src={creatorImage}
            alt="Image of the creator of this portfiolo"
            class="object-cover rounded-xl w-full h-full medium:object-top rotate-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
