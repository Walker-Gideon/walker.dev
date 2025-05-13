import { motion } from "motion/react";

function HobbiesBtn({ onClick, check }) {
  return (
    <motion.button
      className="relative text-3xl text-white cursor-pointer px-2 py-1 group overflow-hidden: small:hidden medium:block"
      onClick={onClick}
      animate={check ? "open" : "close"}
    >
      <motion.span
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        className={`absolute h-0.5 medium:h-[2px] md:h-0.5 w-4 medium:w-4 bg-white`}
        variants={{
          open: {
            rotate: ["45mediumeg", "0deg", "0deg"],
            top: ["40%", "50%", "50%"],
          },
          close: {
            rotate: ["0deg", "0deg", "90deg"],
            top: ["50%", "50%", "50%"],
          },
        }}
      />
      <motion.span
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        className={`absolute h-0.5 medium:h-[2px] md:h-0.5 w-4 medium:w-4 bg-white`}
        variants={{
          open: {
            rotate: ["-45deg", "0deg", "0deg"],
            top: ["60%", "50%", "50%"],
          },
          close: {
            rotate: ["0deg", "0deg", "0deg"],
            top: ["50%", "50%", "50%"],
          },
        }}
      />
    </motion.button>
  );
}

export default HobbiesBtn;
