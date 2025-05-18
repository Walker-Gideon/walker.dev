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
      className="w-[330px] h-100 p-1 bg-primary/30 backdrop-blur-md justify-self-end rounded-xl rotate-6"
    >
      <div className="relative w-full h-full p-1 bg-blue/30 backdrop-blur-md rounded-xl -rotate-8">
        <img
          src={creatorImage}
          alt="Image of the creator of this portfiolo"
          class="object-cover rounded-xl w-full h-full rotate-8"
        />
      </div>
    </motion.div>
  );
}

export default Image;
