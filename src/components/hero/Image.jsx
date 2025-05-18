import { motion } from "motion/react";
import { fadeIn } from "../motion/variants";
import creatorImage from "../../assets/my-prof.jpeg";

function Image() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="small:p-4 sm:px-6 sm:p-0"
    >
      {/* small:w-95 sm:w-105 medium:w-100 small:p-1 small:rotate-2 sm:rotate-6 medium:rotate-2 rotate-10*/}
      <div className="w-90  h-full p-0.5 bg-primary/30 backdrop-blur-md justify-self-end rounded-xl">
        {/* small:h-full sm:h-full medium:h-160 md:h-full p-2 small:p-1 -rotate-5*/}
        <div className="relative w-full h-140 bg-blue/30 backdrop-blur-md rounded-xl ">
          <img
            src={creatorImage}
            alt="Image of the creator of this portfiolo"
            // small:rotate-8 sm:rotate-5 medium:object-top rotate-5
            class="object-cover rounded-xl w-full h-full "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Image;
